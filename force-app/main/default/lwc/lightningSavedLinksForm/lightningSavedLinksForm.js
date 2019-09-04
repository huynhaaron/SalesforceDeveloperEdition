import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import URL_FIELD from "@salesforce/schema/SavedLink__c.URL__c";
import TITLE_FIELD from "@salesforce/schema/SavedLink__c.Title__c";

export default class LightningSavedLinksForm extends LightningElement {
  fields = [TITLE_FIELD, URL_FIELD];

  handleSubmit(event) {
    event.preventDefault(); // stop the form from submitting
    const fields = event.detail.fields;
    fields.Position__c = 1; // modify a field
    this.template.querySelector("lightning-record-form").submit(fields);
  }
  // eslint-disable-next-line no-unused-vars
  handleSuccess(event) {
    const evt = new ShowToastEvent({
      title: "SUCCESS",
      message: "Your link has been added to your Saved Links.",
      variant: "success"
    });
    this.dispatchEvent(evt);
  }
}