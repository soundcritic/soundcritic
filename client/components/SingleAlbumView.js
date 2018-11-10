import React from 'react'
import axios from 'axios'
import PopularityMap from "./PopularityMap";


const SingleAlbumView = (props) => {
    let album
    let likes
    let dislikes

    const getProps = async () => {
        const albumId = Number(props.match.params.id)
        const { data } = await axios.get(`/api/album/${albumId}`)
       album = data
    }
    getProps()
    console.log(album)
    return (
        <div>jnkesfj</div>
    )
}

export default SingleAlbumView