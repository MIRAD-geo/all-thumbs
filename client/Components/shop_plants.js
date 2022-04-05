
import * as React from "react";
import { useEffect, useState } from "react";
import Nav from "./Nav";


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

    return (
        <>
        <Nav />
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {realplants.map((plants) => (
                        <a key={plants.id} href={`http://localhost:8080/#/details/#/${plants.id}`} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={plants.url}
                                    alt='plants image'
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{plants.common_name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$ {plants.price}</p>
                        </a>
                    ))}
                    {fakeplants.map((plants) => (
                        <a key={plants.id} href={`http://localhost:8080/#/details/#/${plants.id}`} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={plants.url}
                                    alt='plants image'
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{plants.common_name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$ {plants.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}


export default Plants;