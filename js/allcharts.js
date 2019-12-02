/*
  Version: 1.0
  Created date: 29 Nov 2019
  The national platforms for Nutrition project Lao PDR
  Data Analysis Unit, Center for Development Policy Research 
  Ministry of Planning and Inestment 
  Credit: highchats.com 
*/


// start chart1
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart1', {
                          chart: {
                              type: 'bar',
                              
                              
                          },
                         
                                            title: {
                              text: 'Nutrition Status in Lao PDR 2006 - 2017',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['2006', '2011', '2017'],
                              title: {
                                  text: null
                              },
                              tickWidth: 1
                          },
                          yAxis: {
                              min: 0,
                              title: {
                              
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                              
                          },
                          tooltip: {
                              valueSuffix: ' percent'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true,
                                      
                                  },
                                  maxPointWidth: 25
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Under 5 Stunting in Lao PDR',
                              data: [48, 44, 33],
                              color:'#EA528F',
                              marker: {
                                radius: 5
                              }
                                                  
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart2', {
                          chart: {
                              type: 'column'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              },
                              tickWidth: 1

                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              },

                              
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#0EADD4'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart3', {
                          chart: {
                              type: 'bar'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              },
                              tickWidth: 1
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#46BEBC'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart4', {
                          chart: {
                              type: 'bar'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              },
                              tickWidth: 1
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#F27B53'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart5', {
                          chart: {
                              type: 'line'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              },
                              tickWidth: 1
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#157C03'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart6', {
                          chart: {
                              type: 'line'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              },
                              tickWidth: 1
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#575757'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart7', {
                          chart: {
                              type: 'column'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              },
                              tickWidth: 1
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#32B3B4'
                          
                          }]
                      });
});

// ****  ***  start chart 2 **************************************************************************//
// ****  ***  start chart 2 **************************************************************************//

document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart8', {
                          chart: {
                              type: 'line',
                              
                              
                          },
                         
                                            title: {
                              text: 'Nutrition Status in Lao PDR 2006 - 2017',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['2006', '2011', '2017'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                              
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              },
                          },
                          tooltip: {
                              valueSuffix: ' percent'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true,
                                      
                                  },
                                  maxPointWidth: 25
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Under 5 Stunting in Lao PDR',
                              data: [48, 44, 33],
                              color:'#EA528F',
                              marker: {
                                radius: 5
                              }
                                                  
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart9', {
                          chart: {
                              type: 'pie'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#0EADD4'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart10', {
                          chart: {
                              type: 'bar'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#46BEBC'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart11', {
                          chart: {
                              type: 'bar'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#F27B53'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart12', {
                          chart: {
                              type: 'line'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#157C03'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart13', {
                          chart: {
                              type: 'line'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#575757'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart14', {
                          chart: {
                              type: 'column'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#32B3B4'
                          
                          }]
                      });
});

// ****  ***  start chart 3 **************************************************************************//
// ****  ***  start chart 3 **************************************************************************//
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart15', {
                          chart: {
                              type: 'line'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#157C03'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart16', {
                          chart: {
                              type: 'bar'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#FFCA22'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart17', {
                          chart: {
                              type: 'column'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#157C03'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart18', {
                          chart: {
                              type: 'spline'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#157C03'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart19', {
                          chart: {
                              type: 'pie'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#157C03'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart20', {
                          chart: {
                              type: 'area'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#EA528F'
                          
                          }]
                      });
});

///************************** End chart 2 *************************************///
///************************** start chart 3 *************************************///

document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart21', {
                          chart: {
                              type: 'line'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#157C03'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart22', {
                          chart: {
                              type: 'bar'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#FFCA22'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart23', {
                          chart: {
                              type: 'column'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#157C03'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart24', {
                          chart: {
                              type: 'spline'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#157C03'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart25', {
                          chart: {
                              type: 'pie'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#157C03'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart26', {
                          chart: {
                              type: 'area'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#EA528F'
                          
                          }]
                      });
});
document.addEventListener('DOMContentLoaded', function () {
    let myChart = Highcharts.chart('chart27', {
                          chart: {
                              type: 'column'
                          },
                          title: {
                              text: 'Historic World Population by Region',
                              style: {
                                        fontSize: '14px'
                                         },
                          },
                          xAxis: {
                              categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                              title: {
                                  text: null
                              }
                          },
                          yAxis: {
                              min: 0,
                              title: {
                                  text: 'Population (millions)',
                                  align: 'middle'
                              },
                              labels: {
                                  overflow: 'justify'
                              }
                          },
                          tooltip: {
                              valueSuffix: ' millions'
                          },
                          plotOptions: {
                              bar: {
                                  dataLabels: {
                                      enabled: true
                                  }
                              }
                          },
                          
                          credits: {
                              enabled: false
                          },
                          series: [{
                              name: 'Year 1800',
                              data: [107, 31, 635, 203, 2],
                              color:'#EA528F'
                          
                          }]
                      });
});