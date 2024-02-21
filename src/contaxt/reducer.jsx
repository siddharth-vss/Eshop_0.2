// import {initialState} from './contaxt'

import {
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    
    REGISTER_MONEY_ERROR,
    REGISTER_MONEY_SUCCESS,
    
    REGISTER_SHOP_ERROR,
    REGISTER_SHOP_SUCCESS,
  } from './actions'

  const reducer = (state, action) =>{

        
        if (action.type === REGISTER_USER_ERROR) {
            return{
                ...state,
            }
        }
        if (action.type === REGISTER_USER_SUCCESS) {
            return{
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                number: action.payload.number, 
                token: action.payload.token, 
                user_id: action.payload.id,
                pic: action.payload.pic
            }
        }
       
        if (action.type === LOGIN_USER_ERROR) {
            return{
                ...state,
            }
        }
        if (action.type === LOGIN_USER_SUCCESS) {
            return{
                ...state,
            }
        }
        
        if (action.type === REGISTER_MONEY_ERROR) {
            return{
                ...state,
            }
        }
        if (action.type === REGISTER_MONEY_SUCCESS) {
            return{
                ...state,
                money:action.payload.money,
                money_id: action.payload._id
            }
        }

        if (action.type === REGISTER_SHOP_ERROR) {
            return{
                ...state,
            }
        }
        if (action.type === REGISTER_SHOP_SUCCESS) {
            return{
                ...state,
                shop:action.payload.name,
                shop_id: action.payload._id,

            }
        }

  }
  export default reducer