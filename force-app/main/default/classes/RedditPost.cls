public class RedditPost{
    public data data{get;set;}
    public String kind{get;set;}
    public class data{
        public Child[] children {get;set;}
        public data data{get;set;}
        public String title{get;set;}
        public String url{get;set;}
        public String selftext{get;set;}
        public String subreddit{get;set;}
    }
    public class Child {
        public String kind{get;set;}
        public data[] data{get;set;}
    }
}