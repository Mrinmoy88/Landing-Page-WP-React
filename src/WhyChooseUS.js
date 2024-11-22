import React, { useEffect, useState } from 'react';
import axios from "axios";


const WhyChooseUs = () => {

    const [choose, setChoose] = useState([]);


    useEffect(() => {
        let url = 'http://localhost/LP/wp-json/wp/v2/pages/9';
        axios.get(url).then((response) => {

            const points = response.data.acf.why_choose_us || [];
            setChoose(points);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <section className="choose" id="choose">
            <div className="container">
                <h2>Why Choose Us</h2>
                <ul>
                    {choose.map((point) => (
                        <li>{point.points}</li>
                    ))}

                </ul>
            </div>
        </section>
    );
}

export default WhyChooseUs;