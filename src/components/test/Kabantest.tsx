"use client";
import React, { ReactNode } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TaskProps {
  id: string;
  title: string;
  style: React.CSSProperties;
  children?: React.ReactNode; // Accepts any JSX element as children
}

function Task({ id, title, style, children }: TaskProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,

    isDragging,
  } = useSortable({ id });
  const styles = {
    transition,
    transform: CSS.Transform.toString(transform),
   
    cursor: "grab",
    padding: "8px",
    margin: "8px",
    ...style,
  };

  const style2  = {
    transition,
    transform: CSS.Transform.toString(transform),
  }
  if (isDragging) {
    return (
      <div
        className="h-[200px]   w-[auto] underline border-dotted border-2 rounded-2xl border-gray-150 bg-[#F8F7FD] "
        ref={setNodeRef}
        style={style2}
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={styles}
      {...attributes}
      {...listeners}
    >
 
        
      <div>{title}</div>
      <div>{children}</div>

    </div>
  );
}

function Kabantest() {
  return (
    <DndContext>
      <div className="App">
        <SortableContext items={["task1", "task2", "task3"]}>
          <div className="board">
            <div className="column">
              <h2>Todo</h2>
              <Task
                id="task1"
                title="Task 1"
                style={{ backgroundColor: "lightblue", color: "black", borderRadius: "50px" }}
              >
                {/* JSX children here */}
                <div>This is a child element for Task 1</div>
              </Task>
              <Task
                id="task2"
                title="Task 2"
                style={{ backgroundColor: "lightgreen", color: "black" }}
              >
                {/* JSX children here */}
                <div>This is a child element for Task 2</div>
              </Task>
              <Task
                id="task3"
                title="Task 3"
                style={{ backgroundColor: "lightgrey", color: "black" }}
              >
                {/* JSX children here */}
                <div>This is a child element for Task 3</div>
              </Task>
            </div>
          </div>
        </SortableContext>
      </div>
    </DndContext>
  );
}

export default Kabantest;
