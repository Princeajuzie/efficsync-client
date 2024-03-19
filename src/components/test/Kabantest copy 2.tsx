"use client";
import React, { useState, useEffect } from "react";
import Muuri from "muuri";
import { WhatsOnYourMind } from "..";
import MyRythm from "../HomeKanban/Myrythmn";
import MyActivetask from "../HomeKanban/Activetask";
export function Kabantest() {
  const [grid, setGrid] = useState<any>();

  useEffect(() => {
    const newMonrri = new Muuri(".grids", {
      dragEnabled: true,
      layoutDuration: 400,
      layoutEasing: "ease",
      // fillGaps: true,
      // horizontal: true,
      sortData: {
        id: function (item, element) {
          console.log(item);
          console.log(element.children[0].id);
          return element.children[0].id;
        },
      },
    });
    setGrid(newMonrri);

    return () => {
      newMonrri.destroy();
    };
  }, []);
  return (
    <div className="">
      <div className="demo ">
        <div className="grids muuri drag-enabled " style={{ height: 840 }}>
          <div
            className="grid-item h1 w2 red muuri-item muuri-item-shown"
            data-color="red"
            data-title="os"
        
          >
            <div
              className="grid-item-content"
          
            >
            <MyRythm />
            </div>
          </div>
          {/* <div
            className="grid-item h1 w1 green muuri-item muuri-item-shown"
            data-color="green"
            data-title="dx"
            style={{
              left: 0,
              top: 0,
              transform: "translateX(240px) translateY(0px)",
            }}
          >
            <div
              className="grid-item-content"
              style={{ opacity: 1, transform: "scale(1)" }}
            >
              <div className="grid-card">
                <div className="grid-card-title">dx</div>
                <div
                  className="grid-card-handle"
                  style={{
                    touchAction: "none",
                    userSelect: "none",

                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="grid-item h1 w1 green muuri-item muuri-item-shown"
            data-color="green"
            data-title="jr"
      
          >
            <div
              className="grid-item-content"
              style={{ opacity: 1, transform: "scale(1)" }}
            >
              <div className="grid-card">
                <div className="grid-card-title">jr</div>
                <div
                  className="grid-card-handle"
                  style={{
                    touchAction: "none",
                    userSelect: "none",

                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  }}
                />
              </div>
            </div>
          </div> */}
          <div
            className="grid-item h1 w2 blue muuri-item muuri-item-shown"
            data-color="blue"
            data-title="ae"
        
          >
            <MyActivetask />
   
          </div>
          <div
            className="grid-item h1 w2 blue muuri-item muuri-item-shown"
            data-color="blue"
            data-title="qc"
            style={{
              left: 0,
              top: 0,
              transform: "translateX(0px) translateY(120px)",
            }}
          >
            <div
              className="grid-item-content"
              style={{ opacity: 1, transform: "scale(1)" }}
            >
              <div className="grid-card">
                <div className="grid-card-title">qc</div>
                <div
                  className="grid-card-handle"
                  style={{
                    touchAction: "none",
                    userSelect: "none",

                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kabantest;
