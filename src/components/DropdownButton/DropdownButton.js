import { forwardRef } from "react";
import "./DropdownButton.css"

import {FaChevronDown, FaChevronUp} from "react-icons/fa"

const DropdownButton = forwardRef((props, ref) => {

    const {children, open, toggle} = props;

    return( <div onClick={toggle} className={`dropdown-btn ${open ? "button-open" : null}`} ref={ref}>
        {children}
        <span className="toggle-icon">
            {open ? <FaChevronUp /> : <FaChevronDown />
            }
        </span>
    </div>
    ); 
});

DropdownButton.displayName = "DropdownButton";

export default DropdownButton;