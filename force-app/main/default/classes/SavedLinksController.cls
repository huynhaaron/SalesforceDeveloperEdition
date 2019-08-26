public with sharing class SavedLinksController {
    @AuraEnabled(cacheable=true)
    public static SavedLink__c[] getSavedLinks(){
        SavedLink__c[] result = [SELECT Id, Name, Title__c, URL__c, Position__c FROM SavedLink__c WHERE OwnerId = :UserInfo.getUserId()];
        return result;
    }
}