"use strict";
/*
  Version: 1.0
  Created date: 29 Nov 2019
  The national platforms for Nutrition project Lao PDR
  Data Analysis Unit, Center for Development Policy Research 
  Ministry of Planning and Inestment 
 
*/

//Color shade
const red = "#FF99A6";
const blue = "#80d8ff";
const yellow = "#ffee58";
const green = "#66bb6a";

//File path for import data
let wastingPath = "data/wasting_unsorted.csv";
let anemiaPath = "data/prevalence_of_anemia.csv";
let weightAndObesity = "data/prevalence_overweight_and_obesity.csv";
let IYCFPath = "data/IYCF.csv";
let minimumDietPath = "data/minimumDiet.csv";
let womenDietPath = "data/womenDiet.csv";
let session3Path = "data/session3_data.csv";
let socioStatusPath = "data/socio_status.csv";
let agri1Path = "data/agri1.csv";
let agri2Path = "data/yield.csv";
let agri3Path = "data/pro.csv";
let agriVet1Path = "data/agriVet1.csv";
let agriVet2Path = "data/agriVet2.csv";
let agriVet3Path = "data/agriVet3.csv";
let agriVet4Path = "data/bc.csv";
let agriVet5Path = "data/pgs.csv";
let agriVet6Path = "data/fish.csv";
let agriVet7Path = "data/poul.csv";


Promise.all([
    d3.csv(wastingPath),
    d3.csv(anemiaPath),
    d3.csv(weightAndObesity),
    d3.csv(IYCFPath),
    d3.csv(minimumDietPath),
    d3.csv(womenDietPath),
    d3.csv(session3Path),
    d3.csv(socioStatusPath),
    d3.csv(agri1Path),
    d3.csv(agri2Path),
    d3.csv(agri3Path),
    d3.csv(agriVet1Path),
    d3.csv(agriVet2Path),
    d3.csv(agriVet3Path),
    d3.csv(agriVet4Path),
    d3.csv(agriVet5Path),
    d3.csv(agriVet6Path),
    d3.csv(agriVet7Path),
]).then(buildChart);

//*************************************/
//Chart.js global config
//*************************************/
Chart.plugins.unregister(ChartDataLabels); //cogfig Chart.JS label pugin not to show label on all chart by default
Chart.defaults.global.plugins.deferred.delay = 500; //Global set up for ChartJS plugin: deffer, delay transition: 500
Chart.defaults.global.plugins.deferred.xOffset = "50%"; //Global set up for ChartJS plugin: deffer, 50% view point to activate plugin


