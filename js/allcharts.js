//import { polygonHull } from "d3";

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

//Section 2 Chart: Immediate determinants of undernutrition

//IYCF Chart
$(document).ready(function (){
    d3.csv('data/IYCF.csv').then(makeIYCFChart);

    function makeIYCFChart (IYCF) {
        let province = IYCF.map(IYCF => IYCF.Province);
        let valueInitiationBreast = IYCF.map(IYCF => IYCF.ValueEarlyBreast);
        let valueExclusiveBreast = IYCF.map(IYCF => IYCF.ValueExclusiveBreast);
        let NPANTaget = IYCF.map(IYCF => IYCF.NPANTarget);
        let ctx = document.getElementById('IYCFChart').getContext("2d");
        let IYCFChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [{
                    label: 'Early Initiation of Breastfeeding',
                    data: valueInitiationBreast,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    order: 1,
                }, {
                    label: 'Exclusive Breastfeeding',
                    data: valueExclusiveBreast,
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                    order: 2,
                }, {
                    label: 'NPAN Taget',
                    data: NPANTaget,
                    backgroundColor: 'lightPink',
                    borderColor: 'red',
                    borderWidth: 1,
                    type: 'line',
                    fill: false,
                    order: 3,
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                },
                maintainAspectRatio: false,
            }
        });
    }
});

//Creat Map Chart
// $(document).ready(function () {
//     d3.json("map/LAO_ADM1.json").then(map);
//     function map(lao) {
//     let province = ChartGeo.topojson.(lao, lao.objects.LAO_ADM1).features;
//     let vte = province.find((d) => d.properties.Name === 'Vientiane Capital');
//     let ph = province.find((d) => d.properties.Name === 'Phongsaly');
//     console.log(province);
//     let Map = new Chart(document.getElementById("Map").getContext("2d"), {
//     type: 'choropleth',
//     data: {
//       labels: province.map(d => d.properties.Name),
//       datasets: [{
//         label: 'Province',
//         data: [{
//             value: 0.1,
//             feature: vte
//         }, {
//             value:0.9,
//             feature: ph
//         }],
//       }]
//     }
//   });
// };
// });
$(document).ready(function () {
    //Set variable map directory
    let mapDraw = ("map/LAO_ADM1.json");
    let stuntingData = ("data/stunting_map.csv");
    //Set to select SVG DOM
    let svg = d3.select("#test");
    //Set Scale
    let colorScale = d3.scaleThreshold()
        .domain([2.4, 2.5, 10.0, 20.0, 30.0])
        .range(d3.schemeBlues[6]);
    //Set tooltips
    let tooltip1 = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

    //Set variable to import data
    let = stuntingSort = d3.map();
    let promise = [
        d3.json(mapDraw),
        d3.csv(stuntingData, d => stuntingSort.set(d.feature_id, +d.ValueStunting11))
    ];

    Promise.all(promise).then(creatMap);
    function creatMap(value) {
        let lao = value[0];
        let stunting = value[1];
        //Import Map Topojson type as Geojson structure
        let myMap = topojson.feature(lao, lao.objects.LAO_ADM1);
        //Set porjection map type
        let projection = d3.geoMercator()
            .fitHeight(360, myMap); //Auto fit SVG to height 360 refer to svg set at HTML

        //Draw a graph use "g" because draw multiple path in one time
        svg.append("g")
            .selectAll("path")
            .data(myMap.features)
            .enter()
            .append("path")
            .attr("d", d3.geoPath().projection(projection))
            .attr("fill", d => colorScale(d.properties.feature_id = stuntingSort.get(d.properties.feature_id)));
    
        svg.selectAll("path")
            .data(myMap.features)
            .on("mouseover", function(d) {    
                tooltip1.transition()    
                .duration(200)    
                .style("opacity", .9);    
                tooltip1.html(d.properties.Name + '<br>' + 'value:' + d.properties.feature_id)  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");  
              })          
              .on("mouseout", function(d) {   
                tooltip1.transition()    
                .duration(500)    
                .style("opacity", 0); 
              });
        
        //Draw a line border for each province
        svg.append("path")
            .datum(topojson.mesh(lao, lao.objects.LAO_ADM1, function(a, b) { return a !== b; }))
            .attr("class", "mapBorder")
            .attr("d", d3.geoPath().projection(projection));
    }
});
//Map 11
$(document).ready(function () {
    //Set variable map directory
    let mapDraw = ("map/LAO_ADM1.json");
    let stuntingData = ("data/stunting_map.csv");
    //Set to select SVG DOM
    let svg = d3.select("#test1");
    //Set Scale
    let colorScale = d3.scaleThreshold()
        .domain([2.4, 2.5, 10.0, 20.0, 30.0])
        .range(d3.schemeBlues[6]);
    //Set tooltips
    let tooltip = d3.select("body").append("div") 
    .attr("class", "tooltip1")       
    .style("opacity", 0);

    //Set variable to import data
    let = stuntingSort1 = d3.map();
    let promise = [
        d3.json(mapDraw),
        d3.csv(stuntingData, d => stuntingSort1.set(d.feature_id, +d.ValueStunting17))
    ];

    Promise.all(promise).then(creatMap);
    function creatMap(value) {
        let lao = value[0];
        let stunting = value[1];
        //Import Map Topojson type as Geojson structure
        let myMap = topojson.feature(lao, lao.objects.LAO_ADM1);
        //Set porjection map type
        let projection = d3.geoMercator()
            .fitHeight(360, myMap); //Auto fit SVG to height 360 refer to svg set at HTML

        //Draw a graph use "g" because draw multiple path in one time
        svg.append("g")
            .selectAll("path")
            .data(myMap.features)
            .enter()
            .append("path")
            .attr("d", d3.geoPath().projection(projection))
            .attr("fill", d => colorScale(d.properties.feature_id = stuntingSort1.get(d.properties.feature_id)));
    
        svg.selectAll("path")
            .data(myMap.features)
            .on("mouseover", function(d) {    
                tooltip.transition()    
                .duration(200)    
                .style("opacity", .9);    
                tooltip.html(d.properties.Name + '<br>' + 'value:' + d.properties.feature_id)  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");  
              })          
              .on("mouseout", function(d) {   
                tooltip.transition()    
                .duration(500)    
                .style("opacity", 0); 
              });
        
        //Draw a line border for each province
        svg.append("path")
            .datum(topojson.mesh(lao, lao.objects.LAO_ADM1, function(a, b) { return a !== b; }))
            .attr("class", "mapBorder")
            .attr("d", d3.geoPath().projection(projection));
    }
});
