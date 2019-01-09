import React from 'react'

function Tile(props) {
    return (
      <div style={{backgroundColor: props.color}} className="col-2 border border-dark text-center p-4">
        { props.children }
      </div>
    )

}

export default Tile;