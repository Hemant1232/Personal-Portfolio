import React from 'react'

const ContactForm = () => {
  return (
    <div className='mx-auto w-9/12 '>
      <h2 className='text-3xl'>Get In Touch</h2>
      <div>
        <h3>Lets Talk About EveryThing!</h3>
        <p>Dont Like Forms? Send Me an Email. 👋</p>
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
  )
}

export default ContactForm
