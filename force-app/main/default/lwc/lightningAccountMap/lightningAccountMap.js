import { LightningElement, track, wire } from "lwc";
import getAccounts from "@salesforce/apex/MapAccountController.getAccounts";
const DELAY = 300;

export default class LightningAccountMap extends LightningElement {
  @track zoomLevel = 8;
  @track state = "";
  @track markers = [
    {
      location: {
        // Location Information
        City: "San Francisco",
        Country: "USA",
        PostalCode: "94105",
        State: "CA",
        Street: "50 Fremont St"
      },

      // Extra info for tile in sidebar & infoWindow
      icon: "standard:account",
      title: "Julies Kitchen", // e.g. Account.Name
      description: "This is a long description"
    },
    {
      location: {
        // Location Information
        City: "San Francisco",
        Country: "USA",
        PostalCode: "94105",
        State: "CA",
        Street: "30 Fremont St."
      },

      // Extra info for tile in sidebar
      icon: "standard:account",
      title: "Tender Greens" // e.g. Account.Name
    }
  ];
  @track error;

  @wire(getAccounts, { state: "$state" })
  wiredmarkers({ error, data }) {
    //console.log("markers");
    //debugger;
    //console.log(data);
    if (data) {
      this.markers = [];
      data.forEach(item => {
        this.markers.push({
          location: {
            City: item.BillingCity,
            State: item.BillingState
          },
          icon: "custom:custom26",
          title: item.Name
        });
      });
      //console.log(this.markers);
      //console.log("done");
      this.error = undefined;
    } else if (error) {
      this.error = error;
    }
  }

  //center of the map
  center = {
    location: {
      City: "Lompoc"
    }
  };

  handleZoom(event) {
    this.zoomLevel = event.target.value;
  }

  handleStateChange(event) {
    window.clearTimeout(this.delayTimeout);
    const state = event.target.value;
    this.delayTimeout = setTimeout(() => {
      this.state = state;
    }, DELAY);
  }
}