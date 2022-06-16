export default function Home() {
    function handleClick() {
        if (typeof window !== 'undefined') {
            window.open(
                'https://survey.napier.ac.uk/n/Kali2024.aspx',
                '_blank'
            );
        }
    }
    return (
        <>
            <button onClick={handleClick}>Button open</button>
            <a
                href="https://survey.napier.ac.uk/n/Kali2024.aspx"
                target="_blank"
            >
                Open Link Survey
            </a>
        </>
    );
}
