public class RedditPostFromJSON{
	public String kind;	//Listing
	public cls_data data;
	class cls_data {
		public String subreddit;	//salesforce
		public String selftext;	//I'm attending TrailheadX this month for the first time (it's actually my first SF conference yet). I'm an admin with a slight knowledge of basic coding. What can I expect in terms of sessions? Is there a schedule they release beforehand or do I just wing it as I go when I'm there? Thanks!
		public String author_fullname;	//t2_2asy74u9
		public boolean saved;
		public Integer gilded;	//0
		public boolean clicked;
		public String title;	//TrailheadX First Timer
		public String subreddit_name_prefixed;	//r/salesforce
		public boolean hidden;
		public Integer pwls;	//6
		public Integer downs;	//0
		public boolean hide_score;
		public String name;	//t3_bjvpp1
		public boolean quarantine;
		public String link_flair_text_color;	//dark
		public String subreddit_type;	//public
		public Integer ups;	//4
		public Integer total_awards_received;	//0
		public boolean is_original_content;
		public boolean is_reddit_media_domain;
		public boolean is_meta;
		public boolean can_mod_post;
		public Integer score;	//4
		public String thumbnail;	//self
		public boolean edited;
		public boolean is_self;
		public Integer created;	//1556836809
		public String link_flair_type;	//text
		public Integer wls;	//6
		public String author_flair_type;	//text
		public String domain;	//self.salesforce
		public String selftext_html;
		public boolean archived;
		public boolean no_follow;
		public boolean is_crosspostable;
		public boolean pinned;
		public boolean over_18;
		public boolean media_only;
		public boolean can_gild;
		public boolean spoiler;
		public boolean locked;
		public boolean visited;
		public String subreddit_id;	//t5_2qmo8
		public String link_flair_background_color;	//
		public String id;	//bjvpp1
		public boolean is_robot_indexable;
		public String author;	//Puzzleheaded_Rain
		public Integer num_crossposts;	//0
		public Integer num_comments;	//5
		public boolean send_replies;
		public String whitelist_status;	//all_ads
		public boolean contest_mode;
		public boolean author_patreon_flair;
		public String permalink;	///r/salesforce/comments/bjvpp1/trailheadx_first_timer/
		public String parent_whitelist_status;	//all_ads
		public boolean stickied;
		public String url;	//https://www.reddit.com/r/salesforce/comments/bjvpp1/trailheadx_first_timer/
		public Integer subreddit_subscribers;	//11580
		public Integer created_utc;	//1556808009
		public boolean is_video;
		public String after;	//t3_bhr4zp
	}
    
	class cls_children {
		public String kind;	//t3
		public cls_data data;
	}
	class cls_approved_at_utc {
	}
	class cls_mod_reason_title {
	}
	class cls_link_flair_richtext {
	}
	class cls_link_flair_css_class {
	}
	class cls_thumbnail_height {
	}
	class cls_author_flair_background_color {
	}
	class cls_media_embed {
	}
	class cls_thumbnail_width {
	}
	class cls_author_flair_template_id {
	}
	class cls_user_reports {
	}
	class cls_secure_media {
	}
	class cls_category {
	}
	class cls_secure_media_embed {
	}
	class cls_link_flair_text {
	}
	class cls_approved_by {
	}
	class cls_author_flair_css_class {
	}
	class cls_author_flair_richtext {
	}
	class cls_gildings {
	}
	class cls_content_categories {
	}
	class cls_mod_note {
	}
	class cls_banned_by {
	}
	class cls_likes {
	}
	class cls_suggested_sort {
	}
	class cls_banned_at_utc {
	}
	class cls_view_count {
	}
	class cls_all_awardings {
	}
	class cls_author_flair_text {
	}
	class cls_num_reports {
	}
	class cls_distinguished {
	}
	class cls_mod_reason_by {
	}
	class cls_removal_reason {
	}
	class cls_report_reasons {
	}
	class cls_mod_reports {
	}
	class cls_author_flair_text_color {
	}
	class cls_media {
	}
	class cls_before {
	}
    
    public static RedditPostFromJSON parse(String json){
        return (RedditPostFromJSON) System.JSON.deserialize(json, RedditPostFromJSON.class);
    }

}