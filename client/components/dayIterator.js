import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchOneTrackSelector,
  fetchAllTracks,
  postLike,
  postDislike
} from '../store'
import axios from 'axios'

function genLatLong() {
  const top = 49.3457868 //# north lat
  const bottom = 24.7433195 //# south lat

  const left = -124.7844079 //# west long
  const right = -66.9513812 //# east long

  let lat = Math.random() * (top - bottom) + bottom
  let long = Math.random() * (right - left) + left
  let arr = [lat, long]
  return arr
}

class DayIterator extends Component {
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
  } //
  dayIterator = async () => {
    for (let i = 0; i < 20; i++) {
      //select a track with selector thunk
      let numOfTracks = this.props.allTracks.length
      this.props.fetchOneTrackSelector(numOfTracks)

      //choose to like or dislike
      const randomNumber = Math.ceil(Math.random() * Math.floor(100))
      const latlong = genLatLong()
      let data = {
        latlong: latlong,
        track: this.props.oneTrack
      }
      console.log(randomNumber)
      if (randomNumber > 40) {
        //POST like
        //this.props.postLike(data)
        await axios.post('/api/likes', data)
      } else {
        //POST dislike
        await axios.post('/api/dislikes', data)
        //this.props.postDislike(data)
      }
    }
  }

  render() {
    return (

        <button type="button" onClick={() => this.dayIterator()}>
          Iterate Day
        </button>

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

export default connect(mapState, {
  fetchOneTrackSelector,
  fetchAllTracks,
  postLike,
  postDislike
})(DayIterator)
