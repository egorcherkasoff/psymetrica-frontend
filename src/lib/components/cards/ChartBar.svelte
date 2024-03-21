<script>
    import { Bar } from "svelte-chartjs";

    import {
        Chart,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
    } from "chart.js";

    Chart.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
    );
</script>

<div class="chart-bar">
    <Bar
        data={{
            labels: ["Пальто", "Марат", "Поц", "Чушпан"],
            datasets: [
                {
                    label: "Баллов",
                    data: [40, 20, 30, 0],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#00FF00",
                    ],
                },
            ],
        }}
        options={{ responsive: true }}
    />
</div>

<style>
    .chart-bar {
        max-height: 400px;
        height: 100%;
    }
</style>
