import { useState } from 'react';

export default function Home() {
    const [userData, setuserData] = useState('');
    const [onInstagram, setOnIstagram] = useState(false);
    const [onFacebook, setFnFacebook] = useState(false);
    function getUserData() {
        console.log(navigator.userAgent);
        setuserData(navigator.userAgent);
        if (userData.indexOf('Instagram') !== -1) {
            setOnIstagram(true);
        }
        if (userData.indexOf('Facebook') !== -1) {
            setFnFacebook(true);
        }
    }
    function handleclick() {
        window.open(
            'https://survey.napier.ac.uk/n/Kali2024.aspx ',
            '_system',
            'location=yes'
        );
    }
    return (
        <>
            <button onClick={getUserData}>Display user data</button>

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

            <div>
                {onInstagram && (
                    <button onClick={handleclick}>
                        instagram open browser
                    </button>
                )}
                {onFacebook && (
                    <button onClick={handleclick}>Facebook open browser</button>
                )}
            </div>
        </>
    );
}
