import QueueItem from "./QueueItem";

export default function QueueList({ queue , onStatusChange, onRemove }) {
    
    if (queue.length === 0) {
        return null;
    }
    return (
        <div className="space-y-2">
            {queue.map(customer => (
                <QueueItem key={customer.id}
                    customer={customer}
                    onStatusChange={onStatusChange}
                    onRemove={onRemove}
                />
           ))}
      </div>  
    );
} 