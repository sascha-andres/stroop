//*******************************************************************************************
// StroopDataConverter.Lib.Models - StroopResult.cs
//*******************************************************************************************
// (c) 19-Nov-2015
//*******************************************************************************************

namespace StroopDataConverter.Lib.Models {
  public class StroopResult {
    public string testType { get; set; }
    public int factor { get; set; }
    public string pressed { get; set; }
    public string correct { get; set; }
    public int time { get; set; }
  }
}
