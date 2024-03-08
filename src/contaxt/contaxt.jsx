/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useReducer,
  useContext,
  useEffect
} from 'react';
import reducer from './reducer';

import {
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  
  // LOGIN_USER_ERROR,
  // LOGIN_USER_SUCCESS,
  
  REGISTER_MONEY_ERROR,
  REGISTER_MONEY_SUCCESS,
  
  REGISTER_SHOP_ERROR,
  REGISTER_SHOP_SUCCESS,
} from './actions'
import axios from 'axios';
import { useState } from 'react';




const token = localStorage.getItem('token');
const name = localStorage.getItem('name');
// const  = localStorage.getItem('');
const money_id = localStorage.getItem('money_id');
const shop_id = localStorage.getItem('Shop_id');
const user_id = localStorage.getItem('id');
// const userLocation = localStorage.getItem('location');




export const initialState = {
  email:"",
  name: name?name:null,
  number:"",
  token:token?token : null,
  user_id:user_id ?user_id : null,
  pic:"",
  shop:'',
  shop_id:shop_id?shop_id : null,
  money:'',
  money_id:money_id?money_id : null,
};





const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);




  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(()=>{
    cart.forEach(e => {
      setTotal( total + e.total);
    })
    console.log(total);
  },[cart])


  const sp = axios.create({
    // baseURL: 'https://shop-server-8qi1.onrender.com/',
    baseURL: 'http://localhost:5000',
    // headers: {
    //   Authorization: `Bearer ${state.user}`,
    // },
  });
  // response interceptor
  // sp.interceptors.request.use(
  //   (config) => {
  //     config.headers['Authorization'] = `Bearer ${state.user}`;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  // response interceptor
  sp.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 400) {
        // logoutUser();
      }
      return Promise.reject(error);
    }
  );


  // const displayAlert = () => {
  //   dispatch({
  //     type: DISPLAY_ALERT,
  //   });
  //   clearAlert();
  // };

  // const clearAlert = () => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: CLEAR_ALERT,
  //     });
  //   }, 3000);
  // };

  const addUserToLocalStorage = ({ email, name, pic, token, id }) => {
    localStorage.setItem('userInfo', token);
    localStorage.setItem('name', name);
    localStorage.setItem('id',id);

    localStorage.setItem('pic', pic);
    localStorage.setItem('email', email);

  };

  // const removeUserFromLocalStorage = () => {
  //   localStorage.removeItem('userInfo');
  //   localStorage.removeItem('name');
  //   localStorage.removeItem('pic');
  //   localStorage.removeItem('id');
  //   localStorage.removeItem('email');

  // };

  const registerUser = async (currentUser) => {

    try {
      console.log('user enter 1') ;
      const {shop } = currentUser;
      console.log('user enter 2',currentUser)
      const response = await sp.post('/register', currentUser);
      console.log('user out 1',response.data);
      const { email, name,number, token, id } = response.data;
      console.log('dispatched user',response.data);
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          email, name, number, token, id 

        },
      });
      addUserToLocalStorage({
        email, name, number, token, id

      })
      console.log('entering shop')
     setTimeout(()=>{registerShop({ shop ,number, id});},2000) 
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response },
      });
    }
  };
  const registerShop = async (currentUser) => {

    try {
      console.log('entered in shop ',currentUser);
      const response = await sp.post(`/shops/${currentUser.id}`, {phone: currentUser.number,name:currentUser.shop});
      console.log('response arrived from shop ') ;
      const { name, phone, _id } = response.data;
      localStorage.setItem('Shop_id', _id);
      dispatch({
        type: REGISTER_SHOP_SUCCESS,
        payload: {
           name, phone,  _id 

        },
      });
      console.log('shop res seted');
       console.log('shop dispatched and entering in money')
      registerMoney(_id);
    } catch (error) {
      dispatch({
        type: REGISTER_SHOP_ERROR,
        payload: { msg: error.response.data.message },
      });
    }
    
  };
  const registerMoney = async (currentUser) => {

    try {
      console.log('enterd in money')
      const response = await sp.post(`/money/${currentUser}`);
      console.log('money response');
      const { shop , money , _id } = response.data;
      localStorage.setItem('money_id', _id);
      dispatch({
        type: REGISTER_MONEY_SUCCESS,
        payload: {
          shop , money , _id

        },
      });
      console.log('operation successed')
      console.log({...state});
    } catch (error) {
      dispatch({
        type: REGISTER_MONEY_ERROR,
        payload: { msg: error.response.data.message },
      });
    }
    
  };

  // const loginUser = async (currentUser) => {

  //   dispatch({ type: LOGIN_USER_BEGIN });
  //   try {
  //     const response = await sp.post('/users/login', currentUser);

  //     const { email, name, pic, token, _id } = response.data;
  //     dispatch({
  //       type: LOGIN_USER_SUCCESS,
  //       payload: {
  //         email, name, pic, token, _id

  //       }
  //     });
  //     addUserToLocalStorage({
  //       email, name, pic, token, _id

  //     })
  //   } catch (error) {
  //     dispatch({
  //       type: LOGIN_USER_ERROR,
  //       payload: { msg: error.response.data.error },
  //     });
  //   }
  //   clearAlert();
  // };


  // const logoutUser = () => {
  //   dispatch({ type: LOGOUT_USER })
  //   removeUserFromLocalStorage()
  // }


  return (
    <AppContext.Provider
      value={{
        ...state,
        // displayAlert,
        registerUser,
        registerShop,
        registerMoney,
        addUserToLocalStorage,
        // loginUser,
        // removeUserFromLocalStorage,
        // logoutUser,
        // selectedChat,
        // setSelectedChat,
        // notification,
        // setNotification,
        // chats,
        // setChats,
        sp,
        cart,setCart,
        total,setTotal,
        windowSize,


      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};



export default AppProvider;