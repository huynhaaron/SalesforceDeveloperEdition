import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
//import static resource
import Chart from "@salesforce/resourceUrl/chart";
//import scripts
import { loadScript, loadStyle } from "lightning/platformResourceLoader";

export default class LightningChart extends LightningElement {
  chartInitialized = false;

  renderedCallback() {
    if (this.chartInitialized) {
      return;
    }
    this.chartInitialized = true;
    Promise.all([
      loadScript(
        this,
        Chart + "/chartjs-Chart.js-2166d6f/dist/Chart.bundle.js"
      ),
      loadStyle(this, Chart + "/chartjs-Chart.js-2166d6f/dist/Chart.css")
    ])
      .then(() => {
        //console.log("Chart.JS loaded");
        this.initializeChart();
      })
      .catch(error => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error loading",
            message: error.message,
            variant: "error"
          })
        );
      });
  }

  initializeChart() {
    var ctx = this.template.querySelector("canvas.myChart").getContext("2d");
    this.chart = new window.Chart(ctx, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
  }
}
