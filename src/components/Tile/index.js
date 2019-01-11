import React from 'react';
import "./style.css";

function Tile(props) {
    let text = "";
    if(props.color){
        if(props.color === "green"){
            text = "Triangle";
        }
        else if(props.color === "blue"){
            text = "Circle";
        }
        else{
            text = "Square";
        }
    }
    return (
      <div 
      style={{backgroundColor: props.color}}
      className="col-3 border border-dark text-center p-5 tile"
      onClick={() => props.click({x: props.xIndex, y: props.yIndex})}
      >
        { text }
      </div>
    )

}

export default Tile;