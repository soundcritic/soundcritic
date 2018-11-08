
import React, { Component } from 'react'
import Player from './Player'

const AUDIO = document.createElement('audio')
const mod = (num, m) => ((num % m) + m) % m

const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id)
  idx = mod(idx + interval, currentSongList.length)
  const next = currentSongList[idx]
  return [next, currentSongList]
}

// The stateful Audio component

export default class Audio extends Component {
  constructor () {
    super()
    this.state = {
      currentSong: {},
      currentSongList: [],
      isPlaying: false
    }

    this.toggle = this.toggle.bind(this)
    this.toggleOne = this.toggleOne.bind(this)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  componentDidMount () {
    AUDIO.addEventListener('ended', () => this.next())
  }

  play () {
    AUDIO.play()
    this.setState({isPlaying: true})
  }

  pause () {
    AUDIO.pause()
    this.setState({isPlaying: false})
  }

  load (currentSong, currentSongList) {
    AUDIO.src = currentSong.audioUrl
    AUDIO.load()
    this.setState({
      currentSong: currentSong,
      currentSongList: currentSongList
    })
  }

  startSong (song, list) {
    this.pause()
    this.load(song, list)
    this.play()
  }

  toggleOne (selectedSong, selectedSongList) {
    if (selectedSong.id !== this.state.currentSong.id) {
      this.startSong(selectedSong, selectedSongList)
    } else {
      this.toggle()
    }
  }

  toggle () {
    if (this.state.isPlaying) this.pause()
    else this.play()
  }

  next () {
    this.startSong(...skip(1, this.state))
  }

  prev () {
    this.startSong(...skip(-1, this.state))
  }

  render () {
    return (
      <Main
        {...this.state}
        prev={this.prev}
        next={this.next}
        toggleOne={this.toggleOne}
        toggle={this.toggle}
      />
    )
  }
