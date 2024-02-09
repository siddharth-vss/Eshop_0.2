/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */

import { Box } from "@mui/material"

const Cardtool = ({ icon ,title ,value}) => {
    return (
        <>
            <Box className=" flex w-[300px] h-[85px] rounded-[20px] justify-around bg-white mt-8 shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] "  >
                <Box>
                    <h1 className="text-[20px] text-[gray] relative top-3  ml-10 " > {title} </h1>
                    <h1 className="text-[20px] font-[800] text-[black] relative top-3  ml-14 " >{value}</h1>

                </Box>
                <Box className="bg-[#257EEA] shadow-[0_0.6em_1.2em_rgba(28,0,80,0.06)] text-white w-[50px] h-[50px] relative top-4 rounded-[10px] " >
                    {icon}  
                </Box>
            </Box>

        </>
    )
}

export default Cardtool

