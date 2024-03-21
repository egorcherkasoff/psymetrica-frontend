<script>
    import { Pie } from "svelte-chartjs";

    import {
        Chart,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
    } from "chart.js";

    Chart.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<div class="chart-pie">
    <Pie
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
    .chart-pie {
        max-height: 400px;
        height: 100%;
    }
</style>
