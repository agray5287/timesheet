import "./DropdownButton.css"

import {FaChevronDown} from "react-icons/fa"

const DropdownButton = ({children}) => {
    return <div className="dropdown-btn">
        {children}
        <span className="toggle-icon" /*class="ml-auto"*/>
            <FaChevronDown />
        </span>
    </div>;
    
};

export default DropdownButton;