
 import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
  );
 
  function BarGraphSecond() {
  return (
      <div className="BarGraphSecond">
      
      <div style={{ maxWidth: "650px" }}>
          <Bar
          data={{
             
              labels: ["Labrador", "Pit", "Hound", "Shepherd","Terrier","American","Catahoula","Hounds","Australia","Mountain"],
              datasets: [
              {
                 data: [1422, 838, 400,376,306,157,155,150,126,108],
 
                  backgroundColor: "#97E2E8",

                 borderColor: "#97E2E8",
                  
              },
              ],
          }}

          height={300}
          options={{
              maintainAspectRatio: false,
              indexAxis:"y",
              scales: {
              yAxes: [
                  {
                  ticks: {
 
                      beginAtZero: true,
                  },
                  },
              ],
              },
               legend: {
               labels: {
                   fontSize: 15,
               },
               },
          }}
          />
      </div>
      </div>
  );
  }
 
  export default BarGraphSecond;
 
 