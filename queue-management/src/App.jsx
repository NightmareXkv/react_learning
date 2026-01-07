import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueList from "./components/QueueList";
import EmptyState from "./components/EmptyState";
export default function App() {
  const [queue, setQueue] = useState([]);
  const addToQueue = (customer) => {
    setQueue((prevQueue) => [...prevQueue, customer]);
  };
  
  const updateStatus = (id, newStatus) => {
    setQueue(prev => prev.map(customer => customer.id === id
      ? { ...customer, status: newStatus } : { customer }
    ));
  };

  const removeFromQueue = (id) => {
    setQueue(prev => prev.filter(customer => customer.id !== id));
  }


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-center mb-2">
         Queue Management System
        </h1>
        <p className="text-center text-gray-500 mb-6">Manage Customers efficiently</p>
        <QueueForm onAdd={addToQueue} />
        {queue.length === 0 ? (<EmptyState />) :
          (<QueueList
            queue={queue}
            onStatusChange={updateStatus}
            onRemove={removeFromQueue}
          />)}
      </div>
    </div>
  );
}