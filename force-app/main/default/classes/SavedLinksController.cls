public with sharing class SavedLinksController {
    @AuraEnabled(cacheable=true)
    public static SavedLink__c[] getSavedLinks(){
        SavedLink__c[] result = [SELECT Id, Name, Title__c, URL__c, Position__c FROM SavedLink__c WHERE OwnerId = :UserInfo.getUserId() ORDER BY Position__c ASC];
        return result;
    }

    @AuraEnabled
    public static SavedLink__c createSavedLink(String title, String url){
        // Schema.DescribeSObjectResult s = SavedLink__c.sObjectType.getDescribe();
        // Boolean isCreateable = s.isCreateable();
        SavedLink__c newLink = new SavedLink__c();
        if (Schema.sObjectType.SavedLink__c.isCreateable()) {
            Integer countOfSavedLinks = [SELECT COUNT() FROM SavedLink__c WHERE OwnerId =:UserInfo.getUserId()];
            //system.debug('####  ' + CountOfSavedLinks);
            newLink.Title__c = title;
            newLink.URL__c = url;
            newLink.OwnerId = UserInfo.getUserId();
            insert newLink;
        }
        return newLink;
    }
    @AuraEnabled
    public static string deleteSavedLink(String linkId){
        SavedLink__c toDeleteLink = [SELECT Id FROM SavedLink__c WHERE Id =: linkId LIMIT 1];
        if (Schema.sObjectType.SavedLink__c.isDeletable()) {
            delete toDeleteLink;
        }
        return toDeleteLink.Id;
    }
}