import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
      //headers: {
      //Authorization: 'Client-ID HPFwWofBipHPKeYHRE0W1F7SFzwSiphZtK39lDQG2Rg',
      //},
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
