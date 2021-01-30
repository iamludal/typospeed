import React from 'react'

interface props {
    message: string
}

const Error = ({ message }: props) => (
    <p color="red">An error occurred: {message}</p>
)

export default Error