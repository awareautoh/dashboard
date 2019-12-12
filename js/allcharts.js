/*
  Version: 1.0
  Created date: 29 Nov 2019
  The national platforms for Nutrition project Lao PDR
  Data Analysis Unit, Center for Development Policy Research 
  Ministry of Planning and Inestment 
  Credit: highchats.com 
*/
//Chart Key Nutrition
//---Child Mulnutrtion Chart--
//-----Import data
Chart.plugins.unregister(ChartDataLabels);
$(document).ready(function() {
    d3.csv('data/wasting_unsorted.csv').then(makeChartWastingAndOverweight); //Add data by D3JS library
    
    function makeChartWastingAndOverweight(wasting) {
        //Create a sub data from main file (sorting list)
        let wastingSort = wasting.slice().sort((a, b) => a.ValueWasting - b.ValueWasting);
        let overWeightSort = wasting.slice().sort((a, b) => a.ValueOverWeight - b.ValueOverWeight);
        //Create Variable by Stat index
        let provinceW = wasting.map(wasting => wasting.Province);
        let valueW = wasting.map(wasting => wasting.ValueWasting);
        let provinceO = wasting.map(wasting => wasting.Province);
        let valueO = wasting.map(wasting => wasting.ValueOverWeight);
        //Sorted Variable for Wasting
        let provinceWSort = wastingSort.map(wastingSort => wastingSort.Province);
        let valueWSort = wastingSort.map(wastingSort => wastingSort.ValueWasting);
        let valueOByWSort = wastingSort.map(wastingSort => wastingSort.ValueOverWeight);
        //Sorted Variable for Overweight
        let provinceOSort = overWeightSort.map(overWeightSort => overWeightSort.Province);
        let valueOSort = overWeightSort.map(overWeightSort => overWeightSort.ValueWasting);
        let valueSByOSort = overWeightSort.map(overWeightSort => overWeightSort.ValueOverWeight);
        var ctx = document.getElementById('wastingAndOverweightChart').getContext("2d");
        var Chart1 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: provinceW,
                datasets: [{
                    label: 'Wasting',
                    data: valueW,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(54, 162, 235, 0.1)'
                },{
                    label: 'Overweight',
                    data: valueO,
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgb(255, 206, 86)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255, 206, 86, 0.1)'
                }]
            },
            plugins: [ChartDataLabels],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                maintainAspectRatio: false,
                plugins: {
                        datalabels: {
                            align: 'end'
                        }
                    } 
            }
        });
        //Add function for click button
        let x = 0;
        $('#Chart1SortWasting').on('click', function() {
            if (x == 0) {
                Chart1.data.datasets.forEach((datasets, index) => {
                    if (index == 0) { //Add condition to change group set for 2 array
                        datasets.data = valueWSort;
                    } else {
                        datasets.data = valueOByWSort;
                    }
                });
                Chart1.data.labels.forEach((labels) =>  {
                    Chart1.data.labels = provinceWSort;
                });
                Chart1.update();
                x = 1;
            } else {
                Chart1.data.datasets.forEach((datasets, index) => {
                    if (index == 0) {
                        datasets.data = valueW;
                    } else {
                        datasets.data = valueO;
                    }
                });
                Chart1.data.labels.forEach((labels) =>  {
                    Chart1.data.labels = provinceW;
                });
                Chart1.update();
                x = 0;
            };
        });
        $('#Chart1SortOverWeight').on('click', function() {
            if (x == 0) {
                Chart1.data.datasets.forEach((datasets, index) => {
                    if (index == 0) { //Add condition to change group set for 2 array
                        datasets.data = valueOSort;
                    } else {
                        datasets.data = valueSByOSort;
                    }
                });
                Chart1.data.labels.forEach((labels) =>  {
                    Chart1.data.labels = provinceOSort;
                });
                Chart1.update();
                x = 1;
            } else {
                Chart1.data.datasets.forEach((datasets, index) => {
                    if (index == 0) {
                        datasets.data = valueW;
                    } else {
                        datasets.data = valueO;
                    }
                });
                Chart1.data.labels.forEach((labels) =>  {
                    Chart1.data.labels = provinceW;
                });
                Chart1.update();
                x = 0;
            };
        });
    };
});

//---Women Undernutrition Chart--

//Creat Women Mulnutriotion
//Import data
$(document).ready(function() {
    d3.csv('data/prevalence_of_anemia.csv').then(makeChartWomenMulnutrition);

    function makeChartWomenMulnutrition (anemia) {
        let province = anemia.map(anemia => anemia.Province);
        let value = anemia.map(anemia => anemia.ValueAnemia);
        let WHO = anemia.map(anemia => anemia.WHOCutOff);

        //Creat Chart Women Mulnutrtion
        let ctx = document.getElementById('womenAnemia').getContext("2d");
        let womenAnemia = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: 'Percentage of Women Anemia Prevalence',
                        data: value,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255, 99, 132, 0.1)',
                        order: 1
                    },
                    {
                        label: 'WHO Cutoff',
                        data: WHO,
                        type: 'line',
                        fill: false,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        order: 2,
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                maintainAspectRatio: false, 
            }
        });
        
    };

});
//Creat Women Overweight and Obesiry Chart
$(document).ready(function() {
    d3.csv('data/prevalence_overweight_and_obesity.csv').then(makeChartWomenMulnutrition);

    function makeChartWomenMulnutrition (overWeightObese) {
        let province = overWeightObese.map(overWeightObese => overWeightObese.Province);
        let valueWOverWeight = overWeightObese.map(overWeightObese => overWeightObese.ValueWomenOverWeight);
        let valueWObese = overWeightObese.map(overWeightObese => overWeightObese.ValueObese);
        let ctx = document.getElementById('womenOverweightAndObese').getContext("2d");
        let womenOverweightAndObese = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: 'Women Overweight',
                        data: valueWOverWeight,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255, 99, 132, 0.1)',
                    },
                    {
                        label: 'Women Obese',
                        data: valueWObese,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(54, 162, 235, 0.1)'
                    }
                ]
            },
            plugins: [ChartDataLabels],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                        stacked: true,
                    }],
                    xAxes: [{
                        stacked: true,
                    }]
                },
                maintainAspectRatio: false,
            }
        });
        
    };

});