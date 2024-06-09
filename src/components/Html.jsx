import { Html } from "@react-three/drei";
import IconGitHub from "./IconGithub.jsx"


const HtmlComponent = () => {
  return (
    <>
      {/*  <Html transform style={{ width:"916px", height:"647px", marginTop:"-5px", overflow:"hidden", borderRadius:"23px 23px 0 0"}} position={[0, 12.851, -5.38028]}>
          <h1>Mendoza</h1>
        </Html> */}
      <Html
        className="pantallaLaptop"
        occlude
        transform
        style={{
          width: "916px",
          height: "647px",
          marginTop: "-5px",
          overflow: "hidden",
          borderRadius: "23px 23px 0 0",
          backgroundColor:"white"
        }}
        position={[0, 12.851, -5.38028]}
      >
        <div className="p-2.5 my-2 md:my-4 shadow-up dark:shadow-box-dark dark:bg-box-dark w-full 2xl:mx-auto rounded-lg px-[100px]">
          <div className="flex flex-col items-center justify-center">
            <div className="atropos py-4 px-2 2xl:px-4 shadow-down dark:shadow-box-dark dark:bg-box-dark w-full m-auto">
              <a href="https://github.com/mendozalz" target="_blank">
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="atropos-inner transition-all duration-700 relative p-2 border-2 rounded-md shadow-2xl border-light-blue-dark dark:border-gray-dark bg-gray-light-4 dark:bg-transparent md:backdrop-blur-sm flex flex-col">
                      <div className="atropos-inner transition-all duration-700 relative py-4 px-2 md:px-8 2xl:px-15 border-4 rounded-md shadow-2xl border-light-blue-dark bg-gray-light-4 md:backdrop-blur-sm flex flex-col dark:border-gray-dark dark:bg-transparent dark:shadow-orange-dark">
                        <div className="flex justify-between flex-row items-center">
                          <h4 className="transition-all duration-700 top-0 right-0 flex font-mono text-2xl font-bold opacity-90">
                            <div className="flex items-baseline font-black text-black/80 dark:text-dark-blue-light text-2xl">
                              #mendozalz
                            </div>
                          </h4>
                          <div className="flex items-center justify-center">
                            <h4 className="transition-all duration-700 top-0 right-0 flex font-mono text-2xl font-bold opacity-90">
                              <div className="flex text-xs items-center font-black uppercase text-black/80 dark:text-dark-blue-light">
                                <IconGitHub /> <p className="text-2xl">#001</p>
                                <span className="text-lg ml-1">⭐️</span>
                              </div>
                            </h4>
                          </div>
                        </div>
                        <div
                          className="flex justify-center pt-1 md:pt-2 2xl:pt-5 m-0 mx-auto font-thin leading-6 tracking-normal text-2xl w-full bg-clip-text bg-gradient-to-r text-light-blue-dark dark:text-dark-blue-light"
                          data-atropos-offset="2"
                        >
                          <div className="font-normal">
                            Bienvenidos a mi perfil ✌🏼 <br />
                            Mi nombre es{" "}
                            <span className="font-black">Lenin Mendoza</span> y soy
                            Desarrollador Front-End...
                            <br />
                            🔭 Soy desarrollador web en Wordpress con
                            experiencia profesional desde el 2019, desde
                            comienzos del 2023 me he dedicado a aprender los
                            frameworks de mayor demanda laboral... <br />
                            🌱 Actualmente estoy enfocado en Astro, NextJs y
                            React. Pronto en React Native, ThreeJs y GSAP...
                          </div>
                        </div>
                        <div
                          className="flex items-center justify-center pt-2"
                          data-atropos-offset="5"
                        >
                          <h2 className="inline-block w-fit px-6 py-1 text-xs min-w-fit text-center text-white rounded-xl md:w-2/3 md:text-lg bg-black/90 font-normal">
                            Ir a Github
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Html>
    </>
  );
};

export default HtmlComponent;
