import { useState } from 'react';

export default function Home() {
    const [userData, setuserData] = useState('');
    const [onInstagram, setOnIstagram] = useState(false);
    const [onFacebook, setFnFacebook] = useState(false);
    function handleClick() {
        console.log(navigator.userAgent);
        setuserData(navigator.userAgent);
        if (userData.indexOf('Instagram') !== -1) {
            setOnIstagram(true);
        }
        if (userData.indexOf('Facebook') !== -1) {
            setFnFacebook(true);
        }
    }

    return (
        <>
            <button onClick={handleClick}>userData</button>

            <a
                href="https://survey.napier.ac.uk/n/Kali2024.aspx"
                target="_blank"
            >
                Open Link Survey
            </a>
            <h2>userAgent:{userData}</h2>
            <br />
            <h3>On instagram? {`${onInstagram}`}</h3>
            <h3>On facebook? {`${onFacebook}`}</h3>
        </>
    );
}
