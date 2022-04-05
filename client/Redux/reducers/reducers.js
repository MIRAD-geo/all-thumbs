import * as types from '../actions/actionTypes';

const CartData = {
    // amount: items.length, 
    amount: 0,
    items: [],
    inSession: false,
    isOpen: false,
}

const UserData = {
    isLoggedIn: false, 
    username: " ",
    userId: " ",
    entryError: false,
}
const PlantData = {
    name: " ",
    price: " ",
    plantId:" ",
    image: " ",
    description: " ",
    difficulty: " ",
    hardinessZone: " ",
    light: " ",
    petFriendly: " "
}

const initialState = {
    cartData: CartData,
    plantData: PlantData,
    userData: UserData, 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.OPEN_CART: {
            let cartData = {...state.cartData}
            cartData.isOpen = true

            return {
                ...state, 
                cartData
            }
        }
        case types.OPEN_CART: {
            let cartData = {...state.cartData}
            cartData.isOpen = false

            return {
                ...state, 
                cartData
            }
        }
        case types.ADD_ITEM: {
            let cartData = {...state.cartData}
            cartData.items.push(action.payload.item);
            cartData.amount++; 

            return {
                ...state, 
                cartData
            }
        }
        case types.DELETE_ITEM: {
            let cartData = {...state.cartData}
            // carttData.items

            return {
                ...state,
                cartData
            }
        }
        case types.CREATE_SESSION: {
            let cartData = {...state.cartData}
            cartData.inSession = action.payload

            return {
                ...state, 
                cartData
            }
        }
        case types.END_SESSION: {
            let cartData = {...cartData}

            return {
                ...state, 
                cartData
            }
        }
         case types.LOGIN: {
            let userData = {...state.userData}
            userData.isLoggedIn = action.payload.isLoggedIn;
            userData.username = action.payload.username;
            
            return {
                ...state, 
                userData
            }
        }
        case types.LOGOUT: {
            let userData = {...userData};
            return {
                ...state,
                userData
            }
        }
        case types.UPDATE_PLANT: {
            let plantData = {...state.plantData}
            plantData.name = action.payload.name;
            plantData.price = action.payload.price;
            plantData.plantId = action.payload.plantId;
            plantData.image = action.payload.image
            plantData.description = action.payload.description;
            plantData.hardinessZone = action.payload.hardinessZone;
            plantData.light = action.payload.light;
            plantData.petFriendly = action.payload.petFriendly;

            return {
                ...state,
                plantData
            }
        }

        default: {
            return state;
        }   
    }
}

export default reducer;