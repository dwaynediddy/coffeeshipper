import React, { useState } from 'react' 
import emailjs from 'emailjs-com'

import '../style/form.css'

const Result = () => {
    return (
        <p>Your message has been successfully sent! We will contact you as soon as possible.</p>
    ) 
}

function Form() {

    const [result, showResult] = useState(false)
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_tmrrmg3', 'template_zjhcyri', e.target, 'user_9MXq73rfVJ5rPKqrhojHx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      e.target.reset()
      showResult(true)
  }

  return (
    <form className="form-container" onSubmit={sendEmail}>
      <h2>Contact Us</h2>
      <div className="form-group">
        <div className="form-name">
            <input type="text" placeholder="Name" name="name" />
        </div>
        <div className="form-number">
            <input type="text" placeholder="Number" name="mobile_number" />
        </div> 
      </div>
      <div class="form-email">
          <input type="email" placeholder="Email" name="email" />  
      </div>
      <div className="form-message">
          <textarea rows="6" placeholder="Message" name="message" />
      </div>
      <div className="form-button">
          <button className='send-button' type="submit">SEND</button>
      </div>
      <div className="row">{result ? <Result /> : null}</div>
</form>
  )
}
export default Form
