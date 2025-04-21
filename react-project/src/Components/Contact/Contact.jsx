import React from 'react'
import'./Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "41fea1e8-8fb7-49ae-ad91-526b549acb77");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send Us A Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel ex maxime, aperiam officia quis aliquid odit explicabo harum rerum molestias nostrum autem consequuntur repellendus velit repellat ea similique illum.</p>
        
            <ul>
            <li><img src={mail_icon} alt="" />dummymail@dummy.com</li>
            <li><img src={phone_icon} alt="" />+91 87534-32890</li>
            <li><img src={location_icon} alt="" />Address, City, State, IN</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                <label>Write Your Message</label>
                <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                <button type = 'submit' className='btn dark-btn'>SUBMIT <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact