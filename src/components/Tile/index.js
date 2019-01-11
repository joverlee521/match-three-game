import React , { Component } from 'react';
import { Transition, animated } from "react-spring";
import "./style.css";


class Tile extends Component{
    constructor(props){
        super(props);
        this.state = { 
            color: ""
        }
    }

    componentDidMount(){
        this.setState({ color: this.props.color });
    }

    componentDidUpdate(prevProps){
        if(this.props.color !== prevProps.color){
            this.setState({ color: this.props.color });
        }
    }

    componentWillUnmount(){
        console.log("Unmounting");
    }

    updateIcon = () => {
        let iconClass = "fas "
        switch (this.state.color){
            case "green":
                return iconClass += "fa-globe";
            case "blue":
                return iconClass += "fa-tint";
            case "magenta":
                return iconClass += "fa-heart";
            case "red":
                return iconClass += "fa-fire";
            default:
                return iconClass += "fa-bookmark text-white";
        }
    }
    
    render(){
        return (
            <div 
            style={{ overflow: "hidden" }}
            className="col-3 text-center tile"
            onClick={() => this.props.click({x: this.props.xIndex, y: this.props.yIndex})}
            >
                <Transition
                    items={ this.state.color }
                    config={{ mass: 0.1, tension: 280, friction: 10, clamp: true, precision: 10 }}
                    from={{ opacity: 0, position: "relative", top: -10 }}
                    enter={{ opacity: 1, top: 10 }}
                    leave={{ opacity: 0 }}
                    >
                    {item => props => (
                        <animated.div
                            style={ props }
                            children={ <i className={ this.updateIcon() } style={{ color: item }}/> }
                        />  
                    )}
                </Transition>
            </div>
        )
    }
}

export default Tile;