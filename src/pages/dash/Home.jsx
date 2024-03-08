/* eslint-disable react-hooks/exhaustive-deps */
import { Box,  Typography } from "@mui/material"
import Linechart from '../../components/Linechart'
import Cardtool from '../../components/Cardtool'
import Timetool from '../../components/Time'
import Piachart from '../../components/piachart'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { useAppContext } from "../../contaxt/contaxt";
import { 
   useEffect,
   useMemo, 
   useState 
  } from "react";
const Home = () => {

const { sp, shop_id,user_id,money_id,
  windowSize ,} = useAppContext();
  

  const [Money, setMoney] = useState(0)
  const [product, setproduct] = useState([])
  // const [Customers, setCustomers] = useState(0)



  
  let money =useMemo(()=> async()=>{
    const response = await sp.get(`/money/${shop_id}/${money_id}`);
    console.log('response.data');
     if(response){  setMoney(response.data.money);}
  },[Money]);

  // let customers =useMemo(()=> async()=>{
  //   const response = await sp.get('/customers/65cb67d9cd6a0c3a7004efb5');
  //   console.log(response);
  //   if(response){setCustomers(response.data);}
  // },[Customers]);

setInterval(()=>{
  money()
  // customers()
},60000)
 
useEffect(()=>{
  console.log(windowSize);
  console.log(Money,user_id,shop_id,money_id);
return async()=>{
  money();
  const data = await sp.get(`/items/${shop_id}`);
  console.log(data.data)
  if(data.status === 200){
    if(data.data.length > 0){
      return setproduct(data.data);
    }
  }
// customers();
}
},[]);


useEffect(()=>async()=>{
    
 
  // console.log("Barcode",Barcode,"Quantity",Quantity);
},[onload])

  return (
    <>
      <Box>



        <Box className="flex justify-around" >
          <Cardtool
            icon={<CurrencyRupeeIcon className="icon h-[50px] w-[50px] " />}
            title={"Today's Money"}
            value={`₹${Money}`}
          />
          <Cardtool
            icon={<CurrencyRupeeIcon className="icon h-[50px] w-[50px] " />}
            title={"Customers"}
            value={0}
            // value={Customers}
          />
          <Cardtool
            icon={<CurrencyRupeeIcon className="icon h-[50px] w-[50px] " />}
            title={"Today's Money"}
            value={"₹4532321.62"}
          />
          <Timetool
            icon={<AccessTimeIcon className="icon h-[50px] w-[50px] " />}
           
     
          />

        </Box>
        <Box className=" flex">
          {/* compo 1 */}
          <Box >
          
            {/* flex 1 */}
            <Box className="flex justify-around mt-16 w-[950px]">
              {/*  */}
              <Box className="bg-white shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] rounded-[25px] w-[450px] h-[300px] " >
                <Box className="w-[375px] h-[192px] relative top-6 left-9  bg-[#257EEA] rounded-[10px]" >
                  <Linechart w={350} h={150} y={1} x={1} legend={0} grids={1} />
                </Box>
                <Typography variant="h6" className="relative top-8 left-[152px] " >
                  Sales
                </Typography>
              </Box>
              {/*  */}
              <Box className="bg-white shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] rounded-[25px] w-[450px] h-[300px] " >
                <Box className="w-[375px] h-[192px] relative top-6 left-9  bg-[#5FB663] rounded-[10px]" >
                  <Linechart w={350} h={150} y={1} x={1} legend={0} grids={1} />
                </Box>
                <Typography variant="h6"  className="font-[600] relative top-8 left-[152px] " >
                  Customers
                </Typography>
              </Box>
              {/*  */}
            </Box>
            {/* flex 1 closed */}
            {/* flex 2 */}
            <Box className="flex justify-around mt-16 w-[950px]">
              {/*  */}
              <Box className="bg-white shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] rounded-[25px] w-[450px] h-[300px] " >
          
                <Piachart data01={product} price={"quantity"} />
          
          
              </Box>
              {/*  */}
              <Box className="w-[350px] h-[350px] bg-white shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)]  rounded-[25px] border-2" >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  < DateCalendar />
                </LocalizationProvider>
              </Box>
              {/*  */}
            </Box>
            {/* flex 2 closed */}
          
          </Box>
            {/* compo 2 w-[750px] h-[750px] */}
         <Box className=" flex flex-col">
           <iframe width={750} height={350}  className=" shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] mt-[65px] ml-[50px]  rounded-[25px]" src="https://react-vite-projects-10-grocery-bud.netlify.app/" allowFullScreen ></iframe>
           <iframe width={750} height={350}   style={{   userSelect: "none" }}  className=" overflow-hidden shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] mt-[65px] ml-[50px]  rounded-[25px]" src="https://spgaming2055.w3spaces.com/Q/index.html" allowFullScreen ></iframe>

         </Box>
        </Box >
      </Box>
    </>
  )
}

export default Home
