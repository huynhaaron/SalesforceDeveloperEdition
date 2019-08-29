import { LightningElement, wire } from "lwc";
import getSavedLinks from "@salesforce/apex/SavedLinksController.getSavedLinks";

export default class LightningSavedLinksList extends LightningElement {
  @wire(getSavedLinks) savedLinks;
}
