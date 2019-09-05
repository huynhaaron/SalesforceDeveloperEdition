public without sharing class SavedLinkTriggerHandler extends TriggerHandler {
  public override void beforeInsert() {
    String userId = UserInfo.getUserId();
    String cQuery = 'SELECT Count() FROM SavedLink__c WHERE OwnerId =:userId';
    Integer userSLCount = Database.countQuery(cQuery);
    //system.debug(userSLCount);
    // Integer userSLCount = Database.countQuery('SELECT Count() FROM SavedLink__c WHERE OwnerId =' + UserInfo.getUserId());
    for(SavedLink__c savedLink : (List<SavedLink__c>) Trigger.new) {
      savedLink.Position__c = userSLCount + 1;
      system.debug(savedLink);
    }
  }
}
