import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL || '', {
            apiKey: process.env.API_KEY || '1dc10151f84a46b8b5eca6c7473b9ad4',
        });
    }
}

export default AppLoader;
