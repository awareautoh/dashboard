"use strict";
//Color Shade
const hhMainSourceIncomeColor = ["#FFCB21", "#FFDD6E", "#806611", "#CCA31B", "#806F37"];
const AnnualHHIncomeColor = ["#27418F", "#7D95DB", "#5C6DA2", "#192A5C", "#3B63DB"];
const maternalNutritionColor = ["#A2C754", "#414733", "#BED096", "#79943E", "#3A471E"];


//File Path for import data
const nssHHMainSourceIncomePath = "data/nssHHMainSourceIncome.csv";
const nssAnnualHHIncomePath = "data/nssAnnualHHIncome.csv";
const nssMinimumDietPath = "data/nssMinimumDiet.csv";
const nssVitaminAPath = "data/nssVitaminA.csv";
const nssMaternalNutritionPath = "data/nssMaternalNutrition.csv";
const nssStuntingPath = "data/nssStunting.csv";
const nssWastingPath = "data/nssWasting.csv";
const nssUnderweightPath = "data/nssUnderweight.csv";
const nssHHFoodSecurityPath = "data/nssHHFoodInsecurity.csv";


Promise.all([
    d3.csv(nssHHMainSourceIncomePath),
    d3.csv(nssAnnualHHIncomePath),
    d3.csv(nssMinimumDietPath),
    d3.csv(nssVitaminAPath),
    d3.csv(nssMaternalNutritionPath),
    d3.csv(nssStuntingPath),
    d3.csv(nssWastingPath),
    d3.csv(nssUnderweightPath),
    d3.csv(nssHHFoodSecurityPath),
]).then(buildChart);


//**********************************/
//Build Chart All ChartJS gose here
//*********************************/

