import React, { useEffect, useState } from 'react';
import axios from "axios";

const Checkpoints = () => {
    const [checkpoints, setCheckpoints] = useState([]);
    const [pointsarray, setPointsarray] = useState([]);

    useEffect(() => {
        let url = 'http://localhost/LP/wp-json/wp/v2/pages/9';
        axios.get(url).then((response) => {
            // Assuming response.data is an object with the data you want
            // setCheckpoints(response.data);

            const checkpoints_heading = response.data.acf.challenge_heading || [];
            setCheckpoints(checkpoints_heading);

            const pointsarray1 = response.data.acf.challenges_checkpoints || [];
            setPointsarray(pointsarray1);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    // console.log('Checkpoints:', checkpoints);
    return (
        <section className="Challenges" id="Challenges">
            
                <div className="container">
                    <h2 dangerouslySetInnerHTML={{ __html: checkpoints }}></h2>
                    <ul>
                        {pointsarray.map((point) => (
                            <li key={point.points}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00843D" strokeWidth='2' strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg> {point.points}
                            </li>
                        ))}

                    </ul>
                    <div className="from-btn">
                        <a href="#contact">GET A FREE CONSULTATION</a>
                    </div>
                </div>
            
        </section>
    );
}

export default Checkpoints;