//**********************************/
//Build Chart All ChartJS gose here
//*********************************/
function buildChart (value) {
    const wasting = value[0];
    const anemia = value[1];
    const overWeightObese = value[2];
    const IYCF = value[3];
    const miniDiet = value[4];
    const womenDiet = value[5];
    const mapSec3 = value[6];
    const socio = value[7];
    const agri1 = value[8];
    const agri2 = value[9];
    const agri3 = value[10];
    const agriVet1 = value[11];
    const agriVet2 = value[12];
    const agriVet3 = value[13];
    const agriVet4 = value[14];
    const agriVet5 = value[15];
    const agriVet6 = value[16];
    const agriVet7 = value[17];


    //---Child Mulnutrtion Chart
    $(document).ready(function() {


    // create agri culture1  chart	
     let aLabel = agri1.map(d=> d.Year);
     let avalue = agri1.map(d=> d.Total);
	 let avalue2 = agri1.map(d=> d.Lowlandrainfedpaddy);
	 let avalue3 = agri1.map(d=> d.DrySeasonpaddy);
	 let avalue4 = agri1.map(d=> d.Upland);

    let getagri1Chart = document.getElementById('agri1Chart').getContext("2d");
     let agri1Chart = new Chart(getagri1Chart, {
     	 type: 'bar',
                    data: {
                        labels: aLabel,
                        datasets: [
                            {
								label: "Total",
                                data: avalue,
								backgroundColor: '#ffee58',
								borderWidth: 0,

								
			
                            },
							{
								label: "Low land rainfed paddy",
                                data: avalue2,
								backgroundColor: '#10b4fb',
								borderWidth: 0,
								
			
                            },
							{
								label: "Dry Season paddy",
                                data: avalue3,
								backgroundColor: '#f30d0d',
								borderWidth: 0,
								
			
                            },
							{
								label: "Upland rainfed paddy",
                                data: avalue4,
								backgroundColor: '#2aad32',
								borderWidth: 0,
								
                            }
                                                  
                        ]
						
                    },
                    plugins: [ChartDataLabels],
                    options: {
                    	scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 10,
                        },
                        gridLines: {
                            borderDash: [3, 5]
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        }
                    }]
                },
                        
                        legend: {
                            display: true
                        },
                         maintainAspectRatio: false,

                         plugins: {
     								        datalabels: {
     								            align: 'middle',
     								            color:'#fff'

     								        },
     								        
     								    }  


                        
                    }

     });

    //end gri1 

    //agri2 chart 

    	let agri2Label = agri2.map(d=> d.Year);
        let agri2value = agri2.map(d=> d.Total);
		let agri2value2 = agri2.map(d=> d.Lowlandrainfedpaddy);
		let agri2value3 = agri2.map(d=> d.DrySeasonpaddy);
		let agri2value4 = agri2.map(d=> d.Upland);

		let getagri2Chart = document.getElementById('agri2Chart').getContext("2d");
     	let agri2Chart = new Chart(getagri2Chart, {

     		        type: 'line',
     		                    data: {
     		                        labels: agri2Label,
     		                        datasets: [
     		                            {
     										label: "Total",
     		                                data: agri2value,
     										backgroundColor: '#ffee58',
     										borderColor:'#ffee58',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:false
     										
     										
     					
     		                            },
     									{
     										label: "Low landrainfed paddy",
     		                                data: agri2value2,
     										backgroundColor: '#10b4fb',
     										borderColor: '#2196f3',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:false
     										
     					
     		                            },
     									{
     										label: "Dry Season paddy",
     		                                data: agri2value3,
     										backgroundColor: '#f30d0d',
     										borderColor: '#f30d0d',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:false
     										
     					
     		                            },
     									{
     										label: "Upland rainfed paddy",
     		                                data: agri2value4,
     										backgroundColor: '#2aad32',
     										borderColor: '#2aad32',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:false
     										
     					
     		                            }
     		                                                  
     		                        ]
     								
     		                    },
     		                    options: {
     		                       
     		                        legend: {
     		                            display: false,
     									usePointStyle: true,
     									labels: {
     										 
     										  
     										  boxWidth: 20,
     										  boxHeight: 2
     										}
     		                        },
     								maintainAspectRatio: false,
     								scales: {
     		                    yAxes: [{
     		                        ticks: {
     		                            beginAtZero: true,
     		                            maxTicksLimit: 8,
     		                        },
     		                        gridLines: {
     		                            borderDash: [3, 5]
     		                        }
     		                    }],
     		                    xAxes: [{
     		                        gridLines: {
     		                            drawOnChartArea: false,
     		                        }
     		                    }]
     		                },
     		                        
     		                    }


     	});


    //end agri 2

    // agri 3 graph 
    	let agri3Label = agri3.map(d=> d.Year);
        let agri3value = agri3.map(d=> d.Total);
    	let agri3value2 = agri3.map(d=> d.Lowlandrainfedpaddy);
    	let agri3value3 = agri3.map(d=> d.DrySeasonpaddy);
    	let agri3value4 = agri3.map(d=> d.Upland);

    	let getagri3Chart = document.getElementById('agri3Chart').getContext("2d");
     	let agri3Chart = new Chart(getagri3Chart, {

     		type: 'bar',
     		                    data: {
     		                        labels: agri3Label,
     		                        datasets: [
     		                            {
     										label: "Total",
     		                                data: agri3value,
     										backgroundColor: '#ffee58',
     										borderColor:'#ffee58',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:false
     										
     										
     					
     		                            },
     									{
     										label: "Lowland rainfed paddy",
     		                                data: agri3value2,
     										backgroundColor: '#10b4fb',
     										borderColor: '#2196f3',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:false
     										
     					
     		                            },
     									{
     										label: "Dry Season paddy",
     		                                data: agri3value3,
     										backgroundColor: '#f30d0d',
     										borderColor: '#f30d0d',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:false
     										
     					
     		                            },
     									{
     										label: "Upland rainfed paddy",
     		                                data: agri3value4,
     										backgroundColor: '#2aad32',
     										borderColor: '#2aad32',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:false
     										
     					
     		                            }
     		                                                  
     		                        ]
     								
     		                    },
     		                    options: {
     		                       
     		                        legend: {
     		                            display: false,
     									usePointStyle: true,
     									labels: {
     										 
     										  
     										  boxWidth: 20,
     										  boxHeight: 2
     										}
     		                        },
     								maintainAspectRatio: false,
     								scales: {
     		                    yAxes: [{
     								 stacked: true ,
     		                        ticks: {
     		                            beginAtZero: true,
     		                            maxTicksLimit: 7,
     		                        },
     		                        gridLines: {
     		                            borderDash: [3, 5]
     		                        }
     		                    }],
     		                    xAxes: [{
     								 stacked: true,
     		                        gridLines: {
     		                            drawOnChartArea: false,
     		                        }
     		                    }]
     		                },
     		                        
     		                    }
     	});

    //end agri 3 graph 

    //strat agriVet1 

   		let agriVet1Label = agriVet1.map(d=> d.Year);
        let agriVet1value = agriVet1.map(d=> d.leaf);
		let agriVet1value2 = agriVet1.map(d=> d.root);
		let agriVet1value3 = agriVet1.map(d=> d.fruit);

		let getagriVet1Chart = document.getElementById('agriVet1Chart').getContext("2d");
     	let agriVet1Chart = new Chart(getagriVet1Chart, {

     		 type: 'bar',
     		                    data: {
     		                        labels: agriVet1Label,
     		                        datasets: [
     		                            {
     										label: "Leafy Stem Vegetables",
     		                                data: agriVet1value,
     										backgroundColor: green,
     										
     										
     										
     					
     		                            },
     									{
     										label: "Root, Bulb and Tuberous",
     		                                data: agriVet1value2,
     										backgroundColor: red,
     									
     										
     					
     		                            },
     									{
     										label: "Fruitbearing",
     		                                data: agriVet1value3,
     										backgroundColor: blue,
     										
     										
     					
     		                            }
     									
     		                                                  
     		                        ]
     								
     		                    },
     		                    plugins: [ChartDataLabels],
     		                    options: {
     		                       
     		                        legend: {
     		                            display: true,
     									usePointStyle: true,
     									
     		                        },
     								maintainAspectRatio: false,
     								scales: {
     		                    yAxes: [{
     								 
     		                        ticks: {
     		                            beginAtZero: true,
     		                            maxTicksLimit: 7,
     		                        },
     		                        gridLines: {
     		                            borderDash: [3, 5]
     		                        }
     		                    }],
     		                    xAxes: [{
     								 
     		                        gridLines: {
     		                            drawOnChartArea: false,
     		                        }
     		                    }]
     		                },

     		                plugins: {
     								        datalabels: {
     								            align: 'middle',
     								            color:'#fff'

     								        },
     								        
     								    }  
     		                        
     		                    }


     	});	

    //enf agriVet1  

    //start agriVet2

     	let agriVet2Label = agriVet2.map(d=> d.Year);
        let agriVet2value = agriVet2.map(d=> d.leaf);
		let agriVet2value2 = agriVet2.map(d=> d.root);
		let agriVet2value3 = agriVet2.map(d=> d.fruit);

		let getagriVet2Chart = document.getElementById('agriVet2Chart').getContext("2d");
     	let agriVet2Chart = new Chart(getagriVet2Chart, {

     		 type: 'bar',
     		                    data: {
     		                        labels: agriVet2Label,
     		                        datasets: [
     		                            {
     										label: "Leafy Stem Vegetables",
     		                                data: agriVet2value,
     										backgroundColor: green,
     										borderColor:'#259b35',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:true
     										
     										
     					
     		                            },
     									{
     										label: "Root, Bulb and Tuberous",
     		                                data: agriVet2value2,
     										
     										borderColor: '#ef5b15',
     										backgroundColor:red,
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:true
     										
     					
     		                            },
     									{
     										label: "Fruitbearing",
     		                                data: agriVet2value3,
     										backgroundColor:blue,
     										borderColor: '#af2f9a',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:true
     										
     					
     		                            }
     									
     		                                                  
     		                        ]
     								
     		                    },
     		                    plugins: [ChartDataLabels],
     		                    options: {
     		                       
     		                        legend: {
     		                            display: false,
     									usePointStyle: true,
     									labels: {
     										 
     										  
     										  boxWidth: 20,
     										  boxHeight: 2
     										}
     		                        },
     								maintainAspectRatio: false,
     								scales: {
     		                    yAxes: [{
     								 stacked: true,
     		                        ticks: {
     		                            beginAtZero: true,
     		                            maxTicksLimit: 5,
     		                        },
     		                        gridLines: {
     		                            borderDash: [3, 5]
     		                        }
     		                    }],
     		                    xAxes: [{
     								 stacked: true,
     		                        gridLines: {
     		                            drawOnChartArea: false,
     		                        }
     		                    }]
     		                },
     		                   
     		                 plugins: {
     								        datalabels: {
     								            align: 'middle',
     								            color:'#fff'

     								        },
     								        
     								    }    
     		                    }
     							


     	});


    //End agriVet2

    //start agriVet3 

    	let agriVet3Label = agriVet3.map(d=> d.Year);
        let agriVet3value = agriVet3.map(d=> d.leaf);
		let agriVet3value2 = agriVet3.map(d=> d.root);
		let agriVet3value3 = agriVet3.map(d=> d.fruit);


		let getagriVet3Chart = document.getElementById('agriVet3Chart').getContext("2d");
     	let agriVet3Chart = new Chart(getagriVet3Chart, {


     		 type: 'line',
     		                    data: {
     		                        labels: agriVet3Label,
     		                        datasets: [
     		                            {
     										label: "Leafy Stem Vegetables",
     		                                data: agriVet3value,
     										backgroundColor: green,
     										borderColor:'#ef5b15',
     										pointRadius: 3,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:true
     										
     										
     					
     		                            },
     									{
     										label: "Root, Bulb and Tuberous",
     		                                data: agriVet3value2,
     										
     										borderColor: '#259b35',
     										backgroundColor:red,
     										pointRadius: 3,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:true
     										
     					
     		                            },
     									{
     										label: "Fruitbearing",
     		                                data: agriVet3value3,
     										backgroundColor:blue,
     										borderColor: '#af2f9a',
     										pointRadius: 3,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:true
     										
     					
     		                            }
     									
     		                                                  
     		                        ]
     								
     		                    },

     		                    options: {
     		                       
     		                        legend: {
     		                            display: false,
     									usePointStyle: true,
     									
     		                        },
     								maintainAspectRatio: false,
     								scales: {
     		                    yAxes: [{
     								 stacked: true,
     		                        ticks: {
     		                            beginAtZero: true,
     		                            maxTicksLimit: 7,
     		                        },
     		                        gridLines: {
     		                            borderDash: [3, 5]
     		                        }
     		                    }],
     		                    xAxes: [{
     								 stacked: true,
     		                        gridLines: {
     		                            drawOnChartArea: false,
     		                        }
     		                    }]
     		                },
     		                        
     		                    }


     	});


    //end Agrivet3 

    //start chartVet4 

    	let agriVet4Label = agriVet4.map(d=> d.Year);
        let agriVet4value = agriVet4.map(d=> d.buffalo);
		let agriVet4value2 = agriVet4.map(d=> d.cattle);

		let getagriVet4Chart = document.getElementById('agriVet4Chart').getContext("2d");
     	let agriVet4Chart = new Chart(getagriVet4Chart, {

     		 type: 'bar',
     		                    data: {
     		                        labels: agriVet4Label,
     		                        datasets: [
     		                            {
     										label: "Buffalo",
     		                                data: agriVet4value,
     										backgroundColor: '#FFEE58',
     										borderColor:'#FFEE58',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:true
     										
     										
     					
     		                            },
     									{
     										label: "Cattle",
     		                                data: agriVet4value2,
     										
     										borderColor: '#00A8F0',
     										backgroundColor:'#00A8F0',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:true
     										
     					
     		                            },
     												
     		                                                  
     		                        ]
     								
     		                    },
     		                    options: {
     		                       
     		                        legend: {
     		                            display: true,
     									usePointStyle: true,
     									
     		                        },
     								maintainAspectRatio: false,
     								scales: {
     		                    yAxes: [{
     								 
     		                        ticks: {
     		                            beginAtZero: true,
     		                            maxTicksLimit: 5,
     		                        },
     		                        gridLines: {
     		                            borderDash: [3, 5]
     		                        }
     		                    }],
     		                    xAxes: [{
     								 
     		                        gridLines: {
     		                            drawOnChartArea: false,
     		                        }
     		                    }]
     		                },
     		                        
     		                    }

     	});

    //end chartVet4 

    //Start chart5 

    	let agriVet5Label = agriVet5.map(d=> d.Year);
        let agriVet5value = agriVet5.map(d=> d.pig);
		let agriVet5value2 = agriVet5.map(d=> d.gs);

		let getagriVet5Chart = document.getElementById('agriVet5Chart').getContext("2d");
     	let agriVet5Chart = new Chart(getagriVet5Chart, {

     		 type: 'bar',
     		                    data: {
     		                        labels: agriVet5Label,
     		                        datasets: [
     		                            {
     										label: "Pig",
     		                                data: agriVet5value,
     										backgroundColor: '#fd837b',
     										borderColor:'#fd837b',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:true
     										
     										
     					
     		                            },
     									{
     										label: "Goat and Sheep",
     		                                data: agriVet5value2,
     										
     										borderColor: '#00688b',
     										backgroundColor:'#00688b',
     										pointRadius: 5,
     										pointBorderColor:'#7e807e',
     										pointBorderwidth:1,
     										fill:true
     										
     					
     		                            },
     												
     		                                                  
     		                        ]
     								
     		                    },
     		                    options: {
     		                       
     		                        legend: {
     		                            display: true,
     									usePointStyle: true,
     									
     		                        },
     								maintainAspectRatio: false,
     								scales: {
     		                    yAxes: [{
     								 
     		                        ticks: {
     		                            beginAtZero: true,
     		                            maxTicksLimit: 4,
     		                        },
     		                        gridLines: {
     		                            borderDash: [3, 5]
     		                        }
     		                    }],
     		                    xAxes: [{
     								 
     		                        gridLines: {
     		                            drawOnChartArea: false,
     		                        }
     		                    }]
     		                },
     		                        
     		                    }

     	});


    //End agriVet5

    //Start AgriVet 6

    	 let agriVet6Label = agriVet6.map(d=> d.Year);
    	 let agriVet6value = agriVet6.map(d=> d.culturefish);
    	 let agriVet6value2 = agriVet6.map(d=> d.capturefish);

    	 let getagriVet6Chart = document.getElementById('agriVet6Chart').getContext("2d");
     	 let agriVet6Chart = new Chart(getagriVet6Chart, {

     	 		 type: 'bar',
     	 		                    data: {
     	 		                        labels: agriVet6Label,
     	 		                        datasets: [
     	 		                            {
     	 										label: "Culture fish",
     	 		                                data: agriVet6value,
     	 										backgroundColor: '#fbaa1d',
     	 										borderColor:'#fbaa1d',
     	 										pointRadius: 5,
     	 										pointBorderColor:'#7e807e',
     	 										pointBorderwidth:1,
     	 										fill:true
     	 										
     	 										
     	 					
     	 		                            },
     	 									{
     	 										label: "Capture fish",
     	 		                                data: agriVet6value2,
     	 										
     	 										borderColor: '#fd837b',
     	 										backgroundColor:'#fd837b',
     	 										pointRadius: 5,
     	 										pointBorderColor:'#7e807e',
     	 										pointBorderwidth:1,
     	 										fill:true
     	 										
     	 					
     	 		                            },
     	 												
     	 		                                                  
     	 		                        ]
     	 								
     	 		                    },
     	 		                    plugins: [ChartDataLabels],
     	 		                    options: {
     	 		                       
     	 		                        legend: {
     	 		                            display: true,
     	 									usePointStyle: true,
     	 									
     	 		                        },
     	 								maintainAspectRatio: false,
     	 								scales: {
     	 		                    yAxes: [{
     	 								stacked: true,
     	 		                        ticks: {
     	 		                            beginAtZero: true,
     	 		                            maxTicksLimit: 5,
     	 		                        },
     	 		                        gridLines: {
     	 		                            borderDash: [3, 5]
     	 		                        }
     	 		                    }],
     	 		                    xAxes: [{
     	 								stacked: true, 
     	 		                        gridLines: {
     	 		                            drawOnChartArea: false,
     	 		                        }
     	 		                    }]
     	 		                },
     	 		                plugins: {
     								        datalabels: {
     								            align: 'middle',
     								            color:'#fff'

     								        },
     								        
     								    }
     	 		                        
     	 		             }
     	 							
     	 });


    //End agriVet6  


    // start agriVet7 

    	let agriVet7Label = agriVet7.map(d=> d.Year);
        let agriVet7value = agriVet7.map(d=> d.poultry);

        let getagriVet7Chart = document.getElementById('agriVet7Chart').getContext("2d");
     	let agriVet7Chart = new Chart(getagriVet7Chart, {


     		                    type: 'pie',
     		                    data: {
     		                        labels: agriVet7Label,
     		                        datasets: [
     		                            {
     										label: "Poultry",
     		                                data: agriVet7value,
     										backgroundColor: ['rgba(0,168,240,0.4)',red,yellow],
     										
     										pointRadius: 5,
     										
     										fill:true			
     					
     		                            }
     									
     												
     		                                                  
     		                        ]
     								
     		                    },
     		                    plugins: [ChartDataLabels],
     		                    options: {
     		                       
     		                        legend: {
     		                            display: true,
     									usePointStyle: true,
     									
     		                        },
     								maintainAspectRatio: false,

     								plugins: {
     								        datalabels: {
     								            align: 'middle',
     								            color:'#fff'

     								        },
     								        
     								    }
     							
     		                        
     		                    }


     	 });


    //End agriVet7 

    //---Wasting Chart---
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
        let getWastingAndOverweightChart = document.getElementById('wastingAndOverweightChart').getContext("2d");
        let wastingAndOverweightChart = new Chart(getWastingAndOverweightChart, {
            type: 'bar',
            data: {
                labels: provinceW,
                datasets: [{
                    label: 'Wasting',
                    data: valueW,
                    backgroundColor: '#80d6ff',
                    borderColor: 'rgb(0, 0, 0)',
                    borderWidth: 0,
                },{
                    label: 'Overweight',
                    data: valueO,
                    backgroundColor: '#FF99A6',
                    borderColor: 'rgb(0, 0, 0)',
                    borderWidth: 0,
                }]
            },
            plugins: [ChartDataLabels],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                        },
                        gridLines: {
                            borderDash: [3, 5]
                        }
                    }],
                    xAxes: [{
                        gridLines: {
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
                wastingAndOverweightChart.data.datasets.forEach((d, i) => { //d: dataset; i: index
                    if (i == 0) { //Add condition to change group set for 2 array
                        d.data = valueWSort;
                    } else {
                        d.data = valueOByWSort;
                    }
                });
                wastingAndOverweightChart.data.labels.forEach(() =>  {
                    wastingAndOverweightChart.data.labels = provinceWSort;
                });
                wastingAndOverweightChart.update();
                x = 1;
            } else {
                wastingAndOverweightChart.data.datasets.forEach((d, i) => {
                    if (i == 0) {
                        d.data = valueW;
                    } else {
                        d.data = valueO;
                    }
                });
                wastingAndOverweightChart.data.labels.forEach(() =>  {
                    wastingAndOverweightChart.data.labels = provinceW;
                });
                wastingAndOverweightChart.update();
                x = 0;
            };
        });
        $('#Chart1SortOverWeight').on('click', function() {
            if (x == 0) {
                wastingAndOverweightChart.data.datasets.forEach((d, i) => { //d: dataset; i: index
                    if (i == 0) { //Add condition to change group set for 2 array
                        d.data = valueOSort;
                    } else {
                        d.data = valueSByOSort;
                    }
                });
                wastingAndOverweightChart.data.labels.forEach(() =>  {
                    wastingAndOverweightChart.data.labels = provinceOSort;
                });
                wastingAndOverweightChart.update();
                x = 1;
            } else {
                wastingAndOverweightChart.data.datasets.forEach((d, i) => {
                    if (i == 0) {
                        d.data = valueW;
                    } else {
                        d.data = valueO;
                    }
                });
                wastingAndOverweightChart.data.labels.forEach(() =>  {
                    wastingAndOverweightChart.data.labels = provinceW;
                });
                wastingAndOverweightChart.update();
                x = 0;
            };
        });
    


    //---Women Undernutrition Chart---
        //Creat Women Mulnutriotion
        const province = anemia.map(d => d.Province); //This province variable represent every province variable in every chart
        let WHO = anemia.map(d => d.WHOCutOff);
        let valueAnemia = anemia.map(d=> d.ValueAnemia);
        

        //Creat Women Mulnutrtion
        let getWomenAnemia = document.getElementById('womenAnemia').getContext("2d");
        let womenAnemia = new Chart(getWomenAnemia, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [
                     {
                        label: 'WHO Cutoff 20%',
                        data: WHO,
                        type: 'line',
                        fill: false,
                        borderColor: '#E71C23',
                        pointStyle: "line",
                        borderWidth: 0,
                    },
                    {
                        label: 'Percentage of Women Anemia Prevalence',
                        data: valueAnemia,
                        backgroundColor: '#80d8ff',
                        borderColor: '#0ABDE3',
                        borderWidth: 0,
                    }
                   
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
                            borderDash: [3, 5],
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        }
                    }]
                },
                maintainAspectRatio: false,
                 legend: {
						    labels: {
						      usePointStyle: true,
						    }
                        },
            }
        });

    //Creat Women Overweight and Obesiry Chart
        let valueWOverWeight = overWeightObese.map(d => d.ValueWomenOverWeight);
        let valueWObese = overWeightObese.map(d => d.ValueObese);
        let getWomenOverweightAndObese = document.getElementById('womenOverweightAndObese').getContext("2d");
        let womenOverweightAndObese = new Chart(getWomenOverweightAndObese, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: 'Women Overweight',
                        data: valueWOverWeight,
                        backgroundColor: '#80d8ff',
                        borderWidth: 0,
                    },
                    {
                        label: 'Women Obese',
                        data: valueWObese,
                        backgroundColor: '#FF99A6',
                        borderWidth: 0,
                    }
                ]
            },
            plugins: [ChartDataLabels],
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

    //Section 2 Chart: Immediate determinants of undernutrition

    //IYCF Chart
        let valueInitiationBreast = IYCF.map(d => d.ValueEarlyBreast);
        let valueExclusiveBreast = IYCF.map(d => d.ValueExclusiveBreast);
        let NPANTagetIYCF = IYCF.map(d => d.NPANTarget);
        let getIYCFChart = document.getElementById('IYCFChart').getContext("2d");
        let IYCFChart = new Chart(getIYCFChart, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [{
                    label: 'Early Initiation of Breastfeeding',
                    data: valueInitiationBreast,
                    backgroundColor: '#ffee58',
                    borderWidth: 0,
                }, {
                    label: 'Exclusive Breastfeeding',
                    data: valueExclusiveBreast,
                    backgroundColor: '#80d8ff',
                    borderWidth: 0,
                }, {
                    label: 'NPAN Taget 70%',
                    data: NPANTagetIYCF,
                    backgroundColor: 'lightPink',
                    borderColor: 'red',
                    borderWidth: 0,
                    type: 'line',
                    pointStyle: "line",
                    fill: false,
                }]
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
                    }],
                },
                maintainAspectRatio: false,
            }
        });

    //MiniDiet Chart
        let valueMiniDiet = miniDiet.map(d => d.ValueMiniDietDiversity);
        let valueAcceptDiet = miniDiet.map(d => d.ValueAcceptDiet);
        let NPANTagetMiniDiet = miniDiet.map(d => d.NPANTarget);
        let getMiniDietChart = document.getElementById('miniDietChart').getContext("2d");
        let miniDietChart = new Chart(getMiniDietChart, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [{
                    label: 'Prevalance of Minimum Diet Diversity',
                    data: valueMiniDiet,
                    backgroundColor: '#ffee58',
                    borderWidth: 0,
                }, {
                    label: 'Prevalance of Minimum Acceptable Diet',
                    data: valueAcceptDiet,
                    backgroundColor: '#80d8ff',
                    borderWidth: 0,
                }, {
                    label: 'NPAN Taget 50%',
                    data: NPANTagetMiniDiet,
                    backgroundColor: 'lightPink',
                    borderColor: 'red',
                    borderWidth: 0,
                    type: 'line',
                    pointStyle: "line",
                    fill: false,
                }]
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
                    }],
                },
                maintainAspectRatio: false,
            }
        });

    //Women Diet Chart
        let valueWomenDiet = womenDiet.map(d => d.ValueWomenDiet);
        //Creat Chart Women Mulnutrtion
        let getWomenDietChart = document.getElementById('womenDietChart').getContext("2d");
        let womenDietChart = new Chart(getWomenDietChart, {
            type: 'horizontalBar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: 'Percentage of Women Dietary Diversity',
                        data: valueWomenDiet,
                        backgroundColor: blue,
                        borderWidth: 0,
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
                            drawOnChartArea: false,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                        },
                        gridLines: {
                            borderDash: [3, 10]
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
                        label: {
                            enabled: true,
                            content: "National 32.4%",
                            position: "center",
                        }
                    }]
                }
            }
        });

    //Map Section 3
        let valueVitA = mapSec3.map(d => d.ValueVitA);
        let valueDeworm = mapSec3.map(d => d.ValueDeworm);
        let valueIronFolic = mapSec3.map(d => d.ValueIronFolic);
        let nationalIronFolic = mapSec3.map(d => d.NationalIronFolic);

    //Creat Chart Vitamin A Supplement Coverage
        let ChartVitA = document.getElementById('vitAChart').getContext("2d");
        let drawVitAChart = new Chart(ChartVitA, {
            type: 'horizontalBar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: "Percentage of Vitamin A Supplement Coverage",
                        data: valueVitA,
                        backgroundColor: green,
                        borderWidth: 0,
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                        },
                        gridLines: {
                            borderDash: [3, 10]
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
                        label: 'Percentage of Who Received Deworming Coverage',
                        data: valueDeworm,
                        backgroundColor: green,
                        borderWidth: 0,
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                        },
                        gridLines: {
                            borderDash: [3, 10]
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
                        backgroundColor: green,
                        borderWidth: 0,
                    },
                    {
                        label: 'National 25.4%',
                        data: nationalIronFolic,
                        type: 'line',
                        pointStyle: "line",
                        borderWidth: 0,
                        fill: false,
                        backgroundColor: 'rgba(54, 162, 235, 1)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                    }
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
                    }],
                },
                maintainAspectRatio: false, 
            }
        });

    //---Section 4 Chart

    //--->Socio Status Chart
        let valueSocio = socio.map(d => d.ValueSocioStatus);
        let nationalSocio = socio.map(d => d.NationalSocioStatus);
        let getSocioStatusChart = document.getElementById('socioStatusChart').getContext("2d");
        let socioStatusChart = new Chart(getSocioStatusChart, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [
                    {
                        label: 'Proportion of population below proverty line',
                        data: valueSocio,
                        backgroundColor: blue,
                        borderWidth: 0,
                    },
                    {
                        label: 'National 23.2%',
                        data: nationalSocio,
                        type: 'line',
                        pointStyle: "line",
                        borderWidth: 1,
                        fill: false,
                        backgroundColor: red,
                        borderColor: red,
                    }
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
                    }],
                },
                maintainAspectRatio: false, 
            }
        });

    //Provincial Nutrition Committee Graph
    //--> Provincial Nutrition Committee Graph
        let getProNutriCommitChart = document.getElementById('proNutriCommitChart').getContext("2d");
        let proNutriCommitChart = new Chart(getProNutriCommitChart, {
            type: 'doughnut',
            data: {
                labels: ['Provincial Nutrition Committees 100%'],
                datasets: [{
                        label: '',
                        data: [100,0],
                        backgroundColor: '#0091EA',
                        borderWidth: 0
                        
                    }]
            },
            options: {
                maintainAspectRatio: false,
                cutoutPercentage: 88,
                pluginDH2:[],
                tooltips: {
			    enabled: false
			  
			  }
			},

        });


        //--> Provincial Using DHIS2 Graph
        let getDistrictDHIS2Chart = document.getElementById('districtDHIS2Chart').getContext("2d");
        let districtDHIS2Chart = new Chart(getDistrictDHIS2Chart, {
            type: 'doughnut',
            data: {
                labels: ['Districts using DHIS2 100%'],
                datasets: [{
                        label: '',
                        data: [100],
                        backgroundColor: '#26ae60',
                        borderWidth: 0
                        
                    }]
            },
            options: {
                maintainAspectRatio: false,
                cutoutPercentage: 88,
                pluginDH2:[],
                tooltips: {
			    enabled: false
			  
			  }
            }
        });
    });
};

