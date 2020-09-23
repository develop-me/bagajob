import React from 'react'
import Nav from './Nav'

const FourOhFour = ({ history }) => {
    return (
        <> <nav />
        <div>
            Oops, no page exists for this route.
            <button onClick={history.goBack}>Go back</button>
        </div> </>
    )
}

export default FourOhFour