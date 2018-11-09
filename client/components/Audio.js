
import React, { Component } from 'react'
import Player from './Player'

const AUDIO = document.createElement('audio')
const mod = (num, m) => ((num % m) + m) % m

const skip = (interval, { trackList, currentTrack }) => {
    let idx = trackList.map(song => song.id).indexOf(currentTrack.id)
    idx = mod(idx + interval, trackList.length)
    const next = trackList[idx]
    return [next, trackList]
}

// The stateful Audio component

export default class Audio extends Component {
    constructor() {
        super()
        this.state = {
            currentTrack: {},
            trackList: [],
            isPlaying: false
        }

        this.toggle = this.toggle.bind(this)
        this.toggleOne = this.toggleOne.bind(this)
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

   /*  componentDidMount() {
        AUDIO.addEventListener('ended', () => this.next())
    } */

    play() {
        AUDIO.play()
        this.setState({ isPlaying: true })
    }

    pause() {
        AUDIO.pause()
        this.setState({ isPlaying: false })
    }

    load(currentTrack, trackList) {
        AUDIO.src = currentTrack.audioUrl
        AUDIO.load()
        this.setState({
            currentTrack,
            trackList
        })
    }

    startSong(song, list) {
        this.pause()
        this.load(song, list)
        this.play()
    }

    toggleOne(selectedSong, selectedSongList) {
        if (selectedSong.id !== this.state.currentTrack.id) {
            this.startSong(selectedSong, selectedSongList)
        } else {
            this.toggle()
        }
    }

    toggle() {
        if (this.state.isPlaying) this.pause()
        else this.play()
    }

    next() {
        this.startSong(...skip(1, this.state))
    }

    prev() {
        this.startSong(...skip(-1, this.state))
    }

    render() {
        console.log(this.currentTrack)
        return (
            <Player
                {...this.state}
                prev={this.prev}
                next={this.next}
                toggleOne={this.toggleOne}
                toggle={this.toggle}
            />
        )
    }
}

