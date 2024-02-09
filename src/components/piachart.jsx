import { PieChart, Pie,  Tooltip } from 'recharts';

const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];

const Piachart = () => {
  return (
    <>
      <PieChart width={300}  height={300}  >
            {/* <Pie  dataKey={} nameKey={} outerRadius={} fill="#8884d8"  label  /> */}

            <Pie data={data01} dataKey={"value"} nameKey={"name"} cx={"50%"} cy={"50%"} outerRadius={50} innerRadius={20} fill="black" label />
            <Tooltip/>
      </PieChart>
      {/* <PieChart width={300}  height={300} data={data02} >
            <Pie  dataKey={"value"} nameKey={"name"} outerRadius={50} fill="#8884d8"  label  />

              <Pie  dataKey={} nameKey={} outerRadius={} innerRadius={} fill="#82ca9d" label /> 
       </PieChart>  */}
    </>
  )
}

export default Piachart
