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
        int row = 1;
        foreach ( string file in Directory.GetFiles( @"C:\Dev\Projects\sascha\Carmen\stroop\data" ) ) {
          var column = 1;
          var stroop = JsonConvert.DeserializeObject<StroopData>( File.ReadAllText( file ) );
          ws.Cells[row, column].Value = stroop.state.code;
          column++;
          foreach ( var stroopResult in stroop.stroopResults ) {
            ws.Cells[row, column].Value = stroopResult.correct;
            column++;
            ws.Cells[row, column].Value = stroopResult.pressed;
            column++;
            ws.Cells[row, column].Value = stroopResult.time;
          }
          row++;
        }
        excel.Save();
      }
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
