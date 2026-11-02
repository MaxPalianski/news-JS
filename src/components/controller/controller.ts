import AppLoader from './appLoader';

type Callback<T> = (data?: T) => void;

class AppController extends AppLoader {
    public getSources<T>(callback: Callback<T>): void {
        super.get(
            {
                endpoint: 'top-headlines/sources',
            },
            callback
        );
    }

    public getNews<T>(e: Event, callback: Callback<T>): void {
        let target = e.target as HTMLElement | null;
        const newsContainer = e.currentTarget as HTMLElement | null;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId || '');
                    super.get(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId || '',
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement | null;
        }
    }
}

export default AppController;