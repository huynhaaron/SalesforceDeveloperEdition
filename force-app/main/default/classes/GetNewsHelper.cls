public without sharing class GetNewsHelper {

	@future(callout=true)
    public static void getNews() {
        //new List to insert at the end
		List<NewsArticle__c> allArticles = new List<NewsArticle__c>();

        //new http and the request for the http to send
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        //set the request
        request.setEndpoint('https://newsapi.org/v2/everything?q=salesforce&apiKey=d148af0092eb4148afbb1f3136eb2020');
        request.setMethod('GET');
        //response
        HttpResponse response = http.send(request);

        //if the response is successful - 200
        if(response.getStatusCode() == 200) {
            String res = response.getBody();
			NewsClass r = NewsClass.parse(res);
            List<NewsClass.Articles> articles = r.articles;
            for(NewsClass.Articles article: articles) {
                allArticles.add(new NewsArticle__c(title__c=article.title,
                                                   description__c=article.description,
                                                   url__c=article.url,
                                                   author__c=article.author,
                                                   urlToImage__c=article.urlToImage,
                                                   source__c=article.source.name));
            }
        }
        if( allArticles.size() > 0) {
            insert allArticles;
        }


    }

    public static void trimNews() {
        Integer total = [ SELECT COUNT() FROM NewsArticle__c];
        List<NewsArticle__c> oldestArticles = [SELECT Id, CreatedDate FROM NewsArticle__c ORDER BY CreatedDate ASC LIMIT 40];
        if (total >= 100) {
            delete oldestArticles;
        }

    }
}