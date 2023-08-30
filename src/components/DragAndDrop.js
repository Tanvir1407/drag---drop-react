import ContainerCard from "./ContainerCard"
import {data} from '../Assets/data'
import { useState } from "react";

export default function DragAndDrop() {
    const typesHero = ['good', 'normal', 'bad'];

    const [isDragging, setIsDragging] = useState(false)
    const [listItems, setListItems] = useState(data)
    
  
    const handleDragging = (dragging) => setIsDragging(dragging)
    const handleUpdateList = (id,status) => {

       let card = listItems.find(item => item.id === id)

       if (card && card.status !== status) {

           card.status = status

           setListItems( prev => ([
                card,
                ...prev.filter(item => item.id !== id)
            ]))
       }
   }

  return (
    <div className="flex justify-between">
            {
              typesHero.map(container => (
                  <ContainerCard
                      status={container}
                      key={container}
                      items={listItems}

                      isDragging={isDragging}
                      handleDragging={handleDragging}
                      handleUpdateList={handleUpdateList}
                  >
                    </ContainerCard>
                ))
            }
    </div>
  )
}



