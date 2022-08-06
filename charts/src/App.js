import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';
import AreaCharts from './Componets/Areachart';
import  "./App.css"
import BarGraph from './Componets/Bar';
import BarGraphSecond from './Componets/BarSecond';


const App = () => {

const data = [
  {dataOnXaxis: null, dataOnYaxis: null},
{dataOnXaxis: 2014, dataOnYaxis: 2500},
{dataOnXaxis: 2016, dataOnYaxis: 4300},
{dataOnXaxis: 2018, dataOnYaxis: 7000},
{dataOnXaxis: 2020, dataOnYaxis: 9500},
{dataOnXaxis:"",dataOnYaxis:11000},
{dataOnXaxis: 2022, dataOnYaxis:12000 }
];


return (
	<div className='main'>
		<div className='secondDiv'>
		{/* Left side area graph*/ }
		<div>
			<h1>Last Hope K9</h1>
			<p>Where a last hope becomes a new beginning.</p>
		</div>
      
	  <div className='allGraph'>
		<div className='leftSideGraph'>
       <div  >
	<div><h2>Lives Saved</h2>
	<h1>10,875</h1></div>
<AreaChart width={300} height={300} data={data} >
	<Area dataKey="dataOnYaxis" fill="#E3F2F3" stroke="#97E2E8" strokeWidth={3} />
	
	<XAxis dataKey="dataOnXaxis" />
	<YAxis  />
</AreaChart>
</div>
</div>

<div className='vl'></div>
<div className='twoGraph'>
	<div><h2>Avg Time to Adopt</h2>
	<h2>45 days</h2></div>
<div className='barGraphChart'>
 <BarGraph/> 
 
 </div><div><h2>Avg Time to Adopt over Time</h2></div>
<div>
 
 <AreaCharts/>
</div>
 
 </div>

 <div className='twoGraphAgain'>
 <div><h2>Top 10 Primary Breeds {`(include mix)`}</h2></div>
<div>
 <BarGraphSecond/>  
 
 </div>
 </div>

 </div>  
</div>
</div>
);
}

export default App;