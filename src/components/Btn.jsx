/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Btn = ({Page,setPage,numOfPages = 10,styles="relative top-16 ml-28" }) => {

    const Back = () => {
        let newPage = Page - 1;
        if (newPage < 1) {
          // newPage = 1
          // alternative
          newPage = numOfPages;
        }
        setPage(newPage);
    
        // setPage(Page - 1 )
    }
    const Next = () => {
        let newPage = Page + 1;
    if (newPage > numOfPages) {
 
      newPage = 1;
    }
    setPage(newPage);
        // setPage(Page + 1 )
    }

  return (
    <>
    <Box className={styles} >
         <Button
          startIcon={<NavigateBeforeIcon />}
          onClick={Back}
         >PREVIOUS</Button>
         <Button disabled>{Page}</Button>
         <Button endIcon={<NavigateNextIcon/>}
         onClick={Next}
         >NEXT</Button>
    </Box>
    </>
  )
}

export default Btn
