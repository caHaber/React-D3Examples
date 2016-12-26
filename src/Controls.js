// Scatterplot
import React from 'react';
import './Controls.css';
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
				{this.props.chartType === 'ScatterPlot' &&
                    <SelectField
                        floatingLabelText="X Axis Variable"
                        value={this.props.xVar}
                        onChange={this.props.changeX}
                    >
                        <MenuItem value={'Income'} primaryText="Income" />
                        <MenuItem value={'Expenditure'} primaryText="Expenditure" />
						<MenuItem value={'Population'} primaryText="Population" />
                    </SelectField>
				}
                    <SelectField
                        floatingLabelText="Y Axis Variable"
                        value={this.props.yVar}
                        onChange={this.props.changeY}
                    >
					<MenuItem value={'Income'} primaryText="Income" />
					<MenuItem value={'Expenditure'} primaryText="Expenditure" />
					<MenuItem value={'Population'} primaryText="Population" />

					</SelectField>
					<SelectField
                        floatingLabelText="Type of Chart"
                        value={this.props.chartType}
                        onChange={this.props.changeChart}
                    >
					<MenuItem value={'ScatterPlot'} primaryText="ScatterPlot" />
					<MenuItem value={'BarChart'} primaryText="BarChart" />
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
