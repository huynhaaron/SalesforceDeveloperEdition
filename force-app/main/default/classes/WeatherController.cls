public with sharing class WeatherController {

    @AuraEnabled
    public static Map<String, Object> getWeather(String recordId) {
        Map<String, Object> results = new Map<String, Object>();
        Opportunity o = [SELECT Id, OwnerId, Account.Name, Account.BillingCity , Name, Amount
                         FROM Opportunity 
                         WHERE Id=:recordId];
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.openweathermap.org/data/2.5/weather?q=' + o.Account.BillingCity + '&units=imperial&appid=b9b0e9e88d604ee3f385346578a4ff41');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if (response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            //List<Object> weather = (List<Object>) results.get('weather');
            //System.debug('Received the following weather:');
            //for (Object w: weather) {
                //System.debug(w);
            //}
        }
        return results;
    }
}