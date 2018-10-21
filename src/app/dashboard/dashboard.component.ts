import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const bardata = [];
    for (let i = 0; i < 50; i++) {
      bardata.push(Math.random() * 30);
    }

    const height = 300;
    const width = 600;
    const barWidth = 50;
    const barOffset = 5;

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(bardata)])
      .range([0, height]);

    const xScale = d3
      .scaleBand()
      .domain(bardata)
      .paddingInner(0.3)
      .paddingOuter(0.1)
      .range([0, width]);

    const colorArray: string[] = ['#A4FFE6', '#70FFD7', '#008E67', '#006D4F'];
    const colors = d3
      .scaleLinear<string>()
      .domain([0, bardata.length * 0.33, bardata.length * 0.84, bardata.length])
      .range(colorArray);

    /* Tooltips */
    const tooltip1 = d3
      .selectAll('#viz1')
      .append('div')
      .style('padding', '0 10px')
      .style('background', 'white')
      .style('opacity', 0);

    const tooltip2 = d3
      .selectAll('#viz2')
      .append('div')
      .style('padding', '0 10px')
      .style('background', 'white')
      .style('opacity', 0);

    const tooltip3 = d3
      .selectAll('#viz3')
      .append('div')
      .style('padding', '0 10px')
      .style('background', 'white')
      .style('opacity', 0);

    const tooltip4 = d3
      .selectAll('#viz4')
      .append('div')
      .style('padding', '0 10px')
      .style('background', 'white')
      .style('opacity', 0);

    /* Chart 1 */
    const myChart = d3
      .select('#viz1')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .selectAll('rect')
      .data(bardata)
      .enter()
      .append('rect')
      .attr('fill', function(d, i) {
        return colors(i);
      })
      .attr('width', function(d) {
        return xScale.bandwidth();
      })
      .attr('height', 0)
      .attr('x', function(d) {
        return xScale(d);
      })
      .attr('y', height)

      .on('mouseover', function(d) {
        tooltip1
          .transition()
          .duration(200)
          .style('opacity', 0.9);

        tooltip1
          .html(d)
          .style('left', d3.event.pageX - 35 + 'px')
          .style('top', d3.event.pageX - 30 + 'px');

        d3.select(this).style('opacity', 0.5);
      })

      .on('mouseout', function(d) {
        d3.select(this)
          .transition()
          .style('opacity', 1);
      });

    myChart
      .transition()
      .attr('height', function(d) {
        return yScale(d);
      })
      .attr('y', function(d) {
        return height - yScale(d);
      })
      .delay(function(d, i) {
        return i * 20;
      })
      .duration(1000)
      .ease(d3.easeBounceOut);

    /* Chart 2 */
    const myChart2 = d3
      .select('#viz2')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .selectAll('rect')
      .data(bardata)
      .enter()
      .append('rect')
      .attr('fill', function(d, i) {
        return colors(i);
      })
      .attr('width', function(d) {
        return xScale.bandwidth();
      })
      .attr('height', 0)
      .attr('x', function(d) {
        return xScale(d);
      })
      .attr('y', height)

      .on('mouseover', function(d) {
        tooltip2
          .transition()
          .duration(200)
          .style('opacity', 0.9);

        tooltip2
          .html(d)
          .style('left', d3.event.pageX - 35 + 'px')
          .style('top', d3.event.pageX - 30 + 'px');

        d3.select(this).style('opacity', 0.5);
      })

      .on('mouseout', function(d) {
        d3.select(this)
          .transition()
          .style('opacity', 1);
      });

    myChart2
      .transition()
      .attr('height', function(d) {
        return yScale(d);
      })
      .attr('y', function(d) {
        return height - yScale(d);
      })
      .delay(function(d, i) {
        return i * 20;
      })
      .duration(1000)
      .ease(d3.easeBounceOut);


    /*Chart 3*/
    const myChart3 = d3
      .select('#viz3')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .selectAll('rect')
      .data(bardata)
      .enter()
      .append('rect')
      .attr('fill', function(d, i) {
        return colors(i);
      })
      .attr('width', function(d) {
        return xScale.bandwidth();
      })
      .attr('height', 0)
      .attr('x', function(d) {
        return xScale(d);
      })
      .attr('y', height)

      .on('mouseover', function(d) {
        tooltip3
          .transition()
          .duration(200)
          .style('opacity', 0.9);

        tooltip3
          .html(d)
          .style('left', d3.event.pageX - 35 + 'px')
          .style('top', d3.event.pageX - 30 + 'px');

        d3.select(this).style('opacity', 0.5);
      })

      .on('mouseout', function(d) {
        d3.select(this)
          .transition()
          .style('opacity', 1);
      });

    myChart3
      .transition()
      .attr('height', function(d) {
        return yScale(d);
      })
      .attr('y', function(d) {
        return height - yScale(d);
      })
      .delay(function(d, i) {
        return i * 20;
      })
      .duration(1000)
      .ease(d3.easeBounceOut);

    /* Chart 4 */
    const myChart4 = d3
    .select('#viz4')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .selectAll('rect')
    .data(bardata)
    .enter()
    .append('rect')
    .attr('fill', function(d, i) {
      return colors(i);
    })
    .attr('width', function(d) {
      return xScale.bandwidth();
    })
    .attr('height', 0)
    .attr('x', function(d) {
      return xScale(d);
    })
    .attr('y', height)

    .on('mouseover', function(d) {
      tooltip4
        .transition()
        .duration(200)
        .style('opacity', 0.9);

      tooltip4
        .html(d)
        .style('left', d3.event.pageX - 35 + 'px')
        .style('top', d3.event.pageX - 30 + 'px');

      d3.select(this).style('opacity', 0.5);
    })

    .on('mouseout', function(d) {
      d3.select(this)
        .transition()
        .style('opacity', 1);
    });

  myChart4
    .transition()
    .attr('height', function(d) {
      return yScale(d);
    })
    .attr('y', function(d) {
      return height - yScale(d);
    })
    .delay(function(d, i) {
      return i * 20;
    })
    .duration(1000)
    .ease(d3.easeBounceOut);

  }
}
