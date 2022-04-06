import * as React from "react";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import { addItem } from '../Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


function Plants() {

    const [realplants, setRealPlants] = useState([]);

    const [fakeplants, setFakePlants] = useState([]);

    const getPlants = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/getRealPlants');
            const jsonData = await response.json();
            setRealPlants(jsonData);
            const response1 = await fetch('http://localhost:3000/api/getFakePlants');
            const jsonData1 = await response1.json();
            setFakePlants(jsonData1);

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getPlants();
    }, [])

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart)

    const addCart = (item, price, count, image ) => {
        dispatch(addItem({name:item, price:price, quantity:count, image:image }))
        console.log('count', count)
    }

    return (
        <>
            <Nav />
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {realplants.map((plants) => (
                            <div>
                                <a key={plants.id} href={`http://localhost:8080/#/details/#/${plants.id}`} className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={plants.url}
                                            alt='plants image'
                                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                                        />
                                    </div>
                                </a>
                                <h3 className="mt-4 text-sm text-gray-700">{plants.common_name}</h3>
                                <div className='flex flex-col md:flex-row justify-between items-center text-gray-900'>
                                    <p className="mt-1 text-lg font-medium text-gray-900">$ {plants.price}</p>

                                    <button onClick={() => addCart(plants.common_name, plants.price, 1, plants.url)} className='text-sm px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>Add To Cart</button>
                                </div>
                            </div>
                        ))}
                        {fakeplants.map((plants) => (
                            <div>
                                <a key={plants.id} href={`http://localhost:8080/#/details/#/${plants.id}`} className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={plants.url}
                                            alt='plants image'
                                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                                        />
                                    </div>
                                </a>
                                <h3 className="mt-4 text-sm text-gray-700">{plants.common_name}</h3>
                                <p className='text-amber-900 text-xs'><em>brown-thumb friendly</em></p>
                                <div className='flex flex-col md:flex-row justify-between items-center text-gray-900'>
                                    <p className="mt-1 text-lg font-medium text-gray-900">$ {plants.price}</p>
                                    <button onClick={() => addCart(plants.common_name, plants.price, 1, plants.url)} className='text-sm px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>Add To Cart</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Plants;