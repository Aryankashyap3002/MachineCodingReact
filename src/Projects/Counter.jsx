import { useState } from "react"

export const Counter = () => {

    const [presentList, setPresentList] = useState([0]);
    const [pos, CurrPos] = useState(0);

    const currValue = presentList[pos];

    function addNewValueToList (newValue) {
        const newList = presentList.slice(0, pos + 1);
        setPresentList([...newList, newValue]);
        CurrPos(pos + 1);
    }

    

    function increament () {
        addNewValueToList(currValue + 1);
    }

    function decreament () {
        if(currValue == 0) {
            return;
        }
        addNewValueToList(currValue - 1);
        
    }

    function undoFuction () {
        if(presentList.length == 1) {
            return;
        }

        CurrPos(pos -1);

    }

    function redoFunction () {
        if(presentList.length == 2 && pos == presentList.length-1) {
            return;
        }

        CurrPos(pos + 1);

    }

    // useEffect(() => {
    //     console.log(presentList);
    // })

    

    return < >
        <h1>Counter app</h1>
        <div>
            <div id='count' className='m-15 text-6xl'>{currValue}</div>
            <div className='flex justify-center gap-8 mb-5 mt-25' id='plus-minus'>
                <div id='plus' className="text-5xl" onClick={increament}> + </div>
                <div id='minus' className="text-5xl" onClick={decreament}> - </div>
            </div>
            <div className='flex justify-center gap-8' id='plus-minus'>
                <div id='undo' className="text-xl" onClick={undoFuction}> redo </div>
                <div id='redo' className="text-xl" onClick={redoFunction}> undo </div>
            </div>
        </div>
        
    </>
}