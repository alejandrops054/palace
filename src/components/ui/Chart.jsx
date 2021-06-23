import React /*{useState}*/ from "react";
import {Doughnut} from 'react-chartjs-2'

const state = {
    datasets: [{
        data: [21, 79],
        backgroundColor: [
            'rgba(0, 175, 159, 1)',
            'rgba(44, 50, 72, 1)'
        ],
        borderColor: [
            'rgba(0, 175, 159, 0)',
            'rgba(44, 50, 72, 0)'
        ],
        hoverBorderColor: [
            'rgba(0, 175, 159, 0.5)',
            'rgba(44, 50, 72, 0.5)'
        ],
        borderWidth: 1
    }]
  }

const Chart = () => {

   // const [chartData, setChartData] = useState({});

  return (
    <div className="chart position-relative">
        <i className="fas fa-gifts"></i>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Value',
              fontSize:10
            }
          }}
        />
    </div>
  );
};

export default Chart;