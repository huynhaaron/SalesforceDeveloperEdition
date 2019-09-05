import { LightningElement, api } from "lwc";

import deleteSavedLink from "@salesforce/apex/SavedLinksController.deleteSavedLink";

export default class LightningSavedLinksListItem extends LightningElement {
  @api id;
  @api title;
  @api url;
  @api position;

  handleDelete(event) {
    event.preventDefault();
    //needs to split to get id because there are duplicates and it appends a dash 111 to Id
    let realId = event.target.value.split("-")[0];
    deleteSavedLink({ linkId: realId })
      .then(result => {
        window.console.log(result);
        const deleteLinkEvent = new CustomEvent("deleted", {
          detail: realId
        });
        this.dispatchEvent(deleteLinkEvent);
      })
      .catch(error => {
        window.console.log(error);
      });
  }
}
