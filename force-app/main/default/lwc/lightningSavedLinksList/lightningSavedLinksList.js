import { LightningElement, wire, api } from "lwc";
import getSavedLinks from "@salesforce/apex/SavedLinksController.getSavedLinks";

export default class LightningSavedLinksList extends LightningElement {
  @api positionCount;
  @wire(getSavedLinks) savedLinks;
}
