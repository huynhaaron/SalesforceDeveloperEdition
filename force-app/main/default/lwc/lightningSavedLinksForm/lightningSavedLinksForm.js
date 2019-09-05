import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import URL_FIELD from "@salesforce/schema/SavedLink__c.URL__c";
import TITLE_FIELD from "@salesforce/schema/SavedLink__c.Title__c";

export default class LightningSavedLinksForm extends LightningElement {
  fields = [TITLE_FIELD, URL_FIELD];

  handleSuccess() {
    const evt = new ShowToastEvent({
      title: "SUCCESS",
      message: "Your link has been added to your Saved Links.",
      variant: "success"
    });
    this.dispatchEvent(new CustomEvent("created", { bubbles: true }));
    this.dispatchEvent(evt);
  }
}
