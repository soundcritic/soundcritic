import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOneTrackSelector, fetchAllTracks, oneTrack, allTracks } from '../store'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ThumbsUpIcon from "@material-ui/icons/ThumbUp";
import ThumbsDownIcon from "@material-ui/icons/ThumbDown"
import LoopIcon from "@material-ui/icons/Loop"

const AUDIO = document.createElement('audio')

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
            isPlaying: false,
        }
    }

    play = (song) => {
        AUDIO.src = song.audioPath
        AUDIO.load()
        AUDIO.play()
        this.setState({
            isPlaying: true,
        })
    }

    pause = () => {
        AUDIO.pause()
        this.setState({
            isPlaying: false
        })
    }

    forward = async () => {
        if (this.state.isPlaying) {
            AUDIO.pause()
            await this.props.fetchOneTrackSelector(44)
            const newSong = this.props.oneTrack
            this.play(newSong)
        }
    }

    async componentDidMount() {
        try {
            const { fetchAllTracks } = this.props
            await fetchAllTracks()
            await this.props.fetchOneTrackSelector(44)
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        console.log(this.props)
        const { classes, oneTrack } = this.props
        const { isPlaying, trackList } = this.state

        if (!oneTrack.id) return <div />

        return (
            <div className={classes.container}>

                <Card className={classes.card}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {`${oneTrack.rating}%`}
                            </Typography>
                            <CardMedia
                                className={classes.cover}
                                image={oneTrack.album.artworkPath}
                            />
                            <Typography component="h5" variant="h5" title={oneTrack.album.title}>
                                {oneTrack.album.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {oneTrack.artist.name}
                            </Typography>
                        </CardContent>
                    </div>

                    <div className={classes.controls}>
                        <IconButton aria-label="Loop" >
                            <LoopIcon title='Repeat song' />
                        </IconButton>
                        {!isPlaying ? <IconButton aria-label="Play/pause">
                            <PlayArrowIcon title='Play' className={classes.playIcon} onClick={() => this.play(oneTrack, trackList)} />
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


const mapState = state => {
    const { allTracks, oneTrack } = state
    return {
        allTracks,
        oneTrack
    }
}

export default connect(
    mapState,
    { fetchOneTrackSelector, fetchAllTracks }
)(withStyles(styles, { withTheme: true })(Player))
