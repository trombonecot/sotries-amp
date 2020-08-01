import React from 'react';

class AmpStoryPage extends React.Component {

  render() {
    const path = `/content/${this.props.file}`,
      storyId = `page${this.props.index}`,
      videoId = `video${storyId}`;

    return (
      <amp-story-page id={storyId}  auto-advance-after={videoId}>
          <amp-story-grid-layer template="fill" >
            <amp-video id={videoId}  autoplay
                    width="720" height="1280"
                    poster="assets/rabbit.jpg"
                    layout="responsive">
                <source src={path} type="video/mp4" />
            </amp-video>
          </amp-story-grid-layer>
      </amp-story-page>
    );
  }

}

export default AmpStoryPage;
