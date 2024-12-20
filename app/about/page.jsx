"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { GrCertificate } from "react-icons/gr";
import Link from 'next/link'

const aboout = {
  title: 'About me',
  description: 'Eager, motivated web developer with skills in front-end and back-end technologies.Committed to creating user-friendly websites and staying current with industry trends.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Gautam Arora'
    },
    {
      fieldName: 'Phone',
      fieldValue: '+91 8887960815'
    },
    {
      fieldName: 'Email',
      fieldValue: 'gautamarora100303@gmail.com'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indian'
    },
    {
      fieldName: 'Degree',
      fieldValue: 'B.Tech - CSE (AI) | 2025'
    },

    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi'
    },
    {
      fieldName: 'Hobbies',
      fieldValue: ' Football , Music , Gaming'
    },


  ]
}
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: '',
  items: [
    {
      institution: 'BBD University , Lucknow',
      degree: "B.Tech CSE (AI)",
      duration: "Current - 2025",
      result: "CGPA : 9.1 (3rd year)",
      link: ""
    },
    {
      institution: 'Spring Dale College , Lucknow',
      degree: "Intermediate [ISC Board]",
      duration: "2021",
      result: "Percentage : 94.4%",
      link: "https://drive.google.com/file/d/1AM0fJM2TOarE0JblIn9pyfsvXtrqWlsT/view?usp=sharing"
    },
    {
      institution: 'Spring Dale College , Lucknow',
      degree: "High School [ICSE Board]",
      duration: "2019",
      result: "Percentage : 95%",
      link: "https://drive.google.com/file/d/1ARBVQ0v4opO8OtvFAnSJD1F8Upf5GkMJ/view?usp=sharing"
    },

  ]
}
const certificates = {
  // icon: "/assets/resume/cap.svg",
  title: "My Certificates",
  description: '',
  items: [
    {
      topic: 'Full Stack Web Development',
      source: "Udemy",
      certificate: "https://drive.google.com/file/d/116cQR63iL8n7XjeydKYglG2uxfq1m3Gb/view?usp=sharing"
    },
    {
      topic: "HTML & CSS",
      source: "GreatLearning",
      certificate: "https://drive.google.com/drive/folders/1wm8TUj-ZA2H8zZTxzXUkQVDfeVxAUtiS?usp=sharing"
    },
    {
      topic: "Machine Learning (Beginner)",
      source: "Simplilearn",
      certificate: "https://drive.google.com/file/d/1Jxrmz7WBaADERMjiZidRyx0dsNK00CXp/view?usp=drive_link"
    },
    {
      topic: "Data Science (Basics)",
      source: "Simplilearn",
      certificate: "https://drive.google.com/drive/folders/1-H8e6ODnkfNUeWpCfjYFiStlRW93UApn?usp=sharing"
    },
    {
      topic: "Data Science using Python Bootcamp",
      source: "LetsUpgrade",
      certificate: "https://drive.google.com/file/d/1TmaUpO_RpitKsAQsVRjN1nKB2RNUZ8Cu/view?usp=sharing"
    }

  ]
}

