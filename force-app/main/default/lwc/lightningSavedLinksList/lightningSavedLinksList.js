import { LightningElement, wire, api } from "lwc";
import { refreshApex } from "@salesforce/apex";

import getSavedLinks from "@salesforce/apex/SavedLinksController.getSavedLinks";

export default class LightningSavedLinksList extends LightningElement {
  @api positionCount;
  @wire(getSavedLinks) savedLinks;

  linkDeleted() {
    return refreshApex(this.savedLinks);
  }
}
