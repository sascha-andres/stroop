//*******************************************************************************************
// StroopDataConverter.Exec - Runner.cs
//*******************************************************************************************
// (c) 19-Nov-2015
//*******************************************************************************************

using Newtonsoft.Json;
using StroopDataConverter.Lib.Models;
using System;
using System.IO;

namespace StroopDataConverter.Exec {
  class Runner : IDisposable {
    bool _Disposed = false;

    public void Run () {
      var fInfo = new FileInfo( "export.xlsx" );
      if ( fInfo.Exists )
        File.Delete( fInfo.FullName );

      using ( var excel = new OfficeOpenXml.ExcelPackage( fInfo ) ) {
        var ws = excel.Workbook.Worksheets.Add( "export" );
        ws.Cells[1, 1].Value = "timeCode";
        ws.Cells[1, 2].Value = "code";
        ws.Cells[1, 3].Value = "testIndex";
        ws.Cells[1, 4].Value = "aOrB";
        ws.Cells[1, 5].Value = "sum";
        int row = 2;
        foreach ( string file in Directory.GetFiles( @"C:\Dev\Projects\sascha\Carmen\stroop\data" ) ) {
          var column = 1;
          var fInfoData = new FileInfo( file );
          ws.Cells[row, column].Value = fInfoData.Name.Split( new char[] { '.' } )[0];
          column++;
          var stroop = JsonConvert.DeserializeObject<StroopData>( File.ReadAllText( file ) );
          ws.Cells[row, column].Value = stroop.state.code;
          column++;
          ws.Cells[row, column].Value = stroop.state.testIndex;
          column++;
          ws.Cells[row, column].Value = stroop.state.aOrB;
          column += 2;
          int count = stroop.stroopResults.Count;
          int sum = 0;
          foreach ( var stroopResult in stroop.stroopResults ) {
            ws.Cells[1, column].Value = "correct";
            ws.Cells[row, column].Value = stroopResult.correct;
            column++;
            ws.Cells[1, column].Value = "pressed";
            ws.Cells[row, column].Value = translate( stroopResult.pressed );
            column++;
            ws.Cells[1, column].Value = "time";
            ws.Cells[row, column].Value = stroopResult.time;
            column++;
            sum += stroopResult.time;
          }
          ws.Cells[row, 5].Value = (double)(sum+(count*500))/1000/60;
          row++;
        }
        excel.Save();
      }
      System.Diagnostics.Process.Start( "export.xlsx" );
    }

    private static string translate ( string key ) {
      if ( key == "A" ) return "ROT";
      if ( key == "S" ) return "GRÜN";
      if ( key == "Y" ) return "BLAU";
      if ( key == "X" ) return "GELB";
      return "??";
    }

    public void Dispose () {
      Dispose( true );
      GC.SuppressFinalize( this );
    }
    protected virtual void Dispose ( bool disposing ) {
      if ( _Disposed )
        return;

      if ( disposing ) {
        // TODO: dispose disposeables
      }

      // Free any unmanaged objects here. 
      _Disposed = true;
    }
  }
}
