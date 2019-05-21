import { LightningElement, api } from "lwc";
import OPPORTUNITY_OBJECT from "@salesforce/schema/Opportunity";
import NAME_FIELD from "@salesforce/schema/Opportunity.Name";
import AMOUNT_FIELD from "@salesforce/schema/Opportunity.Amount";
import CLOSEDATE_FIELD from "@salesforce/schema/Opportunity.CloseDate";
import ACCOUNTID_FIELD from "@salesforce/schema/Opportunity.AccountId";
import STAGENAME_FIELD from "@salesforce/schema/Opportunity.StageName";
import TYPE_FIELD from "@salesforce/schema/Opportunity.Type";

export default class AccountCreateOpportunityv2 extends LightningElement {
  @api recordId;
  @api RecordFieldDataType;
  opportunityObject = OPPORTUNITY_OBJECT;
  myFields = [
    ACCOUNTID_FIELD,
    NAME_FIELD,
    AMOUNT_FIELD,
    CLOSEDATE_FIELD,
    STAGENAME_FIELD,
    TYPE_FIELD
  ];

  handleOpportunityCreated(evt) {
    this.createStatus = `Opportunity record created. Id is ${evt.detail.id}.`;

    const event = new CustomEvent("newrecord", {
      detail: { data: evt.detail }
    });
    this.dispatchEvent(event);
  }
}
