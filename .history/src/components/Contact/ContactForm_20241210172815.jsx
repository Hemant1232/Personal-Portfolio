import React from 'react'

const ContactForm = () => {
  return (
    <div className='mx-auto flex flex-col gap-12 w-9/12 '>
      <h2 className='text-3xl font-bold mt-28'>Get In Touch</h2>
      <div className='grid grid-cols-2'>
      <div className=''>
        <h3 className='text-xl font-semibold'>Lets Talk About EveryThing!</h3>
        <p className='text-base co'>Dont Like Forms? Send Me an Email. 👋</p>
      </div>
      <form action="">
        <div>
            <div>
                <input type="text" placeholder='Your Good Name Here !' />
            </div>
            <div>
                <input type="email" placeholder='Insert Your Email' />
            </div>
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
