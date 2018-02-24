import React from 'react';

const Info = (props) => {
    console.log('props', props)
    return(
        <div className="album-box"> 
            <img src={props.info.artworkUrl100} alt={props.info.artistName}/>
            <div className="album-info">
                <div>{props.info.collectionName}</div>
                <div>{props.info.primaryGenreName}</div>
                <div>{props.info.trackCount}</div>
                <div>{props.info.collectionPrice}</div>
                <div>{props.info.country}</div>
                <div>{props.info.copyright}</div>
            </div>
        </div>
    )
}

export default Info;