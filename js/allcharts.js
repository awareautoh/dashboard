/*
  Version: 1.0
  Created date: 29 Nov 2019
  The national platforms for Nutrition project Lao PDR
  Data Analysis Unit, Center for Development Policy Research 
  Ministry of Planning and Inestment 
  Credit: highchats.com 
*/

//Function to add legend to D3JS Map
function ramp(color, n = 256) {
    const canvas = DOM.canvas(n, 1);
    const context = canvas.getContext("2d");
    for (let i = 0; i < n; ++i) {
      context.fillStyle = color(i / (n - 1));
      context.fillRect(i, 0, 1, 1);
    }
    return canvas;
  }

  function legend({
    color,
    title,
    tickSize = 6,
    width = 320, 
    height = 44 + tickSize,
    marginTop = 18,
    marginRight = 0,
    marginBottom = 16 + tickSize,
    marginLeft = 0,
    ticks = width / 64,
    tickFormat,
    tickValues
  } = {}) {
  
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .style("overflow", "visible")
        .style("display", "block");
  
    let x;
  
    // Continuous
    if (color.interpolator) {
      x = Object.assign(color.copy()
          .interpolator(d3.interpolateRound(marginLeft, width - marginRight)),
          {range() { return [marginLeft, width - marginRight]; }});
  
      svg.append("image")
          .attr("x", marginLeft)
          .attr("y", marginTop)
          .attr("width", width - marginLeft - marginRight)
          .attr("height", height - marginTop - marginBottom)
          .attr("preserveAspectRatio", "none")
          .attr("xlink:href", ramp(color.interpolator()).toDataURL());
  
      // scaleSequentialQuantile doesn’t implement ticks or tickFormat.
      if (!x.ticks) {
        if (tickValues === undefined) {
          const n = Math.round(ticks + 1);
          tickValues = d3.range(n).map(i => d3.quantile(color.domain(), i / (n - 1)));
        }
        if (typeof tickFormat !== "function") {
          tickFormat = d3.format(tickFormat === undefined ? ",f" : tickFormat);
        }
      }
    }
  
    // Discrete
    else if (color.invertExtent) {
      const thresholds
          = color.thresholds ? color.thresholds() // scaleQuantize
          : color.quantiles ? color.quantiles() // scaleQuantile
          : color.domain(); // scaleThreshold
  
      const thresholdFormat
          = tickFormat === undefined ? d => d
          : typeof tickFormat === "string" ? d3.format(tickFormat)
          : tickFormat;
  
      x = d3.scaleLinear()
          .domain([-1, color.range().length - 1])
          .rangeRound([marginLeft, width - marginRight]);
  
      svg.append("g")
        .selectAll("rect")
        .data(color.range())
        .join("rect")
          .attr("x", (d, i) => x(i - 1))
          .attr("y", marginTop)
          .attr("width", (d, i) => x(i) - x(i - 1))
          .attr("height", height - marginTop - marginBottom)
          .attr("fill", d => d);
  
      tickValues = d3.range(thresholds.length);
      tickFormat = i => thresholdFormat(thresholds[i], i);
    }
  
    svg.append("g")
        .attr("transform", `translate(0, ${height - marginBottom})`)
        .call(d3.axisBottom(x)
          .ticks(ticks, typeof tickFormat === "string" ? tickFormat : undefined)
          .tickFormat(typeof tickFormat === "function" ? tickFormat : undefined)
          .tickSize(tickSize)
          .tickValues(tickValues))
        .call(g => g.selectAll(".tick line").attr("y1", marginTop + marginBottom - height))
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
          .attr("y", marginTop + marginBottom - height - 6)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .text(title));
  
    return svg.node();
  }

//File path for import data
let wastingPath = "data/wasting_unsorted.csv";
let anemiaPath = "data/prevalence_of_anemia.csv";
let weightAndObesity = "data/prevalence_overweight_and_obesity.csv";
let IYCFPath = "data/IYCF.csv";
let minimumDietPath = "data/minimumDiet.csv";
let womenDietPath = "data/womenDiet.csv";
let session3Path = ("data/session3_data.csv");
let socioStatusPath = ("data/socio_status.csv");
//Chart Key Nutrition

