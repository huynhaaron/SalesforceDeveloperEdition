import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import Chart from "@salesforce/resourceUrl/Chart";
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

  initializeChart() {}
}
