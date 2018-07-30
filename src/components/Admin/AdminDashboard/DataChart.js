import React from 'react';
import {Doughnut} from 'react-chartjs-2';


const DataChart = ({data}) => {
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

DataChart.propTypes = {
  
};

export default DataChart;