import React from "react";
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
export default function Test({
  column,
}: {
  column: { tittle: string; id: number };
}) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
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
  if (isDragging) {
    return (
      <div
        className="h-auto w-auto underline border-dotted border-2 rounded-2xl border-gray-150 bg-[#F8F7FD] decoration-red-600"
        ref={setNodeRef}
        style={style}
      ></div>
    );
  }
  return (
    <div>
      <div
        key={column.id}
        className="   w-auto"
      
      >
        {/* <h1>{column.tittle}</h1> */}
        <div
          className="dashboards-item-content"
          style={{ opacity: 1, transform: "scale(1)" }}
        >
          {/**/}
          <div className="flex flex-col border border-mist bg-white shadow-sm rounded-2xl">
            <div className="flex w-full items-center px-4 h-12 pb-1">
              <span>
                <button className="w-full flex items-center" type="button">
                  <span className="grow flex items-center gap-1 text-ay-h4 font-bold text-dark">
                    My Active Tasks{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-kimberly"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </span>
              <div className="grow" />
              <button className="c-circle-button flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg px-3 outline-none transition-colors md:h-8 md:px-2 border border-transparent text-kimberly sm:hover:bg-mist sm:hover:text-dark text-kimberly-light hover:!text-kimberly">
                <svg
                  viewBox="0 0 16 16"
                  width={16}
                  height={16}
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4"
                >
                  <path
                    d="M8 3V13"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 8H13"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="c-circle-button flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg px-3 outline-none transition-colors md:h-8 md:px-2 border border-transparent text-kimberly sm:hover:bg-mist sm:hover:text-dark text-kimberly-light hover:!text-kimberly">
                <a
                  href="/in/tasks/My%20Tasks"
                  className="group flex items-center space-x-2"
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4"
                  >
                    <path
                      d="M13.5 2.49866L2.5 13.4987"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5 6.99854V2.49854H9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 8.99854V13.4985H7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </button>
              <button className="pl-1 dashboards-grid-drag text-kimberly-light transition-opacity duration-75 hover:text-kimberly cursor-grabbing"   ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 1.25C5.14834 1.25 5.29334 1.29399 5.41668 1.3764C5.54001 1.45881 5.63614 1.57594 5.69291 1.71299C5.74968 1.85003 5.76453 2.00083 5.73559 2.14632C5.70665 2.2918 5.63522 2.42544 5.53033 2.53033C5.42544 2.63522 5.2918 2.70665 5.14632 2.73559C5.00083 2.76453 4.85003 2.74968 4.71299 2.69291C4.57594 2.63614 4.45881 2.54001 4.3764 2.41668C4.29399 2.29334 4.25 2.14834 4.25 2C4.25 1.80109 4.32902 1.61032 4.46967 1.46967C4.61032 1.32902 4.80109 1.25 5 1.25ZM11 1.25C11.1483 1.25 11.2933 1.29399 11.4167 1.3764C11.54 1.45881 11.6361 1.57594 11.6929 1.71299C11.7497 1.85003 11.7645 2.00083 11.7356 2.14632C11.7066 2.2918 11.6352 2.42544 11.5303 2.53033C11.4254 2.63522 11.2918 2.70665 11.1463 2.73559C11.0008 2.76453 10.85 2.74968 10.713 2.69291C10.5759 2.63614 10.4588 2.54001 10.3764 2.41668C10.294 2.29334 10.25 2.14834 10.25 2C10.25 1.80109 10.329 1.61032 10.4697 1.46967C10.6103 1.32902 10.8011 1.25 11 1.25ZM5.41668 7.3764C5.29334 7.29399 5.14834 7.25 5 7.25C4.80109 7.25 4.61032 7.32902 4.46967 7.46967C4.32902 7.61032 4.25 7.80109 4.25 8C4.25 8.14834 4.29399 8.29334 4.3764 8.41668C4.45881 8.54001 4.57594 8.63614 4.71299 8.69291C4.85003 8.74967 5.00083 8.76453 5.14632 8.73559C5.2918 8.70665 5.42544 8.63522 5.53033 8.53033C5.63522 8.42544 5.70665 8.2918 5.73559 8.14632C5.76453 8.00083 5.74968 7.85003 5.69291 7.71299C5.63614 7.57594 5.54001 7.45881 5.41668 7.3764ZM5 13.25C5.14834 13.25 5.29334 13.294 5.41668 13.3764C5.54001 13.4588 5.63614 13.5759 5.69291 13.713C5.74968 13.85 5.76453 14.0008 5.73559 14.1463C5.70665 14.2918 5.63522 14.4254 5.53033 14.5303C5.42544 14.6352 5.2918 14.7066 5.14632 14.7356C5.00083 14.7645 4.85003 14.7497 4.71299 14.6929C4.57594 14.6361 4.45881 14.54 4.3764 14.4167C4.29399 14.2933 4.25 14.1483 4.25 14C4.25 13.8011 4.32902 13.6103 4.46967 13.4697C4.61032 13.329 4.80109 13.25 5 13.25ZM11.4167 7.3764C11.2933 7.29399 11.1483 7.25 11 7.25C10.8011 7.25 10.6103 7.32902 10.4697 7.46967C10.329 7.61032 10.25 7.80109 10.25 8C10.25 8.14834 10.294 8.29334 10.3764 8.41668C10.4588 8.54001 10.5759 8.63614 10.713 8.69291C10.85 8.74967 11.0008 8.76453 11.1463 8.73559C11.2918 8.70665 11.4254 8.63522 11.5303 8.53033C11.6352 8.42544 11.7066 8.2918 11.7356 8.14632C11.7645 8.00083 11.7497 7.85003 11.6929 7.71299C11.6361 7.57594 11.54 7.45881 11.4167 7.3764ZM11 13.25C11.1483 13.25 11.2933 13.294 11.4167 13.3764C11.54 13.4588 11.6361 13.5759 11.6929 13.713C11.7497 13.85 11.7645 14.0008 11.7356 14.1463C11.7066 14.2918 11.6352 14.4254 11.5303 14.5303C11.4254 14.6352 11.2918 14.7066 11.1463 14.7356C11.0008 14.7645 10.85 14.7497 10.713 14.6929C10.5759 14.6361 10.4588 14.54 10.3764 14.4167C10.294 14.2933 10.25 14.1483 10.25 14C10.25 13.8011 10.329 13.6103 10.4697 13.4697C10.6103 13.329 10.8011 13.25 11 13.25Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.41668 1.3764L5.83336 0.752796L5.83336 0.752796L5.41668 1.3764ZM5.69291 1.71299L5 2L5.69291 1.71299ZM5.73559 2.14632L5 2V2L5.73559 2.14632ZM4.71299 2.69291L4.42597 3.38582H4.42597L4.71299 2.69291ZM4.3764 2.41668L5 2L5 2L4.3764 2.41668ZM4.46967 1.46967L3.93934 0.93934L3.93934 0.93934L4.46967 1.46967ZM11.6929 1.71299L11 2V2L11.6929 1.71299ZM11.7356 2.14632L11 2V2L11.7356 2.14632ZM11.5303 2.53033L11 2L11 2L11.5303 2.53033ZM10.3764 2.41668L11 2L11 2L10.3764 2.41668ZM10.4697 1.46967L9.93934 0.93934V0.93934L10.4697 1.46967ZM5.41668 7.3764L5.83336 6.7528L5.83335 6.75279L5.41668 7.3764ZM4.46967 7.46967L3.93934 6.93934H3.93934L4.46967 7.46967ZM4.3764 8.41668L5 8L5 8L4.3764 8.41668ZM4.71299 8.69291L4.42598 9.38582H4.42598L4.71299 8.69291ZM5.73559 8.14632L5 8L5 8L5.73559 8.14632ZM5.41668 13.3764L5.83335 12.7528H5.83335L5.41668 13.3764ZM5.69291 13.713L6.38582 13.426L6.38582 13.426L5.69291 13.713ZM5.53033 14.5303L5 14L5 14L5.53033 14.5303ZM5.14632 14.7356L5.29263 15.4712L5.29264 15.4712L5.14632 14.7356ZM4.71299 14.6929L4.42598 15.3858H4.42598L4.71299 14.6929ZM4.3764 14.4167L5 14H5L4.3764 14.4167ZM4.46967 13.4697L5 14L5 14L4.46967 13.4697ZM11.4167 7.3764L11.8334 6.7528L11.8334 6.75279L11.4167 7.3764ZM10.3764 8.41668L11 8L11 8L10.3764 8.41668ZM11.5303 8.53033L11 8L11 8L11.5303 8.53033ZM11.7356 8.14632L11 8V8L11.7356 8.14632ZM11.6929 13.713L12.3858 13.426L12.3858 13.426L11.6929 13.713ZM11.5303 14.5303L11 14L11 14L11.5303 14.5303ZM11.1463 14.7356L11.2926 15.4712L11.2926 15.4712L11.1463 14.7356ZM10.3764 14.4167L11 14L11 14L10.3764 14.4167ZM10.4697 13.4697L11 14L11 14L10.4697 13.4697ZM5.83336 0.752796C5.58668 0.587974 5.29667 0.5 5 0.5V2L5 2L5.83336 0.752796ZM6.38582 1.42597C6.27229 1.15189 6.08003 0.917618 5.83336 0.752796L5 2V2L6.38582 1.42597ZM6.47118 2.29264C6.52906 2.00166 6.49935 1.70006 6.38582 1.42597L5 2L5 2L6.47118 2.29264ZM6.06066 3.06066C6.27044 2.85088 6.4133 2.58361 6.47118 2.29264L5 2L5 2L6.06066 3.06066ZM5.29264 3.47118C5.58361 3.4133 5.85088 3.27044 6.06066 3.06066L5 2L5 2L5.29264 3.47118ZM4.42597 3.38582C4.70006 3.49935 5.00166 3.52906 5.29264 3.47118L5 2L5 2L4.42597 3.38582ZM3.7528 2.83336C3.91762 3.08003 4.15189 3.27229 4.42597 3.38582L5 2L5 2L3.7528 2.83336ZM3.5 2C3.5 2.29667 3.58797 2.58668 3.7528 2.83336L5 2L5 2H3.5ZM3.93934 0.93934C3.65804 1.22064 3.5 1.60217 3.5 2H5H5L3.93934 0.93934ZM5 0.5C4.60218 0.5 4.22064 0.658035 3.93934 0.93934L5 2L5 2V0.5ZM11.8334 0.752796C11.5867 0.587974 11.2967 0.5 11 0.5V2L11 2L11.8334 0.752796ZM12.3858 1.42598C12.2723 1.15189 12.08 0.917618 11.8334 0.752796L11 2V2L12.3858 1.42598ZM12.4712 2.29263C12.5291 2.00166 12.4994 1.70006 12.3858 1.42598L11 2V2L12.4712 2.29263ZM12.0607 3.06066C12.2704 2.85088 12.4133 2.58361 12.4712 2.29263L11 2V2L12.0607 3.06066ZM11.2926 3.47118C11.5836 3.4133 11.8509 3.27044 12.0607 3.06066L11 2L11 2L11.2926 3.47118ZM10.426 3.38582C10.7001 3.49935 11.0017 3.52906 11.2926 3.47118L11 2V2L10.426 3.38582ZM9.7528 2.83335C9.91762 3.08003 10.1519 3.27229 10.426 3.38582L11 2L11 2L9.7528 2.83335ZM9.5 2C9.5 2.29667 9.58797 2.58668 9.7528 2.83336L11 2V2H9.5ZM9.93934 0.93934C9.65804 1.22064 9.5 1.60217 9.5 2H11V2L9.93934 0.93934ZM11 0.5C10.6022 0.5 10.2206 0.658035 9.93934 0.93934L11 2V2V0.5ZM5 8L5 8L5.83335 6.75279C5.58668 6.58797 5.29667 6.5 5 6.5V8ZM5 8V6.5C4.60218 6.5 4.22064 6.65804 3.93934 6.93934L5 8ZM5 8L5 8L3.93934 6.93934C3.65804 7.22064 3.5 7.60217 3.5 8H5ZM5 8H5H3.5C3.5 8.29667 3.58797 8.58668 3.7528 8.83336L5 8ZM5 8L5 8L3.75279 8.83335C3.91762 9.08003 4.15189 9.27229 4.42598 9.38582L5 8ZM5 8H5L4.42598 9.38582C4.70006 9.49935 5.00166 9.52906 5.29263 9.47118L5 8ZM5 8H5L5.29263 9.47118C5.58361 9.4133 5.85088 9.27044 6.06066 9.06066L5 8ZM5 8L5 8L6.06066 9.06066C6.27044 8.85088 6.4133 8.58361 6.47118 8.29263L5 8ZM5 8V8L6.47118 8.29264C6.52906 8.00166 6.49935 7.70006 6.38582 7.42597L5 8ZM5 8L5 8L6.38582 7.42597C6.27229 7.15189 6.08003 6.91762 5.83336 6.7528L5 8ZM5.83335 12.7528C5.58668 12.588 5.29667 12.5 5 12.5V14L5 14L5.83335 12.7528ZM6.38582 13.426C6.27229 13.1519 6.08003 12.9176 5.83335 12.7528L5 14L5 14L6.38582 13.426ZM6.47118 14.2926C6.52906 14.0017 6.49935 13.7001 6.38582 13.426L5 14L5 14L6.47118 14.2926ZM6.06066 15.0607C6.27044 14.8509 6.4133 14.5836 6.47118 14.2926L5 14L5 14L6.06066 15.0607ZM5.29264 15.4712C5.58361 15.4133 5.85088 15.2704 6.06066 15.0607L5 14L5 14L5.29264 15.4712ZM4.42598 15.3858C4.70006 15.4994 5.00166 15.5291 5.29263 15.4712L5 14H5L4.42598 15.3858ZM3.7528 14.8334C3.91762 15.08 4.15189 15.2723 4.42598 15.3858L5 14L5 14L3.7528 14.8334ZM3.5 14C3.5 14.2967 3.58797 14.5867 3.7528 14.8334L5 14H5H3.5ZM3.93934 12.9393C3.65804 13.2206 3.5 13.6022 3.5 14H5L5 14L3.93934 12.9393ZM5 12.5C4.60217 12.5 4.22064 12.658 3.93934 12.9393L5 14H5V12.5ZM11 8L11 8L11.8334 6.75279C11.5867 6.58797 11.2967 6.5 11 6.5V8ZM11 8V6.5C10.6022 6.5 10.2206 6.65804 9.93934 6.93934L11 8ZM11 8V8L9.93934 6.93934C9.65804 7.22064 9.5 7.60217 9.5 8H11ZM11 8L11 8H9.5C9.5 8.29667 9.58797 8.58668 9.7528 8.83336L11 8ZM11 8L11 8L9.75279 8.83335C9.91762 9.08003 10.1519 9.27229 10.426 9.38582L11 8ZM11 8H11L10.426 9.38582C10.7001 9.49935 11.0017 9.52905 11.2926 9.47118L11 8ZM11 8L11 8L11.2926 9.47118C11.5836 9.4133 11.8509 9.27044 12.0607 9.06066L11 8ZM11 8V8L12.0607 9.06066C12.2704 8.85088 12.4133 8.58361 12.4712 8.29263L11 8ZM11 8V8L12.4712 8.29263C12.5291 8.00166 12.4994 7.70006 12.3858 7.42598L11 8ZM11 8L11 8L12.3858 7.42598C12.2723 7.15189 12.08 6.91762 11.8334 6.7528L11 8ZM11.8334 12.7528C11.5867 12.588 11.2967 12.5 11 12.5V14L11 14L11.8334 12.7528ZM12.3858 13.426C12.2723 13.1519 12.08 12.9176 11.8334 12.7528L11 14L11 14L12.3858 13.426ZM12.4712 14.2926C12.5291 14.0017 12.4993 13.7001 12.3858 13.426L11 14L11 14L12.4712 14.2926ZM12.0607 15.0607C12.2704 14.8509 12.4133 14.5836 12.4712 14.2926L11 14L11 14L12.0607 15.0607ZM11.2926 15.4712C11.5836 15.4133 11.8509 15.2704 12.0607 15.0607L11 14L11 14L11.2926 15.4712ZM10.426 15.3858C10.7001 15.4994 11.0017 15.5291 11.2926 15.4712L11 14H11L10.426 15.3858ZM9.7528 14.8334C9.91762 15.08 10.1519 15.2723 10.426 15.3858L11 14L11 14L9.7528 14.8334ZM9.5 14C9.5 14.2967 9.58797 14.5867 9.7528 14.8334L11 14L11 14H9.5ZM9.93934 12.9393C9.65804 13.2206 9.5 13.6022 9.5 14H11L11 14L9.93934 12.9393ZM11 12.5C10.6022 12.5 10.2206 12.658 9.93934 12.9393L11 14L11 14V12.5Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-2">
              <div className="flex flex-col">
                <div className="dashboards-active-tasks">{/**/}</div>
                <div className="dashboards-active-tasks">{/**/}</div>
                <div className="dashboards-active-tasks">
                  {/**/}
                  <div
                    className="right-sidebar-list-item group flex h-[36px] w-full cursor-pointer items-center px-4 text-left text-ay-p2 font-normal text-dark transition-colors hover:bg-steam"
                    disable-actions=""
                    profile-view=""
                    data-id="02H9rqQeVaUdYPHqtijR"
                  >
                    <div className="gap-x-3 gap-y-1 c-simple-widget-attributes flex w-full min-w-0 overflow-hidden w-full">
                      <div className="mr-auto flex min-w-0 items-center gap-2">
                        <button
                          className="hover:scale-125 cursor-pointer c-widget-status-button flex items-center justify-center group-3 inline h-icon w-icon shrink-0 rounded-full border-2 transition-all shrink-0 overflow-visible"
                          style={{
                            border: "1.5px solid rgb(0, 153, 255)",
                            backgroundColor: "rgb(207, 228, 255)",
                            color: "rgb(0, 153, 255)",
                          }}
                        >
                          <svg
                            width={16}
                            height={16}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="invisible group-3-hover:visible"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {/**/}
                        </button>
                        <span className="min-w-0 truncate font-medium leading-6">
                          Learn How to Use Workflows and Projects for Organizing
                          Work
                        </span>
                        <button className="rounded-md border border-mist bg-white p-0.5 opacity-0 transition group-hover:opacity-100 hover:border-dust hover:bg-steam">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-icon shrink-0 text-kimberly"
                          >
                            <path
                              d="M5.80767 12.2579L3.33301 12.6119L3.68634 10.1366L10.0503 3.77259C10.3316 3.49129 10.7132 3.33325 11.111 3.33325C11.5088 3.33325 11.8904 3.49129 12.1717 3.77259C12.453 4.0539 12.611 4.43543 12.611 4.83326C12.611 5.23109 12.453 5.61262 12.1717 5.89393L5.80767 12.2579Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="gap-x-3 gap-y-1 flex">
                        {/**/}
                        <div
                          data-v-6bf1e511=""
                          className="items-center justify-center flex compact group-hover:flex c-simple-widget-attribute-field property"
                          data-e2e-type="Priority"
                          data-e2e="c-simple-widget-attribute-field"
                          data-draggable="true"
                        >
                          {/**/}
                          <div
                            data-v-6bf1e511=""
                            className="font-medium text-dark overflow-hidden min-h-[32px] group-2 flex w-full cursor-pointer items-center text-ay-p1 text-kimberly md:text-sm"
                            data-e2e="schema-property-value-priority"
                          >
                            <span
                              data-v-6bf1e511=""
                              className="c-priority-property-type-value"
                            >
                              <button
                                className="w-full flex items-center"
                                type="button"
                              >
                                <div className="flex gap-2 whitespace-nowrap hover:cursor-pointer">
                                  <svg
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-icon"
                                    style={{ color: "rgb(242, 65, 101)" }}
                                  >
                                    <path
                                      d="M1.5 1.5V16.5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M1.5 2.5H16C16.0963 2.5001 16.1906 2.52803 16.2714 2.58041C16.3522 2.6328 16.4162 2.70742 16.4556 2.7953C16.4951 2.88319 16.5083 2.98059 16.4937 3.0758C16.4791 3.17101 16.4373 3.25998 16.3733 3.332L13.7033 6.33333C13.5405 6.51642 13.4505 6.75295 13.4505 6.998C13.4505 7.24305 13.5405 7.47958 13.7033 7.66267L16.37 10.666C16.434 10.738 16.4758 10.827 16.4904 10.9222C16.505 11.0174 16.4917 11.1148 16.4523 11.2027C16.4129 11.2906 16.3489 11.3652 16.2681 11.4176C16.1872 11.47 16.093 11.4979 15.9967 11.498H1.5"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.5 2.5H16C16.0963 2.5001 16.1906 2.52803 16.2714 2.58041C16.3522 2.6328 16.4162 2.70742 16.4556 2.7953C16.4951 2.88319 16.5083 2.98059 16.4937 3.0758C16.4791 3.17101 16.4373 3.25998 16.3733 3.332L13.7033 6.33333C13.5405 6.51642 13.4505 6.75295 13.4505 6.998C13.4505 7.24305 13.5405 7.47958 13.7033 7.66267L16.37 10.666C16.434 10.738 16.4758 10.827 16.4904 10.9222C16.505 11.0174 16.4917 11.1148 16.4523 11.2027C16.4129 11.2906 16.3489 11.3652 16.2681 11.4176C16.1872 11.47 16.093 11.4979 15.9967 11.498H1.5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  {/**/}
                                </div>
                              </button>
                            </span>
                          </div>
                        </div>
                        {/**/}
                        {/**/}
                        {/**/}
                      </div>
                      {/**/}
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>
                  <div
                    className="right-sidebar-list-item group flex h-[36px] w-full cursor-pointer items-center px-4 text-left text-ay-p2 font-normal text-dark transition-colors hover:bg-steam"
                    disable-actions=""
                    profile-view=""
                    data-id="NaemmwXsAfTbwKxSvzS7"
                  >
                    <div className="gap-x-3 gap-y-1 c-simple-widget-attributes flex w-full min-w-0 overflow-hidden w-full">
                      <div className="mr-auto flex min-w-0 items-center gap-2">
                        <button
                          className="hover:scale-125 cursor-pointer c-widget-status-button flex items-center justify-center group-3 inline h-icon w-icon shrink-0 rounded-full border-2 transition-all shrink-0 overflow-visible"
                          style={{
                            border: "1.5px solid rgb(0, 153, 255)",
                            backgroundColor: "rgb(207, 228, 255)",
                            color: "rgb(0, 153, 255)",
                          }}
                        >
                          <svg
                            width={16}
                            height={16}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="invisible group-3-hover:visible"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {/**/}
                        </button>
                        <span className="min-w-0 truncate font-medium leading-6">
                          Invite People to Ayanza Account
                        </span>
                        <button className="rounded-md border border-mist bg-white p-0.5 opacity-0 transition group-hover:opacity-100 hover:border-dust hover:bg-steam">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-icon shrink-0 text-kimberly"
                          >
                            <path
                              d="M5.80767 12.2579L3.33301 12.6119L3.68634 10.1366L10.0503 3.77259C10.3316 3.49129 10.7132 3.33325 11.111 3.33325C11.5088 3.33325 11.8904 3.49129 12.1717 3.77259C12.453 4.0539 12.611 4.43543 12.611 4.83326C12.611 5.23109 12.453 5.61262 12.1717 5.89393L5.80767 12.2579Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="gap-x-3 gap-y-1 flex">
                        {/**/}
                        <div
                          data-v-6bf1e511=""
                          className="items-center justify-center flex compact group-hover:flex c-simple-widget-attribute-field property"
                          data-e2e-type="Priority"
                          data-e2e="c-simple-widget-attribute-field"
                          data-draggable="true"
                        >
                          {/**/}
                          <div
                            data-v-6bf1e511=""
                            className="font-medium text-dark overflow-hidden min-h-[32px] group-2 flex w-full cursor-pointer items-center text-ay-p1 text-kimberly md:text-sm"
                            data-e2e="schema-property-value-priority"
                          >
                            <span
                              data-v-6bf1e511=""
                              className="c-priority-property-type-value"
                            >
                              <button
                                className="w-full flex items-center"
                                type="button"
                              >
                                <div className="flex gap-2 whitespace-nowrap hover:cursor-pointer">
                                  <svg
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-icon"
                                    style={{ color: "rgb(255, 162, 0)" }}
                                  >
                                    <path
                                      d="M1.5 1.5V16.5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M1.5 2.5H16C16.0963 2.5001 16.1906 2.52803 16.2714 2.58041C16.3522 2.6328 16.4162 2.70742 16.4556 2.7953C16.4951 2.88319 16.5083 2.98059 16.4937 3.0758C16.4791 3.17101 16.4373 3.25998 16.3733 3.332L13.7033 6.33333C13.5405 6.51642 13.4505 6.75295 13.4505 6.998C13.4505 7.24305 13.5405 7.47958 13.7033 7.66267L16.37 10.666C16.434 10.738 16.4758 10.827 16.4904 10.9222C16.505 11.0174 16.4917 11.1148 16.4523 11.2027C16.4129 11.2906 16.3489 11.3652 16.2681 11.4176C16.1872 11.47 16.093 11.4979 15.9967 11.498H1.5"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.5 2.5H16C16.0963 2.5001 16.1906 2.52803 16.2714 2.58041C16.3522 2.6328 16.4162 2.70742 16.4556 2.7953C16.4951 2.88319 16.5083 2.98059 16.4937 3.0758C16.4791 3.17101 16.4373 3.25998 16.3733 3.332L13.7033 6.33333C13.5405 6.51642 13.4505 6.75295 13.4505 6.998C13.4505 7.24305 13.5405 7.47958 13.7033 7.66267L16.37 10.666C16.434 10.738 16.4758 10.827 16.4904 10.9222C16.505 11.0174 16.4917 11.1148 16.4523 11.2027C16.4129 11.2906 16.3489 11.3652 16.2681 11.4176C16.1872 11.47 16.093 11.4979 15.9967 11.498H1.5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  {/**/}
                                </div>
                              </button>
                            </span>
                          </div>
                        </div>
                        {/**/}
                        {/**/}
                        {/**/}
                      </div>
                      {/**/}
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>
                  <div
                    className="right-sidebar-list-item group flex h-[36px] w-full cursor-pointer items-center px-4 text-left text-ay-p2 font-normal text-dark transition-colors hover:bg-steam"
                    disable-actions=""
                    profile-view=""
                    data-id="1sgu5ClsvZH6kYvcmzmN"
                  >
                    <div className="gap-x-3 gap-y-1 c-simple-widget-attributes flex w-full min-w-0 overflow-hidden w-full">
                      <div className="mr-auto flex min-w-0 items-center gap-2">
                        <button
                          className="hover:scale-125 cursor-pointer c-widget-status-button flex items-center justify-center group-3 inline h-icon w-icon shrink-0 rounded-full border-2 transition-all shrink-0 overflow-visible"
                          style={{
                            border: "1.5px solid rgb(0, 153, 255)",
                            backgroundColor: "rgb(207, 228, 255)",
                            color: "rgb(0, 153, 255)",
                          }}
                        >
                          <svg
                            width={16}
                            height={16}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="invisible group-3-hover:visible"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {/**/}
                        </button>
                        <span className="min-w-0 truncate font-medium leading-6">
                          Schedule the First Rhythm
                        </span>
                        <button className="rounded-md border border-mist bg-white p-0.5 opacity-0 transition group-hover:opacity-100 hover:border-dust hover:bg-steam">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-icon shrink-0 text-kimberly"
                          >
                            <path
                              d="M5.80767 12.2579L3.33301 12.6119L3.68634 10.1366L10.0503 3.77259C10.3316 3.49129 10.7132 3.33325 11.111 3.33325C11.5088 3.33325 11.8904 3.49129 12.1717 3.77259C12.453 4.0539 12.611 4.43543 12.611 4.83326C12.611 5.23109 12.453 5.61262 12.1717 5.89393L5.80767 12.2579Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="gap-x-3 gap-y-1 flex">
                        {/**/}
                        <div
                          data-v-6bf1e511=""
                          className="items-center justify-center flex compact group-hover:flex c-simple-widget-attribute-field property"
                          data-e2e-type="Priority"
                          data-e2e="c-simple-widget-attribute-field"
                          data-draggable="true"
                        >
                          {/**/}
                          <div
                            data-v-6bf1e511=""
                            className="font-medium text-dark overflow-hidden min-h-[32px] group-2 flex w-full cursor-pointer items-center text-ay-p1 text-kimberly md:text-sm"
                            data-e2e="schema-property-value-priority"
                          >
                            <span
                              data-v-6bf1e511=""
                              className="c-priority-property-type-value"
                            >
                              <button
                                className="w-full flex items-center"
                                type="button"
                              >
                                <div className="flex gap-2 whitespace-nowrap hover:cursor-pointer">
                                  <svg
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-icon"
                                    style={{ color: "rgb(255, 213, 0)" }}
                                  >
                                    <path
                                      d="M1.5 1.5V16.5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M1.5 2.5H16C16.0963 2.5001 16.1906 2.52803 16.2714 2.58041C16.3522 2.6328 16.4162 2.70742 16.4556 2.7953C16.4951 2.88319 16.5083 2.98059 16.4937 3.0758C16.4791 3.17101 16.4373 3.25998 16.3733 3.332L13.7033 6.33333C13.5405 6.51642 13.4505 6.75295 13.4505 6.998C13.4505 7.24305 13.5405 7.47958 13.7033 7.66267L16.37 10.666C16.434 10.738 16.4758 10.827 16.4904 10.9222C16.505 11.0174 16.4917 11.1148 16.4523 11.2027C16.4129 11.2906 16.3489 11.3652 16.2681 11.4176C16.1872 11.47 16.093 11.4979 15.9967 11.498H1.5"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.5 2.5H16C16.0963 2.5001 16.1906 2.52803 16.2714 2.58041C16.3522 2.6328 16.4162 2.70742 16.4556 2.7953C16.4951 2.88319 16.5083 2.98059 16.4937 3.0758C16.4791 3.17101 16.4373 3.25998 16.3733 3.332L13.7033 6.33333C13.5405 6.51642 13.4505 6.75295 13.4505 6.998C13.4505 7.24305 13.5405 7.47958 13.7033 7.66267L16.37 10.666C16.434 10.738 16.4758 10.827 16.4904 10.9222C16.505 11.0174 16.4917 11.1148 16.4523 11.2027C16.4129 11.2906 16.3489 11.3652 16.2681 11.4176C16.1872 11.47 16.093 11.4979 15.9967 11.498H1.5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  {/**/}
                                </div>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <div
                    className="right-sidebar-list-item group flex h-[36px] w-full cursor-pointer items-center px-4 text-left text-ay-p2 font-normal text-dark transition-colors hover:bg-steam"
                    disable-actions=""
                    profile-view=""
                    data-id="QW8M8gOkQH5OdIyX7inO"
                  >
                    <div className="gap-x-3 gap-y-1 c-simple-widget-attributes flex w-full min-w-0 overflow-hidden w-full">
                      <div className="mr-auto flex min-w-0 items-center gap-2">
                        <button
                          className="hover:scale-125 cursor-pointer c-widget-status-button flex items-center justify-center group-3 inline h-icon w-icon shrink-0 rounded-full border-2 transition-all shrink-0 overflow-visible"
                          style={{
                            border: "1.5px solid rgb(0, 153, 255)",
                            backgroundColor: "rgb(207, 228, 255)",
                            color: "rgb(0, 153, 255)",
                          }}
                        >
                          <svg
                            width={16}
                            height={16}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="invisible group-3-hover:visible"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {/**/}
                        </button>
                        <span className="min-w-0 truncate font-medium leading-6">
                          Start Note-Taking in Ayanza
                        </span>
                        <button className="rounded-md border border-mist bg-white p-0.5 opacity-0 transition group-hover:opacity-100 hover:border-dust hover:bg-steam">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-icon shrink-0 text-kimberly"
                          >
                            <path
                              d="M5.80767 12.2579L3.33301 12.6119L3.68634 10.1366L10.0503 3.77259C10.3316 3.49129 10.7132 3.33325 11.111 3.33325C11.5088 3.33325 11.8904 3.49129 12.1717 3.77259C12.453 4.0539 12.611 4.43543 12.611 4.83326C12.611 5.23109 12.453 5.61262 12.1717 5.89393L5.80767 12.2579Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="gap-x-3 gap-y-1 flex">
                        {/**/}
                        <div
                          data-v-6bf1e511=""
                          className="items-center justify-center flex compact group-hover:flex c-simple-widget-attribute-field property"
                          data-e2e-type="Priority"
                          data-e2e="c-simple-widget-attribute-field"
                          data-draggable="true"
                        >
                          {/**/}
                          <div
                            data-v-6bf1e511=""
                            className="font-medium text-dark overflow-hidden min-h-[32px] group-2 flex w-full cursor-pointer items-center text-ay-p1 text-kimberly md:text-sm"
                            data-e2e="schema-property-value-priority"
                          >
                            <span
                              data-v-6bf1e511=""
                              className="c-priority-property-type-value"
                            >
                              <button
                                className="w-full flex items-center"
                                type="button"
                              >
                                <div className="flex gap-2 whitespace-nowrap hover:cursor-pointer">
                                  <svg
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-icon"
                                    style={{ color: "rgb(255, 213, 0)" }}
                                  >
                                    <path
                                      d="M1.5 1.5V16.5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M1.5 2.5H16C16.0963 2.5001 16.1906 2.52803 16.2714 2.58041C16.3522 2.6328 16.4162 2.70742 16.4556 2.7953C16.4951 2.88319 16.5083 2.98059 16.4937 3.0758C16.4791 3.17101 16.4373 3.25998 16.3733 3.332L13.7033 6.33333C13.5405 6.51642 13.4505 6.75295 13.4505 6.998C13.4505 7.24305 13.5405 7.47958 13.7033 7.66267L16.37 10.666C16.434 10.738 16.4758 10.827 16.4904 10.9222C16.505 11.0174 16.4917 11.1148 16.4523 11.2027C16.4129 11.2906 16.3489 11.3652 16.2681 11.4176C16.1872 11.47 16.093 11.4979 15.9967 11.498H1.5"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.5 2.5H16C16.0963 2.5001 16.1906 2.52803 16.2714 2.58041C16.3522 2.6328 16.4162 2.70742 16.4556 2.7953C16.4951 2.88319 16.5083 2.98059 16.4937 3.0758C16.4791 3.17101 16.4373 3.25998 16.3733 3.332L13.7033 6.33333C13.5405 6.51642 13.4505 6.75295 13.4505 6.998C13.4505 7.24305 13.5405 7.47958 13.7033 7.66267L16.37 10.666C16.434 10.738 16.4758 10.827 16.4904 10.9222C16.505 11.0174 16.4917 11.1148 16.4523 11.2027C16.4129 11.2906 16.3489 11.3652 16.2681 11.4176C16.1872 11.47 16.093 11.4979 15.9967 11.498H1.5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  {/**/}
                                </div>
                              </button>
                            </span>
                          </div>
                        </div>
                        {/**/}
                        {/**/}
                        {/**/}
                      </div>
                      {/**/}
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>
                  <div
                    className="right-sidebar-list-item group flex h-[36px] w-full cursor-pointer items-center px-4 text-left text-ay-p2 font-normal text-dark transition-colors hover:bg-steam"
                    disable-actions=""
                    profile-view=""
                    data-id="Y1G4Q0crzJCQaFDJeKCa"
                  >
                    <div className="gap-x-3 gap-y-1 c-simple-widget-attributes flex w-full min-w-0 overflow-hidden w-full">
                      <div className="mr-auto flex min-w-0 items-center gap-2">
                        <button
                          className="hover:scale-125 cursor-pointer c-widget-status-button flex items-center justify-center group-3 inline h-icon w-icon shrink-0 rounded-full border-2 transition-all shrink-0 overflow-visible"
                          style={{
                            border: "1.5px solid rgb(0, 153, 255)",
                            backgroundColor: "rgb(207, 228, 255)",
                            color: "rgb(0, 153, 255)",
                          }}
                        >
                          <svg
                            width={16}
                            height={16}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="invisible group-3-hover:visible"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {/**/}
                        </button>
                        <span className="min-w-0 truncate font-medium leading-6">
                          Create a Project and To-Do Task List
                        </span>
                        <button className="rounded-md border border-mist bg-white p-0.5 opacity-0 transition group-hover:opacity-100 hover:border-dust hover:bg-steam">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-icon shrink-0 text-kimberly"
                          >
                            <path
                              d="M5.80767 12.2579L3.33301 12.6119L3.68634 10.1366L10.0503 3.77259C10.3316 3.49129 10.7132 3.33325 11.111 3.33325C11.5088 3.33325 11.8904 3.49129 12.1717 3.77259C12.453 4.0539 12.611 4.43543 12.611 4.83326C12.611 5.23109 12.453 5.61262 12.1717 5.89393L5.80767 12.2579Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="gap-x-3 gap-y-1 flex">
                        {/**/}
                        <div
                          data-v-6bf1e511=""
                          className="items-center justify-center flex compact group-hover:flex c-simple-widget-attribute-field property"
                          data-e2e-type="Priority"
                          data-e2e="c-simple-widget-attribute-field"
                          data-draggable="true"
                        >
                          {/**/}
                          <div
                            data-v-6bf1e511=""
                            className="font-medium text-dark overflow-hidden min-h-[32px] group-2 flex w-full cursor-pointer items-center text-ay-p1 text-kimberly md:text-sm"
                            data-e2e="schema-property-value-priority"
                          >
                            <span
                              data-v-6bf1e511=""
                              className="c-priority-property-type-value"
                            >
                              <button
                                className="w-full flex items-center"
                                type="button"
                              >
                                <div className="flex gap-2 whitespace-nowrap hover:cursor-pointer">
                                  <svg
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-icon"
                                    style={{ color: "rgb(255, 213, 0)" }}
                                  >
                                    <path
                                      d="M1.5 1.5V16.5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M1.5 2.5H16C16.0963 2.5001 16.1906 2.52803 16.2714 2.58041C16.3522 2.6328 16.4162 2.70742 16.4556 2.7953C16.4951 2.88319 16.5083 2.98059 16.4937 3.0758C16.4791 3.17101 16.4373 3.25998 16.3733 3.332L13.7033 6.33333C13.5405 6.51642 13.4505 6.75295 13.4505 6.998C13.4505 7.24305 13.5405 7.47958 13.7033 7.66267L16.37 10.666C16.434 10.738 16.4758 10.827 16.4904 10.9222C16.505 11.0174 16.4917 11.1148 16.4523 11.2027C16.4129 11.2906 16.3489 11.3652 16.2681 11.4176C16.1872 11.47 16.093 11.4979 15.9967 11.498H1.5"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M1.5 2.5H16C16.0963 2.5001 16.1906 2.52803 16.2714 2.58041C16.3522 2.6328 16.4162 2.70742 16.4556 2.7953C16.4951 2.88319 16.5083 2.98059 16.4937 3.0758C16.4791 3.17101 16.4373 3.25998 16.3733 3.332L13.7033 6.33333C13.5405 6.51642 13.4505 6.75295 13.4505 6.998C13.4505 7.24305 13.5405 7.47958 13.7033 7.66267L16.37 10.666C16.434 10.738 16.4758 10.827 16.4904 10.9222C16.505 11.0174 16.4917 11.1148 16.4523 11.2027C16.4129 11.2906 16.3489 11.3652 16.2681 11.4176C16.1872 11.47 16.093 11.4979 15.9967 11.498H1.5"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  {/**/}
                                </div>
                              </button>
                            </span>
                          </div>
                        </div>
                        {/**/}
                        {/**/}
                        {/**/}
                      </div>
                      {/**/}
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <table>
                  <tbody>
                    <tr
                      className="c-table-row-add-item h-[36px] cursor-pointer transition-colors hover:bg-steam init-creation"
                      data-e2e="workspace-as-list-add-item"
                    >
                      <td
                        className="p-0"
                        colSpan={1}
                        style={{ paddingLeft: "0rem" }}
                      >
                        <div className="c-table-row-add-item-plus-action flex items-center text-ay-p1 sm:text-ay-p2 px-2">
                          <button className="flex items-center font-normal text-kimberly hover:text-dark p-2">
                            <svg
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              fill="none"
                              stroke="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mr-2 w-icon"
                            >
                              <path
                                d="M8 3V13"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 8H13"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>{" "}
                            Task
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/**/}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
