import * as d3 from 'd3';
import d3tip from 'd3-tip';

var ForceDiagram = function(){
    var height = 500,
        width = 500,
        xScale = d3.scaleLinear(),
        yScale = d3.scaleLinear(),
        xTitle = 'X Axis Title',
        yTitle = 'Y Axis Title',
        fill = (d) => 'blue',
        margin = {
            left:70,
            bottom:100,
            top:0,
            right:50,
        };

        // Function returned by ScatterPlot
        var chart = function(selection) {
            // Height/width of the drawing area itself
            var chartHeight = height/2 - margin.bottom - margin.top;
            var chartWidth = width - margin.left - margin.right;

            // Iterate through selections, in case there are multiple
            selection.each(function(data){
                var ele = d3.select(this);
                var svg = ele.selectAll("svg").data([data]);

                // Append static elements (i.e., only added once)
                var gEnter = svg.enter()
                                .append("svg")
                                .attr('width', width)
                                .attr("height", height)
                                .append("g");

                // g element for markers
                gEnter.append('g')
        				.attr('transform', 'translate(' +  margin.left + ',' + margin.top + ')')
        				.attr('height', chartHeight)
        				.attr('width', chartWidth)
                        .attr('class', 'chartG');


                // Append axes to the gEnter element
                gEnter.append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + (chartHeight + margin.top) + ')')
                    .attr('class', 'axis x');



                // Add a title g for the x axis
                gEnter.append('text')
                    .attr('transform', 'translate(' + (margin.left + chartWidth) + ',' + (chartHeight + margin.top + 40) + ')')
                    .attr('class', 'title x');

                // Add a title g for the y axis

                // Define xAxis and yAxis functions
                var xAxis = d3.axisBottom();

                var tip = d3tip()
                          .attr('class', 'd3-tip')
                          .offset([-10, 0])
                          .html(function(d) {
                            return "<strong>" + d.id + " - " + d.x + "</strong>";
                          });

                ele.select('svg').call(tip);

                var xMin = d3.min(data, (d) => +d.x) * .95;
                var xMax = d3.max(data, (d) => +d.x) * 1.05;

                xScale.rangeRound([0, chartWidth]).domain([xMin,xMax]);

                // ele.select('.axis.x').transition().duration(1000).call(xAxis)
                // .selectAll("text")
                // .style("text-anchor", "end")
                // .attr("dx", "-.8em")
                // .attr("dy", ".15em")
                // .attr("transform", "rotate(-45)");


                // Update titles
                ele.select('.title.x').text(xTitle);

                xAxis.scale(xScale);
                ele.select('.axis.x').transition().duration(1000).call(xAxis)




                // var simulation = d3.forceSimulation(newdata)
                //       .force("x", d3.forceX(function(d) {return xScale(d.x); }).strength(1))
                //       .force("y", d3.forceY(chartHeight / 2))
                //       .force("collide", d3.forceCollide(4))
                //       .stop();
                //
                //   for (var i = 0; i < 120; ++i) simulation.tick();



                let cell = ele.select('.chartG').selectAll('circle').data(data, (d) => d.id);

                  cell.enter().append("circle")
                      .attr("r", 6)
                      .style('opacity', .3)
                      .on('mouseover', tip.show)
                      .on('mouseout', tip.hide)
                      .attr("cx", function(d) {return xScale(0); })
                      .attr("cy", function(d) { return chartHeight })
                      .merge(cell)
                      .transition()
                      .duration(1500)
                      .delay((d) => xScale(d.x) * 2)
                      .attr('fill', fill)
                      .attr("cx", function(d) {return xScale(d.x); })
                      .attr("cy", function(d) { return chartHeight })
                      .text((d) => d.id );



                    cell.exit().remove();


            });
        };

        chart.height = function(value){
            if (!arguments.length) return height;
            height = value;
            return chart;
        };

        chart.width = function(value){
            if (!arguments.length) return width;
            width = value;
            return chart;
        };

        chart.fill = function(value){
            if (!arguments.length) return fill;
            fill = value;
            return chart;
        };

        chart.xTitle = function(value){
            if (!arguments.length) return xTitle;
            xTitle = value;
            return chart;
        };

        chart.yTitle = function(value){
            if (!arguments.length) return yTitle;
            yTitle = value;
            return chart;
        };

        return chart;
    };


    export default ForceDiagram;
