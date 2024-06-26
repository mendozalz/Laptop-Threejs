import React from "react";

const SquareIconLinkComponent = ({children}) => {
  return (
    <>
      <a
        href={href}
        target={target}
        title={title}
        className="text-light-blue-light hover:text-light-blue-dark dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-1 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
      >
        {children}
      </a>
    </>
  );
};

export default SquareIconLinkComponent;
