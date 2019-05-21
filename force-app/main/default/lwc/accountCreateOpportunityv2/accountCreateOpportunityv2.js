// import { LightningElement, api, track } from "lwc";
// import { ShowToastEvent } from "lightning/platformShowToastEvent";
// //import { getPicklistValues } from "lightning/uiObjectInfoApi";
// import { createRecord } from "lightning/uiRecordApi";

// import OPPORTUNITY_OBJECT from "@salesforce/schema/Opportunity";
// import NAME_FIELD from "@salesforce/schema/Opportunity.Name";
// import AMOUNT_FIELD from "@salesforce/schema/Opportunity.Amount";
// import CLOSEDATE_FIELD from "@salesforce/schema/Opportunity.CloseDate";
// import ACCOUNTID_FIELD from "@salesforce/schema/Opportunity.AccountId";
// import STAGENAME_FIELD from "@salesforce/schema/Opportunity.StageName";
// import TYPE_FIELD from "@salesforce/schema/Opportunity.Type";

// export default class AccountCreateOpportunityv2 extends LightningElement {
//   @api recordId;

//   //   @wire(getPicklistValues, {
//   //     recordTypeId: "006000000000000AAA",
//   //     fieldApiName: TYPE_FIELD
//   //   })
//   //   TypePicklistValues;
//   @track typeOptions = [
//     {
//       Label: "Existing Customer - Upgrade",
//       value: "Existing Customer - Upgrade"
//     },
//     {
//       Label: "Existing Customer - Replacement",
//       value: "Existing Customer - Replacement"
//     },
//     {
//       Label: "Existing Customer - Downgrade",
//       value: "Existing Customer - Downgrade"
//     },
//     {
//       Label: "New Customer",
//       value: "New Customer"
//     }
//   ];
//   //   get typeOptions() {
//   //     return [
//   //       {
//   //         Label: "Existing Customer - Upgrade",
//   //         value: "Existing Customer - Upgrade"
//   //       },
//   //       {
//   //         Label: "Existing Customer - Replacement",
//   //         value: "Existing Customer - Replacement"
//   //       },
//   //       {
//   //         Label: "Existing Customer - Downgrade",
//   //         value: "Existing Customer - Downgrade"
//   //       },
//   //       {
//   //         Label: "New Customer",
//   //         value: "New Customer"
//   //       }
//   //     ];
//   //   }
//   get stageOptions() {
//     return [
//       { Label: "Prospecting", value: "Prospecting" },
//       { Label: "Qualification", value: "Qualification" }
//     ];
//   }

//   createOpportunity() {
//     const fields = {};
//     fields[ACCOUNTID_FIELD.fieldApiName] = this.recordId;
//     fields[NAME_FIELD.fieldApiName] = this.Name;
//     fields[STAGENAME_FIELD.fieldApiName] = this.StageName;
//     fields[CLOSEDATE_FIELD.fieldApiName] = this.CloseDate;
//     fields[AMOUNT_FIELD.fieldApiName] = this.Amount;
//     fields[TYPE_FIELD.fieldApiName] = this.Type;
//     const recordInput = { apiName: OPPORTUNITY_OBJECT.objectApiName, fields };
//     createRecord(recordInput).then(account => {
//       this.accountId = account.id;
//       this.dispatchEvent(
//         new ShowToastEvent({
//           title: "Success",
//           message: "Opportunity created",
//           variant: "success"
//         })
//       );
//     });
//   }

//   handleTypeChange(event) {
//     this.Type = event.detail.value;
//   }
//   handleStageChange(event) {
//     this.StageName = event.detail.value;
//   }
// }

import { LightningElement, api } from "lwc";
import OPPORTUNITY_OBJECT from "@salesforce/schema/Opportunity";
import NAME_FIELD from "@salesforce/schema/Opportunity.Name";
import AMOUNT_FIELD from "@salesforce/schema/Opportunity.Amount";
import CLOSEDATE_FIELD from "@salesforce/schema/Opportunity.CloseDate";
import ACCOUNTID_FIELD from "@salesforce/schema/Opportunity.AccountId";
import STAGENAME_FIELD from "@salesforce/schema/Opportunity.StageName";
import TYPE_FIELD from "@salesforce/schema/Opportunity.Type";

export default class AccountCreateOpportunityv2 extends LightningElement {
  @api RecordFieldDataType;
  opportunityObject = OPPORTUNITY_OBJECT;
  myFields = [
    NAME_FIELD,
    AMOUNT_FIELD,
    CLOSEDATE_FIELD,
    ACCOUNTID_FIELD,
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
