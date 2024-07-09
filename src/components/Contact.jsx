import React from 'react'
import { useState,useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'

import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


//template_a0z0khc
//service_9tykcoj
//Y7hkz1GbEVDnCWTY4

const Contact = () => {
  const formRef = useRef();
  const [loading,setLoading]=useState(false)
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',
  })
  // const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);


    emailjs.send(
      'service_9tykcoj',
      'template_a0z0khc',
      {
        from:form.name,
        to_name:'Rachit',
        from_email:form.email,
        to_email:'rachitpathakk@gmail.com',
        message:form.message
      },
      'Y7hkz1GbEVDnCWTY4'
    ).then(()=>{
      setLoading(false);
      alert('Thank you,I will get back to you as soon as possible');

      setForm({
        name:'',
        email:'',
        message:'',
      })
    },(error)=>{
      setLoading(false);
      console.log(error);

      alert('something went wrong')

    }
    )
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden h-auto'>
      <motion.div
        id='contact'
        variants={slideIn('left','tween',0.2,0.1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 h-90 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium
              '
            >
            </input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="example@xyz.com"
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium
              '
            >
            </input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>

      </motion.div>
      <motion.div
        variants={slideIn('right','tween',0.2,0.1)}
        className='xl:flex xl:h-auto md:h-[550px] md:w-[40%] h-[350px] w-full mx-auto'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")