//---Child Mulnutrtion Chart
Chart.plugins.unregister(ChartDataLabels);
$(document).ready(function() {
    d3.csv(wastingPath).then(makeChartWastingAndOverweight); //Add data by D3JS library
    function makeChartWastingAndOverweight(wasting) {
        //Create a sub data from main file (sorting list)
        let wastingSort = wasting.slice().sort((a, b) => a.ValueWasting - b.ValueWasting);
        let overWeightSort = wasting.slice().sort((a, b) => a.ValueOverWeight - b.ValueOverWeight);
        //Create Variable by Stat index
        let provinceW = wasting.map(d => d.Province);
        let valueW = wasting.map(d => d.ValueWasting);
        let provinceO = wasting.map(d => d.Province);
        let valueO = wasting.map(d => d.ValueOverWeight);
        //Sorted Variable for Wasting
        let provinceWSort = wastingSort.map(d => d.Province);
        let valueWSort = wastingSort.map(d => d.ValueWasting);
        let valueOByWSort = wastingSort.map(d => d.ValueOverWeight);
        //Sorted Variable for Overweight
        let provinceOSort = overWeightSort.map(d => d.Province);
        let valueOSort = overWeightSort.map(d => d.ValueWasting);
        let valueSByOSort = overWeightSort.map(d => d.ValueOverWeight);
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
                        },
                        display: false,
                    }],
                    xAxes: [{
                        gridLines: {
                            drawBorder: true,
                            drawOnChartArea: false,
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
                Chart1.data.datasets.forEach((d, i) => { //d: dataset; i: index
                    if (i == 0) { //Add condition to change group set for 2 array
                        d.data = valueWSort;
                    } else {
                        d.data = valueOByWSort;
                    }
                });
                Chart1.data.labels.forEach(() =>  {
                    Chart1.data.labels = provinceWSort;
                });
                Chart1.update();
                x = 1;
            } else {
                Chart1.data.datasets.forEach((d, i) => {
                    if (i == 0) {
                        d.data = valueW;
                    } else {
                        d.data = valueO;
                    }
                });
                Chart1.data.labels.forEach(() =>  {
                    Chart1.data.labels = provinceW;
                });
                Chart1.update();
                x = 0;
            };
        });
        $('#Chart1SortOverWeight').on('click', function() {
            if (x == 0) {
                Chart1.data.datasets.forEach((d, i) => { //d: dataset; i: index
                    if (i == 0) { //Add condition to change group set for 2 array
                        d.data = valueOSort;
                    } else {
                        d.data = valueSByOSort;
                    }
                });
                Chart1.data.labels.forEach(() =>  {
                    Chart1.data.labels = provinceOSort;
                });
                Chart1.update();
                x = 1;
            } else {
                Chart1.data.datasets.forEach((d, i) => {
                    if (i == 0) {
                        d.data = valueW;
                    } else {
                        d.data = valueO;
                    }
                });
                Chart1.data.labels.forEach(() =>  {
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
$(document).ready(function() {
    d3.csv(anemiaPath).then(makeChartWomenMulnutrition);
    function makeChartWomenMulnutrition (anemia) {
        let province = anemia.map(d => d.Province);
        let value = anemia.map(d=> d.ValueAnemia);
        let WHO = anemia.map(d => d.WHOCutOff);

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
                        label: 'WHO Cutoff 20%',
                        data: WHO,
                        type: 'line',
                        fill: false,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        pointStyle: "line",
                        borderWidth: 1,
                        order: 1,
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                    }],
                    xAxes: [{
                        gridLines: false,
                    }]
                },
                maintainAspectRatio: false,
            }
        });
        
    };

});
//Creat Women Overweight and Obesiry Chart
$(document).ready(function() {
    d3.csv(weightAndObesity).then(makeChartWomenMulnutrition);
    function makeChartWomenMulnutrition (overWeightObese) {
        let province = overWeightObese.map(d => d.Province);
        let valueWOverWeight = overWeightObese.map(d => d.ValueWomenOverWeight);
        let valueWObese = overWeightObese.map(d => d.ValueObese);
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
                        display: false,
                    }],
                    xAxes: [{
                        stacked: true,
                        gridLines: {
                            drawBorder: true,
                            drawOnChartArea: false,
                        }
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
    d3.csv(IYCFPath).then(makeIYCFChart);
    function makeIYCFChart (IYCF) {
        let province = IYCF.map(d => d.Province);
        let valueInitiationBreast = IYCF.map(d => d.ValueEarlyBreast);
        let valueExclusiveBreast = IYCF.map(d => d.ValueExclusiveBreast);
        let NPANTaget = IYCF.map(d => d.NPANTarget);
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
                    label: 'NPAN Taget 70%',
                    data: NPANTaget,
                    backgroundColor: 'lightPink',
                    borderColor: 'red',
                    borderWidth: 0.5,
                    type: 'line',
                    pointStyle: "line",
                    borderDash: [5, 5],
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
                    }],
                    xAxes: [{
                        gridLines: {
                            drawBorder: true,
                            drawOnChartArea: false,
                        }
                    }],
                },
                maintainAspectRatio: false,
            }
        });
    }
});

