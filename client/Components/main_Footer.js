import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter = () => {
  return (
  <div id='container'className='relative'>
        <div className='max-w-screen-xl mx-auto py-20 lg:py-25 '>
          <div className='py-10 lg:py-12 bg-gradient-to-r rounded-lg relative'>
            <div className='px-4 sm:px-16 mx-auto flex justify-center items-center relative z-10 flex-col lg:flex-row text-center lg:text-left'>
              <div id='ColumnContainer' className='lg:w-1/2 max-w-lg'>
                <div id='textContainer' className='text-2xl sm:text-4xl font-bold'>
                  <br></br>
                  <h5 id='heading'className='text-primary-grey'>All Thumbs are Welcome!</h5>
                </div>
              </div>
              <div id='columnContainer' className='lg:w-1/2 max-w-lg'>
                <div id='linkContainer'className='flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row'>
                  <Link to='/about' className='w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline text-primary-500 hover:text-primary-600 bg-red-50 hover:bg-white hover:border-amber-900'>
                    Meet the Team
                  </Link>
                  <a id='secondaryLink' className=' w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded font-bold border border-amber-900 tracking-wide transition duration-300 focus:outline-none focus:shadow-outline text-primary-500 hover:text-primary-600 bg-red-50 hover:bg-white hover:text-amber-900' href='https://www.buzzfeed.com/hildurlv1/what-kind-of-plant-are-you-6ddwe30m0x'>What Kind of Plant are You?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    
  );
}

export default MainFooter;