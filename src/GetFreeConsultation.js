import React, { useEffect, useState } from 'react';
import axios from "axios";

const GetFreeConsultation = () => {

    const [consults, setConsult] = useState([]);


    useEffect(() => {
        let url = 'http://localhost/LP/wp-json/wp/v2/pages/9';
        axios.get(url).then((response) => {
            // const keyword = response.data;
            const keyword = response.data.acf.ready_text || [];
            setConsult(keyword);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    // console.log('consult Text:'+ consults);

    return (
       
        <section className="last-part">
             
            <div className="container">
                <h2 dangerouslySetInnerHTML={{ __html: consults }}></h2>
                <div className="from-btn">
                    <a href="#contact">GET A FREE CONSULTATION</a>
                </div>
            </div>
           
        </section>
    );
}

export default GetFreeConsultation;