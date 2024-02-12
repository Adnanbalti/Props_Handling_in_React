let ErrorMessage = ({ items }) => {

    return (
        <>
        {items.length === 0 && <h4>I am hungry</h4>}
        </>
    );
}

export default ErrorMessage;