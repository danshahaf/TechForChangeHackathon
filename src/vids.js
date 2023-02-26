import React from 'react';
import './VideoContainer.css';

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video1: null
    };
  }

  componentDidMount() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      this.setState({
        video1: new window.YT.Player('video1', {
          videoId: 'PajchobBI9k',
          height: '315',
          width: '560'
        }),
      });
    };
  }

  render() {
    return (
      <div className="container">
        <h2>Why Don't People Vote?</h2>
        <div className="video" id="video1"></div>
        <div className="video" id="video2"></div>
      </div>
    );
  }
}

export default VideoContainer;
