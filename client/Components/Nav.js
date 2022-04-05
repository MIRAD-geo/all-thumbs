import * as React from "react";
import { Link } from "react-router-dom";
import Cart from './shopping-chart';
import CheckoutPreview from './CheckoutPreview';
import PlantDetails from "./plants_Details";
import { useSelector, useDispatch } from 'react-redux' 

function Nav() {

    // const open = useSelector(...state => state.cartData.isOpen)
    const dispatch = useDispatch();
  

    return (
        <>
            <header>
                <nav class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
                    <div>

                        <Link to="/">All Thumbs</Link>
                    </div>
                    <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                        <ul class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0" >
                            <li>
                                <a class="md:p-4 py-2 block hover:text-green-400" href="#/details"
                                >Plants</a
                                >
                            </li>
                            <li>
                                <a class="md:p-4 py-2 block hover:text-green-400" href="#"
                                >Care Tools</a
                                >
                            </li>
                            <li>
                                <a class="md:p-4 py-2 block hover:text-green-400" href="#"
                                >Learn</a
                                >
                            </li>
                            <li> <a>
                            <Cart />
                            <CheckoutPreview/>
                            {/* <button onClick={() => dispatch({type: "OPEN_CART"})}> <CheckoutPreview/> </button> */}
                            </a>
                            </li>
                            <li>
                                <a
                                    class="md:p-4 py-2 block hover:text-green-400 text-green-500"
                                    href="#"
                                >Sign Up</a
                                >
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Nav;