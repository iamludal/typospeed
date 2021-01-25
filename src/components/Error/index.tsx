import React from 'react'

interface props {
    message: string
}

function Error(props: props) {
    const { message } = props;
    return <p color="red">An error occurred: {message}</p>
}

export default Error