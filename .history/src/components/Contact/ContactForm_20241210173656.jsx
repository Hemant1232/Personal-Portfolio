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
      <form className='border-2 ' action="">
        <div className='flex gap-10 w-full justify-between'>
            <div className='x-5'>
                <input type="text" placeholder='Your Good Name Here !' />
            </div>
            <span>
                <input type="email" placeholder='Insert Your Email' />
            </span>
        </div>
        <div>
            <input type="text" placeholder='I have an IDEA !' />
        </div>
        <div>
            <textarea name="" id="" cols={30} rows={10} placeholder='Hemant, Lets Grow Together !?'></textarea>
        </div>
        <button>Send Message</button>
      </form>
      </div>

    </div>
  )
}

export default ContactForm
