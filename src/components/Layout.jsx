import Technologies from "./Technologies.jsx";
import IconLogo from "./IconLogo.jsx";
import IconLogoDark from "./IconLogoDark.jsx";
import RoundIconButton from "./RoundIconButton.jsx";
import SquareIconLink from "./SquareIconLink.jsx";
import IconGithub from "./IconGithub.jsx";
import HtmlComponent from "./Html.jsx";
import IconHome from "./IconHome.jsx";
import IconCode from "./IconCode.jsx";
import IconPortafolio from "./IconPortafolio.jsx";
import Cv from "./Cv.jsx";
import { Html } from "@react-three/drei";

const Layout = () => {
  return (
    <Html className="Layout">
      <div className="flex flex-col items-center justify-center relative box-border min-h-screen lg:overflow-hidden bg-light-primary dark:bg-gradient-main-dark">
        <Technologies />

        <a
          href="/"
          className="flex w-20 -top-2 sm:-top-2 sm:w-fit absolute"
          aria-label="Icono de enlace al Home"
        >
          {/* <IconLogo />
          <IconLogoDark /> */}
        </a>
        <div className="flex flex-col self-end text-right ml-auto text-xl w-fit text-light-blue-dark dark:text-dark-blue-light">
          <h1 className="font-black leading-extra-loose md:text-3xl 2xl:text-4xl">
            Lenin
          </h1>
          <h1 className="font-thin leading-extra-loose text-sm md:text-2xl 2xl:text-4xl">
            Mendoza
          </h1>
        </div>

        <div className="flex w-fit h-fit px-1.25 py-1.25 ml-4 2xl:ml-8 shadow-switcher rounded-2xl dark:bg-buttons-box-dark dark:shadow-box-dark-out">
          <div className="dark:shadow-buttons-box-dark rounded-2xl w-min flex sm:w-full px-1.5 py-1.5 md:px-3 md:py-3 h-fit">
            {/* <RoundIconButton/> */}

            <span className="mr-4"></span>
            {/* <SquareIconLink
            >
              <IconGithub />
            </SquareIconLink> */}
          </div>
        </div>
      </div>
      {/* <HtmlComponent/> */}

      <div className="flex self-end w-fit px-1.25 py-1.25 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out">
        <div className="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-3">
          {/* <SquareIconLink>
            <IconHome />
          </SquareIconLink>
          <SquareIconLink>
            <IconCode />
          </SquareIconLink>
          <SquareIconLink>
            <IconPortafolio />
          </SquareIconLink>
          <SquareIconLink>
            <Cv />
          </SquareIconLink> */}
        </div>
      </div>
    </Html>
  );
};

export default Layout;
