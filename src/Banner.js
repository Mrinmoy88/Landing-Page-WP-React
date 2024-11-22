import React, { useEffect, useState } from 'react';
import axios from "axios";
import Checkpoints from './Checkpoints';
import emailjs from 'emailjs-com';

const Banner = () => {
  const [banners, setBanners] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [service, setService] = useState('');
  const [sub, setSub] = useState('');

  // Function which will validate the input data whenever submit button is clicked. 

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = { 'your-name': name, 'email': email, 'phone': tel, 'service': service, 'message': sub };
    // console.log(data);
    // fetch('http://localhost/LP//wp-json/contact-form-7/v1/contact-forms/3d5f485/feedback/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // }).then(() => {
    //    console.log('added');
    // })

    
  }

  useEffect(() => {
    // Suppress a specific warning
    // console.error = () => {};

    let url = 'http://localhost/LP/wp-json/wp/v2/pages';
    axios.get(url).then((response) => {
      setBanners(response.data);
    })

  }, []);
  // console.log('Banners:', banners);
  return (
    <>
      <div className="container-fluid splash" id="splash">
        {banners.map((banner) => (
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-6">
                <h1 dangerouslySetInnerHTML={{ __html: banner.acf.banner_heading }}></h1>
                <span className="lead" dangerouslySetInnerHTML={{ __html: banner.acf.banner_sub_heading }}></span>
              </div>
              <div className="col-lg-6">
                <div className="container-fluid contact" id="contact">
                  <div className="container">
                    <form onSubmit={handleSubmit} method='post'>
                      <h2>Let’s Get Started</h2>
                      <input type="text" placeholder="Full Name..." id="name" name="name" className="full-half" required value={name} onChange={(e) => setName(e.target.value)} />
                      <input type="email" placeholder="Email Address..." id="email" name="email" className="full-half" required value={email} onChange={(e) => setEmail(e.target.value)} />
                      <input type="tel" placeholder="Phone Number..." id="phone" name="phone" className="full-half" required value={tel} onChange={(e) => setTel(e.target.value)} />
                      <input type="text" placeholder="Request for Services?" id="service" name="service" required value={service} onChange={(e) => setService(e.target.value)} />
                      <textarea placeholder="Briefly Describe Your Project or Website..." id="message" name="message" required value={sub} onChange={(e) => setSub(e.target.value)} />
                      <input type="submit" defaultValue="SUBMIT YOUR QUERY" />
                      

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Checkpoints />
    </>

  );
}

export default Banner;