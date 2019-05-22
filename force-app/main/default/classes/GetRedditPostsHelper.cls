public class GetRedditPostsHelper {
    
	@future(callout=true)
    public static void getPosts() {
        //new List to insert at the end
		List<RedditPost__c> posts = new List<RedditPost__c>();
        
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
            //Map<String, String> myMap = new Map<String, String>();
            //for(NewsClass.Articles article: r.articles)
            List<NewsClass.Articles> articles = r.articles;
            for(NewsClass.Articles article: articles) {
                system.debug(article.title);
            }

            
            //map the result of the json into string object
            //Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            //Map<String, Object> data = (Map<String, Object>) results.get('data');
			//Map<String, Object> children = (Map<String, Object>) data.get('children');
            //system.debug(results);
            //system.debug(children);
            //
            //String res = response.getBody();
            //RedditPost resp = (RedditPost) JSON.deserialize(res, RedditPost.class);
			//List<Object> resChildren = resp.data.children;
            //system.debug('Hi');
            //for(Object c :resChildren) {
				//system.debug(c);				
            //}
            
            //List<Object> children = obj.data.children;
            //for (Object child: children) {
              //  system.debug(child);
            //}
            //system.debug(children);

        }
        
       
    }
}