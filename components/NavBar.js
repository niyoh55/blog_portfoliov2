import Link from "next/link";
import { useRouter } from "next/dist/client/router";
const NavBar = (props) => {
  const router = useRouter();
  return (
    <div className="w-full z-50 fixed h-full">
      <nav className="bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center gap-x-2">
            <img
              src="https://static.wikia.nocookie.net/metalgear/images/e/e2/FOXHOUND_Logo.png"
              className="mr-3 2xl:h-20 xl:h-20 lg:h-16 md:h-12 sm:h-12 h-12 "
              alt="Flowbite Logo"
            />
            <span className="tracking-[.25em] self-center 2xl:text-4xl xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl text-xl font-light whitespace-nowrap dark:text-white">
              Niyoh Villanueva
            </span>
          </div>
          {/* <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button> */}
          <div className="flex items-center 2xl:gap-x-10 xl:gap-x-10 lg:gap-x-8 md:gap-x-4 sm:gap-x-2">
            <div>
              <Link href="/" aria-current="page">
                <p
                  className={`${
                    router.pathname === "/" ? "text-blue-700" : "text-gray-700"
                  } 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg block font-light py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700 `}
                >
                  Home
                </p>
              </Link>
            </div>
            <div>
              <Link href="/about-me">
                <p
                  className={`${
                    router.pathname === "/about-me"
                      ? "text-blue-700"
                      : "text-gray-700"
                  } 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg block font-light py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700 `}
                >
                  About Me
                </p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default NavBar;
