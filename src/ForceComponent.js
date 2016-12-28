// Force Diagram
import React from 'react';
import * as d3 from 'd3';
import './ScatterPlot.css';
import ForceDiagram from './ForceDiagram';

// Scatterplot component
var ForceComponent = React.createClass({
    componentDidMount(){
        // Define scatterplot function
        this.scatter = ForceDiagram();
        this.update();
    },
    // Create chart
    update() {
        // Update parameters
        this.scatter
            .width(this.props.width)
            .height(this.props.height)
            .log(this.props.log)
            .xTitle(this.props.xTitle)
            .yTitle(this.props.yTitle)
            .fill((d) => d.selected === true ? 'blue' : 'red');

        // Call d3 update
        d3.select(this.root)
            .datum(this.props.data)
            .call(this.scatter);
    },
    // Update on new props
    componentWillReceiveProps (props){
        this.props = props;
        this.update();
    },

	render() {
		// Expose HTML node via ref property
		return (
            <div>
                <div
                    className={this.props.log}
                />
                <div
                    className="chart"
                    width={this.props.width}
                    height={this.props.height}
                    ref={(node) => { this.root = node;}}
                />
            </div>
		);
	}
});

export default ForceComponent;
