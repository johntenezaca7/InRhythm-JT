import React, { Component } from "react";
import { connect } from "react-redux";
import Info from "./Info";

class Display extends Component {
  render() {
    if (this.props.data.length > 0) {
      let ogName = this.props.data[0].artistName;
      let link = this.props.data[0].artistViewUrl;
      return (
        <div>
          <div className="ArtistName">
            <a href={link}>{ogName}</a>
            <div className="border" />
          </div>
          <div className="album-Grid">
            {this.props.data.map((ele, i) => {
              if (ogName === ele.artistName) {
                return <Info info={ele} key={ele.collectionId} />;
              }
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
const mapStateToProps = state => {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps)(Display);
