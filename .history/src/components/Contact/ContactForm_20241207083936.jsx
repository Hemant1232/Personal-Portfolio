import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <h2>Get In Touch</h2>
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
            <textarea name="" id="" cols={}></textarea>
        </div>
      </form>

    </div>
  )
}

export default ContactForm
