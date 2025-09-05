let tldChart = null;
let shortestChart = null;
let longestChart = null;
let distributionChart = null;
let wordsDistributionChart = null;
let yearsDistributionChart = null;
let prefixDistributionChart = null;
let locationDistributionChart = null;
let namesDistributionChart = null;
let healthDistributionChart = null;
let hospitalityDistributionChart = null;
let hostedInDistributionChart = null;

async function fetchTldData() {
    try {
        const response = await fetch('static/tlds.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching TLD data:', error);
        throw error;
    }
}

async function fetchShortestData() {
    try {
        const response = await fetch('static/shortest.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching shortest domains data:', error);
        throw error;
    }
}

async function fetchLongestData() {
    try {
        const response = await fetch('static/longest.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching longest domains data:', error);
        throw error;
    }
}

async function fetchDistributionData() {
    try {
        const response = await fetch('static/length-distribution.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching distribution data:', error);
        throw error;
    }
}

async function fetchWordsDistributionData() {
    try {
        const response = await fetch('static/words-distribution.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching words distribution data:', error);
        throw error;
    }
}

async function fetchYearsDistributionData() {
    try {
        const response = await fetch('static/years-distribution.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching years distribution data:', error);
        throw error;
    }
}

async function fetchPrefixDistributionData() {
    try {
        const response = await fetch('static/prefix-distribution.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching prefix distribution data:', error);
        throw error;
    }
}

async function fetchLocationDistributionData() {
    try {
        const response = await fetch('static/location-distribution.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching location distribution data:', error);
        throw error;
    }
}

async function fetchNamesDistributionData() {
    try {
        const response = await fetch('static/names-distribution.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching names distribution data:', error);
        throw error;
    }
}

async function fetchHealthDistributionData() {
    try {
        const response = await fetch('static/health-distribution.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching health distribution data:', error);
        throw error;
    }
}

async function fetchHospitalityDistributionData() {
    try {
        const response = await fetch('static/hospitality-distribution.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching hospitality distribution data:', error);
        throw error;
    }
}

async function fetchHostedInDistributionData() {
    try {
        const response = await fetch('static/hosted-in-distribution.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching hosted-in distribution data:', error);
        throw error;
    }
}

function displayChart(data) {
    const ctx = document.getElementById('tldChart').getContext('2d');
    
    // Get top 5 TLDs
    const top5Tlds = data.tlds
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    
    const labels = top5Tlds.map(item => item.tld);
    const counts = top5Tlds.map(item => item.count);
    
    // Generate colors for the pie chart
    const colors = [
        '#667eea',
        '#764ba2',
        '#f093fb',
        '#f5576c',
        '#4facfe'
    ];
    
    if (tldChart) {
        tldChart.destroy();
    }
    
    tldChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: colors,
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value.toLocaleString()} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    document.getElementById('totalDomains').textContent = data.total.toLocaleString();
    document.getElementById('topTld').textContent = top5Tlds[0].tld;
    
    // Display TLD list
    const tldListContent = document.getElementById('tldListContent');
    tldListContent.innerHTML = '';
    top5Tlds.forEach((tld, index) => {
        const percentage = ((tld.count / data.total) * 100).toFixed(1);
        const item = document.createElement('div');
        item.className = 'tld-item';
        item.innerHTML = `
            <span class="tld-name" style="display: flex; align-items: center;">
                <span style="display: inline-block; width: 12px; height: 12px; background: ${colors[index]}; margin-right: 8px; border-radius: 2px;"></span>
                ${tld.tld}
            </span>
            <span class="tld-count">${tld.count.toLocaleString()} (${percentage}%)</span>
        `;
        tldListContent.appendChild(item);
    });
    
    document.getElementById('tldList').style.display = 'block';
}

