import React from 'react';

function AmpStoryPage() {
  return (
        <amp-story-page id="cover" auto-advance-after="arctic1page">
            <amp-story-grid-layer template="fill">
            <amp-video id="arctic1page"  autoplay
                    width="720" height="1280"
                    poster="assets/rabbit.jpg"
                    layout="responsive">
                <source src="/content/7ef4a8d8-c341-48db-8071-427651c1ad57.mp4" type="video/mp4" />
            </amp-video>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical">
            <h1>The Joy of Pets</h1>
            <p>By AMP Tutorials</p>
            </amp-story-grid-layer>
        </amp-story-page>
  );
}

export default AmpStoryPage;
