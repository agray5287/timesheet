import React, { useState, useEffect, useRef } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import { userAgent } from "next/server";

//https://youtu.be/q6HevBxsPUM?si=KEfYmeHE5kZmqu1s&t=315


const Dropdown = ({buttonText , content}) => {

    const [open, setOpen] = useState(false);
    const [dropdownTop, setDropdownTop] = useState(0)

    const dropdownRef = useRef()
    const buttonRef = useRef()
    const contentRef = useRef()

    const toggleDropdown = () => {

        if(!open) {
            const spaceRemaining = window.innerHeight - buttonRef.current.getBoundingClientRect().bottom;
            const contentHeight = contentRef.current.clientHeight;

            const topPosition = spaceRemaining > contentHeight ? null :
            spaceRemaining - contentHeight;
            setDropdownTop(topPosition)
        }

        setOpen((open) => !open);
    };

    useEffect(() => {
        const handler = (event) => {
            if(dropdownRef.current && 
                !dropdownRef.current.contains(event.target)) {
                    setOpen(false);
                }
            };
            
            document.addEventListener("click",handler);

            return () => {
                document.removeEventListener ("click", handler)
            };
    
    });


    return <div className="dropdown" ref={dropdownRef}>
        <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
            {buttonText}
            <DropdownContent top={dropdownTop} ref={contentRef} open={open}>{content}</DropdownContent>
        </DropdownButton>
        </div>;
};

export default Dropdown;