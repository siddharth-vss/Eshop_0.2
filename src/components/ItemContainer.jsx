/* eslint-disable react/prop-types */
import { Box } from "@mui/material"
import Btn from "./Btn"


const ItemContainer = ({product ,Page ,setPage }) => {
 
     const Items =[ ];

    product.forEach( (e,index) => {
        if( index + 1   > ((Page - 1 ) * 10 )  && index < ((Page   * 10 ))){
            console.log(index , e);
            Items.push(e);
        }
    });
    
    // product = product.forEach(index => {}) 
    // if we want 0 - 9  so it will be 1- 10  and the logic is  0 < e < 10  if the page is 1 so its 1times 10 and it minus one's ten times 0   
    //if the page is 2 so its 10 times 20 and it minus one's ten times 10   
    console.log(Items);

  return (
    <>
    <Box className="flex flex-col">
    <Box className="relative ml-[22%] " >
        <Box className="flex text-[#fff] justify-around relative top-14 w-[1035px] h-[45px] bg-[#7e7c7c7a] rounded-t-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)]" >
              <Box className="w-[112px]">Index No.</Box>
              <Box className="w-[112px]">BARCODE</Box>
              <Box className="w-[112px]">ITEM</Box>
              <Box className="w-[112px]">PRICE</Box>
              <Box className="w-[112px]">STOCK</Box>
              <Box className="w-[112px]">SPACE</Box>
        </Box>
       
      
          {product.length > 0 && Items.map((item,index)=><Box data-key={index} key={item._id} className="flex justify-around relative border-t-2 top-14 w-[1035px] h-[45px] bg-[#fff] last-of-type:rounded-b-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)]" >
                    <Box className="w-[112px]" >{index + 1 }</Box>
                    <Box className="w-[112px]" >{item.bar}</Box>
                    <Box className="w-[112px]" >{item.name}</Box>
                    <Box className="w-[112px]" >₹{item.price}</Box>
                    <Box className="w-[112px]" >{item.quantity}</Box>
                    <Box className="w-[112px]" >{item.space}</Box>
              </Box>
         )
        } 
        { product.length === 0 && <Box  className="flex justify-around relative border-t-2 top-14 w-[1035px] h-[45px] bg-[#fff] last-of-type:rounded-b-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)]" >
                    <Box className="w-[112px]" >-</Box>
                    <Box className="w-[112px]" >-</Box>
                    <Box className="w-[112px]" >-</Box>
                    <Box className="w-[112px]" >₹00</Box>
                    <Box className="w-[112px]" >-</Box>
                    <Box className="w-[112px]" >-</Box>
              </Box>

        }
      </Box>
     <Box className="left-12 rela">
     <Btn 
     styles={"flex justify-center relative top-16 "}

    Page={Page}
    setPage={setPage}
    numOfPages={Math.ceil(product.length/10)}
    />
    </Box> 
      </Box>
      
    </>
  )
}

export default ItemContainer
