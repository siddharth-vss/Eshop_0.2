/* eslint-disable react/prop-types */
import {  CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis,  } from "recharts"

const Linechart = ({w,h , x , y , legend , grids}) => {
     
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const obj =  [
    {
      name:"uv",
      // color:"#7F27FF"
      color:"#FFF"
    },
    // {
    //   name:"pv",
    //   color:"#FF8911"
    // },
    // {
    //   name:"amt",
    //   color:"#FF9BD2"
    // },
  ]
  return (
    <>
     <LineChart className="text-white" width={w} height={h} data={data}>
                {/* <Line type="monotone" dataKey="uv" stroke="Lime" />
                <Line type="monotone"  dataKey="pv" stroke="#5900ff" /> */}
                {obj.map((e,i)=>(<Line key={i} type="monotone" dataKey={e.name} strokeWidth={"5px"} stroke={e.color} />))}
               { grids && <CartesianGrid strokeDasharray="5 5 "vertical={false} />}
             { x &&  <XAxis className="text-white"  tick={{ fill: 'white' }}  stroke="transparent"  dataKey={'name'}/>}
              { y &&  <YAxis className="text-white"  tick={{ fill: 'white' }}  stroke="transparent"  />}
              <Tooltip className='rounded-[25px]' contentStyle={{backgroundColor: "#00000099"}} itemStyle={{ color: "white" }} />
             { legend &&  <Legend/>}
            </LineChart> 
    </>
  )
}

export default Linechart
