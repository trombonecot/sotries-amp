import React from 'react';
import './App.css';
import AmpStory from './components/AmpStory';

const getFileList = () => {
  const url = '/content/files.json';

  return fetch(url).then((response) => response.json()).then((result) => {
    return result.files;
  })
}

class App extends React.Component {

  state = {
    files: []
  }


  componentDidMount() {
    getFileList().then(files => {
      this.setState({
        files: files
      })
    });
  }


  render() {

    if (this.state.files.length === 0 ) {
      return <div>Videos not loaded</div>
    } 


    return (
        <AmpStory files={this.state.files}/>
    );
  }
  
}

export default App;