//MiniDiet Chart
$(document).ready(function (){
    d3.csv(minimumDietPath).then(makeMiniDietChart);
    function makeMiniDietChart (miniDiet) {
        let province = miniDiet.map(d => d.Province);
        let valueMiniDiet = miniDiet.map(d => d.ValueMiniDietDiversity);
        let valueAcceptDiet = miniDiet.map(d => d.ValueAcceptDiet);
        let NPANTaget = miniDiet.map(d => d.NPANTarget);
        let ctx = document.getElementById('miniDietChart').getContext("2d");
        let miniDietChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [{
                    label: 'Prevalance of Minimum Diet Diversity',
                    data: valueMiniDiet,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    order: 1,
                }, {
                    label: 'Prevalance of Minimum Acceptable Diet',
                    data: valueAcceptDiet,
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                    order: 2,
                }, {
                    label: 'NPAN Taget 50%',
                    data: NPANTaget,
                    backgroundColor: 'lightPink',
                    borderColor: 'red',
                    borderWidth: 0.5,
                    type: 'line',
                    pointStyle: "line",
                    borderDash: [5, 5],
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
                    }],
                    xAxes: [{
                        gridLines: {
                            drawBorder: true,
                            drawOnChartArea: false,
                        }
                    }],
                },
                maintainAspectRatio: false,
            }
        });
    }
});

//Women Diet Chart
$(document).ready(function() {
    d3.csv(womenDietPath).then(makeChartWomenDiet);

    function makeChartWomenDiet (womenDiet) {
        let province = womenDiet.map(d => d.Province);
        let valueWomenDiet = womenDiet.map(d => d.ValueWomenDiet);
        let nationalAverage = womenDiet.map(d => d.NationalWomenDiet);

        //Creat Chart Women Mulnutrtion
        let ctx = document.getElementById('womenDietChart').getContext("2d");
        let womenDietChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: 'Percentage of Women Anemia Prevalence',
                        data: valueWomenDiet,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255, 99, 132, 0.1)',
                        order: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            drawBorder: true,
                            drawOnChartArea: false,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                },
                maintainAspectRatio: false,
                annotation: {
                    annotations: [{
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 32.4,
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                        borderDash: [5, 5],
                        label: {
                            enabled: true,
                            content: "National 32.4%",
                            position: "center",
                        }
                    }]
                }
            }
        });
        
    };

});