function displayShortestChart(data) {
    const ctx = document.getElementById('shortestChart').getContext('2d');
    
    // Get top 5 shortest domains by length groups
    const lengthGroups = {};
    data.shortestDomains.slice(0, 5).forEach(domain => {
        const key = `${domain.length} chars`;
        if (!lengthGroups[key]) {
            lengthGroups[key] = 0;
        }
        lengthGroups[key] += domain.count;
    });
    
    const labels = Object.keys(lengthGroups);
    const counts = Object.values(lengthGroups);
    
    // Generate colors for the pie chart
    const colors = [
        '#764ba2',
        '#f093fb',
        '#ffa94d',
        '#8ce99a',
        '#74c0fc'
    ];
    
    if (shortestChart) {
        shortestChart.destroy();
    }
    
    shortestChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: colors.slice(0, labels.length),
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} domain(s) (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    document.getElementById('avgLength').textContent = data.averageLength.toFixed(1);
    document.getElementById('shortestDomain').textContent = data.shortestDomains[0].domain;
    
    // Display shortest domains list
    const shortestListContent = document.getElementById('shortestListContent');
    shortestListContent.innerHTML = '';
    data.shortestDomains.slice(0, 5).forEach((domain, index) => {
        const item = document.createElement('div');
        item.className = 'domain-item';
        item.innerHTML = `
            <span class="domain-name" style="display: flex; align-items: center;">
                <span style="display: inline-block; width: 12px; height: 12px; background: ${colors[Math.min(index, colors.length - 1)]}; margin-right: 8px; border-radius: 2px;"></span>
                ${domain.domain}
            </span>
            <span class="domain-length">${domain.length} chars</span>
        `;
        shortestListContent.appendChild(item);
    });
    
    document.getElementById('shortestList').style.display = 'block';
}

function displayLongestChart(data) {
    const ctx = document.getElementById('longestChart').getContext('2d');
    
    // Get top 5 longest domains by length groups
    const lengthGroups = {};
    data.longestDomains.slice(0, 5).forEach(domain => {
        const key = `${domain.length} chars`;
        if (!lengthGroups[key]) {
            lengthGroups[key] = 0;
        }
        lengthGroups[key] += domain.count;
    });
    
    const labels = Object.keys(lengthGroups);
    const counts = Object.values(lengthGroups);
    
    // Generate colors for the pie chart
    const colors = [
        '#f5576c',
        '#fa5252',
        '#e64980',
        '#be4bdb',
        '#7950f2'
    ];
    
    if (longestChart) {
        longestChart.destroy();
    }
    
    longestChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: colors.slice(0, labels.length),
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} domain(s) (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    const longestDomain = data.longestDomains[0].domain;
    document.getElementById('longestDomain').textContent = longestDomain.length > 20 ? 
        longestDomain.substring(0, 20) + '...' : longestDomain;
    
    // Display longest domains list
    const longestListContent = document.getElementById('longestListContent');
    longestListContent.innerHTML = '';
    data.longestDomains.slice(0, 5).forEach((domain, index) => {
        const item = document.createElement('div');
        item.className = 'domain-item';
        const displayName = domain.domain.length > 30 ? 
            domain.domain.substring(0, 30) + '...' : domain.domain;
        item.innerHTML = `
            <span class="domain-name" style="display: flex; align-items: center;" title="${domain.domain}">
                <span style="display: inline-block; width: 12px; height: 12px; background: ${colors[Math.min(index, colors.length - 1)]}; margin-right: 8px; border-radius: 2px;"></span>
                ${displayName}
            </span>
            <span class="domain-length">${domain.length} chars</span>
        `;
        longestListContent.appendChild(item);
    });
    
    document.getElementById('longestList').style.display = 'block';
}

