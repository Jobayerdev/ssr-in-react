import React from 'react'

const HomePage = () => {
    return (
        <main>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <h1>This is Home Page </h1>
            <button onClick={ () => {
                console.log('I am Called')
            } }>Press me!</button>
        </main>
    )
}

export default HomePage
