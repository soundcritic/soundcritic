import React, { Component } from 'react'
import axios from 'axios'

import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ThumbsUpIcon from "@material-ui/icons/ThumbUp";
import ThumbsDownIcon from "@material-ui/icons/ThumbDown"
import LoopIcon from "@material-ui/icons/Loop"

const AUDIO = document.createElement('audio')
const mod = (num, m) => ((num % m) + m) % m

const skip = (interval, { trackList, currentTrack }) => {
    let idx = trackList.map(song => song.id).indexOf(currentTrack.id)
    idx = mod(idx + interval, trackList.length)
    const next = trackList[idx]
    return [next, trackList]
}

import PropTypes from 'prop-types'

const styles = theme => ({
    container: {
        height: '100vh !important',
        display: 'flex',
        alignItems: 'center'
    },
    card: {
        width: '50%',
        backgroundColor: 'orange',
        margin: '0 auto'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: '-webkit-center'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '150px',
        height: '150px',
        margin: '5px'

    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingLeft: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    likeDislike: {
        display: 'flex',
        justifyContent: 'space-evenly',
    }
})

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTrack: {},
            trackList: [],
            isPlaying: false,
            currentTrackId: 0,
        }
    }

    shuffleTracks(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    play = (song, trackList) => {
        AUDIO.src = song.audioPath
        AUDIO.load()
        AUDIO.play()
        this.setState({
            currentTrackId: song.id,
            isPlaying: true,
            trackList
        })
    }

    pause = () => {
        AUDIO.pause()
        this.setState({
            isPlaying: false
        })
    }

    forward = () => {
        const { currentTrackId, trackList } = this.state
        const current = trackList.map(track => track.id).indexOf(currentTrackId)
        const next = current + 1

        if (next > trackList.length) {
            AUDIO.pause()
            AUDIO.src= ''
            this.setState({
                isPlaying: false,
                currentTrackId: 0,
                trackList: []
            })
        } else {
            AUDIO.pause()
            this.play(trackList[next], trackList)
            this.setState({
                currentTrackId: next,
                currentTrack: trackList[next]
            })
        }
    }

    async componentDidMount() {
        try {
            let { data } = await axios.get('/api/tracks')
            const rand = Math.ceil(Math.random() * Math.floor(data.length + 1))
            data = this.shuffleTracks(data)

            this.setState({
                currentTrack: data[rand],
                trackList: data
            })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        const { classes } = this.props
        const { currentTrack , isPlaying, trackList} = this.state
        console.log(currentTrack)
        
        if (!currentTrack.album) return <div />

        return (
            <div className={classes.container}>

                <Card className={classes.card}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                90%
                        </Typography>
                            <CardMedia
                                className={classes.cover}
                                image={currentTrack.album.artworkPath}
                            />

                            <Typography component="h5" variant="h5" title={currentTrack.album.title}>
                                {currentTrack.album.title}
                                </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {currentTrack.artist.name}
                                </Typography>
                        </CardContent>
                    </div>

                    <div className={classes.controls}>
                        <IconButton aria-label="Loop" >
                        <LoopIcon title='Repeat song' />
                        </IconButton>
                        {!isPlaying ? <IconButton aria-label="Play/pause">
                            <PlayArrowIcon title='Play' className={classes.playIcon} onClick={() => this.play(currentTrack, trackList)} />
                        </IconButton> :
                        <IconButton aria-label="Play/pause">
                        <PauseIcon title='Pause/Resume' className={classes.playIcon} onClick={() => this.pause()} />
                    </IconButton>
                    }
                        <IconButton aria-label="Next">
                           <SkipNextIcon onClick={() => this.forward()} title='Next' />
                        </IconButton>
                    </div>
                    <hr />
                    <div className={classes.likeDislike}>
                        <IconButton>
                            <ThumbsUpIcon />
                        </IconButton>
                        <IconButton>
                            <ThumbsDownIcon />
                        </IconButton>
                    </div>
                </Card>
            </div>
        )
    }
}


export default withStyles(styles, { withTheme: true })(Player)
