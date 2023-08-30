import CardItem from "./CardItem";

export default function ContainerCard({ status, items, isDragging, handleDragging,handleUpdateList }) {
  
  const handleDragOver = (e) => {
    e.preventDefault()
  }  
  const handleDrop = (e) => {
    e.preventDefault()
    const id = +e.dataTransfer.getData('text')
    handleUpdateList(id, status)
    handleDragging(false)
  }
  
  return (
    <div className={`border-2 w-60 h-[300px] rounded ${isDragging ? "border-dashed border-gray-400 bg-gray-300" : ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
        <p className="font-bold uppercase text-center bg-white py-2">{status} Hero</p>
        {
                items.map(item => (
                    status === item.status
                    && <CardItem
                        data={item}
                        key={item.id}
                        handleDragging={handleDragging}
                    />
                ))
          }
          
    </div>
  )
}
