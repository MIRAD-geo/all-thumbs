import * as React from "react";
import { Link } from "react-router-dom";
import Cart from './shopping-chart';
import CheckoutPreview from './CheckoutPreview';

function PlantDetails() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">All Thumbs Plants</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Snake Plant</h1>
            <div class="flex mb-4">
              <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
              <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
              <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
            </div>
<<<<<<< HEAD
            <p class="leading-relaxed mb-4">Architectural and sturdy, this plant is easy to care for and highly adaptable. Also known as a Snake Plant and Mother-in-Law’s Tongue.</p>
=======
            <p class="leading-relaxed mb-4">Architectural and sturdy, this plant is easy to care for and highly adaptable. Also known as a Snake Plant and Mother-in-Law's Tongue.</p>
>>>>>>> dev
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Difficulty</span>
              <span class="ml-auto text-gray-900">Easy </span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Hardiness Zone</span>
              <span class="ml-auto text-gray-900">Zones 8-11</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Light</span>
              <span class="ml-auto text-gray-900">Low Light</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Pet Friendly</span>
              <span class="ml-auto text-gray-900">Yes</span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
              <span class="text-gray-500">Quantity</span>
              <span class="ml-auto text-gray-900">4</span>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
              <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
              <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
<<<<<<< HEAD
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
=======
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_hedgehog-aloe_stone_0621-scaled-e1633462157873.jpg?ver=542489"/>
>>>>>>> dev
        </div>
      </div>
    </section>
    </div>
  )
}

export default PlantDetails