function displayDistributionChart(data) {
    const ctx = document.getElementById('distributionChart').getContext('2d');
    
    // Take first 64 bars
    const distributionData = data.lengthDistribution.slice(0, 64);
    const labels = distributionData.map(item => item.length);
    const counts = distributionData.map(item => item.count);
    
    // Create gradient for bars
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(0.5, '#764ba2');
    gradient.addColorStop(1, '#f5576c');
    
    if (distributionChart) {
        distributionChart.destroy();
    }
    
    distributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: gradient,
                borderColor: '#667eea',
                borderWidth: 1,
                barPercentage: 1.0,
                categoryPercentage: 0.9
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Domain Length (characters)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 20,
                        callback: function(value, index) {
                            // Show every 5th label for readability
                            if (labels[index] % 5 === 0) {
                                return labels[index];
                            }
                            return '';
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Domain Count',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return `Length: ${context[0].label} characters`;
                        },
                        label: function(context) {
                            const value = context.parsed.y || 0;
                            const total = data.statistics.totalDomains;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `Count: ${value} domains (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    document.getElementById('minLength').textContent = data.statistics.minLength;
    document.getElementById('maxLength').textContent = data.statistics.maxLength;
    document.getElementById('medianLength').textContent = data.statistics.medianLength;
    document.getElementById('stdDev').textContent = data.statistics.standardDeviation.toFixed(1);
}

function displayWordsDistributionChart(data) {
    const ctx = document.getElementById('wordsDistributionChart').getContext('2d');
    
    const labels = data.wordsDistribution.map(item => item.word);
    const withHyphenData = data.wordsDistribution.map(item => item.withHyphen);
    const withoutHyphenData = data.wordsDistribution.map(item => item.withoutHyphen);
    
    if (wordsDistributionChart) {
        wordsDistributionChart.destroy();
    }
    
    wordsDistributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'With Hyphens',
                    data: withHyphenData,
                    backgroundColor: '#667eea',
                    borderColor: '#667eea',
                    borderWidth: 1
                },
                {
                    label: 'Without Hyphens',
                    data: withoutHyphenData,
                    backgroundColor: '#f5576c',
                    borderColor: '#f5576c',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Words',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    },
                    stacked: true
                },
                y: {
                    title: {
                        display: true,
                        text: 'Domain Count',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    stacked: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const word = context[0].label;
                            return `Word: "${word}"`;
                        },
                        label: function(context) {
                            const value = context.parsed.y || 0;
                            const datasetLabel = context.dataset.label;
                            const total = data.statistics.totalDomains;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `${datasetLabel}: ${value.toLocaleString()} domains (${percentage}%)`;
                        },
                        footer: function(context) {
                            const wordIndex = context[0].dataIndex;
                            const item = data.wordsDistribution[wordIndex];
                            const totalForWord = item.withHyphen + item.withoutHyphen;
                            const percentage = ((totalForWord / data.statistics.totalDomains) * 100).toFixed(2);
                            return `Total: ${totalForWord.toLocaleString()} domains (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    document.getElementById('totalWordsWithHyphens').textContent = data.statistics.totalWithHyphens.toLocaleString();
    document.getElementById('totalWordsWithoutHyphens').textContent = data.statistics.totalWithoutHyphens.toLocaleString();
    document.getElementById('avgWordsWithHyphens').textContent = data.statistics.mostCommonWordWithHyphens;
    document.getElementById('avgWordsWithoutHyphens').textContent = data.statistics.mostCommonWordWithoutHyphens;
}

function displayYearsDistributionChart(data) {
    const ctx = document.getElementById('yearsDistributionChart').getContext('2d');
    
    // Top 10 years with domain count for Y axis, years for X axis
    const yearsData = data.yearsDistribution.slice(0, 10);
    const labels = yearsData.map(item => item.year);
    const counts = yearsData.map(item => item.count);
    
    // Create gradient for bars
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#4a90e2');
    gradient.addColorStop(0.5, '#357abd');
    gradient.addColorStop(1, '#2968a3');
    
    if (yearsDistributionChart) {
        yearsDistributionChart.destroy();
    }
    
    yearsDistributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: gradient,
                borderColor: '#4a90e2',
                borderWidth: 1,
                barPercentage: 0.8,
                categoryPercentage: 0.9
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Domain Count',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return `Year: ${context[0].label}`;
                        },
                        label: function(context) {
                            const value = context.parsed.y || 0;
                            const total = data.statistics.totalYearDomains;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `Domains: ${value.toLocaleString()} (${percentage}% of year-based domains)`;
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    document.getElementById('totalYearDomains').textContent = data.statistics.totalYearDomains.toLocaleString();
    document.getElementById('topYear').textContent = data.statistics.topYear;
    document.getElementById('yearRange').textContent = `${data.statistics.yearRange.earliest}-${data.statistics.yearRange.latest}`;
}

function displayPrefixDistributionChart(data) {
    const ctx = document.getElementById('prefixDistributionChart').getContext('2d');
    
    // Top 10 prefixes with domain count for Y axis, letters for X axis
    const prefixData = data.prefixDistribution.slice(0, 10);
    const labels = prefixData.map(item => item.prefix.toUpperCase());
    const counts = prefixData.map(item => item.count);
    
    // Create gradient for bars - orange theme
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#f39c12');
    gradient.addColorStop(0.5, '#e67e22');
    gradient.addColorStop(1, '#d35400');
    
    if (prefixDistributionChart) {
        prefixDistributionChart.destroy();
    }
    
    prefixDistributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: gradient,
                borderColor: '#f39c12',
                borderWidth: 1,
                barPercentage: 0.8,
                categoryPercentage: 0.9
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Letter Prefix',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Domain Count',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return `Letter: ${context[0].label}`;
                        },
                        label: function(context) {
                            const value = context.parsed.y || 0;
                            const total = data.statistics.totalPrefixDomains;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `Domains: ${value.toLocaleString()} (${percentage}% of letter-based domains)`;
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    document.getElementById('totalPrefixDomains').textContent = data.statistics.totalPrefixDomains.toLocaleString();
    document.getElementById('topPrefix').textContent = data.statistics.topPrefix.toUpperCase();
    document.getElementById('alphabetCoverage').textContent = `${data.statistics.alphabetCoverage}/26`;
    document.getElementById('coveragePercentage').textContent = `${data.statistics.coveragePercentage.toFixed(1)}%`;
}

function displayLocationDistributionChart(data) {
    const ctx = document.getElementById('locationDistributionChart').getContext('2d');
    
    // Top 10 locations with domain count for Y axis, locations for X axis
    const locationData = data.locationDistribution.slice(0, 10);
    const labels = locationData.map(item => item.location.charAt(0).toUpperCase() + item.location.slice(1));
    const counts = locationData.map(item => item.count);
    
    // Create gradient for bars - green theme
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#27ae60');
    gradient.addColorStop(0.5, '#229954');
    gradient.addColorStop(1, '#1e8449');
    
    if (locationDistributionChart) {
        locationDistributionChart.destroy();
    }
    
    locationDistributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: gradient,
                borderColor: '#27ae60',
                borderWidth: 1,
                barPercentage: 0.8,
                categoryPercentage: 0.9
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Geographic Location',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Domain Count',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            const location = locationData[index];
                            return `${location.location.charAt(0).toUpperCase() + location.location.slice(1)} (${location.type})`;
                        },
                        label: function(context) {
                            const value = context.parsed.y || 0;
                            const total = data.statistics.totalLocationDomains;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `Domains: ${value.toLocaleString()} (${percentage}% of location-based domains)`;
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    document.getElementById('totalLocationDomains').textContent = data.statistics.totalLocationDomains.toLocaleString();
    document.getElementById('topLocation').textContent = data.statistics.topLocation.charAt(0).toUpperCase() + data.statistics.topLocation.slice(1);
    document.getElementById('locationCities').textContent = data.statistics.locationTypes.cities || 0;
    document.getElementById('locationCountries').textContent = data.statistics.locationTypes.countries || 0;
}

function displayNamesDistributionChart(data) {
    const ctx = document.getElementById('namesDistributionChart').getContext('2d');
    
    // Top 10 names with domain count for Y axis, names for X axis
    const namesData = data.namesDistribution.slice(0, 10);
    const labels = namesData.map(item => item.name.charAt(0).toUpperCase() + item.name.slice(1));
    const counts = namesData.map(item => item.count);
    
    // Create gradient for bars - purple theme
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#8e44ad');
    gradient.addColorStop(0.5, '#9b59b6');
    gradient.addColorStop(1, '#6c3483');
    
    if (namesDistributionChart) {
        namesDistributionChart.destroy();
    }
    
    namesDistributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: gradient,
                borderColor: '#8e44ad',
                borderWidth: 1,
                barPercentage: 0.8,
                categoryPercentage: 0.9
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'First Names',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Domain Count',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            const name = namesData[index];
                            return `${name.name.charAt(0).toUpperCase() + name.name.slice(1)} (${name.gender})`;
                        },
                        label: function(context) {
                            const value = context.parsed.y || 0;
                            const total = data.statistics.totalNameDomains;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `Domains: ${value.toLocaleString()} (${percentage}% of name-based domains)`;
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    document.getElementById('totalNameDomains').textContent = data.statistics.totalNameDomains.toLocaleString();
    document.getElementById('topName').textContent = data.statistics.topName.charAt(0).toUpperCase() + data.statistics.topName.slice(1);
    document.getElementById('maleNames').textContent = data.statistics.maleNames.toLocaleString();
    document.getElementById('femaleNames').textContent = data.statistics.femaleNames.toLocaleString();
}

function displayHealthDistributionChart(data) {
    const ctx = document.getElementById('healthDistributionChart').getContext('2d');
    
    // Top 10 health terms with domain count for Y axis, terms for X axis
    const healthData = data.healthDistribution.slice(0, 10);
    const labels = healthData.map(item => item.term.charAt(0).toUpperCase() + item.term.slice(1));
    const counts = healthData.map(item => item.count);
    
    // Create gradient for bars - medical theme (red cross colors)
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#e74c3c');
    gradient.addColorStop(0.5, '#c0392b');
    gradient.addColorStop(1, '#a93226');
    
    if (healthDistributionChart) {
        healthDistributionChart.destroy();
    }
    
    healthDistributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: gradient,
                borderColor: '#e74c3c',
                borderWidth: 1,
                barPercentage: 0.8,
                categoryPercentage: 0.9
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Health Sector Terms',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Domain Count',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            const healthTerm = healthData[index];
                            return `${healthTerm.term.charAt(0).toUpperCase() + healthTerm.term.slice(1)} (${healthTerm.category})`;
                        },
                        label: function(context) {
                            const value = context.parsed.y || 0;
                            const total = data.statistics.totalHealthDomains;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `Domains: ${value.toLocaleString()} (${percentage}% of health-based domains)`;
                        },
                        afterLabel: function(context) {
                            const index = context.dataIndex;
                            const healthTerm = healthData[index];
                            return `Activity: ${healthTerm.activity}`;
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    document.getElementById('totalHealthDomains').textContent = data.statistics.totalHealthDomains.toLocaleString();
    document.getElementById('topHealthTerm').textContent = data.statistics.topTerm.charAt(0).toUpperCase() + data.statistics.topTerm.slice(1);
    document.getElementById('healthFacilities').textContent = data.statistics.facilitiesTerms.toLocaleString();
    document.getElementById('healthProfessionals').textContent = data.statistics.professionalsTerms.toLocaleString();
    document.getElementById('healthTreatments').textContent = data.statistics.treatmentsTerms.toLocaleString();
}

function displayHospitalityDistributionChart(data) {
    const ctx = document.getElementById('hospitalityDistributionChart').getContext('2d');
    
    // Top 10 hospitality terms with domain count for Y axis, terms for X axis
    const hospitalityData = data.hospitalityDistribution.slice(0, 10);
    const labels = hospitalityData.map(item => item.term.charAt(0).toUpperCase() + item.term.slice(1));
    const counts = hospitalityData.map(item => item.count);
    
    // Create gradient for bars - blue/teal theme
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#00bcd4');
    gradient.addColorStop(0.5, '#0097a7');
    gradient.addColorStop(1, '#00838f');
    
    if (hospitalityDistributionChart) {
        hospitalityDistributionChart.destroy();
    }
    
    hospitalityDistributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: gradient,
                borderColor: '#00bcd4',
                borderWidth: 1,
                barPercentage: 0.8,
                categoryPercentage: 0.9
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Hospitality Terms',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Domain Count',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            const hospitalityTerm = hospitalityData[index];
                            return `${hospitalityTerm.term.charAt(0).toUpperCase() + hospitalityTerm.term.slice(1)} (${hospitalityTerm.category})`;
                        },
                        label: function(context) {
                            const value = context.parsed.y || 0;
                            const total = data.statistics.totalHospitalityDomains;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `Domains: ${value.toLocaleString()} (${percentage}% of hospitality domains)`;
                        },
                        afterLabel: function(context) {
                            const index = context.dataIndex;
                            const hospitalityTerm = hospitalityData[index];
                            return `Activity: ${hospitalityTerm.activity}`;
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    document.getElementById('totalHospitalityDomains').textContent = data.statistics.totalHospitalityDomains.toLocaleString();
    document.getElementById('topHospitalityTerm').textContent = data.statistics.topTerm.charAt(0).toUpperCase() + data.statistics.topTerm.slice(1);
    document.getElementById('hospitalityDining').textContent = data.statistics.diningTerms.toLocaleString();
    document.getElementById('hospitalityAccommodation').textContent = data.statistics.accommodationTerms.toLocaleString();
    document.getElementById('hospitalityEntertainment').textContent = data.statistics.entertainmentTerms.toLocaleString();
}

function displayHostedInDistributionChart(data) {
    const ctx = document.getElementById('hostedInDistributionChart').getContext('2d');
    
    // Top 10 hosting locations with domain count for Y axis, locations for X axis
    const hostedInData = data.hostedInDistribution.slice(0, 10);
    const labels = hostedInData.map(item => item.location);
    const counts = hostedInData.map(item => item.count);
    
    // Create gradient for bars - purple/indigo theme
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#9c27b0');
    gradient.addColorStop(0.5, '#7b1fa2');
    gradient.addColorStop(1, '#6a1b9a');
    
    if (hostedInDistributionChart) {
        hostedInDistributionChart.destroy();
    }
    
    hostedInDistributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domain Count',
                data: counts,
                backgroundColor: gradient,
                borderColor: '#9c27b0',
                borderWidth: 1,
                barPercentage: 0.8,
                categoryPercentage: 0.9
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Hosting Location (Country)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        autoSkip: false,
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Domain Count',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            const location = hostedInData[index];
                            return `${location.location} (${location.countryCode})`;
                        },
                        label: function(context) {
                            const value = context.parsed.y || 0;
                            const index = context.dataIndex;
                            const location = hostedInData[index];
                            const total = data.statistics.totalDomainsWithGeoIP;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `Domains: ${value.toLocaleString()} (${percentage}% of GeoIP domains)`;
                        },
                        afterLabel: function(context) {
                            const index = context.dataIndex;
                            const location = hostedInData[index];
                            if (location.topCity) {
                                return `Top City: ${location.topCity} (${location.cityCount.toLocaleString()} domains)`;
                            }
                            return '';
                        }
                    }
                }
            }
        }
    });
    
    // Update statistics
    document.getElementById('totalGeoIPDomains').textContent = data.statistics.totalDomainsWithGeoIP.toLocaleString();
    document.getElementById('topHostingCountry').textContent = data.statistics.topCountry;
    document.getElementById('topHostingCity').textContent = data.statistics.topCity || 'N/A';
    document.getElementById('uniqueCountries').textContent = data.statistics.uniqueCountries.toLocaleString();
    document.getElementById('geoIPCoverage').textContent = data.statistics.coveragePercentage.toFixed(1) + '%';
}

