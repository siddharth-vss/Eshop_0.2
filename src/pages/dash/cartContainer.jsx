/* eslint-disable react/prop-types */

import { Box } from "@mui/material";


const CartContainer = ({ cart }) => {
    if (cart.length > 0) {
        return (
            <>
                {cart.map((item, index) => (
                    <Box key={index} className="flex justify-around relative border-t-2 top-14 w-[1035px] h-[45px] bg-[#fff] last-of-type:rounded-b-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)]" >

                        <Box className="w-[112px]" >{item.item}</Box>
                        <Box className="w-[112px]" >₹{item.price}</Box>
                        <Box className="w-[112px]" >{item.quantity}</Box>
                        <Box className="w-[112px]" >{item.total}</Box>

                    </Box>
                ))
                }
            </>

        );
    } else return (
        <Box className="flex justify-around relative border-t-2 top-14 w-[1035px] h-[45px] bg-[#fff] last-of-type:rounded-b-[25px] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)]" >

            <Box className="w-[112px]">Enterd Item</Box>
            <Box className="w-[112px]">Enterd Price</Box>
            <Box className="w-[112px]">Enterd Quantity</Box>
            <Box className="w-[112px]">Calculated Total</Box>

        </Box>
    );
}

export default CartContainer
