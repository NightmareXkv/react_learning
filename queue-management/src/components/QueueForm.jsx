import { useState } from "react";
export default function QueueForm({ onAdd }) {
    const [name, setName] = useState("");
    const isDisabled = name.trim().length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isDisabled) return;

        onAdd({
            id: Date.now(),
            name: name.trim(),
            status: "waiting",
        });

        setName("");
    };
    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                className="flex-1 border rounded px-3 py-2"
                placeholder="Customer name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >Add</button>
       </form> 
    );
}