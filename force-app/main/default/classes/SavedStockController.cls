public class SavedStockController {
    
    @AuraEnabled
    public static List<SavedStock__c> getUserSavedStocks() {
        List<SavedStock__c> result = [SELECT Name 
                                      FROM SavedStock__c
                                      WHERE OwnerId = :UserInfo.getUserId() LIMIT 4 ];
        return result;
    }
    
    @AuraEnabled
    public static void createStock(String newStockSymbol) {
        SavedStock__c newStock = new SavedStock__c(name= newStockSymbol);
        insert newStock;
    }
}