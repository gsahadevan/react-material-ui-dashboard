import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import heatMapData from '../../assets/heat-map-data.json';

class HeatMap extends Component {
  constructor(props) {
    super(props);

    this.data = heatMapData.map((data) => data);
    this.series = [];
    this.data.forEach((val) => {
      const month = this.series.find((el) => el.name === val.month);
      if (month) {
        month.data.push({ x: val.date, y: val.value });
      } else {
        this.series.push({
          name: val.month,
          data: [{ x: val.date, y: val.value }],
        });
      }
    });

    this.ranges = [
      { from: 0, to: 10000, color: '#fde0dd' },
      { from: 10001, to: 10750, color: '#fcc5c0' },
      { from: 10751, to: 11000, color: '#fa9fb5' },
      { from: 11001, to: 11250, color: '#f768a1' },
      { from: 11251, to: 11500, color: '#dd3497' },
      { from: 11501, to: 11750, color: '#ae017e' },
      { from: 11751, to: 12000, color: '#7a0177' },
      { from: 12001, to: 100000, color: '#49006a' },
    ];

    this.state = {
      options: {
        plotOptions: {
          heatmap: {
            colorScale: {
              ranges: this.ranges,
            },
          },
        },
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false,
        },
        colors: ['#008FFB'],
        title: {
          text: 'HeatMap Chart (Single color)',
        },
      },
      series: this.series,
    };
  }

  render() {
    return (
      <div className='app'>
        <div className='row'>
          <div className='chart'>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type='heatmap'
              height='450'
              width='900'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HeatMap;
