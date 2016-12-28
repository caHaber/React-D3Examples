// Scatterplot
import React from 'react';
import './Controls.css';
import {deepPurple300} from 'material-ui/styles/colors';
import {MuiThemeProvider, SelectField, MenuItem, TextField} from 'material-ui';

// Needed for onTouchTap (to avoid warning from material-ui)
// See: https://github.com/callemall/material-ui/issues/4670
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// Scatterplot component
var Controls = React.createClass({



	render() {
		// Return links and show anything inside the <App> component (children)
		return (
            <MuiThemeProvider>
                <div className="controls">
					<SelectField
						floatingLabelText="Type of Chart"
						value={this.props.chartType}
						onChange={this.props.changeChart}
						floatingLabelStyle={{
							color: deepPurple300,
						 }}
					>
					<MenuItem value={'ScatterPlot'} primaryText="ScatterPlot" />
					<MenuItem value={'BarChart'} primaryText="BarChart" />
					<MenuItem value={'ForceDiagram'} primaryText="ForceDiagram" />
					</SelectField>
				{this.props.chartType === 'ScatterPlot' &&
	                    [<SelectField
							key="0"
	                        floatingLabelText="X Axis Variable"
	                        value={this.props.xVar}
	                        onChange={this.props.changeX}

	                    >
	                        <MenuItem value={'Income'} primaryText="Income" />
	                        <MenuItem value={'Expenditure'} primaryText="Expenditure" />
							<MenuItem value={'Population'} primaryText="Population" />
	                    </SelectField>,
						<SelectField
							key="1"
	                        floatingLabelText="Y Axis Variable"
	                        value={this.props.yVar}
	                        onChange={this.props.changeY}
	                    >
						<MenuItem value={'Income'} primaryText="Income" />
						<MenuItem value={'Expenditure'} primaryText="Expenditure" />
						<MenuItem value={'Population'} primaryText="Population" />

						</SelectField>]

				}
				{this.props.chartType === 'BarChart' &&

						[<SelectField
							key="0"
							floatingLabelText="X Axis Variable"
							value={this.props.xVar}
							onChange={this.props.changeX}
							disabled={true}

						>
							<MenuItem value={'Income'} primaryText="Income" />
							<MenuItem value={'Expenditure'} primaryText="Expenditure" />
							<MenuItem value={'Population'} primaryText="Population" />
						</SelectField>,
						<SelectField
							key="1"
							floatingLabelText="Y Axis Variable"
							value={this.props.yVar}
							onChange={this.props.changeY}

						>
						<MenuItem value={'Income'} primaryText="Income" />
						<MenuItem value={'Expenditure'} primaryText="Expenditure" />
						<MenuItem value={'Population'} primaryText="Population" />

						</SelectField>]
				}
				{this.props.chartType === 'ForceDiagram' &&

						[<SelectField
							key="0"
							floatingLabelText="X Axis Variable"
							value={this.props.xVar}
							onChange={this.props.changeX}


						>
							<MenuItem value={'Income'} primaryText="Income" />
							<MenuItem value={'Expenditure'} primaryText="Expenditure" />
							<MenuItem value={'Population'} primaryText="Population" />
						</SelectField>,
						<SelectField
							key="1"
							floatingLabelText="Y Axis Variable"
							value={this.props.yVar}
							onChange={this.props.changeY}
							disabled={true}

						>
						<MenuItem value={'Income'} primaryText="Income" />
						<MenuItem value={'Expenditure'} primaryText="Expenditure" />
						<MenuItem value={'Population'} primaryText="Population" />

						</SelectField>]
				}


					<SelectField
						floatingLabelText="Filter Type"
						value={this.props.searchType}
						onChange={this.props.changeFilter}
					>
					<MenuItem value={'color'} primaryText="color nodes" />
					<MenuItem value={'erase'} primaryText="remove nodes" />
					</SelectField>

                    <br/>
                    <TextField
                        hintText="Find a state"
                        onChange={this.props.search}
                    />
                </div>
            </MuiThemeProvider>
		);
	}
});

export default Controls;
