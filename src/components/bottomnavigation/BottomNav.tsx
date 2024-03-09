import React from "react";

export function BottomNav() {
  const bottomItem = [
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
          className=" flex-shrink-0 size-6 "
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
          className=" flex-shrink-0 size-6 "
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
          className=" flex-shrink-0 size-6 "
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
      name: "more",
      icon: (
        <svg
          width={26}
          height={26}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" flex-shrink-0 size-6 "
        >
          <g fill="#000">
            <circle cx={18} cy={12} r={1.5} transform="rotate(90 18 12)" />
            <circle cx={12} cy={12} r={1.5} transform="rotate(90 12 12)" />
            <circle cx={6} cy={12} r={1.5} transform="rotate(90 6 12)" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* <div className=" bg-white shadow-lg  lg:hidden block   w-full   px-12 ">
        <div className="flex items-center justify-center  px-12 ">
          {bottomItem.map((item, idx) => {
            return (
              <div
                className="flex-1 items-center  text-center group justify-center"
                key={idx}
              >
                <a
                  href="#"
                  className="flex  items-center justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="flex flex-col items-center px-1 pt-1 pb-1  text-center text-black justify-center">
                    <div className="far fa-home text-2xl pt-1 mb-1 block items-center text-center">
                      {item.icon}
                    </div>

                    <span className="block text-xs pb-2 text-center">
                      {item.name}
                    </span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div> */}

<section className="  block text-gray-800 bg-white h-16 lg:h-0 border-t-2 shadow-lg dark:bg-dark backdrop-blur-lg bg-opacity-100 dark:bg-opacity-80 dark:text-gray-400 border-royal/20 lg:hidden">
  <div id="tabs" className="flex justify-between">
    <a
      className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white text-[#FF3131]  bg-white"
      href="/app"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        className="inline-block w-6 h-6 mb-1"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
      <span className="block text-xs text-black tab">Feed</span>
    </a>
    <a
      className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white text-[#000]"
      href="/app/category"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block w-6 h-6 mb-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
      <span className="block text-xs text-black tab">Categories</span>
    </a>
    <a
      className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white text-[#000]"
      href="/signin"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        className="inline-block w-6 h-6 mb-1"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
        />
        <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" />
      </svg>
      <span className="block text-xs text-black tab">Create</span>
    </a>
    <a
      className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white text-[#000]"
      href="/signin"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block w-6 h-6 mb-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <span className="block text-xs text-black tab">Profile</span>
    </a>
    <a
      className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white text-[#000]"
      href="/signin"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        className="inline-block w-6 h-6 mb-1"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
        />
      </svg>
      <span className="block text-xs text-black tab">Settings</span>
    </a>
  </div>
</section>

    </div>
  );
}

export default BottomNav;
