import React from "react";

import {FaChevronDown} from "react-icons/fa"

const DropdownButton = ({children}) => {
    return <div class="relative inline-block text-left">
        <div  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
        {children}
        <span>
            <FaChevronDown />
        </span>
    </div>
    </div>;
    
};

export default DropdownButton;