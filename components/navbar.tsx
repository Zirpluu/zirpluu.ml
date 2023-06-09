import { useState } from "react";
import Image from "next/image";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mx-5 sm:mx-10 sticky top-0 bg-transparent z-50">
      <nav className="backdrop-blur-sm font-roboto flex-row text-center sm:flex-row sm:text-left justify-between py-2 sm:items-center w-full rounded-b-xl border-b-2 bg-transparent">
        <div className="flex items-center">
          <a href="https://zirpluu.ml" className="ml-3">
            <Image
              className="rounded-full"
              quality={1}
              width={50}
              height={50}
              src="/z.png"
              alt="Logo"
            />
          </a>
          <div className="hidden sm:flex-grow sm:flex justify-center text-xl">
            <div className="font-bold flex items-center space-x-8">
              <a href="#" className="hover:border-b-2 rounded-xl px-2">
                Link 1
              </a>
              <a href="#" className="hover:border-b-2 rounded-xl px-2">
                Link 2
              </a>
              <a href="#" className="hover:border-b-2 rounded-xl px-2">
                Link 3
              </a>
            </div>
          </div>
          <div className="sm:hidden ml-auto">
            <button
              type="button"
              className="text-xl text-white hover:text-white focus:outline-none mr-3"
              title="open menu"
              onClick={handleMenuToggle}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 26"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M1 4h18M7 14h12M11 24h8"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-2 mx-10 py-2 px-3 shadow rounded-b-xl border-t-2 border-x absolute right-0 left-0 sm:hidden blur-sm">
            <div className="flex flex-col items-center blur-none">
              <a className="block py-1" href="#link1">
                Link 1
              </a>
              <a className="block py-1" href="#link2">
                Link 2
              </a>
              <a className="block py-1" href="#link3">
                Link 3
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
    
  );
}

export { Navigation };
