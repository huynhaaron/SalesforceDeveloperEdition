import { LightningElement, api } from "lwc";

export default class LightningSavedLinksListItem extends LightningElement {
  @api title;
  @api url;
  @api position;
}