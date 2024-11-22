import React, { useEffect, useState } from 'react';
import axios from "axios";
import Logo from './images/logo2.png'; // Assuming your image is in the same directory
import { Link } from 'react-router-dom';

const Header = () => {
    const [headers, setHeaders] = useState([]);
    const [logoId, setLogoId] = useState(null);
    const [logoUrl, setLogoUrl] = useState('');

    useEffect(() => {
        let url = 'http://localhost/LP/wp-json/wp/v2/pages/';

        axios.get(url).then((response) => {
            const fetchedLogoId = response.data[0].acf.logo;
            setLogoId(fetchedLogoId);

            // Fetch the media details using the logo ID
            if (fetchedLogoId) {
                axios
                    .get(`http://localhost/LP/wp-json/wp/v2/media/${fetchedLogoId}`)
                    .then((mediaResponse) => {
                        const fetchedLogoUrl = mediaResponse.data.source_url;
                        setLogoUrl(fetchedLogoUrl);
                        //   console.log(fetchedLogoUrl);
                    })
                    .catch((error) => {
                        console.error('Error fetching media details:', error);
                    });
            }

            setHeaders(response.data);
        });
    }, []);



    return (

        <nav className="container-fluid nav">
            {headers.map((header) => (

                <div className="container cf d-flex align-items-center justify-content-between ">
                    <div className="brand">


                        <a href="https://www.artemisys.com/" target="_blank">
                            <img src={logoUrl} alt="Logo" />
                        </a>

                    </div>
                    <div className="icons">
                        <ul className="d-flex align-items-center">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about" >About Us</Link></li>
                            <li><Link to="/contact" >Contact</Link></li>
                            
                        </ul>
                    </div>
                    <div className="icons">
                        <ul className="d-flex align-items-center ">
                            <li>

                                <a
                                    href={header.acf.fb}
                                    target="_blank"
                                >
                                    <svg
                                        width={7}
                                        height={12}
                                        viewBox="0 0 7 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 0.084878V1.97854L5.73028 1.98146C4.735 1.98146 4.54322 2.4 4.54322 3.01171V4.36683H6.91403L6.60652 6.48585H4.54322V12H2.07024V6.48585H0V4.36683H2.07024V2.8039C2.07024 0.989267 3.31979 0 5.15163 0C6.02489 0 6.77846 0.0585365 7 0.084878Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={header.acf.in}
                                    target="_blank"
                                >
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 12H9.6V7.80059C9.6 6.64859 9.0918 6.00586 8.1804 6.00586C7.1886 6.00586 6.6 6.67559 6.6 7.80059V12H4.2V4.2H6.6V5.07715C6.6 5.07715 7.353 3.75586 9.0498 3.75586C10.7472 3.75586 12 4.79166 12 6.93486V12ZM1.4652 2.95254C0.655801 2.95254 0 2.29138 0 1.47598C0 0.661177 0.655801 0 1.4652 0C2.274 0 2.9298 0.661177 2.9298 1.47598C2.9304 2.29138 2.274 2.95254 1.4652 2.95254ZM0 12H3V4.2H0V12Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={header.acf.insta}
                                    target="_blank"
                                >
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_647_2095)">
                                            <path
                                                d="M8.625 11.625H3.375C1.725 11.625 0.375 10.275 0.375 8.625V3.375C0.375 1.725 1.725 0.375 3.375 0.375H8.625C10.275 0.375 11.625 1.725 11.625 3.375V8.625C11.625 10.275 10.275 11.625 8.625 11.625Z"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6 8.625C7.44975 8.625 8.625 7.44975 8.625 6C8.625 4.55025 7.44975 3.375 6 3.375C4.55025 3.375 3.375 4.55025 3.375 6C3.375 7.44975 4.55025 8.625 6 8.625Z"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9 3C9.20711 3 9.375 2.83211 9.375 2.625C9.375 2.41789 9.20711 2.25 9 2.25C8.79289 2.25 8.625 2.41789 8.625 2.625C8.625 2.83211 8.79289 3 9 3Z"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_647_2095">
                                                <rect width={12} height={12} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    
                </div>
            ))}
        </nav>


    );
}

export default Header;