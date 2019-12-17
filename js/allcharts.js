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

//MiniDiet Chart
$(document).ready(function (){
    d3.csv('data/minimumDiet.csv').then(makeMiniDietChart);

    function makeMiniDietChart (miniDiet) {
        let province = miniDiet.map(miniDiet => miniDiet.Province);
        let valueMiniDiet = miniDiet.map(miniDiet => miniDiet.ValueMiniDietDiversity);
        let valueAcceptDiet = miniDiet.map(miniDiet => miniDiet.ValueAcceptDiet);
        let NPANTaget = miniDiet.map(miniDiet => miniDiet.NPANTarget);
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

//Women Diet Chart
$(document).ready(function() {
    d3.csv('data/womenDiet.csv').then(makeChartWomenDiet);

    function makeChartWomenDiet (womenDiet) {
        let province = womenDiet.map(womenDiet => womenDiet.Province);
        let valueWomenDiet = womenDiet.map(womenDiet => womenDiet.ValueWomenDiet);
        let nationalAverage = womenDiet.map(womenDiet => womenDiet.NationalWomenDiet);

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
    console.log(openDefaceSort);
    Promise.all(promise).then(creatMap);
    function creatMap(value) {
        let lao = value[0];
        let openDeface = value[1];
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
    let session3Data = ("data/session3_data.csv")
    d3.csv(session3Data).then(makeChartSession3);

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
                        label: 'National',
                        data: nationalIronFolic,
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
    console.log(womenStatusSort);
    Promise.all(promise).then(creatMap);
    function creatMap(value) {
        let lao = value[0];
        let womenStatus = value[1];
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
    let socioStatusData = ("data/socio_status.csv");
    d3.csv(socioStatusData).then(makeChartSocioStatus);

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
                        label: 'National',
                        data: nationalSocio,
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
            .fitHeight(360, myMap); //Auto fit SVG to height 360 refer to svg set at HTML

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
            .fitHeight(360, myMap); //Auto fit SVG to height 360 refer to svg set at HTML

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

