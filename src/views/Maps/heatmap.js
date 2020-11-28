import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class HeatMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
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
      series: [
        {
          name: 'Series 1',
          data: [
            {
              x: 'W1',
              y: 22,
            },
            {
              x: 'W2',
              y: 29,
            },
            {
              x: 'W3',
              y: 13,
            },
            {
              x: 'W4',
              y: 32,
            },
          ],
        },
        {
          name: 'Series 2',
          data: [
            {
              x: 'W1',
              y: 43,
            },
            {
              x: 'W2',
              y: 43,
            },
            {
              x: 'W3',
              y: 43,
            },
            {
              x: 'W4',
              y: 43,
            },
          ],
        },
      ],
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
              height='350'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HeatMap;
