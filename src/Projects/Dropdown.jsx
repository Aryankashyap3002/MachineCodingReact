import { useEffect, useRef, useState } from "react";

export function Dropdown() {
    const studentList = ["Aryan", "Krityan", "Ankit"];
    const [isOpen, setIsOpen] = useState(false);

    const openRef = useRef(null);

    function handleClick() {
        setIsOpen(!isOpen);
        console.log(openRef);
    }

    useEffect(() => {
        if(!isOpen) return;

        const handleToggleFromOutside = (event) => {
            
            if(openRef.current && !openRef.current.contains(event.target)) {
                console.log("event is ", event.target, openRef.current);
                setIsOpen(false);
            }
            

        }

        addEventListener("mousedown", handleToggleFromOutside);

        return () => {
            removeEventListener("mousedown", handleToggleFromOutside);
        }
    }, [isOpen])

    return (
    <div className="relative" ref={openRef}>
        {/* Fixed Button */}
        <div className="fixed top-4 w-80 h-12 bg-yellow-300">
        <button
            onClick={handleClick}
            className="w-full h-full text-white"
        >
            {isOpen ? "Click to close" : "Click to open"}
        </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
        <div className="fixed top-16 w-80 bg-green-300" >
            <ul>
            {studentList.map((ele, idx) => (
                <li
                className="bg-blue-300 w-full border border-gray-500 my-1"
                key={idx}
                >
                {ele}
                </li>
            ))}
            </ul>
        </div>
        )}
    </div>
    );
}