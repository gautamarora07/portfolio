import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";

const page = () => {
  return (
    <>
      <section className="h-screen flex items-center justify-center ">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row lg:flex-row items-center justify-between xl:pt-8 lg:pt-8  xl:pb-24 lg:pb-24 ">
            {/* TEXT */}
            <div className="text-center  xl:text-left order-2 xl:order-none ">
              <span className="text-xl">Web Developer</span>
              <h1 className="h1 mb-6">
                Hola. I'm <br />{" "}
                <span className="text-blue-500 hover:text-blue-800 duration-1000 drop-shadow-xl">Gautam Arora</span>{" "}
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I am a dedicated web developer, committed to creating
                userfriendly projects and making impactful contributions
              </p>
              {/* Button and Social */}
              <div className = 'flex flex-col xl:flex-row items-center gap-5'>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>

              <div className="mb-8 xl:mb-0">
                <Social containerStyles = 'flex gap-6' iconStyles = 'w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500 text-base hover:bg-blue-500 hover:text-primary hover:transition-all duration-500' />
              </div>
              </div>

            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
