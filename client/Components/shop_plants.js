import * as React from "react";
import {useEffect, useState} from "react";
import Nav from "./Nav";

// const products = 
//   {
//     id: 1,
//     name: 'Earthen Bottle',
//     href: '#',
//     price: '$48',
//     imageSrc: 'https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_hedgehog-aloe_stone_0621-scaled-e1633462157873.jpg?ver=542489',
//     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//   },


function Plants() {

    const [plants, setPlants] = useState([])

    const getPlants = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/getPlants");
            const jsonData = await response.json();
            setPlants(jsonData);
        } catch(err) {
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
              {plants.map((plants) => (
                <a key={plants.id} href={`http://localhost:8080/#/details/#/${plants.id}`} className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={plants.url}
                      alt='product image of plant'
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{plants.common_name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900"> $ {plants.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        </>
      )
    }


export default Plants;