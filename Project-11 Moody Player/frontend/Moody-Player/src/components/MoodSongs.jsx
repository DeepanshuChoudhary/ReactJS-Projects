import React from 'react'
import '../components/MoodSongs.css'

const MoodSongs = ({ Songs }) => {
    return (
        <div className='mood-songs'>
            <h2>Recommended Songs</h2>
            {Songs.map((song, index) => {
                return <div className='song' key={index}> 
                    <div className='title'>
                        <h3>{song.title}</h3>
                        <h3>{song.artist}</h3>
                    </div>
                    <div className='play-pause-button'>
                        <i className="ri-pause-large-line"></i>
                        <i className="ri-play-circle-fill"></i>
                    </div>
                </div>
            })}
        </div>
    )
}

export default MoodSongs