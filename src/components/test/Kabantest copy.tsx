"use client";
import React, { useState, useEffect } from "react";
import Muuri from "muuri";
export function Kabantest1() {
  const [grid, setGrid] = useState<any>();
  useEffect(() => {
    const newMonrri = new Muuri(".grids", {
      layoutDuration: 400,
      layoutEasing: "ease",
      // fillGaps: true,
      // horizontal: true,
      sortData: {
        id: function (item, element) {
          return element.children[0].id;
        },
      },
      dragEnabled: true,
      dragStartPredicate: (item, e) => {
        // Disable default drag start predicate
        return e.target.className.toLowerCase() === 'h1';
      },
      dragSort: true, // Enable sorting during dragging
      dragRelease: {
        duration: 400,
        easing: "ease",
      },
      dragPlaceholder: {
        enabled: true,
        createElement: (item: any) => {
          const placeholder = document.createElement("div");
          placeholder.style.width = `${item.getElement().clientWidth}px`;
          placeholder.style.height = `${item.getElement().clientHeight}px`;
          placeholder.style.backgroundColor = "#F5F6F1";
          placeholder.style.border = "1px dashed white";
          return placeholder;
        },
      },
      itemDraggingClass: ".h1", // Apply this class when dragging starts
    });
    setGrid(newMonrri);

    return () => {
      newMonrri.destroy();
    };
  }, []);

  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          grid.sort("id");
        }}
        style={{
          backgroundColor: "yellow",
          width: 200,
          height: 50,
          fontSize: 30,
        }}
      >
        Ascending
      </button>
      <button
        type="submit"
        onClick={() => {
          grid.sort("id:desc");
        }}
        style={{
          backgroundColor: "green",
          width: 200,
          height: 50,
          fontSize: 30,
        }}
      >
        Descending
      </button>
      <div className="grids flex " >
        <div className="item">
          <div className="item-content" id="A">
            <div
              style={{
                width: 400,
                height: 400,
                backgroundColor: "violet",
                fontSize: 50,
                color: "white",
              }}
            >
              <h1 className="h1" >
                {" "}
                A
              </h1>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-content" id="B">
            <div
              style={{
                width: 400,
                height: 400,
                backgroundColor: "gold",
                fontSize: 50,
                color: "white",
              }}
            >
              <h1 className="h1">B</h1>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-content" id="C">
            <div
              style={{
                width: 400,
                height: 400,
                backgroundColor: "orange",
                fontSize: 50,
                color: "white",
              }}
            >
              <h1 className="h1">C</h1>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-content" id="D">
            <div
              style={{
                width: 400,
                height: 400,
                backgroundColor: "red",
                fontSize: 50,
                color: "white",
              }}
            >
              <h1 className="h1"> D</h1>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-content" id="E">
            <div
              style={{
                width: 400,
                height: 400,
                backgroundColor: "brown",
                fontSize: 50,
                color: "white",
              }}
            >
              E
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-content" id="F">
            <div
              style={{
                width: 400,
                height: 400,
                backgroundColor: "pink",
                fontSize: 50,
                color: "white",
              }}
            >
              <h1 className="h1"> F</h1>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-content" id="G">
            <div
              style={{
                width: 400,
                height: 400,
                backgroundColor: "blue",
                fontSize: 50,
                color: "white",
              }}
            >
              <h1> G</h1>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-content" id="H">
            <div
              style={{
                width: 400,
                height: 400,
                backgroundColor: "green",
                fontSize: 50,
                color: "white",
              }}
            >
              <h1>H</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kabantest1;
