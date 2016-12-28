// Scatterplot
import React from 'react';
import * as d3 from 'd3';
import './ScatterPlot.css';
import BarChart from './BarChart';

// Scatterplot component
var BarChartComponent = React.createClass({
    componentDidMount(){
        // Define scatterplot function
        this.bar = BarChart();
        this.update();
    },
    // Create chart
    update() {
        // Update parameters
        this.bar
            .width(this.props.width)
            .height(this.props.height)
            .xTitle('State')
            .yTitle(this.props.yTitle)
            .fill((d) => d.selected === true ? 'blue' : 'red');

        // Call d3 update
        d3.select(this.root)
            .datum(this.props.data)
            .call(this.bar);
    },
    // Update on new props
    componentWillReceiveProps (props){
        this.props = props;
        this.update();
    },

	render() {
		// Expose HTML node via ref property
		return (
            <div
                className="chart"
                width={this.props.width}
                height={this.props.height}
                ref={(node) => { this.root = node;}}
            />
		);
	}
});

export default BarChartComponent;
