import React from 'react'
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
  } from "@dnd-kit/core";
  import { SortableContext, useSortable } from "@dnd-kit/sortable";
  import { CSS } from "@dnd-kit/utilities";
export default function Test({column} : {column: {tittle:string, id: number}}) {
    const { setNodeRef, attributes, listeners, transform, transition, isDragging } =
    useSortable({
      id: column.id,
      data: {
        type: "column",
        column,
      },
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  if(isDragging){
    return <div className='h-[500px] w-[300px] underline decoration-dotted border-2 border-red-600 decoration-red-600' ref={setNodeRef} style={style} ></div>
  }
  return (
    <div>
        <div key={column.id} className="bg-red-600 h-[500px] w-[300px]"  ref={setNodeRef} style={style} {...attributes} {...listeners}>
                  <h1>{column.tittle}</h1>
                </div>
    </div>
  )
}
