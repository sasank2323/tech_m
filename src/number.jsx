import { useState } from "react"    
import { useEffect } from "react"

export default function Number()
{
    const [number, setNumber] = useState(0);
    let inc=()=>
    {
        setNumber(number+1);
    }
    return(
        <div>
            <h1>Number: {number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <button onClick={() => setNumber(number - 1)}>Decrement</button>
            <button onClick={() => setNumber(0)}>Reset</button>
            <button onClick={inc}>this is also increment</button>
        </div>
    );
}