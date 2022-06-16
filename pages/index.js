export default function Home() {
    function handleClick() {
        if (typeof window !== 'undefined') {
            window.open(
                'https://survey.napier.ac.uk/n/Kali2024.aspx',
                '_system'
            );
        }
    }
    function handleClick2() {
        if (typeof window !== 'undefined') {
            window.document.location.assign(
                'https://survey.napier.ac.uk/n/Kali2024.aspx'
            );
        }
    }
    return (
        <>
            <button onClick={handleClick}>Button open</button>
            <button onClick={handleClick2}>Button open 2</button>
            <a
                href="https://survey.napier.ac.uk/n/Kali2024.aspx"
                target="_blank"
            >
                Open Link Survey
            </a>
        </>
    );
}