function buildChart(value) {
    //Set import data variable
    const nssHHMainSourceIncome = value[0];
    const nssAnnualHHIncome = value[1];
    const nssMinimumDiet = value[2];
    const nssVitaminA = value[3];
    const nssMaternalNutrition = value[4];
    const nssStunting = value[5];
    const nssWasting = value[6];
    const nssUnderweight = value[7];
    const nssHHFoodSecurity = value[8];

    const province = nssHHMainSourceIncome.map(d => d.province); //Set fix province label

    //****************************************/
    //Section 1: Socio Demographic
    //****************************************/

    //Build Household Main Source Income Chart
    let valueCropAndLivestock = nssHHMainSourceIncome.map(d => d.cropAndLivestock);
    let valueBusiness = nssHHMainSourceIncome.map(d => d.business);
    let valueSalaryAndSkilledWageLabour = nssHHMainSourceIncome.map(d => d.salaryAndSkilledWageLabour);
    let valueUnskilledWageLabour = nssHHMainSourceIncome.map(d => d.unskilledWageLabour);
    let valueOther = nssHHMainSourceIncome.map(d => d.other);


    let getNssHHMainSourceIncome = document.getElementById('nssHHMainSourceIncome').getContext("2d");
    let nssHHMainSourceIncomeChart = new Chart(getNssHHMainSourceIncome, {
        type: 'bar',
        data: {
            labels: province,
            datasets: [
                {
                    label: 'Crop and live stock sale',
                    data: valueCropAndLivestock,
                    backgroundColor: hhMainSourceIncomeColor[0],
                    borderWidth: 0,
                },
                {
                    label: 'Business',
                    data: valueBusiness,
                    backgroundColor: hhMainSourceIncomeColor[1],
                    borderWidth: 0,
                },
                {
                    label: 'Salary and skilled wage labour',
                    data: valueSalaryAndSkilledWageLabour,
                    backgroundColor: hhMainSourceIncomeColor[2],
                    borderWidth: 0,
                },
                {
                    label: 'Unskilled wage labour',
                    data: valueUnskilledWageLabour,
                    backgroundColor: hhMainSourceIncomeColor[3],
                    borderWidth: 0,
                },
                {
                    label: 'Other',
                    data: valueOther,
                    backgroundColor: hhMainSourceIncomeColor[4],
                    borderWidth: 0,
                },
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                    },
                    stacked: true,
                    gridLines: {
                        borderDash: [3, 10]
                    }
                }],
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }]
            },
            maintainAspectRatio: false,
        }
    });

    //Build Household Main Source Income Chart
    let valueL5M = nssAnnualHHIncome.map(d => d["L5M"]);
    let value5M10M = nssAnnualHHIncome.map(d => d["5M10M"]);
    let value10M20M = nssAnnualHHIncome.map(d => d["10M20M"]);
    let valueM20M = nssAnnualHHIncome.map(d => d["M20M"]);


    let getNssAnnualHHIncome = document.getElementById('nssAnnualHHIncome').getContext("2d");
    let nssAnnualHHIncomeChart = new Chart(getNssAnnualHHIncome, {
        type: 'bar',
        data: {
            labels: province,
            datasets: [
                {
                    label: 'Less than 5M',
                    data: valueL5M,
                    backgroundColor: AnnualHHIncomeColor[0],
                    borderWidth: 0,
                },
                {
                    label: '5M-10M',
                    data: value5M10M,
                    backgroundColor: AnnualHHIncomeColor[1],
                    borderWidth: 0,
                },
                {
                    label: '10M-20M',
                    data: value10M20M,
                    backgroundColor: AnnualHHIncomeColor[2],
                    borderWidth: 0,
                },
                {
                    label: 'More than 20M',
                    data: valueM20M,
                    backgroundColor: AnnualHHIncomeColor[3],
                    borderWidth: 0,
                },
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                    },
                    stacked: true,
                    gridLines: {
                        borderDash: [3, 10]
                    }
                }],
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }]
            },
            maintainAspectRatio: false,
        }
    });

    //****************************************/
    //Section 2: IYCF
    //****************************************/

    //Build Mininum Accpeptable Diet Chart
    let valueMiniDiet = nssMinimumDiet.map(d => d.value);

    let getNssMiniAcceptDiet = document.getElementById('nssMiniAcceptDiet').getContext("2d");
    let nssMiniAcceptDietChart = new Chart(getNssMiniAcceptDiet, {
        type: 'horizontalBar',
        data: {
            labels: province,
            datasets: [
                {
                    label: 'Minimum Acceptable Diet',
                    data: valueMiniDiet,
                    backgroundColor: yellow,
                    borderWidth: 0,
                },
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                    },
                    stacked: true,
                    gridLines: {
                        borderDash: [3, 10]
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }]
            },
            maintainAspectRatio: false,
        }
    });

    //Build Vitamin A Chart
    let valueVitaminA = nssVitaminA.map(d => d.value);

    let getNssVitaminA = document.getElementById('nssVitaminA').getContext("2d");
    let nssVitaminAChart = new Chart(getNssVitaminA, {
        type: 'horizontalBar',
        data: {
            labels: province,
            datasets: [
                {
                    label: 'Vitamin A Supplementation',
                    data: valueVitaminA,
                    backgroundColor: yellow,
                    borderWidth: 0,
                },
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                    },
                    stacked: true,
                    gridLines: {
                        borderDash: [3, 10]
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }]
            },
            maintainAspectRatio: false,
        }
    });

    //****************************************/
    //Section 4: Maternal Nutrition
    //****************************************/

    //Build Status of women BMI Chart
    let valueObese = nssMaternalNutrition.map(d => d.obese);
    let valueOverweight = nssMaternalNutrition.map(d => d.overweight);
    let valueWomenUnderweight = nssMaternalNutrition.map(d => d.underweight);


    let getNssWomenBMI = document.getElementById('nssWomenBMI').getContext("2d");
    let nssWomenBMIChart = new Chart(getNssWomenBMI, {
        type: 'bar',
        data: {
            labels: province,
            datasets: [
                {
                    label: 'Obese',
                    data: valueObese,
                    backgroundColor: maternalNutritionColor[0],
                    borderWidth: 0,
                },
                {
                    label: 'Overweight',
                    data: valueOverweight,
                    backgroundColor: maternalNutritionColor[1],
                    borderWidth: 0,
                },
                {
                    label: 'Underweight',
                    data: valueWomenUnderweight,
                    backgroundColor: maternalNutritionColor[2],
                    borderWidth: 0,
                },
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                    },
                    stacked: true,
                    gridLines: {
                        borderDash: [3, 10]
                    }
                }],
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }]
            },
            maintainAspectRatio: false,
        }
    });

    //****************************************/
    //Section 5: Child Mulnutrition
    //****************************************/

    //Build Stunting Chart
    let valueStunting = nssStunting.map(d => d.value);
    let valueStuntingLsis = nssStunting.map(d => d.lsis);

    let getNssStunting = document.getElementById('nssStunting').getContext("2d");
    let nssStuntingChart = new Chart(getNssStunting, {
        type: 'horizontalBar',
        data: {
            labels: province,
            datasets: [
                {
                    label: 'Stunting',
                    data: valueStunting,
                    backgroundColor: blue,
                    borderWidth: 0,
                },
                {
                    label: 'LSIS II',
                    data: valueStuntingLsis,
                    backgroundColor: green,
                    borderWidth: 0,
                },
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                    },
                    gridLines: {
                        borderDash: [3, 10]
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }]
            },
            maintainAspectRatio: false,
        }
    });

    //Build Wasting Chart
    let valueWasting = nssWasting.map(d => d.value);
    let valueWastingLsis = nssWasting.map(d => d.lsis);

    let getNssWasting = document.getElementById('nssWasting').getContext("2d");
    let nssWastingChart = new Chart(getNssWasting, {
        type: 'horizontalBar',
        data: {
            labels: province,
            datasets: [
                {
                    label: 'Wasting',
                    data: valueWasting,
                    backgroundColor: blue,
                    borderWidth: 0,
                },
                {
                    label: 'LSIS II',
                    data: valueWastingLsis,
                    backgroundColor: green,
                    borderWidth: 0,
                },
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                    },
                    gridLines: {
                        borderDash: [3, 10]
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }]
            },
            maintainAspectRatio: false,
        }
    });

    //Build Underweight Chart
    let valueUnderweight = nssUnderweight.map(d => d.value);
    let valueUnderweightLsis = nssUnderweight.map(d => d.lsis);

    let getNssUnderweight = document.getElementById('nssUnderweight').getContext("2d");
    let nssUnderweightChart = new Chart(getNssUnderweight, {
        type: 'horizontalBar',
        data: {
            labels: province,
            datasets: [
                {
                    label: 'Underweight',
                    data: valueUnderweight,
                    backgroundColor: blue,
                    borderWidth: 0,
                },
                {
                    label: 'LSIS II',
                    data: valueUnderweightLsis,
                    backgroundColor: green,
                    borderWidth: 0,
                },
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                    },
                    gridLines: {
                        borderDash: [3, 10]
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }]
            },
            maintainAspectRatio: false,
        }
    });

    //****************************************/
    //Section 6: Household Food Security
    //****************************************/

    //Build Underweight Chart
    let valueHHFoodSecurity = nssHHFoodSecurity.map(d => d.value);

    let getNssHHFoodInsecurity = document.getElementById('nssHHFoodInsecurity').getContext("2d");
    let nssHHFoodInsecurityChart = new Chart(getNssHHFoodInsecurity, {
        type: 'bar',
        data: {
            labels: province,
            datasets: [
                {
                    label: 'Household Food Security',
                    data: valueHHFoodSecurity,
                    backgroundColor: green,
                    borderWidth: 0,
                },
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                    },
                    gridLines: {
                        borderDash: [3, 10]
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }]
            },
            maintainAspectRatio: false,
        }
    });


}
//*************************** */
//Map Section
//*************************** */

