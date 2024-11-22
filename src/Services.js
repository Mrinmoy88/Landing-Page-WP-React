import React, { useEffect, useState } from 'react';
import axios from "axios";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        let url = 'http://localhost/LP/wp-json/wp/v2/service';
        axios.get(url).then((response) => {
            setServices(response.data);
        })
    }, []);
    // console.log('Serives:', services);

    return (
        <section className="service-main">
          
            <div className="container text-center ">
                <h2 className="heading">Our Services</h2>
                <div className="row g-3 ">
                    {services.map((service) => (
                        <div className="col-lg-4 col-md-6" key={service.id}>
                            <div className="services">
                                <a href="#">
                                    <div className="services-icon" dangerouslySetInnerHTML={{ __html: service.acf.icon }}>
                                        
                                    </div>
                                    <h3>01</h3>
                                    <h4 dangerouslySetInnerHTML={{ __html: service.title.rendered.replace(/&amp;/g, '&') }}></h4>
                                    <p dangerouslySetInnerHTML={{ __html: service.content.rendered }}></p>
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="from-btn">
                    <a href="#contact">START YOUR PROJECT</a>
                </div>
            </div>
        </section>
    );
}

export default Services;