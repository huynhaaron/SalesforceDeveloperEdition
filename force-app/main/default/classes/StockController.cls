public class StockController {
    
    @AuraEnabled
    public static Map<String, Object> getStock(String tickerSymbol) {
        Map<String, Object> results = new Map<String, Object>();
        
        apikey__c cs = apikey__c.getInstance('alphavantage');

        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + tickerSymbol + '&apikey=' + cs.key__c);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            system.debug(results);
        }
        return results;
    }
    
    
	//@AuraEnabled
    //public static Map<String, Object> getPrice(String recordId) {
        
    //}
}