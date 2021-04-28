// Class Comp  -- rcc
import React, { Component } from 'react';

class ChannelList extends Component {

  constructor(){
    super();
    console.log('Inside Constructor');

    // var, let, const -- private properties and 'this' keyword for public variables 

    // component level data -- states 
    // states are available in class comp -- after react 16.8 -- available in functional comp
    this.state = {
      channelList: [
        { channelName: 'Star Sports', desc: '#1 sports channel'},
        { channelName: 'HBO', desc: 'Entertainment channel'},
        { channelName: 'NatGeo', desc: 'Infotainment channel'},
      ],
      channelManager: 'Arun'
    };

  }


  handleAddToFav = () => {
    console.log('Before changing the state');
    // to update the state you have to use setState()
    // setState will re-render the comp UI
    // setState is expensive -- it will result in re-rendering of the UI
    // only if needed you change the state.
    // setState will merge the changes with the properties of the state obj
    this.setState({
      channelList: [
        { channelName: 'Star Sports [Added]', desc: '#1 sports channel'},
        { channelName: 'HBO', desc: 'Entertainment channel'},
        { channelName: 'NatGeo', desc: 'Infotainment channel'},
      ]
    });


  }


  render() {
    
    console.log('Inside Render');

    console.log(this.props); // you can receive props from parent comp

    console.log(this.state);

    // returning JSX
    return (
      <div className='text-left'>
        <p>Channel Manager: {this.state.channelManager}</p>
        <div className="row">

          <div className='col-md-3' >
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." />
                <h5 className="card-title">{this.state.channelList[0].channelName}</h5>
                <p className="card-text">{this.state.channelList[0].desc}</p>
                <button type="button"
                  className="btn btn-primary float-right"
                  onClick={this.handleAddToFav}>
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-3' >
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." />
                <h5 className="card-title">{this.state.channelList[1].channelName}</h5>
                <p className="card-text">{this.state.channelList[1].desc}</p>
                <button type="button"
                  className="btn btn-primary float-right"
                  onClick={this.handleAddToFav}>
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-3' >
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." />
                <h5 className="card-title">{this.state.channelList[2].channelName}</h5>
                <p className="card-text">{this.state.channelList[2].desc}</p>
                <button type="button"
                  className="btn btn-primary float-right"
                  onClick={this.handleAddToFav}>
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }

}

export default ChannelList;