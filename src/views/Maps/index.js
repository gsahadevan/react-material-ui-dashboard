//import { AmCharts } from '@amcharts/amcharts4';

function Maps() {
  const config = {
    type: 'map',
    theme: 'light',
    colorSteps: 10,
    dataProvider: {
      map: 'usaLow',
      areas: [
        {
          id: 'US-AL',
          value: 4447100,
        },
      ],
    },
    areasSettings: { autoZoom: true },
    valueLegend: {
      right: 10,
      minValue: 'little',
      maxValue: 'a lot',
    },
    listeners: [
      {
        event: 'descriptionClosed',
        method: function (ev) {
          ev.chart.selectObject();
        },
      },
    ],
  };
  return (
    <div class='row'>
      <h1>Maps</h1>
    </div>
  );
}

export default Maps;
