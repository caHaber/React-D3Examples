// Application
import React from 'react';
import * as d3 from 'd3';
import './App.css';
import ScatterPlotComponent from './ScatterPlotComponent'
import BarChartComponent from './BarChartComponent'
import Controls from './Controls';

var App = React.createClass({
    getInitialState() {
        return {
            data:[],
            xVar:'Income',
            yVar:'Expenditure',
            idVar:'State',
            search:'',
            chartType: 'BarChart'
        }
    },
    componentWillMount() {
        // Get data
        d3.csv('data/prepped_dataPop.csv', function(data){
            this.setState({data:data})
        }.bind(this))
    },
    changeX(event, index, value) {
        this.setState({xVar:value})
    },
    changeY(event, index, value) {
        this.setState({yVar:value})
    },
    search(event) {
        this.setState({search:event.target.value.toLowerCase()})
    },
    changeChart(event, index, value){
        this.setState({chartType:value})
    },
	render() {
        // Prep data
        let chartData = this.state.data.map((d) => {
            let selected = d[this.state.idVar].toLowerCase().match(this.state.search) !== null;
            return {
                x:d[this.state.xVar],
                y:d[this.state.yVar],
                id:d[this.state.idVar],
                selected:selected
            }
        }).filter((d) => { return d.selected });

        let titleMap = {
            Expenditure:'Expenditure',
            Income:'Income',
            Population: 'Population'
        };

        let titles = {
            x:titleMap[this.state.xVar],
            y:titleMap[this.state.yVar]
        };

		// Return ScatterPlot element
		return (
            <div>
                <h1 className="header">Sample States Education Exp, with pop</h1>
                <Controls
                    changeX={this.changeX}
                    changeY={this.changeY}
                    xVar={this.state.xVar}
                    yVar={this.state.yVar}
                    search={this.search}
                    chartType={this.state.chartType}
                    changeChart={this.changeChart}
                />
            {this.state.chartType === 'ScatterPlot' &&
                    <div className="App">
                        <ScatterPlotComponent
                            xTitle={titles.x}
                            yTitle={titles.y}
                            search={this.state.search}
                            data={chartData}
                            width={window.innerWidth * .7}
                            height={window.innerHeight - 220} />
                    </div>
            }
            {this.state.chartType === 'BarChart' &&
                <div className="App">
                    <BarChartComponent
                        xTitle={titles.x}
                        yTitle={titles.y}
                        search={this.state.search}
                        data={chartData}
                        width={window.innerWidth * .7}
                        height={window.innerHeight - 220} />
                </div>
            }

            </div>
		);
	}
});

export default App;
