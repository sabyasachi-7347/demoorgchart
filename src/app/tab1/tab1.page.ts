import { Component, OnInit,ViewChild  } from '@angular/core';
import * as HighCharts from 'highcharts';
// import { OrgChartComponent } from 'ng-org-chart';
import { IonContent, ModalController } from '@ionic/angular';
import { PagemodalPage } from '../pagemodal/pagemodal.page';
// import { IonContent } from '@ionic/angular';
// import * as Highcharts from 'highcharts';
// import{HighCharts} from 'highcharts';

declare var require: any;
let sankey = require("highcharts/modules/sankey");
let organization = require("highcharts/modules/organization");

sankey(HighCharts);
organization(HighCharts);
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild("orgChartContainer", { static: false }) orgChartContainer;
  // @ViewChild("orgChartContainer") orgChartContainer;
  dataReturned: any;

  constructor( public modalController: ModalController) {}
//  ngOnInit(){
//    console.log("hii");
   
//   HighCharts.chart(this.orgChartContainer.nativeElement, {
//     chart: {
//         height: 600,
//         inverted: true
//     },
//     title: {
//         text: 'Highcharts Org Chart'
//     },

//     accessibility: {
//         // point: {
//         //     descriptionFormatter: function (point) {
//         //         var nodeName = point.toNode.name,
//         //             nodeId = point.toNode.id,
//         //             nodeDesc = nodeName === nodeId ? nodeName : nodeName + ', ' + nodeId,
//         //             parentDesc = point.fromNode.id;
//         //         return point.index + '. ' + nodeDesc + ', reports to ' + parentDesc + '.';
//         //     }
//         // }
//     },

//     series: [{
//         type: "organization",
//         name: 'Highsoft',
//         keys: ['from', 'to'],
//         data: [
//             ['Shareholders', 'Board'],
//             ['Board', 'CEO'],
//             ['CEO', 'CTO'],
//             ['CEO', 'CPO'],
//             ['CEO', 'CSO'],
//             ['CEO', 'CMO'],
//             ['CEO', 'HR'],
//             ['CTO', 'Product'],
//             ['CTO', 'Web'],
//             ['CSO', 'Sales'],
//             ['CMO', 'Market']
//         ],
//         levels: [{
//             level: 0,
//             color: 'silver',
//             dataLabels: {
//                 color: 'black'
//             },
//             height: 25
//         }, {
//             level: 1,
//             color: 'silver',
//             dataLabels: {
//                 color: 'black'
//             },
//             height: 25
//         }, {
//             level: 2,
//             color: '#980104'
//         }, {
//             level: 4,
//             color: '#359154'
//         }],
//         nodes: [{
//             id: 'Shareholders'
//         }, {
//             id: 'Board'
//         }, {
//             id: 'CEO',
//             title: 'CEO',
//             name: 'Grethe Hjetland',
//             image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg'
//         }, {
//             id: 'HR',
//             title: 'HR/CFO',
//             name: 'Anne Jorunn Fjærestad',
//             color: '#007ad0',
//             image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132314/AnneJorunn.jpg',
//             column: 3,
//             offset: '75%'
//         }, {
//             id: 'CTO',
//             title: 'CTO',
//             name: 'Christer Vasseng',
//             column: 4,
//             image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
//             layout: 'hanging'
//         }, {
//             id: 'CPO',
//             title: 'CPO',
//             name: 'Torstein Hønsi',
//             column: 4,
//             image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12131849/Torstein1.jpg'
//         }, {
//             id: 'CSO',
//             title: 'CSO',
//             name: 'Anita Nesse',
//             column: 4,
//             image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132313/Anita.jpg',
//             layout: 'hanging'
//         }, {
//             id: 'CMO',
//             title: 'CMO',
//             name: 'Vidar Brekke',
//             column: 4,
//             image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
//             layout: 'hanging'
//         }, {
//             id: 'Product',
//             name: 'Product developers'
//         }, {
//             id: 'Web',
//             name: 'Web devs, sys admin'
//         }, {
//             id: 'Sales',
//             name: 'Sales team'
//         }, {
//             id: 'Market',
//             name: 'Marketing team'
//         }],
//         colorByPoint: false,
//         color: '#007ad0',
//         dataLabels: {
//             color: 'white'
//         },
//         borderColor: 'white',
//         nodeWidth: 65
//     }],
//     tooltip: {
//         outside: true
//     },
//     exporting: {
//         allowHTML: true,
//         sourceWidth: 800,
//         sourceHeight: 600
//     }

