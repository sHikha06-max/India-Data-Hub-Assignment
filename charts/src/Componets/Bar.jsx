

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
  

 function BarGraph() {
 return (
 	<div className="BarGraph">
 	<div>
		
	</div>
 	<div >
		
 		<Bar
 		data={{
 			
 			labels: ["0-1 Puppy", "2-6 Adult", "7+ Senior"],
 			datasets: [
 			{
				data: [30, 85, 103],

 				backgroundColor: "#97E2E8",
				borderColor: "#97E2E8",
 				
 			},
 			],
 		}}

 		height={400}
		 
		
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

 export default BarGraph;



