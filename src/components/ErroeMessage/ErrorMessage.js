const ErrorMessage = ({ chlidren }) => {
    return (
        <div style={{
                width:"100%",
                padding: 10,
                marginBottom:10,
                borderRadius:4,
                backgroundColor:"orangered",
                textAlign:"center",
                color:"white",
                textTransform:"capitalize",
            }}
        >
            <h1>{chlidren}</h1>
        </div>
    );
};
export default ErrorMessage;