//Open Defaction Map
$(document).ready(function () {
    //Set variable map directory
    let mapDraw = ("map/LAO_ADM1.json");
    let openDefaceData = ("data/openDefaceMap.csv");
    //Set to select SVG DOM
    let svg = d3.select("#openDefaceMap");
    //Set Scale
    let colorScale = d3.scaleQuantize([1, 100], d3.schemeRdPu[9]);
    //Set tooltips
    let tooltipOpenDeface = d3.select("body").append("div") 
    .attr("class", "tooltipOpenDeface")
    .style("opacity", 0);

    //Set variable to import data
    let = openDefaceSort = d3.map();
    let promise = [
        d3.json(mapDraw),
        d3.csv(openDefaceData, d => openDefaceSort.set(d.feature_id, +d.ValueOpenDaface))
    ];
    Promise.all(promise).then(creatMap);
    function creatMap(value) {
        let lao = value[0];
        let openDeface = value[1];
        //Import Map Topojson type as Geojson structure
        let myMap = topojson.feature(lao, lao.objects.LAO_ADM1);
        //Set porjection map type
        let projection = d3.geoMercator()
            .fitSize([320, 320], myMap); //Auto fit SVG refer to svg set at HTML

        //Draw a graph use "g" because draw multiple path in one time
        svg.append("g")
            .selectAll("path")
            .data(myMap.features)
            .enter()
            .append("path")
            .attr("d", d3.geoPath().projection(projection))
            .attr("fill", d => colorScale(d.properties.feature_id = openDefaceSort.get(d.properties.feature_id)));
    
        svg.selectAll("path")
            .data(myMap.features)
            .on("mouseover", function(d) {    
                tooltipOpenDeface.transition()    
                .duration(200)    
                .style("opacity", .9);    
                tooltipOpenDeface.html(d.properties.Name + '<br>' + 'value:' + d.properties.feature_id)  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");
              })          
              .on("mouseout", function(d) {   
                tooltipOpenDeface.transition()    
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

//Map Section 3
$(document).ready(function () {
    d3.csv(session3Path).then(makeChartSession3);

    function makeChartSession3 (value) {
        let province = value.map(d => d.Province);
        let valueVitA = value.map(d => d.ValueVitA);
        let valueDeworm = value.map(d => d.ValueDeworm);
        let valueIronFolic = value.map(d => d.ValueIronFolic);
        let nationalIronFolic = value.map(d => d.NationalIronFolic);



        //Creat Chart Vitamin A Supplement Coverage
        let ChartVitA = document.getElementById('vitAChart').getContext("2d");
        let drawVitAChart = new Chart(ChartVitA, {
            type: 'horizontalBar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: 'Percentage of Women Anemia Prevalence',
                        data: valueVitA,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255, 99, 132, 0.1)',
                        order: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            drawBorder: true,
                            drawOnChartArea: false,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                },
                maintainAspectRatio: false,
                annotation: {
                    events: ["mouseover"],
                    annotations: [{
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 38.5,
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                        borderDash: [5, 5],
                        label: {
                            enabled: true,
                            content: "National 38.5%",
                            position: "center",
                        },
                    }]
                }
            }
        });

        //Creat Chart Children Received Deworming Coverage
        let ChartDeworming = document.getElementById('dewormingChart').getContext("2d");
        let drawDewormingChart = new Chart(ChartDeworming, {
            type: 'horizontalBar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: 'Percentage of Women Anemia Prevalence',
                        data: valueDeworm,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255, 99, 132, 0.1)',
                        order: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            drawBorder: true,
                            drawOnChartArea: false,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                },
                maintainAspectRatio: false,
                annotation: {
                    events: ["mouseover"],
                    annotations: [{
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 38.7,
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                        borderDash: [5, 5],
                        label: {
                            enabled: true,
                            content: "National 38.7%",
                            position: "center",
                        },
                    }]
                }
            }
        });

        //Creat Chart Iron Folic Coverage
        let chartIronFolic = document.getElementById('ironFolicChart').getContext("2d");
        let drawIronFolic = new Chart(chartIronFolic, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: 'Iron/Folic Supplement Coverage',
                        data: valueIronFolic,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255, 99, 132, 0.1)',
                        order: 1
                    },
                    {
                        label: 'National 25.4%',
                        data: nationalIronFolic,
                        type: 'line',
                        pointStyle: "line",
                        borderWidth: 1,
                        fill: false,
                        borderColor: 'rgba(54, 162, 235, 1)',
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
                    }],
                    xAxes: [{
                        gridLines: {
                            drawBorder: true,
                            drawOnChartArea: false,
                        }
                    }],
                },
                maintainAspectRatio: false, 
            }
        });
        
    };
});

