public with sharing class MapAccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String state){
        List<Account> result = [SELECT Name, Id, BillingStreet, BillingCity, BillingState, BillingCountry FROM Account WHERE BillingCity != null AND BillingState = :state LIMIT 25];
        return result;
    }
}