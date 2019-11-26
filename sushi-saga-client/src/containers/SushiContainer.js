import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {returnFourSushis(props)}
        <MoreButton iteratorUpdater={props.iteratorUpdater} />
      </div>
    </Fragment>
  )
}

const returnFourSushis = (props) => {
  return props.sushis.slice(props.iterator, props.iterator + 4)
    .map(sushi => {
      return <Sushi plates={props.plates} key={sushi.id} sushi={sushi} updatePlates={props.updatePlates} />
    })
}
export default SushiContainer