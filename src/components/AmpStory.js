import React from 'react';
import AmpStoryPage from './AmpStoryPage';

function AmpStory() {
  return (
    <amp-story standalone
        title="Joy of Pets"
        publisher="AMP tutorials"
        publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
        poster-portrait-src="assets/cover.jpg">
       
       <AmpStoryPage />
       <AmpStoryPage />
       <AmpStoryPage />
    
    </amp-story>
  );
}

export default AmpStory;
