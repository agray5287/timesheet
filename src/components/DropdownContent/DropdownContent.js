import "./DropdownContent.css"
import { forwardRef } from "react";

const DropdownContent = forwardRef((props, ref) => {

    const {children, open, top} = props;

    return( <div 
            ref={ref} 
            className={`dropdown-content ${open ? "content-open" : null}`} 
            style={{top: top ? `${top}px` : "100%" }}>
                {children}
            </div>
    );
});

DropdownContent.displayName = "DropdownContent";

export default DropdownContent;