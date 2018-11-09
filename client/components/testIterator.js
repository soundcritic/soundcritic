import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneTrackSelector, fetchAllTracks, postLike} from '../store'


function genLatLong() {
  const top = 49.3457868 //# north lat
  const bottom = 24.7433195 //# south lat

  const left = -124.7844079 //# west long
  const right = -66.9513812 //# east long



}


class testIterator extends Component {
  constructor(props) {
    super(props)
    this.dayIterator = this.dayIterator.bind(this)
  }
  componentDidMount() {
    try {
      this.props.fetchAllTracks()
    } catch (err) {
      console.log(err)
    }
  }
  dayIterator = () => {
    //select a track with selector thunk
    let numOfTracks = this.props.allTracks.length
    this.props.fetchOneTrackSelector(numOfTracks)

    //choose to like or dislike
    const randomNumber = Math.ceil(Math.random() * Math.floor(100))
    const latLong = genLatLong()
    if (randomNumber > 40) {
      console.log('like')

    } else {
      console.log('dislike')
    }


  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.dayIterator()}>
          Iterate Day
        </button>
      </div>
    )
  }
}

const mapState = state => {
  const {oneTrack, allTracks} = state
  return {
    oneTrack,
    allTracks
  }
}

export default connect(mapState, {fetchOneTrackSelector, fetchAllTracks})(
  testIterator
)
