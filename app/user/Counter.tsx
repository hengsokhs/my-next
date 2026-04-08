
'use client';
import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className={"mt-12 text-center"}>
            <p className={"text-2xl font-medium"}>Client Counter (interactive)</p>
            <div className={"mt-4 flex justify-center items-center gap-4"}>
                <button onClick={() => setCount(count - 1)} className={"px-6 py-3 bg-red-500 text-while rounded-xl hover:bg-red-600"} >-</button>
                <span className={"text-4xl font-bold w-12"}>{count}</span>
                <button onClick={() => setCount(count + 1)} className={"px-6 py-3 bg-green-500 text-while rounded-xl hover:bg-green-600"} >+</button>
            </div>
            <p className={"text-sm text-gray-500 mt-6"}>This button works only because it is a Client Component</p>
        </div>
    );
}