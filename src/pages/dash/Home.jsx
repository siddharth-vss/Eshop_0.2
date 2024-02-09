import { Box, Typography } from "@mui/material"
import Linechart from '../../components/Linechart'
import Cardtool from '../../components/Cardtool'
import Piachart from '../../components/piachart'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Home = () => {

  return (
    <>
      <Box>
        {/* <h1 className="text-3xl font-bold underline">
          Dashboard
        </h1> */}
       
        {/*  color codes (blue chart = #257EEA  )  (green chart = #49A54D) (gradiant = bg-gradient-to-r from-[#2800ff] to-[#08f1d9]) */}
 
         <Box className="bg-white shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] rounded-[25px] w-[450px] h-[300px] " >
          <Box className="w-[375px] h-[192px] relative top-6 left-9  bg-[#257EEA] rounded-[10px]" >
             <Linechart w={350} h={150} y={1} x={1} legend={0} grids={1} />
           </Box>
           <Typography variant="h6" className="relative top-8 left-6 " > 
             This is for to show sales and take disions to improve your bussiness 
           </Typography>
         </Box>
        
         <Box className="bg-white shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] rounded-[25px] w-[450px] h-[300px] " >
         
             <Piachart />
         
           <Typography variant="h6" className="relative top-8 left-6 " > 
             This is for to show sales and take disions to improve your bussiness 
           </Typography>
         </Box>
        
         

     <Box className="flex justify-around" >
        <Cardtool  
        icon={<CurrencyRupeeIcon  className="icon h-[50px] w-[50px] " />} 
        title={"Today's Money"}
        value={"₹4532321.62"}
        />
       
     </Box>
      </Box>
    </>
  )
}

export default Home
