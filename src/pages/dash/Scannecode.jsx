import { Box, Button, Input, InputLabel, Typography } from "@mui/material"

const Scannecode = () => {
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
              <InputLabel htmlFor="formatted-text-mask-input">Barcode Number</InputLabel>
              <Input
                // value={values.textmask}
                // onChange={handleChange}
                type="number"
                name="textmask"
                id="formatted-text-mask-input"
              // inputComponent={TextMaskCustom}
              />

              <Button sx={{ marginLeft: "20px" }} variant="contained" color="success">
                Find product
              </Button>
            </Box>
          </Box>
        </Box>
        {/* conrtainer 2 */}

        <Box  >
          <Box className="w-[950px] h-[180px] bg-[#fff] rounded-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] " >
            <h1 className="text-[40px] ml-[50px] font-[600] " > Item </h1>
            <Box className="ml-12 mt-5 flex justify-between ">

              <Box>
                <Typography variant="h4" gutterBottom>
                  Product
                </Typography>
                <Typography variant="h5" gutterBottom>
                  name of product
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" gutterBottom>
                  Price
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Price of product
                </Typography>
              </Box>

              <Box>
                <InputLabel htmlFor="formatted-text-mask-input">Quantity</InputLabel>
                <Input
                  // value={values.textmask}
                  // onChange={handleChange}
                  type="number"
                  name="textmask"
                  id="formatted-text-mask-input"
                // inputComponent={TextMaskCustom}
                />
              </Box>

              <Box>
                <Button sx={{ marginRight: "40px" }} variant="contained" color="success">
                  Find product
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
{/* bill container */}


      <Box>
            <h1>  the array of items</h1>
      </Box>
    </>
  )
}

export default Scannecode
