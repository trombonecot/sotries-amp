import React from 'react';

class AmpStoryPage extends React.Component {

  render() {
    return (
      <amp-story-page id="cover" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <amp-img src="content/cuc.jpg"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>El més petit de tots</h1>
          <p>CUC</p>
        </amp-story-grid-layer>
      </amp-story-page>
    );
  }

}

export default AmpStoryPage;