// });
//  } 
  ngAfterViewInit() {
    //Organization chart starts
    /* Highcharts.chart(this.barChartContainer.nativeElement, {
      // Created pie chart using Highchart
      chart: {
        type: "column"
      },

      xAxis: {
        type: "category"
      },

      series: [
        {
          name: "TOTAL chart",
          data: [
            {
              name: "Planned",
              y: 30,
              drilldown: "planned"
            }
          ]
        }
      ],
      //Drill Downs
      drilldown: {
        series: [
          {
            name: "Planned Drill Down",
            id: "planned",
            data: [["plan A", 55.03], ["plan B", 15.83]]
          }
        ]
      }
    }); */

    HighCharts.chart(this.orgChartContainer.nativeElement, {
      chart: {
        height: 600,
        inverted: true
      },
      title: {
        text: "Highcharts Org Chart"
      },

      // accessibility: {
      //   point: {
      //     descriptionFormatter: (point) => {
      //       var nodeName = point.toNode.name,
      //         nodeId = point.toNode.id,
      //         nodeDesc =
      //           nodeName === nodeId ? nodeName : nodeName + ", " + nodeId,
      //         parentDesc = point.fromNode.id;
      //       return (
      //         point.index + ". " + nodeDesc + ", reports to " + parentDesc + "."
      //       );
      //     }
      //   }
      // },

      series: [
        {
          type: "organization",
          name: "Highsoft",
          keys: ["from", "to"],
          data: [
            ["Shareholders", "Board"],
            ["Board", "CEO"],
            ["CEO", "CTO"],
            ["CEO", "CPO"],
            ["CEO", "CSO"],
            ["CEO", "CMO"],
            ["CEO", "HR"],
            ["CTO", "Product"],
            ["CTO", "Web"],
            ["CSO", "Sales"],
            ["CMO", "Market"]
          ],
          levels: [
            {
              level: 0,
              color: "silver",
              dataLabels: {
                color: "black"
              },
              height: 25
            },
            {
              level: 1,
              color: "silver",
              dataLabels: {
                color: "black"
              },
              height: 25
            },
            {
              level: 2,
              color: "#980104"
            },
            {
              level: 4,
              color: "#359154"
            }
          ],
          nodes: [
            {
              id: "Shareholders"
            },
            {
              id: "Board"
            },
            {
              id: "CEO",
              title: "CEO",
              name: "Grethe Hjetland",
              image:
                "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg"
            },
            {
              id: "HR",
              title: "HR/CFO",
              name: "Anne Jorunn Fjærestad",
              color: "#007ad0",
              image:
                "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132314/AnneJorunn.jpg",
              column: 3,
              offset: "75%"
            },
            {
              id: "CTO",
              title: "CTO",
              name: "Christer Vasseng",
              column: 4,
              image:
                "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg",
              layout: "hanging"
            },
            {
              id: "CPO",
              title: "CPO",
              name: "Torstein Hønsi",
              column: 4,
              image:
                "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12131849/Torstein1.jpg"
            },
            {
              id: "CSO",
              title: "CSO",
              name: "Anita Nesse",
              column: 4,
              image:
                "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132313/Anita.jpg",
              layout: "hanging"
            },
            {
              id: "CMO",
              title: "CMO",
              name: "Vidar Brekke",
              column: 4,
              image:
                "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg",
              layout: "hanging"
            },
            {
              id: "Product",
              name: "Product developers"
            },
            {
              id: "Web",
              name: "Web devs, sys admin"
            },
            {
              id: "Sales",
              name: "Sales team"
            },
            {
              id: "Market",
              name: "Marketing team"
            }
          ],
          colorByPoint: false,
          color: "#007ad0",
          dataLabels: {
            color: "white"
          },
          borderColor: "white",
          nodeWidth: 65
        }
      ],
      tooltip: {
        outside: true
      },
      exporting: {
        allowHTML: true,
        sourceWidth: 800,
        sourceHeight: 600
      }
    });

    //Organization chart ends
  }
  
  
  // async openModal() {
  //   const modal = await this.modalController.create({
  //     component: PagemodalPage,
  //     componentProps: {
  //       "paramID": 123,
  //       "paramTitle": "Test Title"
  //     }
  //   });
  //   modal.onDidDismiss().then((dataReturned) => {
  //     if (dataReturned !== null) {
  //       this.dataReturned = dataReturned.data;
  //       //alert('Modal Sent Data :'+ dataReturned);
  //     }
  //   });
 
  //   return await modal.present();
  // }
}
