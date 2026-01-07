export default function QueueItem({ customer, onStatusChange, onRemove }) {
    const { id, name, status } = customer;
    const statusStyles =
        status === "waiting"
            ? "bg-yellow-200 text-yellow-800"
            : status === "serving"
                ? "bg-blue-200 text-blue-800"
                : "bg-green-200 text-green-800";
    return (
        <div className="border rounded px-3 py-2 flex justify-between items-center">
            <span className="font-medium">
                {name}
            </span> 

            <div className="flex items-center gap-2">
              
                <span className={`text-xs px-2 py-1 rounded ${statusStyles}`}>
                    {status}
                </span>

                {status === "waiting" && (
                    <button onClick={()=> onStatusChange(id,"Serving")} className="text-sm bg-blue-500 text-white px-2 py-1 rounded">
                        Start
                    </button>
                )}

                {status === "serving" && (
                    <button onClick={()=> onStatusChange(id,"Completed")} className="text-sm bg-green-500 text-white px-2 py-1 rounded">
                        Completed
                    </button>
                )}

                {status === "completed" && (
                    <button onClick={() => (onRemove(id))}
                    className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                    >
                        Remove
                    </button>
                )}


            </div>
       </div>
    );
}