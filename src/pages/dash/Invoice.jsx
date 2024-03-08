/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material"
import logo from '../logo.jpg'
import { useAppContext } from '../../contaxt/contaxt'

const Invoice = () => {
  const { cart ,total  } = useAppContext();



 

  
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
      Invoice
    </h1> */}

      <Box sx="font-family: Nunito,sans-serif;" className="bg-white  shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] relative left-[20vw] right-[20vw]  w-[960px] h-[1930px] " >
        <Box className=" flex justify-between  w-[100%] h-[250px] " >

          <img src={logo} alt="logo" className="h-[150px] w-[150px] rounded-full relative top-[45px] left-[45px]   " />
          <Box className="relative text-black right-[60px] top-[50px] " >
            <Box className="" >
              <h1 className="font-[600] text-[40px]  "  >
                INVOICE
              </h1>
              <Box className="flex relative top-5 " >
                <h1  >
                  INVOICE NO &emsp;:&emsp;  #65456
                </h1>
              </Box>
              <Box className="flex relative top-5" >
                <h1  >
                  Date  &emsp;:&emsp;&emsp;  25 june,2021
                </h1>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="flex justify-around">
          <Box>

            <h1 className="font-[600]" >INVOICE To</h1>
            <h1 className="font-[600]" >INVOICE To</h1>
            <h1 className="text-[grey]" >sgdsdsadrgadsgadgsdgahsahafbebf</h1>
            <h1 className="text-[grey]" >sgdsdsadrgadsgadgsdgahsahafbebf</h1>
            <h1 className="text-[grey]" >sgdsdsadrgadsgadgsdgahsahafbebf</h1>


          </Box>
          <Box></Box>
          <Box></Box>
          <Box>
            <Box className="flex" >
              <h1 className="font-[600]  " >DUE DATE</h1> : 12/5/2024
            </Box>
            <Box className="flex" >
              <h1 className="font-[600]  " >TOTAL DUE</h1> : ₹{total}
            </Box>
            <h1 className="font-[600]" >INVOICE To</h1>
            <h1 className="text-[grey]" >sgdsdsadrgadsgadgsdgahsahafbebf</h1>
            <h1 className="text-[grey]" >sgdsdsadrgadsgadgsdgahsahafbebf</h1>
            <h1 className="text-[grey]" >sgdsdsadrgadsgadgsdgahsahafbebf</h1>
          </Box>
        </Box>
        <Box class="w-[850px] h-[40px] text-white flex items-center top-[50px]  bg-slate-600 relative left-[55px] right-[55px]" >
          <Box className="w-[340px] h-[40px]  text-center">ITEM</Box>

          <Box className="w-[170px] h-[40px]  text-center bg-slate-600 ">PRICE</Box>
          <Box className="w-[170px] h-[40px]  text-center ">QUANTITY</Box>
          <Box className="w-[170px] h-[40px]  text-center bg-slate-600 ">Total</Box>
        </Box>
        {cart && cart.map((item, index) => (
        <Box key={index} class="w-[850px] h-[40px] text-black items-center border-l-[2px] flex top-[50px] border-b-2 border-[#918b8b] relative left-[55px] right-[55px]" >

          <Box className="w-[340px] h-[40px] border-b-[2px] text-center  border-r-[2px] border-[#918b8b] ">{item.item}</Box>
          <Box className="w-[170px] h-[40px] border-b-[2px] text-center  border-r-[2px] border-[#918b8b] ">₹{item.price}</Box>
          <Box className="w-[170px] h-[40px] border-b-[2px] text-center  border-r-[2px] border-[#918b8b] ">{item.quantity}</Box>
          <Box className="w-[170px] h-[40px] border-b-[2px] text-center  border-r-[2px] border-[#918b8b] ">₹{item.total}</Box>
        </Box>
        ))
        }
        {total}
      </Box>
    </>
  )
}

export default Invoice
