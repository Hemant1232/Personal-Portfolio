import React from 'react'

const ContactForm = () => {
  return (
    <div id='' className='mx-auto  flex flex-col mb-40 gap-12 w-9/12 '>
      <h2 className='text-3xl font-bold mt-28'>Get In Touch</h2>
      <div className='grid grid-cols-[1fr_2fr] p-3 gap-4'>
      <div >
        <h3 className='text-xl font-semibold'>Lets Talk About EveryThing!</h3>
        <p className='text-base text-slate-700'>Dont Like Forms? Send Me an Email. 👋</p>
      </div>
      <form className=' p-3 flex flex-col gap-8 ' action="">
        <div className='flex justify-between '>
            
                <input className='px-8 py-5 w-[47%] rounded-full outline-none shadow-lg ' type="text" placeholder='Your Good Name Here !' />
           
                <input className='px-8 py-5 w-[47%] rounded-full outline-none shadow-lg' type="email" placeholder='Insert Your Email' />
            
        </div>
        <div>
            <input className='w-full px-8 py-5 outline-none rounded-full shadow-lg' type="text" placeholder='I have an IDEA !' />
        </div>
        <div>
            <textarea className='w-full min-h-6 px-8 py-4 resize-none overflow-hidden rounded-3xl outline-none shadow-lg' name="" id="" cols={30} rows={10} placeholder='Hemant, Lets Grow Together !?'></textarea>
        </div>
        <button className="bg-first_color w-fit text-white font-semibold px-6 py-2 rounded-full text-lg">Send Message</button>
      </form>
      </div>

    </div>
  )
}

export default ContactForm
