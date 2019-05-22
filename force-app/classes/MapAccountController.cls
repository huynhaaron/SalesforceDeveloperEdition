public with sharing class MapAccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountLocations(){
        List<Account> result = [SELECT BillingAddress FROM Account WHERE OwnerId =:userinfo.getuserid()];
        return result;

    }
}
