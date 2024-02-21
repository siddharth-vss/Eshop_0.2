/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Input, InputLabel, } from "@mui/material"
import { useEffect, useRef, useState } from "react"

import {useAppContext} from '../../contaxt/contaxt'



const Scannecode = () => {

  
  const {
    sp,
    shop_id,
  } = useAppContext();
  
  const [barcode, setBarcode] = useState('')
  const [Item, setItem] = useState({})
  const [product, setproduct] = useState([1,2]);

  const Barcode = useRef('');
  const Quantity = useRef('');
  
  useEffect(()=>async()=>{
    
    const data = await sp.get(`/items/${shop_id}`);
    console.log(`/items/${shop_id}/${barcode}`)
    if(data.status === 200){
      if(data.data.length > 0){
        return setproduct(data.data);
      }
      return Barcode.current.focus();
    }
    // console.log("Barcode",Barcode,"Quantity",Quantity);
  },[onload])
  

  const handelChange1 =(e)=>{
    setBarcode(e.target.value);
    // console.log(e.targate.value);
  }
console.log(product)
  const handelChange2 =(e)=>{
    let name = e.target.name ;
    let value = e.target.value ;
    // console.log({[name]: value});
    setItem({...Item,[name]:value})
  }

  const FindProduct = async(e) =>{
    e.preventDefault();
    Quantity.current.focus();
    const response = await sp.get(`/items/${shop_id}/${barcode}`);
    // console.log("quantity",barcode);
    // console.log(response);
    if(response){
      setItem(response.data);
     return Quantity.current.focus();
    }
  }
  const AddtoShop = async(e) =>{

    e.preventDefault();
    Barcode.current.focus();
  
       const items =  await sp.post(`/items/${shop_id}/${barcode}`,Item);
        // console.log(items);
        if(items.status === 200){
          const data = await sp.get(`/items/${shop_id}/${barcode}`);
            if(data.status === 200){
              return setproduct(data.data);

            }
            return setproduct([...product,{...Item}]);
        
    }


    
    // console.log("bar",Item);
     Barcode.current.focus();
  }
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Barcode
      </h1> */}


{/* flex container */}
      <Box className="flex justify-around mt-[50px] " >

        {/* container 1 */}
        <Box  >
          <Box component="form" noValidate onSubmit={FindProduct} className="w-[450px] h-[180px] bg-[#fff] rounded-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] " >
            <h1 className="text-[40px] ml-[50px] font-[600] " >Barcode </h1>
            <Box className="ml-12 mt-5 ">
              <InputLabel ref={Barcode} htmlFor="formatted-text-mask-input">Barcode Number</InputLabel>
              <Input
                value={barcode}
                onChange={handelChange1}
                type="number"
                name="bar"
                id="formatted-text-mask-input"
              // inputComponent={TextMaskCustom}
              />

              <Button sx={{ marginLeft: "20px" }} variant="contained"  type="submit" color="success">
                Add product
              </Button>
            </Box>
          </Box>
        </Box>
        {/* conrtainer 2 */}

        <Box  >
          <Box className="w-[1035px] h-[180px] bg-[#fff] rounded-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] " >
            <h1 className="text-[40px] ml-[50px] font-[600] " > Item Box</h1>
            <Box component="form" noValidate onSubmit={AddtoShop} className="ml-12 mt-5 flex justify-between ">

              <Box>
              <InputLabel
              //  ref={Quantity}
                htmlFor="formatted-text-mask-input-item">Name</InputLabel>
                <Input
                  value={Item.item}
                  onChange={handelChange2}
                  
                  type="text"
                  name="item"
                  id="formatted-text-mask-input-item"
                // inputComponent={TextMaskCustom}
                />
              </Box>
              <Box>
              <InputLabel 
      
               htmlFor="formatted-text-mask-input-price">Price</InputLabel>
                <Input
                  value={Item.price}
                  onChange={handelChange2}
                  
                  type="number"
                  name="price"
                  id="formatted-text-mask-input-price"
                // inputComponent={TextMaskCustom}
                />
              </Box>

              <Box>
                <InputLabel ref={Quantity} htmlFor="formatted-text-mask-input-quality">Quantity</InputLabel>
                <Input
                  value={Item.quantity}
                  onChange={handelChange2}
                  
                  type="number"
                  name="quantity"
                  id="formatted-text-mask-input-quality"
                // inputComponent={TextMaskCustom}
                />
              </Box>
              <Box>
                <InputLabel  htmlFor="formatted-text-mask-input-space">Space</InputLabel>
                <Input
                  value={Item.space}
                  onChange={handelChange2}
                  
                  type="text"
                  name="space"
                  id="formatted-text-mask-input-space"
                // inputComponent={TextMaskCustom}
                />
              </Box>

              <Box>
                <Button sx={{ marginRight: "40px" }} variant="contained"  type="submit" color="success">
                  Add product
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
{/* bill container */}


      <Box className="relative left-[22%] " >
        <Box className="flex text-[#fff] justify-around relative top-14 w-[1035px] h-[45px] bg-[#7e7c7c7a] rounded-t-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)]" >
              <Box className="">BARCODE</Box>
              <Box className="">ITEM</Box>
              <Box className="">PRICE</Box>
              <Box className="">STOCK</Box>
              <Box className="">SPACE</Box>
        </Box>
       
      
         {product.map((item,index)=><Box data-key={index} key={item._id} className="flex justify-around relative border-t-2 top-14 w-[1035px] h-[45px] bg-[#fff] last-of-type:rounded-b-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)]" >
                    <Box>{item.bar}</Box>
                    <Box>{item.name}</Box>
                    <Box>{item.price}</Box>
                    <Box>{item.quantity}</Box>
                    <Box>{item.space}</Box>
              </Box>
         )
        } 
      </Box>
    </>
  )
}

export default Scannecode