//Custom plugins for DHIS2 and provinacial committee **********
const jsPluginDH2 = {
  beforeDraw: function(chart)  {
	  
				if(chart.config.options.pluginDH2){
                    var width = chart.chart.width,
                        height = chart.chart.height,
                        ctt = chart.chart.ctx;

                    ctt.restore();
                    var fontSize = (height / 75).toFixed(2);
                    ctt.font = fontSize + "em sans-serif";
                    ctt.textBaseline = "middle";

                    var text = "100%",
                        textX = Math.round((width - ctt.measureText(text).width) / 2),
                        textY = height / 2;

                    ctt.fillText(text, textX, textY);
                    ctt.save();
					ctt.restore();
					
				}
                  
			}
};
//**********************************************/
//END All ChartJS Section//
//*********************************************/

//Add Custom plugins ****************************
Chart.pluginService.register(jsPluginDH2);

//end custom plugins ****************************



//*******************************************
//---Section Create Map**********************
//*******************************************
//Open Defaction Map
$(document).ready(function () {
    //Set variable map directory
    let mapDraw = ("map/LAO_ADM1.json");
    let openDefacePath = ("data/openDefaceMap.csv");
    //Set Scale
    let colorScale = d3.scaleQuantize([0, 40], d3.schemeOranges[5]);
    //Set tooltips
    let tooltipOpenDeface = d3.select(".tab-content").append("div") 
    .attr("class", "tooltipOpenDeface")
    .style("opacity", 0);

    //Select DOM
    let svg = d3.select("#openDefaceMap");

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

//---->Women Status Map
$(document).ready(function () {
    //Set variable map directory
    let mapDraw = ("map/LAO_ADM1.json");
    let womenStatusPath = ("data/womenStatusMap.csv");
    //Set to select SVG DOM
    let svg = d3.select("#womenStatusMap");
    //Set Scale
    let colorScale = d3.scaleThreshold()
        .domain([0, 0.699, 0.799, 0.879, 0.967])
        .range(["#fbe9e7", "#f44336", "#ffeb3b", "#8bc34a", "#4caf50"]);
    //Set tooltips
    let tooltipWomenStatus = d3.select(".tab-content").append("div") 
    .attr("class", "tooltipWomenStatus")
    .style("opacity", 0);
    
    //Set variable to import data
    let womenStatusSort = d3.map();
    let promise = [
        d3.json(mapDraw),
        d3.csv(womenStatusPath, d => womenStatusSort.set(d.feature_id, +d.ValueWomenStatus))
    ];

    Promise.all(promise).then(creatMap);
    function creatMap(value) {
        let lao = value[0];
        //Set variable for import map data
        let womenStatusMap = topojson.feature(lao, lao.objects.LAO_ADM1);
        //Set porjection map type
        let projection = d3.geoMercator()
            .fitSize([320, 320], womenStatusMap);
        //Draw a graph use "g" because draw multiple path in one time
        svg.append("g")
            .selectAll("path")
            .data(womenStatusMap.features)
            .enter()
            .append("path")
            .attr("d", d3.geoPath().projection(projection))
            .attr("fill", d => colorScale(+(d.properties.feature_id = womenStatusSort.get(d.properties.feature_id))/100));

        svg.selectAll("path")
            .data(womenStatusMap.features)
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
    let tooltip1 = d3.select(".tab-content").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

    //Set variable to import data
    let stuntingSort = d3.map();
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
    let tooltip = d3.select(".tab-content").append("div") 
    .attr("class", "tooltip1")       
    .style("opacity", 0);

    //Set variable to import data
    let stuntingSort1 = d3.map();
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
//************************
//END MAP SECTION*********
//************************


    //*****************************************************//
    //**************WARNING: Test Section*****************//
    //***************************************************//
    //Sankey Graph
    $(document).ready(function () {
        let sankeyDataImport = 'data/mulnutrition_sankey.csv'; //Data directory path
        Promise.resolve(d3.csv(sankeyDataImport, d3.autoType)).then(importSankeyData); //Import data, use promise.resolve function to handle data import
        let svg = d3.select("#sankey"); //crate variale svg to select DOM
        function importSankeyData (data) {
            let width = 800;
            let height = 800;
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

            const color = d3.scaleOrdinal(d3.schemePastel1);
            
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
            .text(d => `${d.name}\n ${d.value}`);


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
            .text(d => `${d.source.name} → ${d.target.name}\n` + d.value);
        
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


    //Circle Packing Graph
    $(document).ready(function () {

        //Import Data
        d3.json("data/LSIS2.json").then(makeCircle);

        //Set Color Scale
        let color = d3.scaleLinear()
            .domain([0, 5])
            .range(d3.schemeGreys[5]);
        
        //Set data format
        let format = d3.format(",d");


        //Set Height and Width
        let height = 600;
        let width =  600;

        
        //Build Chart Function
        function makeCircle (circle) { //Add function
            let root = d3.pack() //This for set up circle
                .size([width, width])
                .padding(3)
                (d3.hierarchy(circle)
                .sum(d => d.value)
                .sort((a, b) => b.value - a.value));

            //Set Variable
            let focus = root;
            let view;

            //Check that data was added to root viaable
            console.log(root);

            //Function to creat zoom
            function zoom(d) {
                let focus0 = focus;
                //Set d to fucus; d refer to root later
                focus = d;
                //set annimation while zooming
                let transition = svg.transition()
                    .duration(d3.event.altKey ? 7500 : 750)
                    .tween("zoom", d => {
                    const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
                    return t => zoomTo(i(t));
                    });
                label
                .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
                .transition(transition)
                .style("fill-opacity", d => d.parent === focus ? 1 : 0)
                .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
                .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
                select();
                let database = [];
                database = (root.data.children.map(d => d.name));    
                
                let checkParent  = () => {
                    let maxHeight = root.height;
                    let selectedHeight = d.height;
                    let marginHeight = maxHeight - 1;
                    let toAdd = "parent";
                    let selectCircle = d;
                    let a = [];
                    console.log(marginHeight);
                    while (selectedHeight < maxHeight) {
                        selectCircle = selectCircle[toAdd];
                        if (selectedHeight == marginHeight) {
                            a.push(d.data.name);
                            selectedHeight++;
                        }
                        a.push(selectCircle.data.name);
                        selectedHeight++;
                    }
                    let b =[];
                    database.forEach(d => a.includes(d) ? b.push(d): null);
                    console.log(b);
                }
                checkParent();
                console.log(d);
            }

            function zoomTo(v) {
                let k = width / v[2];
                view = v;
                label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
                node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
                node.attr("r", d => d.r * k);
            }


            //Select SVG from DOM
            let svg = d3.select("#circlePacking")
                        .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
                        .style("background", "none")
                        .style("cursor", "pointer")
                        .on("click", () => {
                            zoom(root);
                        });
            
            //Below to create element for circle packing

            let node = svg.append("g") //This create each circle
                .selectAll("circle")
                .data(root.descendants().slice(1))
                .join("circle")
                .attr("fill", d => d.children ? color(d.depth) : "white")
                .attr("pointer-events", d => !d.children ? "none" : null)
                .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
                .on("mouseout", function() { d3.select(this).attr("stroke", null); })
                .on("click", d => focus !== d && (zoom(d), d3.event.stopPropagation()));

            let label = svg.append("g") //This create text inside circle
                .style("font", "10px sans-serif")
                .attr("pointer-events", "none")
                .attr("text-anchor", "middle")
                .selectAll("text")
                .data(root.descendants())
                .join("text")
                .style("fill-opacity", d => d.parent === root ? 1 : 0)
                .style("display", d => d.parent === root ? "inline" : "none")
                .text(d => d.data.name);


            zoomTo([root.x, root.y, root.r * 2]);
            svg.node();


            //Add Chart
                //Creat Chart Women Mulnutrtion
                let ctx = document.getElementById('subBarChartforCirclePacking').getContext("2d");
                let subChart = new Chart(ctx, {
                    type: 'horizontalBar',
                    data: {
                        labels: ["VTE", "PH"],
                        datasets: [
                            {
                                label: 'Percentage of Women Anemia Prevalence',
                                data: [],
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
                                    drawOnChartArea: false,
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                },
                                gridLines: {
                                    borderDash: [3, 10]
                                }
                            }]
                        },
                        maintainAspectRatio: false,
                    }
                });
                let x = 0;
                function select() {
                    if (x == 0) {
                        subChart.data.datasets.forEach(function(dataset) {
                            dataset.data = [2,10];
                        });
                        subChart.update();
                        x = 1;
                    } else {
                        subChart.data.datasets.forEach(function(dataset) {
                            dataset.data = [];
                        });
                        subChart.update();
                        x = 0;
                    }
                };
        }
});

//for  Sentinel  survey ********************************************************************
// For the first block graph 
// all of these charts are consisted of custom plugin called 
//******************************************************************************************

const myChartJSPlugin = {
  beforeDraw: function(chart)  {
	  
				if(chart.config.options.plugins1){
                    var width = chart.chart.width,
                        height = chart.chart.height,
                        ctt = chart.chart.ctx;

                    ctt.restore();
                    var fontSize = (height / 70).toFixed(2);
                    ctt.font = fontSize + "em sans-serif";
                    ctt.textBaseline = "middle";

                    var text = "45%",
                        textX = Math.round((width - ctt.measureText(text).width) / 2),
                        textY = height / 2;

                    ctt.fillText(text, textX, textY);
                    ctt.save();
					ctt.restore();
					
				}
                  
			}
};

Chart.pluginService.register(myChartJSPlugin);
$(document).ready(function() {
var tohCanvas = document.getElementById("stunts");

var stData = {
    labels: [
       '',
        
    ],
    datasets: [
        {
			label: '',
            data: [35,75],
            backgroundColor: [
                "#75C050",
				
               
            ],
            
            borderWidth: 0
        }]
};

var chartOptions = {
 cutoutPercentage: 88,
  animation: {
    animateRotate: true,
    duration: 9000
  },
  legend: {
    display:false
  },
  tooltips: {
    enabled: false
  
  },
  plugins1: [myChartJSPlugin],
  maintainAspectRatio : false
   
};


var pieChart = new Chart(tohCanvas, {
  type: 'doughnut',
  data: stData,
  options: chartOptions
});

});

//chart wasting

const myChartJSPlugin1 = {
  beforeDraw: function(chart)  {
	  
				if(chart.config.options.plugins2){
                    var width = chart.chart.width,
                        height = chart.chart.height,
                        ctt = chart.chart.ctx;

                    ctt.restore();
                    var fontSize = (height / 70).toFixed(2);
                    ctt.font = fontSize + "em sans-serif";
                    ctt.textBaseline = "middle";

                    var text = "15%",
                        textX = Math.round((width - ctt.measureText(text).width) / 2),
                        textY = height / 2;

                    ctt.fillText(text, textX, textY);
                    ctt.save();
					ctt.restore();
					
				}
                  
			}
};

Chart.pluginService.register(myChartJSPlugin1);
$(document).ready(function() {
var tohCanvas = document.getElementById("wastingS");

var stData = {
    labels: [
       '',
        
    ],
    datasets: [
        {
			label: '',
            data: [15,85],
            backgroundColor: [
                "#EA528F",
				
               
            ],
            
            borderWidth: 0
        }]
};

var chartOptions = {
 cutoutPercentage: 88,
  animation: {
    animateRotate: true,
    duration: 9000
  },
  legend: {
    display:false
  },
  tooltips: {
    enabled: false
  
  },
  plugins2: [myChartJSPlugin1],
  maintainAspectRatio : false
   
};


var pieChart = new Chart(tohCanvas, {
  type: 'doughnut',
  data: stData,
  options: chartOptions
});

});

//Underweight graph 

const myChartJSPlugin2 = {
  beforeDraw: function(chart)  {
	  
				if(chart.config.options.plugins3){
                    var width = chart.chart.width,
                        height = chart.chart.height,
                        ctt = chart.chart.ctx;

                    ctt.restore();
                    var fontSize = (height / 70).toFixed(2);
                    ctt.font = fontSize + "em sans-serif";
                    ctt.textBaseline = "middle";

                    var text = "5%",
                        textX = Math.round((width - ctt.measureText(text).width) / 2),
                        textY = height / 2;

                    ctt.fillText(text, textX, textY);
                    ctt.save();
					ctt.restore();
					
				}
                  
			}
};

Chart.pluginService.register(myChartJSPlugin2);
$(document).ready(function() {
var tohCanvas = document.getElementById("underweightS");

var stData = {
    labels: [
       '',
        
    ],
    datasets: [
        {
			label: '',
            data: [5,95],
            backgroundColor: [
                "#F27B53",
				
               
            ],
            
            borderWidth: 0
        }]
};

var chartOptions = {
 cutoutPercentage: 88,
  animation: {
    animateRotate: true,
    duration: 9000
  },
  legend: {
    display:false
  },
  tooltips: {
    enabled: false
  
  },
  plugins3: [myChartJSPlugin2],
  maintainAspectRatio : false
   
};


var pieChart = new Chart(tohCanvas, {
  type: 'doughnut',
  data: stData,
  options: chartOptions
});

});

//Over weight graph 
const myChartJSPlugin3 = {
  beforeDraw: function(chart)  {
	  
				if(chart.config.options.plugins4){
                    var width = chart.chart.width,
                        height = chart.chart.height,
                        ctt = chart.chart.ctx;

                    ctt.restore();
                    var fontSize = (height / 60).toFixed(2);
                    ctt.font = fontSize + "em sans-serif";
                    ctt.textBaseline = "middle";

                    var text = "3%",
                        textX = Math.round((width - ctt.measureText(text).width) / 2),
                        textY = height / 2;

                    ctt.fillText(text, textX, textY);
                    ctt.save();
					ctt.restore();
					
				}
                  
			}
};

Chart.pluginService.register(myChartJSPlugin3);
$(document).ready(function() {
var tohCanvas = document.getElementById("overweightS");

var stData = {
    labels: [
       '',
        
    ],
    datasets: [
        {
			label: '',
            data: [3,97],
            backgroundColor: [
                "#0EADD4",
				
               
            ],
            
            borderWidth: 0
        }]
};

var chartOptions = {
 cutoutPercentage: 88,
  animation: {
    animateRotate: true,
    duration: 9000
  },
  legend: {
    display:false
  },
  tooltips: {
    enabled: false
  
  },
  plugins4: [myChartJSPlugin3],
  maintainAspectRatio : false
   
};


var pieChart = new Chart(tohCanvas, {
  type: 'doughnut',
  data: stData,
  options: chartOptions
});

});

// function to save chart js as picture 