async function loadDashboard() {
    const loadingEl = document.getElementById('loading');
    const loadingShortestEl = document.getElementById('loadingShortest');
    const loadingLongestEl = document.getElementById('loadingLongest');
    const loadingDistributionEl = document.getElementById('loadingDistribution');
    const loadingWordsDistributionEl = document.getElementById('loadingWordsDistribution');
    const loadingYearsDistributionEl = document.getElementById('loadingYearsDistribution');
    const loadingPrefixDistributionEl = document.getElementById('loadingPrefixDistribution');
    const loadingLocationDistributionEl = document.getElementById('loadingLocationDistribution');
    const loadingNamesDistributionEl = document.getElementById('loadingNamesDistribution');
    const loadingHealthDistributionEl = document.getElementById('loadingHealthDistribution');
    const loadingHospitalityDistributionEl = document.getElementById('loadingHospitalityDistribution');
    const loadingHostedInDistributionEl = document.getElementById('loadingHostedInDistribution');
    const errorEl = document.getElementById('error');
    const errorShortestEl = document.getElementById('errorShortest');
    const errorLongestEl = document.getElementById('errorLongest');
    const errorDistributionEl = document.getElementById('errorDistribution');
    const errorWordsDistributionEl = document.getElementById('errorWordsDistribution');
    const errorYearsDistributionEl = document.getElementById('errorYearsDistribution');
    const errorPrefixDistributionEl = document.getElementById('errorPrefixDistribution');
    const errorLocationDistributionEl = document.getElementById('errorLocationDistribution');
    const errorNamesDistributionEl = document.getElementById('errorNamesDistribution');
    const errorHealthDistributionEl = document.getElementById('errorHealthDistribution');
    const errorHospitalityDistributionEl = document.getElementById('errorHospitalityDistribution');
    const errorHostedInDistributionEl = document.getElementById('errorHostedInDistribution');
    
    // Load TLD data
    try {
        const data = await fetchTldData();
        loadingEl.style.display = 'none';
        displayChart(data);
    } catch (error) {
        loadingEl.style.display = 'none';
        errorEl.style.display = 'block';
        errorEl.textContent = `Failed to load TLD data: ${error.message}`;
    }
    
    // Load shortest domains data
    try {
        const shortestData = await fetchShortestData();
        loadingShortestEl.style.display = 'none';
        displayShortestChart(shortestData);
    } catch (error) {
        loadingShortestEl.style.display = 'none';
        errorShortestEl.style.display = 'block';
        errorShortestEl.textContent = `Failed to load shortest domains data: ${error.message}`;
    }
    
    // Load longest domains data
    try {
        const longestData = await fetchLongestData();
        loadingLongestEl.style.display = 'none';
        displayLongestChart(longestData);
    } catch (error) {
        loadingLongestEl.style.display = 'none';
        errorLongestEl.style.display = 'block';
        errorLongestEl.textContent = `Failed to load longest domains data: ${error.message}`;
    }
    
    // Load distribution data
    try {
        const distributionData = await fetchDistributionData();
        loadingDistributionEl.style.display = 'none';
        displayDistributionChart(distributionData);
    } catch (error) {
        loadingDistributionEl.style.display = 'none';
        errorDistributionEl.style.display = 'block';
        errorDistributionEl.textContent = `Failed to load distribution data: ${error.message}`;
    }
    
    // Load years distribution data
    try {
        const yearsDistributionData = await fetchYearsDistributionData();
        if (loadingYearsDistributionEl) loadingYearsDistributionEl.style.display = 'none';
        displayYearsDistributionChart(yearsDistributionData);
    } catch (error) {
        if (loadingYearsDistributionEl) loadingYearsDistributionEl.style.display = 'none';
        if (errorYearsDistributionEl) {
            errorYearsDistributionEl.style.display = 'block';
            errorYearsDistributionEl.textContent = `Failed to load years distribution data: ${error.message}`;
        }
    }
    
    // Load words distribution data
    try {
        const wordsDistributionData = await fetchWordsDistributionData();
        if (loadingWordsDistributionEl) loadingWordsDistributionEl.style.display = 'none';
        displayWordsDistributionChart(wordsDistributionData);
    } catch (error) {
        if (loadingWordsDistributionEl) loadingWordsDistributionEl.style.display = 'none';
        if (errorWordsDistributionEl) {
            errorWordsDistributionEl.style.display = 'block';
            errorWordsDistributionEl.textContent = `Failed to load words distribution data: ${error.message}`;
        }
    }
    
    // Load prefix distribution data
    try {
        const prefixDistributionData = await fetchPrefixDistributionData();
        if (loadingPrefixDistributionEl) loadingPrefixDistributionEl.style.display = 'none';
        displayPrefixDistributionChart(prefixDistributionData);
    } catch (error) {
        if (loadingPrefixDistributionEl) loadingPrefixDistributionEl.style.display = 'none';
        if (errorPrefixDistributionEl) {
            errorPrefixDistributionEl.style.display = 'block';
            errorPrefixDistributionEl.textContent = `Failed to load prefix distribution data: ${error.message}`;
        }
    }
    
    // Load location distribution data
    try {
        const locationDistributionData = await fetchLocationDistributionData();
        if (loadingLocationDistributionEl) loadingLocationDistributionEl.style.display = 'none';
        displayLocationDistributionChart(locationDistributionData);
    } catch (error) {
        if (loadingLocationDistributionEl) loadingLocationDistributionEl.style.display = 'none';
        if (errorLocationDistributionEl) {
            errorLocationDistributionEl.style.display = 'block';
            errorLocationDistributionEl.textContent = `Failed to load location distribution data: ${error.message}`;
        }
    }
    
    // Load names distribution data
    try {
        const namesDistributionData = await fetchNamesDistributionData();
        if (loadingNamesDistributionEl) loadingNamesDistributionEl.style.display = 'none';
        displayNamesDistributionChart(namesDistributionData);
    } catch (error) {
        if (loadingNamesDistributionEl) loadingNamesDistributionEl.style.display = 'none';
        if (errorNamesDistributionEl) {
            errorNamesDistributionEl.style.display = 'block';
            errorNamesDistributionEl.textContent = `Failed to load names distribution data: ${error.message}`;
        }
    }
    
    // Load health distribution data
    try {
        const healthDistributionData = await fetchHealthDistributionData();
        if (loadingHealthDistributionEl) loadingHealthDistributionEl.style.display = 'none';
        displayHealthDistributionChart(healthDistributionData);
    } catch (error) {
        if (loadingHealthDistributionEl) loadingHealthDistributionEl.style.display = 'none';
        if (errorHealthDistributionEl) {
            errorHealthDistributionEl.style.display = 'block';
            errorHealthDistributionEl.textContent = `Failed to load health distribution data: ${error.message}`;
        }
    }
    
    // Load hospitality distribution data
    try {
        const hospitalityDistributionData = await fetchHospitalityDistributionData();
        if (loadingHospitalityDistributionEl) loadingHospitalityDistributionEl.style.display = 'none';
        displayHospitalityDistributionChart(hospitalityDistributionData);
    } catch (error) {
        if (loadingHospitalityDistributionEl) loadingHospitalityDistributionEl.style.display = 'none';
        if (errorHospitalityDistributionEl) {
            errorHospitalityDistributionEl.style.display = 'block';
            errorHospitalityDistributionEl.textContent = `Failed to load hospitality distribution data: ${error.message}`;
        }
    }
    
    // Load hosted-in distribution data
    try {
        const hostedInDistributionData = await fetchHostedInDistributionData();
        if (loadingHostedInDistributionEl) loadingHostedInDistributionEl.style.display = 'none';
        displayHostedInDistributionChart(hostedInDistributionData);
    } catch (error) {
        if (loadingHostedInDistributionEl) loadingHostedInDistributionEl.style.display = 'none';
        if (errorHostedInDistributionEl) {
            errorHostedInDistributionEl.style.display = 'block';
            errorHostedInDistributionEl.textContent = `Failed to load hosted-in distribution data: ${error.message}`;
        }
    }
}

// Load dashboard when page is ready
document.addEventListener('DOMContentLoaded', loadDashboard);

// Refresh data every 30 seconds
setInterval(loadDashboard, 30000);
