import React from 'react';

const Button = (props) => {
    const message = props.data.message;
    return(
        <button onClick={()=> alert(message)}>Click Here</button>
    );
}

export default Button;