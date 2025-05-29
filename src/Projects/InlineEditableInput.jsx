import { Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function InlineEditableInput() {
  const [lists, setList] = useState([
    { id: 1, value: "Hello" },
    { id: 2, value: "World" },
  ]);
  const [currentId, setCurrentId] = useState(null);
  const [currentValue, setCurrentValue] = useState("");
  const inputRef = useRef(null);

  function handleClick(value, id) {
    // Save changes for the current item before switching to a new one
    if (currentId !== null && currentId !== id) {
      saveChanges();
    }
    setCurrentId(id);
    setCurrentValue(value);
  }

  function handleBlur() {
    if (currentId !== null) {
      saveChanges();
      // Reset state to exit edit mode
      setCurrentId(null);
      setCurrentValue("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      saveChanges();
      // Reset state to exit edit mode
      setCurrentId(null);
      setCurrentValue("");
    } else if (event.key === "Escape") {
      // Reset state without saving
      setCurrentId(null);
      setCurrentValue("");
    }
  }

  function saveChanges() {
    if (currentId !== null && currentValue.trim() !== "") {
      setList(
        lists.map((item) =>
          item.id === currentId ? { ...item, value: currentValue } : item
        )
      );
    }
  }

  useEffect(() => {
    if (currentId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inline Editor</h1>
      <div className="flex flex-col gap-2">
        {lists.map((ele) => (
          ele.id === currentId ? (
            <input
              key={ele.id}
              className="w-full bg-amber-50 p-2 border border-gray-300 rounded"
              value={currentValue}
              ref={inputRef}
              onChange={(event) => setCurrentValue(event.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <div
              key={ele.id}
              className="bg-blue-200 border border-black p-2 m-1 flex justify-between items-center rounded cursor-pointer"
              onClick={() => handleClick(ele.value, ele.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  handleClick(ele.value, ele.id);
                }
              }}
            >
              <span>{ele.value}</span>
              <Pencil aria-label="Edit item" className="w-5 h-5" />
            </div>
          )
        ))}
      </div>
    </div>
  );
}