//---Section 4 Chart

//---->Women Status
$(document).ready(function () {
    //Set variable map directory
    let mapDraw = ("map/LAO_ADM1.json");
    let womenStatusData = ("data/womenStatusMap.csv");
    //Set to select SVG DOM
    let svg = d3.select("#womenStatusMap");
    //Set Scale
    let colorScale = d3.scaleThreshold()
        .domain([0, 0.699, 0.799, 0.879, 0.967])
        .range(["#fbe9e7", "#f44336", "#ffeb3b", "#8bc34a", "#4caf50"]);
    //Set tooltips
    let tooltipWomenStatus = d3.select("body").append("div") 
    .attr("class", "tooltipWomenStatus")
    .style("opacity", 0);

    //Set variable to import data
    let = womenStatusSort = d3.map();
    let promise = [
        d3.json(mapDraw),
        d3.csv(womenStatusData, d => womenStatusSort.set(d.feature_id, +d.ValueWomenStatus))
    ];
    Promise.all(promise).then(creatMap);
    function creatMap(value) {
        let lao = value[0];
        let womenStatus = value[1];
        //Import Map Topojson type as Geojson structure
        let myMap = topojson.feature(lao, lao.objects.LAO_ADM1);
        //Set porjection map type
        let projection = d3.geoMercator()
            .fitSize([320, 320], myMap); //Auto fit SVG refer to svg set at HTML

        //Draw a graph use "g" because draw multiple path in one time
        svg.append("g")
            .selectAll("path")
            .data(myMap.features)
            .enter()
            .append("path")
            .attr("d", d3.geoPath().projection(projection))
            .attr("fill", d => colorScale(+(d.properties.feature_id = womenStatusSort.get(d.properties.feature_id))/100));
    
        svg.selectAll("path")
            .data(myMap.features)
            .on("mouseover", function(d) {    
                tooltipWomenStatus.transition()    
                .duration(200)    
                .style("opacity", .9);    
                tooltipWomenStatus.html(d.properties.Name + '<br>' + 'value:' + d.properties.feature_id)  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");
              })          
              .on("mouseout", function(d) {   
                tooltipWomenStatus.transition()    
                .duration(500)    
                .style("opacity", 0); 
              });
        
        //Draw a line border for each province
        svg.append("path")
            .datum(topojson.mesh(lao, lao.objects.LAO_ADM1, function(a, b) { return a !== b; }))
            .attr("class", "mapBorder")
            .attr("d", d3.geoPath().projection(projection));
        
        //Add Legend
        svg.append("g")
        .attr("transform", "translate(0,250)")
        .append(() => legend({
            color: d3.scaleThreshold(["70<", "80<", "87.9<", ">88"],
            ["#f44336", "#ffeb3b", "#8bc34a", "#4caf50"]),
            title: "GER Female Secondary School (%)",
            width: 190}));
    }
});