const experience = {
  title: "My Experience",
  description: '',
  items: [
    {
      company: '24GlobalSolution',
      role: "React Developer Intern",
      duration: "4 months (Jun 2024 - Oct 2024)",
      certificate: "https://drive.google.com/file/d/1oGFRuA00LYWdiXGh1xmNFktkOq-h7y-q/view?usp=sharing",
      project: "https://www.tripittoday.com"
    },
  ]
}
const skills = {
  title: "My Skills",
  description: "Following are the skills that I have acquired over the years of learning and working on various projects : ",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"

    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = () => {

  return (
    <motion.div intital={{ opacity: 0 }} animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
    }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="skills" className="flex flex-col xl:flex-row gap-[20px] md:gap-[60px]">
          <TabsList className=" grid grid-cols-2 xl:flex xl:flex-col w-full xl:max-w-[380px] mx-auto xl:mx-0 gap-2 md:gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            {/* <TabsTrigger value="projects">Projects</TabsTrigger> */}
            <TabsTrigger value="about">About Me</TabsTrigger>

          </TabsList>


          <div className="min-h-[70vh] w-full">
            {/* -----------------SKILLS------------------ */}
            <TabsContent value="skills" className="w-full">
              {skills?.title && <h2 className="text-lg font-semibold md:text-2xl">{skills?.title}</h2>}
              {skills?.description && <p className="text-justify text-sm md:text-lg text-white/80 mb-8">{skills?.description}</p>}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills?.skilllist.map((skill, index) => (
                  <div key={index} className=" h-[100px]  md:h-[150px] rounded flex flex-col justify-center items-center  bg-slate-700/30 group gap-1.5 md:gap-2">
                    <div className="text-4xl md:text-6xl group-hover:text-blue-500 duration-500 rounded-full flex justify-center items-center">
                      {skill?.icon}
                    </div>
                    <p className="text-xs md:text-sm">{skill?.name}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            {/* ---------------EDUCATION---------------- */}
            <TabsContent value="education" className="w-full">
              {/* <img src={`${education?.icon}`} alt="edu logo" /> */}
              {education?.title && <h2 className="text-lg font-semibold md:text-2xl">{education?.title}</h2>}
              {education?.description && <p className="text-justify text-sm md:text-lg text-white/80 mb-8">{education?.description}</p>}
              <ScrollArea className="h-72 mt-10 pb-1 border-b border-blue">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {education?.items?.map((item, index) => (
                    <div key={index} className="flex w-full items-center gap-4">
                      <div className="rounded-md p-3 bg-slate-700/50 hover:bg-slate-600/40 duration-500 flex flex-col justify-between w-full  h-32 gap-2   ">
                        <div className="flex flex-col gap-1">
                          <span className="text-blue-500 w-full text-sm flex justify-between items-center">
                            {item?.duration}
                            {item?.link &&
                              <span className="group cursor-pointer">
                                <Link href={item?.link}>
                                  <GrCertificate className="text-white font-bold text-lg duration-200 group-hover:text-blue-500 " />
                                </Link>
                              </span>
                            }
                          </span>
                          <p className="text-sm md:text-base text-wrap">{item?.degree} </p>
                          <p className="text-xs md:text-sm text-wrap text-blue-500/80">{item?.result} </p>
                        </div>
                        <span className="flex gap-2 w-full  justify-end items-center">
                          <p className="text-white/50 text-xs text-end text-wrap">{item?.institution}</p>
                        </span>
                      </div>
                    </div>
                  ))}

                </div>
              </ScrollArea>
            </TabsContent>
            {/* ---------------CERTIFICATES---------------- */}
            <TabsContent value="certificates" className="w-full">
              {/* <img src={`${education?.icon}`} alt="edu logo" /> */}
              {certificates?.title && <h2 className="text-lg font-semibold md:text-2xl">{certificates?.title}</h2>}
              {certificates?.description && <p className="text-justify text-sm md:text-lg text-white/80 mb-8">{certificates?.description}</p>}
              <ScrollArea className="h-96 mt-10 pb-1 border-b border-blue">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {certificates?.items?.map((item, index) => (

                    <Link href={item?.certificate}>
                      <div key={index} className="flex w-full items-center gap-4">
                        <div className="group rounded-md p-3 bg-slate-700/50 hover:bg-slate-600/40 duration-500 flex flex-col justify-between w-full  h-36 gap-2   ">
                          <div className="flex flex-col justify-between w-full h-full items-center gap-1">
                            <p className="text-base text-white/90 group-hover:text-white font-semibold md:text-lg text-balance text-center">{item?.topic} </p>

                            {item?.certificate &&  <p className="cursor-pointer text-blue-500/80  group-hover:text-blue-500 text-sm text-wrap">Certificate</p> }
                          </div>
                          <span className="flex gap-2 w-full  justify-end items-center">
                            <p className="text-sm text-wrap text-slate-500/80">{item?.source} </p>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}

                </div>
              </ScrollArea>
            </TabsContent>
            {/* ---------------EXPERIENCE---------------- */}
            <TabsContent value="experience" className="w-full">
              {/* <img src={`${education?.icon}`} alt="edu logo" /> */}
              {experience?.title && <h2 className="text-lg font-semibold md:text-2xl mb-8">{experience?.title}</h2>}
              {experience?.description && <p className="text-sm md:text-base text-white/80 mb-8">{experience?.description}</p>}
              <div className="grid grid-cols-1  gap-4 ">
                {experience?.items?.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="rounded-md p-5 bg-slate-700/50 hover:bg-slate-600/50 duration-500 flex flex-col justify-between w-full  h-36 gap-2   ">
                      <div className="flex flex-col gap-1">
                        <span className="text-blue-500 text-sm">{item?.company}</span>
                        <p className="text-base text-wrap">{item?.role}</p>
                        <p className="text-white/50 text-xs text-wrap">{item?.duration}</p>
                      </div>
                      <span className="flex gap-1 justify-end items-center">
                        {item?.certificate && <Link href={item?.certificate}> <p className="cursor-pointer hover:text-blue-500 text-white/70 text-xs text-wrap">Certificate</p> </Link>}
                        <span className=" text-white/90 text-xs ">|</span>
                        {item?.project && <Link href={item?.project}><p className="cursor-pointer hover:text-blue-500 text-white/70 text-xs text-wrap">Project</p></Link>}
                      </span>
                    </div>
                  </div>
                ))}

              </div>
            </TabsContent>

            {/* -----------------------ABOUT ME-------------------- */}
            <TabsContent value="about" className="w-full">
              {aboout?.title && <h2 className="text-lg font-semibold md:text-2xl">{aboout?.title}</h2>}
              {aboout?.description && <p className="text-sm md:text-sm text-white/80 mb-8">{aboout?.description}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                {
                  aboout?.info?.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <p className="text-white/80 text-sm ">{item?.fieldName}</p>
                      <p className="text-white text-sm font-semibold">{item?.fieldValue}</p>
                    </div>
                  ))
                }
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default about
// hover:shadow-[1px_3px_15px_-5px_rgb(95,185,250)] 