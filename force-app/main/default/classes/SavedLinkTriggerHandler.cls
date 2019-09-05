public class SavedLinkTriggerHandler extends TriggerHandler {
  public override void beforeInsert() {
    for(SavedLink__c savedLink : (List<SavedLink__c>) Trigger.new) {
      system.debug(savedLink);
    }
  }
}
