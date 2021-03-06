

export default class GalleryAPI {

    static url = 'https://test-front.framework.team';

    static async getPaintings() {
        const resp = await fetch (`${this.url}/paintings`);
        return await resp.json()
    }

    static async getAuthors() {
        const resp = await fetch (`${this.url}/authors`);
        return await resp.json()
    }

    static async getLocations() {
        const resp = await fetch (`${this.url}/locations`);
        return await resp.json()
    }

}