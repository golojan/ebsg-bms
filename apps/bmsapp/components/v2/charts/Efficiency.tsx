import { Chart, ChartOptions, ChartData } from 'chart.js';
import { useEffect, useRef, useState } from 'react';
import {
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  BarController,
  Tooltip,
  Legend,
  Title,
  Filler,
  ArcElement,
  RadarController,
  RadialLinearScale,
  PolarAreaController,
  PieController,
  DoughnutController,
  BubbleController,
  ScatterController,
} from 'chart.js';

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  Tooltip,
  Legend,
  Title,
  Filler,
  ArcElement,
  RadarController,
  RadialLinearScale,
  PolarAreaController,
  PieController,
  DoughnutController,
  BubbleController,
  ScatterController
);

const Chartjs = () => {
  const bitsData: any = [
    0, 10, 0, 65, 0, 25, 0, 35, 20, 100, 40, 75, 50, 85, 60,
  ];
  const bitsLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Afril',
    'May',
    'Jan',
    'Feb',
    'Mar',
    'Afril',
    'May',
    'Feb',
    'Mar',
    'Afril',
    'May',
  ];

  const chartOptions: ChartOptions = {};
  // helper function to format chart data since you do this twice

  const chartRef = useRef<Chart | null>(null);

  // callback creates the chart on the canvas element
  const chartContainer = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: bitsLabels,
          datasets: [
            {
              label: 'Bits',
              data: bitsData,
              borderColor: '#22C55E',
              pointRadius: 0,
              pointBackgroundColor: '#fff',
              pointBorderColor: '#22C55E',
              borderWidth: 1,
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: { responsive: true },
      });
    }
  };

  const plugin = {
    afterDraw: (chartInstance: Chart, options?: any) => {
      const { ctx, chartArea } = chartInstance;
      ctx.save();
      ctx.fillStyle = '#fff';
      ctx.fillRect(
        chartArea.left,
        chartArea.top,
        chartArea.right - chartArea.left,
        chartArea.bottom - chartArea.top
      );
      ctx.restore();
    },
  };

  // effect to update the chart when props are updated
  useEffect(() => {
    // must verify that the chart exists
    if (chartRef.current) {
      chartRef.current.data = {
        labels: bitsLabels,
        datasets: [
          {
            label: 'Bits',
            data: bitsData,
            borderColor: '#22C55E',
            pointRadius: 0,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#22C55E',
            borderWidth: 1,
            fill: true,
            tension: 0.4,
          },
        ],
      };
      chartRef.current.update();
    }
    return () => {
      if (chartRef.current) {
        // chartRef.current.destroy();
      }
    };
  }, [bitsData]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Chartjs;
