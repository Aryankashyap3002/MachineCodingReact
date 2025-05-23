import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function DropDown() {
    const [open, setOpen] = useState(false);

    const listOptions = [{ name: 'Aryan' }, { name: 'Krityan' }];

    const dropdownRef = useRef(null);

    useEffect(() => {
        if(!open) return;

        const handleDropdown = (event) => {
            console.log(event.target, dropdownRef.current);

            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleDropdown);

        return () => {
            document.removeEventListener('mousedown', handleDropdown);
        }
    }, [open])



    return (
        <div className="relative mt-6 mr-20 w-96" ref={dropdownRef}>
            <Button
                className="bg-green-300 w-full flex justify-center items-center gap-2 py-4 px-6"
                onClick={() => setOpen(!open)}
            >
                Select an option
                {open ? (
                    <ChevronDown />
                ) : (
                    <ChevronDown style={{ transform: 'rotate(270deg)' }} />
                )}
            </Button>

            {open ? (
                <ul className="absolute top-full left-0 w-full bg-green-300 border border-green-600 shadow-md z-10">
                    {listOptions.map((obj, index) => (
                        <li
                            key={index}
                            className="p-2 bg-green-500 text-black hover:bg-green-700 cursor-pointer"
                        >
                            ({Object.keys(obj)} : {obj.name})
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
