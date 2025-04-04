import React from 'react'

const ContactForm = () => {
  return (
    <div className='mx-auto border-2 flex flex-col gap-12 w-9/12 '>
      <h2 className='text-3xl font-bold mt-28'>Get In Touch</h2>
      <div className='grid grid-cols-[1fr_2fr] p-3 gap-4'>
      <div className='border-2'>
        <h3 className='text-xl font-semibold'>Lets Talk About EveryThing!</h3>
        <p className='text-base text-slate-700'>Dont Like Forms? Send Me an Email. 👋</p>
      </div>
      <form className='border-2 p-3 flex flex-col gap-4 ' action="">
        <div className='flex justify-between '>
            <div className=''>
                <input className='px-8 py-5 rounded-full outline-none ' type="text" placeholder='Your Good Name Here !' />
            </div>
            <span>
                <input className='px-8 py-5 rounded-full o' type="email" placeholder='Insert Your Email' />
            </span>
        </div>
        <div>
            <input className='w-full px-8 py-5 rounded-full' type="text" placeholder='I have an IDEA !' />
        </div>
        <div>
            <textarea className='w-full px-8 py-5 rounded-3xl' name="" id="" cols={30} rows={10} placeholder='Hemant, Lets Grow Together !?'></textarea>
        </div>
        <button>Send Message</button>
      </form>
      </div>

    </div>
  )
}

export default ContactForm
