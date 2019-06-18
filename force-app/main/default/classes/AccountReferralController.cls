public with sharing class AccountReferralController {

    @AuraEnabled(cacheable=true)
    public static List<Account> topAccountReferrals(Integer n) {
        List<Account> accounts = [SELECT Name, Number_of_Referrals__c FROM ACCOUNT WHERE Number_of_Referrals__c >= 1 ORDER BY Number_of_Referrals__c LIMIT :n ];
        system.debug(accounts);
        return accounts;
    }
}