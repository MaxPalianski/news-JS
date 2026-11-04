export type INewsSource = {
    id: string;
    name: string;
};

export type INewsArticle = {
    source: INewsSource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
};

export type INewsData = {
    status: string;
    totalResults: number;
    articles: INewsArticle[];
};

export type ISourcesData = {
    status: string;
    sources: INewsSource[];
};
