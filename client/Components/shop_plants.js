import * as React from "react";
import Nav from "./Nav";

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_hedgehog-aloe_stone_0621-scaled-e1633462157873.jpg?ver=542489',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_hedgehog-aloe_stone_0621-scaled-e1633462157873.jpg?ver=542489',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_hedgehog-aloe_stone_0621-scaled-e1633462157873.jpg?ver=542489',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_hedgehog-aloe_stone_0621-scaled-e1633462157873.jpg?ver=542489',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_hedgehog-aloe_stone_0621-scaled-e1633462157873.jpg?ver=542489',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_hedgehog-aloe_stone_0621-scaled-e1633462157873.jpg?ver=542489',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_hedgehog-aloe_stone_0621-scaled-e1633462157873.jpg?ver=542489',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_hedgehog-aloe_stone_0621-scaled-e1633462157873.jpg?ver=542489',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

function Plants() {
  return ( 
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
    
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )
    }


export default Plants;