//NSS Open Defaction Map
$(document).ready(function () {
    //Set variable map directory
    let mapDraw = ("map/LAO_ADM1.json");
    let openDefacePath = ("data/nnsOpenDefaceMap.csv");
    //Set Scale
    let colorScale = d3.scaleQuantize([0, 40], d3.schemeOranges[5]);
    //Set tooltips
    let tooltipOpenDeface = d3.select(".tab-content").append("div") 
    .attr("class", "tooltipOpenDeface")
    .style("opacity", 0);

    //Select DOM
    let svg = d3.select("#nssOpenDefecation");

    //Set variable to import data
    let openDefaceSort = d3.map();
    let promise = [
        d3.json(mapDraw),
        d3.csv(openDefacePath, d => openDefaceSort.set(d.feature_id, +d.ValueOpenDaface))
    ];

    Promise.all(promise).then(creatMap);
    function creatMap(value) {
        let lao = value[0];
    //Draw a graph use "g" because draw multiple path in one time
        //Import Map Topojson type as Geojson structure
        let openDefaceMap = topojson.feature(lao, lao.objects.LAO_ADM1);
        //Set porjection map type
        let projection = d3.geoMercator()
            .fitSize([320, 320], openDefaceMap);

        svg.append("g")
            .selectAll("path")
            .data(openDefaceMap.features)
            .enter()
            .append("path")
            .attr("d", d3.geoPath().projection(projection))
            .attr("fill", d => colorScale(d.properties.feature_id = openDefaceSort.get(d.properties.feature_id)));

        svg.selectAll("path")
            .data(openDefaceMap.features)
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


        //Add legend
        svg.append("g")
        .attr("transform", "translate(0,250)")
        .append(() => legend({
            color: d3.scaleThreshold(["<10", "<20", "<30", ">=40"],
            d3.schemeOranges[5]),
            title: "Open Defaction (%)",
            width: 190}));
        }
});

