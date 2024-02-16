/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Input, InputLabel, } from "@mui/material"
import { useEffect, useRef } from "react"
import Table from '../../components/table'

const Scannecode = () => {
  const Barcode = useRef('');
  const Quantity = useRef('');

  useEffect(()=>{
    Barcode.current.focus();
    console.log("Barcode",Barcode,"Quantity",Quantity);
  },[onload])

  const FindProduct = () =>{
    console.log("quantity");
     Quantity.current.focus();
  }
  const AddtoCart = () =>{
    console.log("bar");
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
          <Box className="w-[450px] h-[180px] bg-[#fff] rounded-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] " >
            <h1 className="text-[40px] ml-[50px] font-[600] " >Barcode </h1>
            <Box className="ml-12 mt-5 ">
              <InputLabel ref={Barcode} htmlFor="formatted-text-mask-input">Barcode Number</InputLabel>
              <Input
                // value={values.textmask}
                // onChange={handleChange}
                type="number"
                name="textmask"
                id="formatted-text-mask-input"
              // inputComponent={TextMaskCustom}
              />

              <Button sx={{ marginLeft: "20px" }} variant="contained" onClick={ FindProduct} color="success">
                Add product
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
              <InputLabel
              //  ref={Quantity}
                htmlFor="formatted-text-mask-input-item">Name</InputLabel>
                <Input
                  // value={values.textmask}
                  // onChange={handleChange}
                  
                  type="text"
                  name="textmask"
                  id="formatted-text-mask-input-item"
                // inputComponent={TextMaskCustom}
                />
              </Box>
              <Box>
              <InputLabel 
              // ref={Quantity}
               htmlFor="formatted-text-mask-input-price">Price</InputLabel>
                <Input
                  // value={values.textmask}
                  // onChange={handleChange}
                  
                  type="number"
                  name="textmask"
                  id="formatted-text-mask-input-price"
                // inputComponent={TextMaskCustom}
                />
              </Box>

              <Box>
                <InputLabel ref={Quantity} htmlFor="formatted-text-mask-input-quality">Quantity</InputLabel>
                <Input
                  // value={values.textmask}
                  // onChange={handleChange}
                  
                  type="number"
                  name="textmask"
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


      <Box className="flex justify-around relative top-14 " >
            <Table />
      </Box>
    </>
  )
}

export default Scannecode
