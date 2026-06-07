import { Chart, Tooltip, Legend, PieController, BarController, LineController, ArcElement, BarElement, LineElement, PointElement, CategoryScale, LinearScale, } from 'chart.js';
Chart.register(Tooltip, Legend, PieController, BarController, LineController, ArcElement, BarElement, LineElement, PointElement, CategoryScale, LinearScale);
let severityChart = null;
let cvssChart = null;
let publishedChart = null;
export function renderSeverityChart(cves) {
    const canvas = document.getElementById("severity-chart");
    if (!canvas)
        return;
    const counts = {};
    cves.forEach(cve => {
        counts[cve.severity] = (counts[cve.severity] || 0) + 1;
    });
    const severityColors = {
        critical: "#ef4444",
        high: "#f97316",
        medium: "#f59e0b",
        low: "#10b981",
        unknown: "#9ca3af"
    };
    const labels = Object.keys(counts);
    const values = Object.values(counts);
    const normalizedColor = (label) => {
        const key = label.toLowerCase();
        const color = severityColors[key];
        return color ?? "#9ca3af";
    };
    severityChart?.destroy();
    severityChart = new Chart(canvas, {
        type: "pie",
        data: {
            labels,
            datasets: [{
                    data: values,
                    backgroundColor: labels.map(label => normalizedColor(label)),
                    borderColor: "#ffffff",
                    borderWidth: 2
                }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });
}
export function renderCVSSChart(cves) {
    const canvas = document.getElementById("cvss-chart");
    if (!canvas)
        return;
    const ranges = {
        "0-2": 0,
        "2-4": 0,
        "4-6": 0,
        "6-8": 0,
        "8-10": 0
    };
    cves.forEach(cve => {
        if (cve.cvss < 2) {
            ranges["0-2"]++;
        }
        else if (cve.cvss < 4) {
            ranges["2-4"]++;
        }
        else if (cve.cvss < 6) {
            ranges["4-6"]++;
        }
        else if (cve.cvss < 8) {
            ranges["6-8"]++;
        }
        else {
            ranges["8-10"]++;
        }
    });
    cvssChart?.destroy();
    cvssChart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: Object.keys(ranges),
            datasets: [{
                    label: "CVEs",
                    data: Object.values(ranges),
                    backgroundColor: "#60a5fa",
                    borderColor: "#2563eb",
                    borderWidth: 1
                }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
export function renderPublishedChart(cves) {
    const canvas = document.getElementById("published-chart");
    if (!canvas)
        return;
    const counts = {};
    cves.forEach(cve => {
        const date = new Date(cve.published).toISOString().split("T")[0] || "";
        counts[date] = (counts[date] || 0) + 1;
    });
    const sortedDates = Object.keys(counts).sort();
    const publishedData = sortedDates.map(date => counts[date] ?? 0);
    publishedChart?.destroy();
    publishedChart = new Chart(canvas, {
        type: "line",
        data: {
            labels: sortedDates,
            datasets: [{
                    label: "CVEs Publicados",
                    data: publishedData,
                    tension: 0.3,
                    borderColor: "#2563eb",
                    backgroundColor: "rgba(37, 99, 235, 0.2)",
                    pointBackgroundColor: "#1d4ed8",
                    fill: true
                }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 0
                    }
                }
            }
        }
    });
}
export function renderCharts(cves) {
    renderSeverityChart(cves);
    renderCVSSChart(cves);
    renderPublishedChart(cves);
}
//# sourceMappingURL=charts.js.map