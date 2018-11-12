import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchOneTrackSelector,
  fetchAllTracks,
  postLike,
  postDislike
} from '../store'
import Button from '@material-ui/core/Button'

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
  }
  dayIterator = async () => {
    for (let i = 0; i < 50; i++) {
      //select a track with selector thunk
      let numOfTracks = this.props.allTracks.length
      await this.props.fetchOneTrackSelector(numOfTracks)
      //console.log(numOfTracks);
      //choose to like or dislike
      const randomNumber = Math.ceil(Math.random() * Math.floor(100))
      const latlong = genLatLong()
      let data = {
        latlong: latlong,
        trackData: this.props.oneTrack
      }
      // console.log(randomNumber)
      // console.log(this.props.oneTrack)
      if (this.props.oneTrack.rating < 50) {
        if (randomNumber > 50) {
          //POST like
          this.props.postLike(data)
          //genNumDislikesField(latlong)
        } else {
          //POST dislike
          this.props.postDislike(data)
        }
      }
      if (this.props.oneTrack.rating >= 50) {
        if (randomNumber > 80) {
          //POST like
          this.props.postLike(data)
          //genNumDislikesField(latlong)
        } else {
          //POST dislike
          this.props.postDislike(data)
        }
      }
    }
  }

  render() {
    return (
      <Button style={{color: 'azure'}} type="button" onClick={() => this.dayIterator()}>
        Iterate Day
      </Button>
    )
  }
}

const mapState = state => {
  const {oneTrack, allTracks, allLikes, allDislikes} = state
  return {
    oneTrack,
    allTracks,
    allLikes,
    allDislikes
  }
}

export default connect(mapState, {
  fetchOneTrackSelector,
  fetchAllTracks,
  postLike,
  postDislike
})(DayIterator)
