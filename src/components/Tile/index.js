import React from 'react';
import "./style.css";

function Tile(props) {
    return (
      <div 
      style={{backgroundColor: props.color}}
      className="col-2 border border-dark text-center p-4 tile"
      onClick={() => props.click({x: props.xIndex, y: props.yIndex})}
      >
        { props.shape }
      </div>
    )

}

export default Tile;