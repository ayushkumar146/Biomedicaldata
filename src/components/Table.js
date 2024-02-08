import React from 'react';

const MyTable = () => {


  return (<> 
    <div className="t1 hide">
    <table>
      <thead>
        <tr>
          <th>Machining Tool Used</th>
          <th>
            Vibration Magnitude (m/s)
            <table>
              <thead>
                <tr>
                  <th>X</th>
                  <th>Y</th>
                  <th>Z</th>
                </tr>
              </thead>
            </table>
          </th>
          <th>Total Vibration Magnitude (m/s)</th>
          <th>A(8) <br /> (m/s)</th>
          <th>DELV <br /> (m/s)</th>
          <th>P(E)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Force Plate</td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>20</td>
                  <td>30</td>
                </tr>
                {/* Add more rows for subvalues if needed */}
              </tbody>
            </table>
          </td>
          <td>34</td>
          <td>89</td>
          <td>78</td>
          <td>45</td>
        </tr>
        {/* Add more rows for data if needed */}
      </tbody>
    </table>
    </div>
    <d1v className="t2 hide">
    <div class="vertical-table">
  <div class="row">
    <div class="heading">Machining Tool Used</div>
    <div class="data">Force Plate</div>
  </div>
  <div class="row">
    <div class="heading">Vibration Magnitude (m/s) X</div>
    <div class="data">10</div>
  </div>
  <div class="row">
    <div class="heading">Vibration Magnitude (m/s) Y</div>
    <div class="data">20</div>
  </div>
  <div class="row">
    <div class="heading">Vibration Magnitude (m/s) Z</div>
    <div class="data">30</div>
  </div>
  <div class="row">
    <div class="heading">Total Vibration Magnitude (m/s)</div>
    <div class="data">34</div>
  </div>
  <div class="row">
    <div class="heading">A(8) (m/s)</div>
    <div class="data">89</div>
  </div>
  <div class="row">
    <div class="heading">DELV (m/s)</div>
    <div class="data">78</div>
  </div>
  <div class="row">
    <div class="heading">P(E)</div>
    <div class="data">45</div>
  </div>
</div>


    </d1v>
    </>
    
  );
}

export default MyTable;
