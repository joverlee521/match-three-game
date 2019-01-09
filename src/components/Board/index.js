import React, { Component } from 'react'
import Tile from "../Tile";

const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

export default class GameBoard extends Component {
    state = {
        tile: [
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', '']
        ]
    }

    randomColor = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        const colors = ["Red", "Green", "Blue"];
        return colors[randomNumber];
    }

    render() {
        return (
            <div style={containerStyle} className="container">
                <div className="row border border-dark">
                    {this.state.tile.map((row, xIndex) => {
                        return row.map((col, yIndex) => {
                            const color = this.randomColor();
                            return (
                                <Tile color={color} xkey={`${xIndex}`} ykey={`${yIndex}`}>
                                    <p>{color}</p>
                                    <p>x:{xIndex} y:{yIndex}</p>
                                </Tile>
                            );
                        })
                    })}
                </div>
            </div>
        )
    }
}
