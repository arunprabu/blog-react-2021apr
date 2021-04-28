// rafce
import React from 'react';

const Program = (props) => {

  console.log(props);

  /* Props 
      * are objects passed from parent comp to child comp 
      * props are read-only
  */

  //let's work with event handler
  // onClick, onMouseOver -- synthetic events
  const handleWatchIt = ($event) => { // $event -- synthetic event object
    alert('Clicked');
    console.log($event); // will give you entire trace about the event occured
  }

  return (
    <div style={{marginBottom: '10px'}}>
      <div className="card">
        <div className="card-header">
          Featured 
          <span className="badge badge-warning float-right">{props.category}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.children}</p>
          <button className="btn btn-primary" onClick={handleWatchIt}>Watch it</button>
        </div>
        <div className="card-footer text-muted">
          {props.time}
        </div>
      </div>
    </div>
  )
}

export default Program;
