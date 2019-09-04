import { LightningElement, wire } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import Chart from "@salesforce/resourceUrl/chart";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";
import getTopAccountReferrals from "@salesforce/apex/AccountReferralController.getTopAccountReferrals";

export default class LightningTopAccountReferrals extends LightningElement {
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
  @wire(getTopAccountReferrals, { n: 5 })
  wiredAccounts({ error, data }) {
    if (error) {
      window.console.log(error);
    }
    if (data) {
      let labels = [];
      let numReferrals = [];
      data.forEach(item => {
        window.console.log(item);
        labels.push(item.Name);
        numReferrals.push(item.Number_of_Referrals__c);
      });
      window.console.log(labels);
      window.console.log(numReferrals);
      this.initializeChart(labels, numReferrals);
    }
  }

  initializeChart(labels, numReferrals) {
    var ctx = this.template.querySelector("canvas.myChart").getContext("2d");
    this.chart = new window.Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Top Referrals",
            data: numReferrals,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    ctx.onclick = function(evt) {
      var activePoint = this.chart.getElementAtEvent(evt)[0];
      var data = activePoint._chart.data;
      var datasetIndex = activePoint._datasetIndex;
      var l = data.datasets[datasetIndex].label;
      var v = data.datasets[datasetIndex].data[activePoint._index];
      window.console.log("clicked");
      window.console.log(data);
    };
  }
}