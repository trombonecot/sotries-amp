import React from 'react';
import AmpStoryPage from './AmpStoryPage';
import AmpStoryPageCover from './AmpStoryPageCover';

class AmpStory extends React.Component {

  createAmpStoryPages(files) {
    return files.map(this.createAmpStoryPage);
  }

  createAmpStoryPage(file, index) {
    return <AmpStoryPage key={file} file={file} index={index}/>;
  }

  render() {
    return (
      <amp-story standalone
                publisher-logo-src="logo512.png"
                poster-portrait-src="assets/cover.jpg">
                  
        <AmpStoryPageCover />

        {this.createAmpStoryPages(this.props.files)}

      </amp-story>
    );
  }
}

export default AmpStory;