//NSS Open Defaction Map
$(document).ready(function () {
    //Set variable map directory
    let mapDraw = ("map/LAO_ADM1.json");
    let openDefacePath = ("data/nnsDiarrhoealMap.csv");
    //Set Scale
    let colorScale = d3.scaleQuantize([0, 40], d3.schemeOranges[5]);
    //Set tooltips
    let tooltipOpenDeface = d3.select(".tab-content").append("div") 
    .attr("class", "tooltipOpenDeface")
    .style("opacity", 0);

    //Select DOM
    let svg = d3.select("#nssDiarrhoeal");

    //Set variable to import data
    let openDefaceSort = d3.map();
    let promise = [
        d3.json(mapDraw),
        d3.csv(openDefacePath, d => openDefaceSort.set(d.feature_id, +d.ValueOpenDaface))
    ];

    Promise.all(promise).then(creatMap);
    function creatMap(value) {
        let lao = value[0];
    //Draw a graph use "g" because draw multiple path in one time
        //Import Map Topojson type as Geojson structure
        let openDefaceMap = topojson.feature(lao, lao.objects.LAO_ADM1);
        //Set porjection map type
        let projection = d3.geoMercator()
            .fitSize([320, 320], openDefaceMap);

        svg.append("g")
            .selectAll("path")
            .data(openDefaceMap.features)
            .enter()
            .append("path")
            .attr("d", d3.geoPath().projection(projection))
            .attr("fill", d => colorScale(d.properties.feature_id = openDefaceSort.get(d.properties.feature_id)));

        svg.selectAll("path")
            .data(openDefaceMap.features)
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


        //Add legend
        svg.append("g")
        .attr("transform", "translate(0,250)")
        .append(() => legend({
            color: d3.scaleThreshold(["<10", "<20", "<30", ">=40"],
            d3.schemeOranges[5]),
            title: "Open Defaction (%)",
            width: 190}));
        }
});



