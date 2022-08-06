import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';
//import BarGraph from './Componets/Bar';
//import Bar from './Componets/Bar';


const AreaCharts = () => {

// Sample data
const data = [
  {dataOnXaxis: null, dataOnYaxis: null},
{dataOnXaxis: 2017, dataOnYaxis: 32},
{dataOnXaxis: 2018, dataOnYaxis: 50},
{dataOnXaxis: 2019, dataOnYaxis: 57},
{dataOnXaxis: 2020, dataOnYaxis: 35},
 {dataOnXaxis:2021,dataOnYaxis:40},
 {dataOnXaxis: 2022, dataOnYaxis:58 }
];


return (
	<div>
  <div >
	
<AreaChart width={300} height={300} data={data} >
	<Area dataKey="dataOnYaxis" fill="#E3F2F3" stroke="#97E2E8" strokeWidth={3} />
	{/* <CartesianGrid stroke="#ccc" /> */}
	<XAxis dataKey="dataOnXaxis" />
	<YAxis  />
</AreaChart>
</div>
<div>
 {/* <BarGraph/>  */}
</div>
</div>
);
}

export default AreaCharts;
