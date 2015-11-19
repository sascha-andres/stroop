//*******************************************************************************************
// StroopDataConverter.Lib.Models - Prefs.cs
//*******************************************************************************************
// (c) 19-Nov-2015
//*******************************************************************************************

using System.Collections.Generic;

namespace StroopDataConverter.Lib.Models {
  public class Prefs {
    public string stroopTestType { get; set; }
    public List<string> colors { get; set; }
    public List<string> colorNames { get; set; }
    public string demoTestType { get; set; }
    public int demoFactor { get; set; }
    public int demoNumberOfIterations { get; set; }
    public int demoTimeout { get; set; }
    public string testType { get; set; }
    public int factor { get; set; }
    public int numberOfIterations { get; set; }
    public int stroopTicks { get; set; }
    public int stroopBlackTicks { get; set; }
  }
}
