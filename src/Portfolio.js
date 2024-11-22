import React, { useEffect, useState } from 'react';
import axios from "axios";


const Portfolio = () => {

    const [ports, setPorts] = useState([]);
    const [ispending, SetIspending] = useState(true);

    useEffect(() => {

      setTimeout(() => {

        const fetchPorts = async () => {
            try {
                const url = 'http://localhost/LP/wp-json/wp/v2/portfolio';
                const response = await axios.get(url);

                // Fetch media for each portfolio item
                const portsWithMedia = await Promise.all(
                    response.data.map(async (portfolioItem) => {
                        if (portfolioItem.featured_media) {
                            const mediaResponse = await axios.get(
                                `http://localhost/LP/wp-json/wp/v2/media/${portfolioItem.featured_media}`
                            );

                            // Add the media data to the portfolio item
                            return {
                                ...portfolioItem,
                                featured_media_url: mediaResponse.data.source_url,
                            };
                        }

                        return portfolioItem;
                    })
                );

                setPorts(portsWithMedia);
            } catch (error) {
                console.error('Error fetching portfolio:', error);
            }
        };

        fetchPorts();
        SetIspending(false);
        
      }, 3000); 

    }, []);

    // console.log('Ports:', ports);

    return (
        <div className="container-fluid portfolio" id="portfolio">
            <div className="container">
                <h2>Our Portfolio</h2>
                <div className="gallery row">
                    {ispending && <div> <b>Loading...</b> </div>}
                    {ports.map((portfolioItem) => (

                        <div className="col-lg-4 col-md-6  gallery-image" key={portfolioItem.id} id={portfolioItem.id}><img src={portfolioItem.featured_media_url} alt={portfolioItem.title.rendered} /></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;