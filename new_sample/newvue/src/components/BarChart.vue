<template>
    <div>

        <canvas ref="Chart" :height="300" :width="500" />

    </div>
</template>
  
  
  
  
<script>

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);


let chart;

export default {

    created() { },

    data: () => ({

        chartData: {

            labels: ["Listening", "Reading", "Speaking", "Writing"],

            datasets: [

                {

                    data: [30, 60, 10, 70],

                    fill: false,

                    borderColor: "rgba(20, 158, 236, 0.8)",

                    backgroundColor: "rgba(20, 158, 236, 0.8)",

                    pointBackgroundColor: "#fff",

                    pointBorderColor: "rgba(20, 158, 236, 1)",

                    pointHoverBackgroundColor: "rgba(20, 158, 236, 1)",

                    pointHoverBorderColor: "rgba(20, 158, 236, 1)",

                    tension: 0.2,

                    barThickness: 50

                },

            ],

        },

        options: {
            animation: {
                duration: 1,
                onComplete: function () {
                    var chartInstance = this; // this를 사용하여 차트 인스턴스에 접근
                    var ctx = chartInstance.ctx;
                    ctx.font = Chart.defaults.font.size + 'px ' + Chart.defaults.font.family; // Chart.js v3.x 방식으로 폰트 설정
                    ctx.fillStyle = 'black';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';

                    this.data.datasets.forEach(function (dataset, datasetIndex) {
                        var meta = chartInstance.getDatasetMeta(datasetIndex);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar.x, bar.y - 5);
                        });
                    });
                },
            },
            plugins: {

                legend: {

                    display: false,

                },

            },

            labels: {

                fontSize: 20,

            },

            scales: {

                x: {

                    suggestedMin: 0,

                    suggestedMax: 100,

                    ticks: {
                        crossAlign: "far",

                        font: {
                            size: 16, // X축 폰트 크기를 16으로 설정
                            weight: 'bold',
                        },
                        padding: 20,
                    },

                    grid: {

                        drawOnChartArea: false,

                    },

                },

                y: {
                    display: true,

                    suggestedMin: 0,

                    suggestedMax: 100,

                    ticks: {

                        stepSize: 20,

                        crossAlign: "far",
                        font: {
                            size: 16, // X축 폰트 크기를 16으로 설정
                            weight: 'bold',
                        },
                    },

                },

            },

        },

    }),

    async mounted() {

        this.createChart();

    },

    methods: {

        async createChart() {

            if (chart !== undefined) {

                chart.destroy();

            }

            chart = new Chart(this.$refs.Chart, {

                type: "bar",

                data: this.chartData,

                options: this.options,

            });

        },

    },

};

</script>
  
  
  
  
<style></style>