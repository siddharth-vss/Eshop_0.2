/* eslint-disable react/prop-types */

import { PieChart, Pie, Tooltip, Cell } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#79B8F4', '#8093F1',
  '#1F7A8C', '#0A8754', '#18A999', '#F39A9D'];

const Piachart = ({
   data01 = data02,
   price = "value" 
  }) => {

  return (
    <>
      <PieChart width={300} height={300}  >
        {/* <Pie  dataKey={} nameKey={} outerRadius={} fill="#8884d8"  label  /> */}

        {/* <Pie data={data01} dataKey={"value"} nameKey={"name"} cx={"50%"} cy={"50%"} outerRadius={50} innerRadius={20} fill="black" label /> */}

        <Pie
          data={data01}
          cx={"50%"} cy={"50%"}
          outerRadius={80} innerRadius={50}
          fill="#8884d8"
          paddingAngle={5}
          dataKey={price}
        >
          {data01.map((e, i) => (<Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />))}
        </Pie>
        <Tooltip />
      </PieChart>

    </>
  )
}

const data02 = [
  // 
  {
    
    "name": "pen",
    
    "quantity": 50,
   
  },
  {
   
    "name": "pent",
    "asfas":"asfasf",
    "quantity": 50,
    
  },
  {
    "name": "penx",
 
    "quantity": 90,
   
  },
  
];

export default Piachart
