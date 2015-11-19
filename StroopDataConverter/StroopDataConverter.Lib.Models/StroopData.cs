//*******************************************************************************************
// StroopDataConverter.Lib.Models - StroopData.cs
//*******************************************************************************************
// (c) 19-Nov-2015
//*******************************************************************************************

using System.Collections.Generic;

namespace StroopDataConverter.Lib.Models {

  public class StroopData {
    public Prefs prefs { get; set; }
    public State state { get; set; }
    public List<View> views { get; set; }
    public List<StroopResult> stroopResults { get; set; }

    /// <summary>
    /// Initializes a new instance of the <see cref="StroopData"/> class.
    /// </summary>
    public StroopData () {
      views = new List<View>();
      stroopResults = new List<StroopResult>();
    }
  }

}
