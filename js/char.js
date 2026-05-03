const ctx = document.getElementById('visitorsChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(239, 68, 68, 0.4)');
gradient.addColorStop(1, 'rgba(239, 68, 68, 0)');

const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
        label: 'Visitors',
        data: [10, 25, 15, 30, 35, 45, 55],
        borderColor: '#ef4444',
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: '#ffffff',
                titleColor: '#1e293b',
                bodyColor: '#64748b',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                callbacks: {
                    label: function(context) {
                        return ` Visitors:  ${context.raw}`;
                    }
                }
            },
            legend: { display: false }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            y: {
                display: false,
            },
            x: {
                grid: {
                    color: '#e2e8f0'
                }
            }
        }
    }
};

new Chart(ctx, config);


const salesCtx = document.getElementById('salesChart').getContext('2d');

const blueGradient = salesCtx.createLinearGradient(0, 0, 0, 400);
blueGradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
blueGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

const salesData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
        label: 'Sales',
        data: [15, 30, 25, 40, 45, 50, 60],
        borderColor: '#3b82f6',
        backgroundColor: blueGradient,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        borderWidth: 2
    }]
};

const salesConfig = {
    type: 'line',
    data: salesData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: '#ffffff',
                titleColor: '#1e293b',
                bodyColor: '#64748b',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                callbacks: {
                    label: function(context) {
                        return ` Sales:  ${context.raw}`;
                    }
                }
            },
            legend: { display: false }
        },
        
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            y: { display: false, grid: { display: false } },
            x: {
                grid: {
                    display: true,
                    drawBorder: false,
                    borderDash: [5, 5],
                    color: '#e2e8f0'
                }
            }
        }
    }
};

new Chart(salesCtx, salesConfig);

new Chart(document.getElementById('sparklineChart'), {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [{
            data: [5, 10, 5, 15, 10, 12],
            borderColor: '#ef4444',
            fill: true,
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: {
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: '#ffffff',
                titleColor: '#1e293b',
                bodyColor: '#64748b',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                callbacks: {
                    label: function(context) {
                        return ` Sales:  ${context.raw}`;
                    }
                }
            },
            legend: { display: false }
        },
        
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: { x: { display: false }, y: { display: false } }
    }
});

const tasksCtx = document.getElementById('tasksDoughnutChart').getContext('2d');

new Chart(tasksCtx, {
    type: 'doughnut',
    data: {
        labels: ['Ongoing', 'Pending', 'Completed'],
        datasets: [{
            data: [7, 9, 12],
            backgroundColor: ['#ffc107', '#3b82f6', '#ef4444'], // أصفر، أزرق، أحمر
            borderWidth: 0,
            hoverOffset: 4
        }]
    },
    options: {
        cutout: '85%', // لجعل الدائرة مفرغة ونحيفة
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                backgroundColor: '#007bff', // اللون الأزرق للـ Tooltip كما بالصورة
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 4,
                displayColors: false,
                callbacks: {
                    label: function(context) {
                        return ` ${context.label}: ${context.raw}`;
                    }
                }
            }
        }
    }
});