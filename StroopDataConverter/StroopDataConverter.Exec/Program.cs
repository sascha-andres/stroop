//*******************************************************************************************
// StroopDataConverter.Exec - Program.cs
//*******************************************************************************************
// (c) 19-Nov-2015
//*******************************************************************************************

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StroopDataConverter.Exec {
  class Program {
    static void Main ( string[] args ) {
      using ( var runner = new Runner()) {
        runner.Run();
      }
    }
  }
}
