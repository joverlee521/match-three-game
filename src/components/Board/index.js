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
        gameStarted: false,
        tile: [
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', '']
        ],
        firstClick: {},
        secondClick: {}
    }

    randomTile = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        const tiles = [
            {shape: "square", color: "red"},
            {shape: "triangle", color: "green"},
            {shape: "circle", color: "blue"}
        ];
        return tiles[randomNumber];
    }

    startBoard = () => {
        let newState = [];
        this.state.tile.map((row, xIndex) => {
            let newRow = [];
            row.map((col, yIndex) => {
                const newTile = {};
                newTile.tileObj = this.randomTile();
                newTile.xIndex = xIndex;
                newTile.yIndex = yIndex;
                newRow.push(newTile);
            });
            newState.push(newRow);
        });
        this.setState({tile: newState, gameStarted: true});
    }

    renderBoard = () => {
        return (this.state.tile.map(row => {
            return(row.map(tile => {
                const {tileObj, xIndex, yIndex} = tile;
                return <Tile shape={tileObj.shape} color={tileObj.color} xIndex={xIndex} yIndex={yIndex} click={this.handleClicks}/>
            }));
        }));
    }

    handleClicks = (coordinates) => {
        const firstClick = this.state.firstClick;
        if(Object.keys(firstClick).length === 0){
            this.setState({firstClick: coordinates});
        }
        else{
            this.setState({secondClick: coordinates}, () => {
                this.checkSecondClick()
            });
        }
    }

    checkSecondClick = () => {
        const firstClick = this.state.firstClick;
        const secondClick = this.state.secondClick;
        if(((firstClick.x === secondClick.x) && (Math.abs(firstClick.y - secondClick.y) === 1)) || ((firstClick.y === secondClick.y) && (Math.abs(firstClick.x - secondClick.x) === 1))){
            this.switchTiles();
        }
        else{
            console.log("cannot swap tiles!");
            this.setState({firstClick: {}, secondClick: {}});
        }
    }

    switchTiles = () => {
        const tiles = this.state.tile;
        const firstClick = this.state.firstClick;
        const secondClick = this.state.secondClick;
        const firstTile = tiles[firstClick.x][firstClick.y].tileObj;
        const secondTile = tiles[secondClick.x][secondClick.y].tileObj;
        tiles[firstClick.x][firstClick.y].tileObj = secondTile;
        tiles[secondClick.x][secondClick.y].tileObj = firstTile;
        this.setState({tile: tiles, firstClick: {}, secondClick: {}});
    }

    render() {
        return (
            <div style={containerStyle} className="container">
                <div className="row border border-dark">
                    {this.state.gameStarted ? this.renderBoard() : this.startBoard() }    
                </div>
            </div>
        )
    }
}
