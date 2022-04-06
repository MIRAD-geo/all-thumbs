import React from 'react';

function Filters() {

    return (
        <form class="mt-4 border-t border-gray-200">

            <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">

                    <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                        <span class="font-medium text-gray-900"> Thumb </span>
                        <span class="ml-6 flex items-center">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </h3>
                <div class="pt-6" id="filter-section-mobile-0">
                    <div class="space-y-6">
                        <div class="flex items-center">
                            <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500"> Green Thumb </label>
                        </div>

                        <div class="flex items-center">
                            <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500"> Brown Thumb </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                    <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                        <span class="font-medium text-gray-900"> Hardiness Zone </span>
                        <span class="ml-6 flex items-center">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </h3>

                <div class="pt-6" id="filter-section-mobile-1">
                    <div class="space-y-6">
                        <div class="flex items-center">
                            <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500"> 1-3 </label>
                        </div>
                        <div class="flex items-center">
                            <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500"> 2-4 </label>
                        </div>
                        <div class="flex items-center">
                            <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500"> 3-5 </label>
                        </div>
                        <div class="flex items-center">
                            <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500"> 4-6 </label>
                        </div>
                        <div class="flex items-center">
                            <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500"> 5-7 </label>
                        </div>
                        <div class="flex items-center">
                            <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500"> 6-8 </label>
                        </div>
                        <div class="flex items-center">
                            <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500"> 7-9 </label>
                        </div>
                        <div class="flex items-center">
                            <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-category-0" class="ml-3 min-w-0 flex-1 text-gray-500"> 8-10 </label>
                        </div>

                        <div class="flex items-center">
                            <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500"> 9-11 </label>
                        </div>

                        <div class="flex items-center">
                            <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-category-2" class="ml-3 min-w-0 flex-1 text-gray-500"> 10-12 </label>
                        </div>

                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">

                    <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                        <span class="font-medium text-gray-900"> Difficulty </span>
                        <span class="ml-6 flex items-center">

                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>

                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </h3>

                <div class="pt-6" id="filter-section-mobile-2">
                    <div class="space-y-6">
                        <div class="flex items-center">
                            <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-size-0" class="ml-3 min-w-0 flex-1 text-gray-500"> easy </label>
                        </div>

                        <div class="flex items-center">
                            <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-size-1" class="ml-3 min-w-0 flex-1 text-gray-500"> moderate </label>
                        </div>

                        <div class="flex items-center">
                            <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label for="filter-mobile-size-2" class="ml-3 min-w-0 flex-1 text-gray-500"> difficult </label>
                        </div>


                    </div>
                </div>
            </div>
        </form>
    )
}

export default Filters;