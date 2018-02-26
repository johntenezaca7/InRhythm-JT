import React from "react";
import moment from "moment";

const Info = props => {
  let date = props.info.releaseDate;
  date = date.slice(0, 10);
  date = moment(date).format("MMMM DD, YYYY");

  return (
    <div className="album-box">
      <img src={props.info.artworkUrl100} className="alb-img" alt={props.info.artistName} />
      <div className="album-info">
        <div>
          <u>{props.info.collectionName}</u>
        </div>
        <div className="small">{props.info.primaryGenreName}</div>
        <div className="small">Track Count: {props.info.trackCount}</div>
        <div className="small">${props.info.collectionPrice}</div>
        <div className="small">{date}</div>
        <div className="small">{props.info.country}</div>
      </div>
    </div>
  );
};

export default Info;