//--->Socio Status Chart
$(document).ready(function() {
    d3.csv(socioStatusPath).then(makeChartSocioStatus);

    function makeChartSocioStatus (socio) {
        let province = socio.map(d => d.Province);
        let valueSocio = socio.map(d => d.ValueSocioStatus);
        let nationalSocio = socio.map(d => d.NationalSocioStatus);

        //Creat Chart Women Mulnutrtion
        let ctx = document.getElementById('socioStatusChart').getContext("2d");
        let socioStatusChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: 'Proportion of population below proverty line',
                        data: valueSocio,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255, 99, 132, 0.1)',
                        order: 1
                    },
                    {
                        label: 'National 23.2%',
                        data: nationalSocio,
                        type: 'line',
                        pointStyle: "line",
                        borderWidth: 1,
                        fill: false,
                        borderColor: 'rgba(54, 162, 235, 1)',
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
                    }],
                    xAxes: [{
                        gridLines: {
                            drawBorder: true,
                            drawOnChartArea: false,
                        }
                    }],
                },
                maintainAspectRatio: false, 
            }
        });
        
    };

});



//---Section Create Map

//Stunting 2011 Map
$(document).ready(function () {
    //Set variable map directory
    let mapDraw = ("map/LAO_ADM1.json");
    let stuntingData = ("data/stunting_map.csv");
    //Set to select SVG DOM
    let svg = d3.select("#test");
    //Set Scale
    let colorScale = d3.scaleThreshold()
        .domain([0, 0.025, 0.10, 0.20, 0.30])
        .range(["#fafafa", "#0091ea",  "#00c853",  "#ffd600", "#ff6d00", "#d50000"]);
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
        .fitSize([320, 320], myMap); //Auto fit SVG refer to svg set at HTML

        //Draw a graph use "g" because draw multiple path in one time
        svg.append("g")
            .selectAll("path")
            .data(myMap.features)
            .enter()
            .append("path")
            .attr("d", d3.geoPath().projection(projection))
            .attr("fill", d => colorScale((d.properties.feature_id = stuntingSort.get(d.properties.feature_id))/100));
    
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

        //Add Legend
        svg.append("g")
        .attr("transform", "translate(0,250)")
        .append(() => legend({
            color: d3.scaleThreshold(["<2.5", "2.5", "10", "20", ">=30"],
            ["#0091ea",  "#00c853",  "#ffd600", "#ff6d00", "#d50000"]),
            title: "WHO Classification, 2017 (%)",
            width: 190}));
    
    
    }
});



//Stunting 2017 Map
$(document).ready(function () {
    //Set variable map directory
    let mapDraw = ("map/LAO_ADM1.json");
    let stuntingData = ("data/stunting_map.csv");
    //Set to select SVG DOM
    let svg = d3.select("#test1");
    //Set Scale
    let colorScale = d3.scaleThreshold()
        .domain([0, 0.025, 0.10, 0.20, 0.30])
        .range(["#fafafa", "#0091ea",  "#00c853",  "#ffd600", "#ff6d00", "#d50000"]);
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
            .fitSize([320, 320], myMap); //Auto fit SVG refer to svg set at HTML

        //Draw a graph use "g" because draw multiple path in one time
        svg.append("g")
            .selectAll("path")
            .data(myMap.features)
            .enter()
            .append("path")
            .attr("d", d3.geoPath().projection(projection))
            .attr("fill", d => colorScale((d.properties.feature_id = stuntingSort1.get(d.properties.feature_id))/100));
    
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

        //Add legend
        svg.append("g")
        .attr("transform", "translate(0,250)")
        .append(() => legend({
            color: d3.scaleThreshold(["<2.5", "2.5", "10", "20", ">=30"],
            ["#0091ea",  "#00c853",  "#ffd600", "#ff6d00", "#d50000"]),
            title: "WHO Classification, 2017 (%)",
            width: 190}));    
    
    
    
    }
});


