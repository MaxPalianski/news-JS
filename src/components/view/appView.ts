import News from './news/news';
import Sources from './sources/sources';
import type { INewsData, ISourcesData } from '../../types';

class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data?: INewsData): void {
        const values = data?.articles ? data.articles : [];
        this.news.draw(values);
    }

    public drawSources(data?: ISourcesData): void {
        const values = data?.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
