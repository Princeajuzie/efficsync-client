import React from "react";
import Logo from "@/resources/svg/logo.svg";
import Image from "next/image";
export function Sidebar() {
  const sidebarItem = [
    {
      name: "Dashboard",
      icon: (
        <svg
          width={30}
          height={30}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" flex-shrink-0 size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: "Tasks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={26}
          height={26}
          strokeWidth={1.5}
          stroke="currentColor"
          className=" flex-shrink-0 size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      name: "Chats",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={26}
          height={26}
          strokeWidth={1.5}
          stroke="currentColor"
          className=" flex-shrink-0 size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
          />
        </svg>
      ),
    },
    {
      name: "Teamspaces",
      icon: (
        <svg
          width={26}
          height={26}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" flex-shrink-0 size-4"
        >
          <g
            clipPath="url(#clip0_16371_118949)"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3.752 12.898a6.5 6.5 0 119.075-9.24M14.377 7.725a6.5 6.5 0 01-6.746 6.647" />
            <path d="M2.097 10.848C.808 12.858.308 14.477.936 15.105c1.087 1.088 5.141-1.204 9.055-5.118C13.905 6.074 16.2 2.02 15.11.933c-.626-.626-2.252-.114-4.251 1.163" />
          </g>
          <defs>
            <clipPath id="clip0_16371_118949">
              <path fill="#fff" d="M0 0H16V16H0z" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Notes",
      icon: (
        <svg
          width={26}
          height={26}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" flex-shrink-0 size-5"
        >
          <g
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 3.99H8a4 4 0 00-4 4v10a4 4 0 004 4h8a4 4 0 004-4v-10a4 4 0 00-4-4zM9 2v5M15 2v5M8 16h6M8 12h8" />
          </g>
        </svg>
      ),
    },
    {
      name: "Workflows",
      icon: (
        <svg
          width={26}
          height={26}
          viewBox="0 0 1024 1024"
          className=" flex-shrink-0 size-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M786.359 809.326a88.357 88.357 0 01176.567 0 88.283 88.283 0 01-176.567 0zM511.56 898.56c-48.64 0-88.21-39.497-88.21-88.064a88.21 88.21 0 01176.42 0c0 48.567-39.57 88.064-88.21 88.064zm.951-839.022c48.567 0 88.137 39.497 88.137 87.918a88.137 88.137 0 01-176.201 0c0-48.494 39.497-87.918 88.064-87.918zM145.335 896.731c-48.64 0-88.21-39.497-88.21-88.137a88.283 88.283 0 01176.493 0c0 48.64-39.643 88.137-88.283 88.137zm759.735-471.04a29.55 29.55 0 00-8.265-20.48 30.793 30.793 0 00-20.48-8.265H541.257V291.182a147.31 147.31 0 00117.906-144.238 147.163 147.163 0 00-294.253 0c0 71.826 49.883 131.51 118.125 144.238-.146.365-1.974 105.691-1.974 105.691H147.675a28.453 28.453 0 00-20.48 8.265 30.135 30.135 0 00-8.923 20.48l.658 241.591C59.685 676.718.585 737.865.585 810.935c0 81.042 65.975 147.017 147.09 147.017 81.189 0 147.164-65.975 147.164-147.017 0-70.656-53.102-131.438-112.128-143.726V464.97h300.324v191.488c0 3.73.878 7.095 2.048 10.24A147.017 147.017 0 00364.91 810.935a147.237 147.237 0 00294.253 0c0-71.9-52.077-131.657-120.539-144.238a29.11 29.11 0 001.975-10.24V464.97h300.617v202.24c-64.366 14.117-112.055 73.143-112.055 143.726a147.237 147.237 0 00294.254 0c0-72.997-57.344-134.656-118.345-144.53.365-1.098 0-240.787 0-240.787z" />
        </svg>
      ),
    },
    {
      name: "Rhythms",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className=" flex-shrink-0 size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      {/* Sidebar */}
      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300  "
      >
        <div className="px-6 ">
          <div className=" h-fit bg-black rounded-md items-start w-10  ">
            <Image
              src={Logo}
              alt="logo"
              width={200}
              height={200}
              draggable={false}
              className="h-auto w-[40px]  "
            />
          </div>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open=""
        >
          <ul className="space-y-1.5">
            {sidebarItem.map((item) => {
              return (
                <li key={item.name}>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100"
                    href="#"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* End Sidebar */}
    </>
  );
}

export default Sidebar;
