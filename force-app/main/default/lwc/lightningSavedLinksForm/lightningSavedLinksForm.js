import { LightningElement } from "lwc";
import URL_FIELD from "@salesforce/schema/SavedLink__c.URL__c";
import TITLE_FIELD from "@salesforce/schema/SavedLink__c.Title__c";

export default class LightningSavedLinksForm extends LightningElement {
  fields = [TITLE_FIELD, URL_FIELD];
}
