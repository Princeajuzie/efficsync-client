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
    <div className="max-w-5xl">
      <DndContext onDragStart={onDrag} onDragEnd={onDrageEnd}>
        <div className="gap-4 lg:grid lg:grid-cols-2 grid  grid-cols-1">
          <SortableContext items={columnID}>
            {columns.map((column: any) => {
              return <Test column={column} key={column.id} />;
            })}
          </SortableContext>
        </div>
        {typeof window !== "undefined" && createPortal(
          <DragOverlay>
            {activeColum && <Test column={activeColum} />}
          </DragOverlay>,
          document.body as unknown as DocumentFragment
        )}
      </DndContext>
    </div>
  );
}

export default HomeKanban;