import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import {EarthCanvas} from './canvas'
import { slideIn } from '../utils/motion'


// template_kgws3or
// service_0sovn2e
// 71ubzlCCU5vRhL8Zz

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_0sovn2e',
      'template_kgws3or',
      {
        from: form.name,
        to_name: 'SV',
        from_email: form.email,
        to_email: 'timepassacc2024@gmail.com',
        message: form.message,
      },
      'user_71ubzlCCU5vRhL8Zz'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you for your message. I will get back to you soon.');
      setForm({
        name: '',
        email: '',
        message: '',
      })
      
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Failed to send message. Please try again later.');
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 rounded-2xl p-10'
      >
        <p className={`${styles.sectionSubText} mb-4`}>
          It was nice to meet you, Nice to meet me?
        </p>
        <h3 className='text-white font-extrabold text-[30px]'>
          Contact me from anywhere on the globe.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-indigo-800 font-semibold'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email Address
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-indigo-800 font-semibold'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              What's on your mind?
            </span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Type your message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-indigo-800 font-semibold'
            />
          </label>
          <button
            type='submit'
            className='bg-gradient-to-r from-[#0805c5] to-[#38038b] py-3 px-8 outline-none w-fit justify-center text-white rounded-full font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}


export default SectionWrapper(Contact, "contact")