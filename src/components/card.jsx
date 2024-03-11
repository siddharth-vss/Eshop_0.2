/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
import { Box } from "@mui/material"
import Piachart from "./piachart"
import Btn from "./Btn"


const Card = ({ Page ,setPage ,product }) => {


    let Items =[];

    product.forEach( (e,index) => {
        if( index + 1   > ((Page - 1 ) * 10 )  && index < ((Page   * 10 ))){
            console.log(index , e);
            Items.push(e);
             
        }      
    });
  return (
    <Box className="bg-white shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] rounded-[25px] w-[450px] h-[400px] " >

                <Piachart data01={Items} price={"quantity"} />

                <Btn 
                styles={"flex justify-center"}
                  Page={Page}
                  setPage={setPage}
                  numOfPages={Math.ceil(product.length / 10)}
                />

              </Box>
  )
}

export default Card
