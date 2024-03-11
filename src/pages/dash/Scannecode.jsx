/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Input, InputLabel, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useAppContext } from '../../contaxt/contaxt'
import CartContainer from "./cartContainer";

const Scannecode = () => {

  const { sp, shop_id,cart,setCart,total } = useAppContext();

  const [bar, setbar] = useState('');
  const [quantity, setQuantity] = useState();
  const [Item, setItem] = useState({});
  

 

  const Barcode = useRef('');
  const Quantity = useRef('');

  useEffect(() => {
    Barcode.current.focus();
    console.log(cart,"Barcode", Barcode, "Quantity", Quantity);
  }, [onload])

 
  

  const handleBar = (e) => {
    setbar(e.target.value);
    console.log(bar);
  }
  const handleProduct = (e) => {
    setQuantity(e.target.value);
  }

  const FindProduct = async () => {
    Quantity.current.focus();
    console.log(shop_id, "=>", bar);
    const data = await sp.get(`/items/${shop_id}/${bar}`);
    console.log(data.data);
    setItem(data.data);
    console.log("quantity");
  }
  const AddtoCart = () => {
    console.log("bar");
    Barcode.current.focus();
    setCart([...cart, {
      item: Item.name,
      price: Item.price,
      quantity: quantity,
      total: quantity * Item.price
    }]);


    console.log(cart);
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Barcode
      </h1>


      {/* flex container */}
      <Box className="flex justify-around mt-[50px] " >

        {/* container 1 */}
        <Box  >
          <Box className="w-[450px] h-[180px] bg-[#fff] rounded-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] " >
            <h1 className="text-[40px] ml-[50px] font-[600] " >Barcode </h1>
            <Box className="ml-12 mt-5 ">
              <InputLabel ref={Barcode} htmlFor="formatted-text-mask-input">Barcode Number</InputLabel>
              <Input
                value={bar}
                onChange={handleBar}
                type="number"
                name="bar"
                id="formatted-text-mask-input"
              // inputComponent={TextMaskCustom}
              />

              <Button sx={{ marginLeft: "20px" }} variant="contained" onClick={FindProduct} color="success">
                Find product
              </Button>
            </Box>
          </Box>
        </Box>
        {/* conrtainer 2 */}

        <Box  >
          <Box className="w-[950px] h-[180px] bg-[#fff] rounded-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] " >
            <h1 className="text-[40px] ml-[50px] font-[600] " > Item Box</h1>
            <Box className="ml-12 mt-5 flex justify-between ">

              <Box>
                <Typography variant="h4" gutterBottom>
                  Product
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {Item?.name ? Item?.name : "name of product"}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" gutterBottom>
                  Price
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {Item?.price ? "₹" + Item?.price : "Price of product"}
                </Typography>
              </Box>

              <Box>
                <InputLabel ref={Quantity} htmlFor="formatted-text-mask-input-quality">Quantity</InputLabel>
                <Input
                  value={quantity}
                  onChange={handleProduct}

                  type="number"
                  name="quantity"
                  id="formatted-text-mask-input-quality"
                // inputComponent={TextMaskCustom}
                />
              </Box>

              <Box>
                <Button sx={{ marginRight: "40px" }} variant="contained" onClick={AddtoCart} color="success">
                  Add product
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* bill container */}


      <Box className="relative ml-[22%] " >
      <Box className="flex text-[#fff] justify-around relative top-14 w-[1035px] h-[45px] bg-[#7e7c7c7a] rounded-t-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)]" >

            <Box className="w-[112px]">ITEM</Box>
            <Box className="w-[112px]">PRICE</Box>
            <Box className="w-[112px]">QUANTITY</Box>
            <Box className="w-[112px]">Total : ₹{total}</Box>

        </Box>
      <CartContainer  cart={cart} />

      
      </Box>
    </>
  )
}

export default Scannecode
