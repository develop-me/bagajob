import React from 'react'

const FourOhFour = ({ history }) => {
    return (
        <div>
            Oops, no page exists for this route.

            <button onClick={history.goBack}>Go back</button>
        </div>
    )
}

export default FourOhFour