
export default function CardItem({ data, handleDragging }) {
    
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }
    const handleDragEnd = () => handleDragging(false)


  return (
      <div className="m-3 bg-green-600 p-2 rounded"
          draggable
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
      >
        <p className="text-white">{data.content}</p>
    </div>
  )
}
