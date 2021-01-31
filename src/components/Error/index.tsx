import React from 'react'

interface ErrorProps {
    message: string
}

const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <p color="red">An error occurred: {message}</p>
    )
}

export default Error