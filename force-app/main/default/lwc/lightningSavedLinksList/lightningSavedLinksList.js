import { LightningElement, wire, api } from "lwc";
import { refreshApex } from "@salesforce/apex";

import getSavedLinks from "@salesforce/apex/SavedLinksController.getSavedLinks";

export default class LightningSavedLinksList extends LightningElement {
  @api positionCount;
  @wire(getSavedLinks) savedLinks;
  constructor() {
    super();
    this.template.addEventListener("created", this.handleCreated.bind(this));
  }

  handleDeleted() {
    return refreshApex(this.savedLinks);
  }

  handleCreated() {
    window.console.log("####In List handleCreatedEvent");
    return refreshApex(this.savedLinks);
  }
}
