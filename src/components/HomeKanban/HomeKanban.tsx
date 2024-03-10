"use client";
import React from "react";
import { kabarnColumns } from "@/types/Kabarntypes";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverlay,
  DragEndEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Test from "./test";
import { createPortal } from "react-dom";
export function HomeKanban() {
  const data = [
    { tittle: "work in progress", id: 1 },
    { tittle: "completed", id: 2 },
    { tittle: "pending", id: 3 },
    { tittle: "cancelled", id: 4 },
  ];
  const columnID = React.useMemo(() => data.map((column) => column.id), [data]);
  const [columns, setColumns] = React.useState<any>(data);
  // const [itemselected, setitem] = React.useState<any>()
  const [activeColum, setActiveColumn] = React.useState<kabarnColumns | null>(
    null
  );
  function onDrag(Event: DragStartEvent) {
    console.log(Event, "drag start ");
    if (Event.active.data.current?.type === "column") {
      setActiveColumn(Event.active.data.current?.column);
      return;
    }
  }

  function onDrageEnd(Event: DragEndEvent) {
    const { active, over } = Event;
    if (!over) return;
    const ActiveColumnid = active.id;
    const OverColumnid = over.id;
    if (ActiveColumnid === OverColumnid) return;
    setColumns((column: any) => {
      const ActiveColumnIndex = column.findIndex(
        (column: any) => column.id === ActiveColumnid
      );
      const OverColumnIndex = column.findIndex(
        (column: any) => column.id === OverColumnid
      );
      return arrayMove(column, ActiveColumnIndex, OverColumnIndex);
    });
  }
  return (
    <div>
      <DndContext onDragStart={onDrag} onDragEnd={onDrageEnd}>
        <div className="flex item-center gap-4 flex-wrap">
          <SortableContext items={columnID}>
            {columns.map((column: any) => {
              return <Test column={column} key={column.id} />;
            })}
          </SortableContext>
        </div>
        {createPortal(
          <DragOverlay>
            {activeColum && <Test column={activeColum} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
}

export default HomeKanban;
