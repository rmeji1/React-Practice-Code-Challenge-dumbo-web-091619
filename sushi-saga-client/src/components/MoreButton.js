import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.iteratorUpdater()}>
            More sushi!
          </button>
}

export default MoreButton