$(document).ready(function () {
    let sankeyDataImport = 'data/energy.csv'; //Data directory path
    Promise.resolve(d3.csv(sankeyDataImport, d3.autoType)).then(importSankeyData); //Import data, use promise.resolve function to handle data import
    function importSankeyData (data) {
        let width = 800;
        let height = 700;
        let svg = d3.select("#sankey"); //crate variale svg to select DOM
        let edgeColor = "input";
        let align = "justify";
        let keys = data.columns.slice(0, -1)


        let dataNodes = Array.from(new Set(data.flatMap(l => [l.source, l.target])), name => ({name}));
        let dataLinks = data;

        function graph () { //Function to minipulate data in sankey format
            let index = -1;
            const nodes = [];
            const nodeByKey = new Map;
            const indexByKey = new Map;
            const links = [];
          
            for (const k of keys) {
              for (const d of data) {
                const key = JSON.stringify([k, d[k]]);
                if (nodeByKey.has(key)) continue;
                const node = {name: d[k]};
                nodes.push(node);
                nodeByKey.set(key, node);
                indexByKey.set(key, ++index);
              }
            }
          
            for (let i = 1; i < keys.length; ++i) {
              const a = keys[i - 1];
              const b = keys[i];
              const prefix = keys.slice(0, i + 1);
              const linkByKey = new Map;
              for (const d of data) {
                const names = prefix.map(k => d[k]);
                const key = JSON.stringify(names);
                const value = d.value || 1;
                let link = linkByKey.get(key);
                if (link) { link.value += value; continue; }
                link = {
                  source: indexByKey.get(JSON.stringify([a, d[a]])),
                  target: indexByKey.get(JSON.stringify([b, d[b]])),
                  names,
                  value
                };
                links.push(link);
                linkByKey.set(key, link);
              }
            }
          
            return {nodes, links};
        };


        let test = graph(data);

        let useData = {dataNodes, dataLinks};

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        function format() {
            const f = d3.format(",.0f");
            return d => `${f(d)} TWh`;
          }
        
        let sankey = d3.sankey()
            .nodeId(d => d.name)
            .nodeAlign(d3[`sankey${align[0].toUpperCase()}${align.slice(1)}`])
            .nodeWidth(15)
            .nodePadding(10)
            .extent([[1, 5], [width - 1, height - 5]]);
        let {nodes, links} = sankey({
            nodes: dataNodes.map(d => Object.assign({}, d)),
            links: dataLinks.map(d => Object.assign({}, d))
        });

        console.log(nodes);
        console.log(links);

        svg.append("g")
        .attr("stroke", "#000")
        .selectAll("rect")
        .data(nodes)
        .join("rect")
        .attr("x", d => d.x0)
        .attr("y", d => d.y0)
        .attr("height", d => d.y1 - d.y0)
        .attr("width", d => d.x1 - d.x0)
        .attr("fill", d => color(d.name))
        .append("title")
        .text(d => `${d.name}\n${format(d.value)}`);


        const link = svg.append("g")
            .attr("fill", "none")
            .attr("stroke-opacity", 0.5)
            .selectAll("g")
            .data(links)
            .join("g")
            .style("mix-blend-mode", "multiply");

        if (edgeColor === "path") {
            const gradient = link.append("linearGradient")
                .attr("id", d => (d.uid = DOM.uid("link")).id)
                .attr("gradientUnits", "userSpaceOnUse")
                .attr("x1", d => d.source.x1)
                .attr("x2", d => d.target.x0);
        
            gradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", d => {
                    let name = d.source.name;
                    return color(name.replace(/ .*/, ""));
                });
        
            gradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", d => {
                    let name = d.target.name;
                    return color(name.replace(/ .*/, ""));
                });
            }

        link.append("path")
            .attr("d", d3.sankeyLinkHorizontal())
            .attr("stroke", d => edgeColor === "none" ? "#aaa"
                : edgeColor === "path" ? d.uid 
                : edgeColor === "input" ? color(d.source.name) 
                : color(d.target.name))
            .attr("stroke-width", d => Math.max(1, d.width));

        link.append("title")
        .text(d => `${d.source.name} → ${d.target.name}\n${format(d.value)}`);
      
        svg.append("g")
            .style("font", "10px sans-serif")
            .selectAll("text")
            .data(nodes)
            .join("text")
            .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
            .attr("y", d => (d.y1 + d.y0) / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
            .text(d => d.name);

        svg.node();
    }
});