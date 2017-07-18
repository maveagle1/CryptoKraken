import React, { Component } from 'react';


class Dash extends Component {
  render() {
    return (
    //  <!-- Start of DASH -->
      <div className="row currency">
        <div className="col s3 abr">
            <div className="circle dashColor"></div> DASH
        </div>
        <div className="col s4">
          <div className="money repPrice">
          $207.25
          </div>
          <div className="row">
            <div className="dashChangePerc">
            $ 37.20
            </div>
          </div>
        </div>
        <div className="col s5 graph">
          <canvas id="myChart" width="55" height="20" className="cLine dashGraph" data-chart_values="[22.46098924,22.42124994,22,21.88120274,2175,21.89994325,21.88547472,21.65648057]" data-chart_StrokeColor="rgba(46, 204, 113,1.0)"></canvas>
        </div>
        </div>
        //<!-- End of DASH -->
    )
  }
}

  export default Dash
