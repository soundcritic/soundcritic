import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ThumbsUpIcon from "@material-ui/icons/ThumbUp";
import ThumbsDownIcon from "@material-ui/icons/ThumbDown";


import PropTypes from 'prop-types'

const styles = theme => ({
    container: {
        //backgroundColor: '#4a4a48',
        height: '100vh !important',
        display: 'flex',
        alignItems: 'center'
    },
    card: {
        //display: 'flex',
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
        //paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    likeDislike: {
        display: 'flex', 
        justifyContent: 'space-evenly',
    }
});


class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //something
        }
    }

    render() {
        const { classes, theme } = this.props;
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
                            image="https://bit.ly/2PmhsBh"
                            title="Live from space album cover"
                        />
                       
                                <Typography component="h5" variant="h5">
                                    Happy Little Trees
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Bob Ross
                                </Typography>
                            </CardContent>
                        </div>

                    <div className={classes.controls}>
                        <IconButton aria-label="Previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="Play/pause">
                            <PlayArrowIcon className={classes.playIcon} />
                        </IconButton>
                        <IconButton aria-label="Next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
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

Player.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(Player);
