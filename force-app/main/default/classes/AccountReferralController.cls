public with sharing class AccountReferralController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getTopAccountReferrals(Integer n) {
        List<Account> accounts = new List<Account>();
        if (!Schema.sObjectType.Account.isAccessible() &&
            !Schema.sObjectType.Account.fields.Name.isAccessible() &&
            !Schema.sObjectType.Account.fields.Number_of_Referrals__c.isAccessible()) {
                return accounts;
        }
        accounts = [SELECT Name, Number_of_Referrals__c FROM Account WHERE Number_of_Referrals__c >= 1 ORDER BY Number_of_Referrals__c LIMIT :n ];
        return accounts;
    }
}

//AccountReferralController.getTopAccountReferrals(5);