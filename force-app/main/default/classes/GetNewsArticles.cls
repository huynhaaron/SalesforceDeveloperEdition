public class GetNewsArticles implements Schedulable {
    public void execute(SchedulableContext ctx) {
        GetNewsHelper.trimNews();
        GetNewsHelper.getNews();
    }
}

//String CRON_EXP = '0 0 * * * ?';
//GetNewsArticles sch = new getNewsArticles();
//system.schedule('Hourly Example Batch Schedule job', CRON_EXP, sch);