import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Input() isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  chart: any;
	
  chartOptions= {
    animationEnabled: true,
    title: {
      text: ""
    },
    axisX: {
      tickThickness: 0,
      interval: 0,
      intervalType: "year"
    },
    toolTip: {
      shared: true
    },
    axisY: {
      lineThickness: 0,
      tickThickness: 0,
      interval: 20
    },
    legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      reversed: true
    },
    data: [{
      name: "Real-Time",
      showInLegend: true,
      type: "stackedColumn100",
      color: "#0DA18F ",
      dataPoints: [
        { x: new Date(2017, 0), y: 60 },
        { x: new Date(2018, 0), y: 25 },
        { x: new Date(2019, 0), y: 20 },
        { x: new Date(2020, 0), y: 10 }
      ]
    }, {
      name: "Web Browsing",
      showInLegend: true,
      type: "stackedColumn100",
      color: "#0074D9 ",
      dataPoints: [
        { x: new Date(2017, 0), y: 0 },
        {
          x: new
            Date(2018, 0), y: 0
        },
        { x: new Date(2019, 0), y: 0
 },
        { x: new Date(2020, 0), y: 0 }
      ]
    }, {
      name: "File Sharing",
      showInLegend: true,
      type: "stackedColumn100",
      color: "#4192D9 ",
 
      dataPoints: [
        { x: new Date(2017, 1), y: 0 },
        { x: new Date(2018, 0), y: 0 },
        { x: new Date(2019, 0), y: 0 },
        { x: new Date(2020, 0), y: 0 }
      ]
    }, {
      name: "Other",
      showInLegend: false,
      type: "stackedColumn100",
      color: "#ffffff00",
      dataPoints: [
        { x: new Date(2017, 0), y: 10 },
        { x: new Date(2018, 0), y: 10 },
        { x: new Date(2019, 0), y: 20 },
        { x: new Date(2020, 0), y: 20 }
      ]
    }]
 
  }

	
  mychartOptions = {
    title:{
    },
    animationEnabled: true,
    data: [{        
      type: "column",
      dataPoints: [
        { x: 10, y: 92 },
        { x: 20, y: 65 },
        { x: 30, y: 25 },
        { x: 40, y: 40 }
      ]
    }]
  }
}
