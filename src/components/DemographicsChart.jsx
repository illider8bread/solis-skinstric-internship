import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);

const DonutChart = ({ percentage }) => {
    const chartRef = useRef(null);
    let myChart;

    useEffect(() => {
        // Destroy the existing chart if it exists
        if (myChart) {
            myChart.destroy();
        }

        // Sample data for the donut chart
        const data = {
            labels: [],
            datasets: [
                {
                    data: [percentage, (100 - percentage)],
                    backgroundColor: [
                        '#1A1B1C',
                        '#C1C2C3',
                    ],
                },
            ],
        };

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                },
            },
            cutout: '90%', // Set the cutout percentage here
        };

        // Create a new chart instance
        myChart = new Chart(chartRef.current, {
            type: 'doughnut',
            data: data,
            options: options,
        });

        // Cleanup function to destroy the chart on component unmount
        return () => {
            myChart.destroy();
        };
    }, [percentage]); // Re-run effect when percentage changes

    return <canvas ref={chartRef} className='donut__chart position__centered'
    style={{ maxWidth: '400px', maxHeight: '400px', width: '100%', height: '100%' }} />;
};

export default DonutChart;