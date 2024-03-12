/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button } from "@mui/material"
import logo from '../logo.jpg'
import { useAppContext } from '../../contaxt/contaxt'
import { useEffect, useRef } from "react";
import { useState } from "react";
import {useReactToPrint} from 'react-to-print'

const Invoice = () => {
  const { cart, total, shop_id, sp } = useAppContext();
  const Invoice = useRef();
  const [shop, setshop] = useState({});
  const [tax, settax] = useState(10);
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let date = new Date();
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();





  useEffect(() => async () => {

    const data = await sp.get(`/shops/${shop_id}/f`);

    setshop(data.data);
    console.log(data.data);
    // console.log("Barcode",Barcode,"Quantity",Quantity);
  }, [onload])

  const CreatePdf = useReactToPrint({
    content: ()=> Invoice.current ,
    documentTitle:"Invoice",
    onAfterPrint :()=> alert("Invoice Printed"),
  });

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
      Invoice
    </h1> */}

    <Button onClick={CreatePdf}variant="contained" size="small">
        PRINT
      </Button>
  
     <Box className = "relative left-[20vw] right-[20vw]" >       <Box ref={Invoice} sx="font-family: Nunito,sans-serif;" className="bg-white  shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] relative left-[0] right-[20vw]  w-[960px] h-[930px] " >
         <Box className=" flex justify-between  w-[100%] h-[250px] " >
      
           <img src={logo} alt="logo" className="h-[150px] w-[150px] rounded-full relative top-[45px] left-[45px]   " />
           <Box className="relative text-black right-[60px] top-[50px] " >
             <Box className="" >
               <h1 className="font-[600] text-[40px]  "  >
                 INVOICE
               </h1>
               <Box className="flex relative top-5 " >
                 <h1  >
                   INVOICE NO &emsp;:&emsp;  #<input className="" placeholder="123-565" type="number" />
                 </h1>
               </Box>
               <Box className="flex relative top-5" >
                 <h1  >
                   Date  &emsp;:&emsp;&emsp;  <span id="ds">{day} {month},{year}</span>
                 </h1>
               </Box>
             </Box>
           </Box>
         </Box>
      
         <Box className="flex justify-around">
           <Box className=" flex flex-col">
      
             <h1 className="font-[600]" >INVOICE From</h1>
             <h1 className="font-[600]" >{shop.name} . pvt. ltd. </h1>
             <h1 className="font-[600] text-[grey] " >phone : {shop.phone} </h1>
             <h1>Biller : <input className="" placeholder="Name of Biller" type="text" /></h1>
             <h1>Auth NO : <input className="" placeholder="Auth No of Biller" type="Number" /></h1>
      
      
           </Box>
           <Box></Box>
           <Box></Box>
           <Box>
             <Box className="flex relative -top-5" >
               <h1 className="font-[600]  " >DUE DATE</h1> : <input className="" placeholder="Name of Manager" type="date" />
             </Box>
             <Box className="flex" >
               <h1 className="font-[600]  " >TOTAL DUE</h1> : ₹{Math.round(total + ((total*tax)/100))}
             </Box>
             <h1 className="font-[600]" >INVOICE To</h1>
             <Box className=" flex flex-col">
      
      
               <input className="" placeholder="Name of Manager" type="text" />
               <input className="" placeholder="Name of Manager" type="text" />
               <input className="" placeholder="Name of Manager" type="text" />
      
      
             </Box>
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
         <br/>
         <Box class="w-[850px] h-[40px] text-black items-center  flex top-[50px]  border-[#918b8b] relative left-[55px] right-[55px]" >
      
           <Box className="w-[340px] h-[40px] border-b-[2px] text-center  border-[transparent] "></Box>
           <Box className="w-[170px] h-[40px] border-b-[2px] text-center  border-[transparent] "></Box>
           <Box className="w-[170px] h-[40px] border-t-[2px] border-b-[2px] text-center border-l-[2px] border-r-[2px] border-[#918b8b] ">Sub Total</Box>
           <Box className="w-[170px] h-[40px] border-t-[2px] border-b-[2px] text-center  border-r-[2px] border-[#918b8b] ">₹{total}</Box>
         </Box>
         <Box class="w-[850px] h-[40px] text-black items-center  flex top-[50px]  border-[#918b8b] relative left-[55px] right-[55px]" >
      
           <Box className="w-[340px] h-[40px] border-b-[2px] text-center  border-[transparent] "></Box>
           <Box className="w-[170px] h-[40px] border-b-[2px] text-center  border-[transparent] "></Box>
           <Box className="w-[170px] h-[40px] border-b-[2px] text-center border-l-[2px] border-r-[2px] border-[#918b8b] ">Tax : {tax}%</Box>
           <Box className="w-[170px] h-[40px] border-b-[2px] text-center  border-r-[2px] border-[#918b8b] ">₹{(total*tax)/100}</Box>
         </Box>
         <Box class="w-[850px] h-[40px] text-black items-center  flex top-[50px]  border-[#918b8b] relative left-[55px] right-[55px]" >
      
           <Box className="w-[340px] h-[40px] border-b-[2px] text-center  border-[transparent] "></Box>
           <Box className="w-[170px] h-[40px] border-b-[2px] text-center  border-[transparent] "></Box>
           <Box className="w-[170px] h-[40px] border-b-[2px] text-center border-l-[2px] border-r-[2px] border-[#918b8b] ">Total</Box>
           <Box className="w-[170px] h-[40px] border-b-[2px] text-center  border-r-[2px] border-[#918b8b] ">₹{Math.round(total + ((total*tax)/100))}</Box>
         </Box>
         {/* {total} */}
      
       <Box className="relative top-[60px]" >
       <p className="font-[600] ml-[60px] mr-[60px]  text-[#000000] " > &emsp; &emsp; If  You Have Any Problem After Purchasing  Product You Can Replace Your Product In 3days.
        Shop Is Closed At Saturday And Sunday.   </p>
       <h1 className="font-[600] ml-[60px] mt-[10px]  text-[grey] " >phone : +91{shop.phone} </h1>
            
      
       </Box>
       </Box>
     </Box>

      
    </>
  )
}

export default Invoice
