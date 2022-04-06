import * as React from "react";
import { Link } from "react-router-dom";
import Cart from './shopping-chart';
import CheckoutPreview from './CheckoutPreview';

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => console.log('User signed out.'))
};

function Nav() {
    return (
        <>
            <header>
                <nav class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
                    <div>

                        <Link to="/">All Thumbs</Link>
                    </div>
                    <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                        <ul class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0" >
                            {/* <li>
                                <a class="md:p-4 py-2 block hover:text-green-400" href="#"
                                >Plants</a
                                >
                            </li> */}
                            <li>
                                <Link to='/plantShop' class="md:p-4 py-2 block hover:text-green-400" href="#">Plants</Link>
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
                            <li>
                            <Link to='/placeholder' class="md:p-4 py-2 block hover:text-green-400" href="#"
                                ><Cart /></Link>
                            </li>
                            <li>
                                {/* <a
                                    class="md:p-4 py-2 block hover:text-green-400 text-green-500"
                                    href="#"
                                >Sign in with Google</a
                                > */}
                                <div class="g-signin2" data-onsuccess="onSignIn"></div>
                            </li>
                            {/* <li><a href="#" onclick="signOut();">Sign out</a></li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Nav;