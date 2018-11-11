import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

const styles = theme => ({
  title: {
    marginTop: '10px',
    color: 'azure'
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

class PopularityMap extends PureComponent {
  constructor() {
    super()
    this.state = {
      likesClicked: false,
      disLikesClicked: false
    }
  }

  onMarkerClick = evt => {
    console.log(evt.payload)
  }

  handleLikesClicked = () => {
    this.setState({likesClicked: true, disLikesClicked: false})
  }

  handleDislikesClicked = () => {
    this.setState({likesClicked: false, disLikesClicked: true})
  }

  render() {
    const getProvider = (x, y, z) =>
      `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`
    const {classes} = this.props
    console.log('--------', this.props)
    const {disLikesClicked} = this.state
    const mapConfig = {
      center: [41.850033, -87.6500523],
      zoom: 4
    }
    // if(likes.length === 0 || dislikes.length === 0){
    //   return <div/>
    // }
    const PigeonMarkersLikes = this.props.allLikes.map(marker => (
      <Marker
        key={marker.id}
        anchor={marker.latlong}
        payload={1}
        onClick={this.onMarkerClick}
      />
    ))
    const PigeonMarkersDislikes = this.props.allDislikes.map(marker => (
      <Marker
        key={marker.id}
        anchor={marker.latlong}
        payload={1}
        onClick={this.onMarkerClick}
      />
    ))

    return (
      <div>
        <div>
          <Typography component="h5" variant="h5" className={classes.title}>
            Popularity By Region
          </Typography>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.handleLikesClicked}
            >
              Likes
            </Button>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.handleDislikesClicked}
            >
              Dislikes
            </Button>
          </div>
        </div>
        <div>
          <Map
            width={800}
            height={600}
            defaultCenter={mapConfig.center}
            defaultZoom={mapConfig.zoom}
            provider={getProvider}
          >
            {disLikesClicked ? PigeonMarkersLikes : PigeonMarkersDislikes}
          </Map>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  const {allTracks, oneTrack, allLikes, allDislikes} = state
  return {
    allTracks,
    oneTrack,
    allLikes,
    allDislikes
  }
}

export default connect(mapState)(withStyles(styles)(PopularityMap))
