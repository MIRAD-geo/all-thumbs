import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../Slices/cartSlice';

const CartItem = ({ item, id }) => {

    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(removeItem(id));
    };

    const updateItemQuantity = (e) => {
        const newQuantity = e.target.value;
        dispatch(updateQuantity({ id, newQuantity }));
    };

    return (
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">

                <div class="w-20">
                    <img class="h-24" src={item.image} alt="plant image"/>

                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">{item.name}</span>
                    <p onClick={() => deleteItem()} class="font-semibold hover:text-red-500 text-stone-600  text-xs">Remove</p>
                </div>
            </div>
            <div class="flex justify-center w-1/5">
                <input class="mx-2 border text-center w-10" type="number" name="quantity" placeholder='1' value={item.quantity} min={1} max={100} onChange={(e) => updateItemQuantity(e)} />
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">$ {item.price}</span>
            <span class="text-center w-1/5 font-semibold text-sm">$ {item.price} </span>
        </div>
    );
};

export default CartItem;