import React, { Component } from 'react';

class TrendingShows extends Component {

  state = {
    showsList: [
      { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: false },
      { id: 2, name: 'IPL 2021', host: 'Ganguly', isInWatchList: false},
      { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
      { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
    ]
  };

  handleAddToWatchlist(index){
    console.log(index);
    
    // working with state immutably 
    let items = [ ...this.state.showsList ]; // duplicating array using es2015 spread operator
    items[index].isInWatchList = !items[index].isInWatchList; // changing inwatchlist based on index
    this.setState({showsList: items});
  }

  render() {

    let trendingShowsList = null;
    if( this.state.showsList && this.state.showsList.length > 0 ) {

      // loop thru showsList by ES2015's map 
      trendingShowsList = this.state.showsList.map( (show, index) => {
        return (
          <li className='list-group-item' key={index + 1}>
            #{show.id}. {show.name} - hosted by {show.host}
            <button type="button" 
              className="btn btn-primary btn-sm float-right" 
              onClick={this.handleAddToWatchlist.bind(this, index)}>
              { show.isInWatchList? 'In Watchlist': 'Add to Watchlist'}
            </button>
          </li>
        )
      });
    }
    

    return (
      <div>
        <h2>Trending Shows | Lists and Keys Demo</h2>
        <ul className="list-group">
          { /* will have conditionals */  }
          {
            this.state.showsList && this.state.showsList.length > 0 ? 
            trendingShowsList :
            <div className='alert alert-warning'>
              No Trending Shows Found!
            </div>
          }
        </ul>
      </div>
    )
  }
}

export default TrendingShows;