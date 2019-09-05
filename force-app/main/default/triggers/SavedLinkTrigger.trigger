trigger SavedLinkTrigger on SavedLink__c (before insert, before update) {
    new SavedLinkTriggerHandler().run();
}