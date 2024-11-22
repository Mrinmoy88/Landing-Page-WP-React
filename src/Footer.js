import React, { useEffect, useState } from 'react';
import axios from "axios";

const Footer = () => {
  const [copy, setCopy] = useState([]);

    useEffect(() => {
        let url = 'http://localhost/LP/wp-json/wp/v2/pages/9';
        axios.get(url).then((response) => {
            // const keyword = response.data;
            const keyword = response.data.acf.copyright_text || [];
            setCopy(keyword);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    // console.log('copyright Text:'+ copy);
  return ( 
    <footer>
        <p dangerouslySetInnerHTML={{ __html: copy }}></p>
    </footer>
   );
}
 
export default Footer;