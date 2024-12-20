'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { BsArrowRight, BsGit, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'
import ProjectBtns from '@/components/ProjectBtns'

const projects = () => {


  const work = [
    {
      num: '01',
      category: 'Frontend',
      title: 'EasyList',
      description: 'Create customized list of students, one-click PDF generation.',
      tech: ['React', 'React-PDF', 'CSS'],
      image: '/images/easylist.png',
      live: 'https://gtmxa4.netlify.app/',
      code: 'https://github.com/gautamarora07/EasyList'
    },
    {
      num: '02',
      category: 'Frontend',
      title: 'EasyNotes',
      description: 'Web app for college content management, syllabi, semester-wise question papers, notes-taking module.',
      tech: ['ReactJS'],
      image: '/images/easynotes.png',
      live: 'https://gtmxbbdu.netlify.app/',
      code: 'https://github.com/gautamarora07/EasyNotes-GTM'
    },
    {
      num: '03',
      category: 'Full-stack',
      title: 'Farmisha',
      description: 'A simple note taking app with a beautiful UI and a dark mode',
      tech: ['NextJS', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Shadcn UI'],
      image: '/images/farmisha.png',
      live: 'https://famrisha.vercel.app/',
      code: 'github link'
    },
    {
      num: '04',
      category: 'Frontend',
      title: 'CodetubexGTM',
      description: 'Youtube clone.',
      tech: ['NextJS', 'TailwindCSS'],
      image: '/images/codetube.png',
      live: 'https://farmishaxgtm.vercel.app/',
      code: 'github link'
    },
    {
      num: '05',
      category: 'Javascript(Beginner)',
      title: 'Music Player',
      description: 'A beginner-friendly music player with a simple UI and limited songs.',
      tech: ['Javascript', 'HTML', 'CSS'],
      image: '/images/musicplayer.png',
      live: 'https://gautamarora07.github.io/Project07-MusicPlayerGTM/',
      code: 'https://github.com/gautamarora07/Project07-MusicPlayerGTM'
    },
    {
      num: '06',
      category: 'Javascript(Beginner)',
      title: 'Calculator',
      description: 'A basic caluclator with simple UI and limited operations.',
      tech: ['Javascript', 'HTML', 'CSS'],
      image: '/images/calculator.png',
      live: 'https://gautamarora07.github.io/Project05-CalculatorGTM/',
      code: 'https://github.com/gautamarora07/Project05-CalculatorGTM'
    },
    // {
    //   num: '07',
    //   category: 'Machine Learning',
    //   title: 'Air Canvas',
    //   description: 'A simple note taking app with a beautiful UI and a dark mode',
    //   tech: ['Python Library'],
    //   image: '/images/easynotes.png',
    //   live: 'https://famrisha.vercel.app/',
    //   code: 'github link'
    // },
  ]

  const [project, setProject] = useState(work[0])
  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex
    setProject(work[currentSlide])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex flex-col justify-center  py-5 xl:py-10 '
    >
      <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className='w-full xl:w-[50%] xl:[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[20px] lg:gap-[30px]'>
              <div className="text-6xl xl:text-8xl leading-none text-outline font-extrabold  text-transparent  ">
                {project.num}
              </div>

              <h2 className='text-[30px] lg:text-[42px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500 capitalize'>
                {project.category} Project
              </h2>

              <p className='text-sm lg:text-base text-white/60'> <span className="text-blue-500 font-bold">{project?.title}.</span> {project?.description}</p>

              <ul className='flex gap-2 flex-wrap'>
                {
                  project?.tech?.map((item, index) => (

                    <li key={index} className='text-sm flex gap-1 lg:text-xl text-blue-500'>{item}
                      {index !== project.tech.length - 1 && " |"}
                    </li>

                  ))

                }
              </ul>

              <div className='flex items-center gap-4'>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] bg-white/5 flex justify-center items-center group'>
                        <BsArrowRight className='text-white text-3xl group-hover:text-blue-500' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                </Link>
                <Link href={project.code}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-xl lg:text-3xl group-hover:text-blue-500' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                </Link>
              </div>

            </div>

          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[460px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {
                work.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className='h-[300px] xl:h-[400px] relative group flex justify-center items-center bg-pink-500/30'>
                      <div>

                      </div>

                      <div className='relative w-full h-full  text-center '>
                        <Image src={project.image} fill alt={project.title} className='object-cover rounded-md shadow-md ' />
                      </div>
                    </div>

                  </SwiperSlide>
                ))
              }
              <ProjectBtns
               containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
               btnStyles="bg-blue-500 hover:bg-blue-600 text-primary text-[10px] lg:text-[20px] w-[25px] lg:w-[40px] h-[25px]  lg:h-[40px] flex justify-center items-center transition-all"
               iconsStyles="text-white"/>
            </Swiper>
          </div>

        </div>

      </div>
    </motion.section>

  )
}

export default projects