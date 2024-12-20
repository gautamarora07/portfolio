'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+91 8887960815'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'gautamarora100303@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Lucknow, India'
  }
]

const contact = () => {

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5, ease: "easeIn" }
      }}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          <div className='xl:w-[52%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' action="">
              <h3 className="text-4xl text-blue-500">
                Lets Work Together
              </h3>
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure ex nulla ullam quisquam minima, veniam illo voluptatum adipisci cumque.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type='firstname' placeholder='Firstname' />
                <Input type='lastname' placeholder='Lastname' />
                <Input type='email' placeholder='Email Address' />
                <Input type='phone' placeholder='Phone Number' />
              </div>

              <Textarea
                className="h-[200px]"
                placeholder="Drop your message here" />

              <Button type='submit' className='max-w-40 rounded-md'>
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex items-center gap-4 '>
                  <div className='w-[52px] h-[52px] xl:w-[72px]  xl:h-[72px] bg-[#27272c] text-blue-500 rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>
                      {item.icon}
                    </div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/70'>{item.title}</p>
                    <h3 className='text-lg'>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default contact