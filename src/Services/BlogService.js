export default class BlogService {
    ROOT_URL = "https://me.willifmoore.blog/"
    BASE_API_URL = this.ROOT_URL + "wp-json/wp/v2/"
    POSTS_URL = this.BASE_API_URL + "posts"
    AUTHOR_URL = this.BASE_API_URL + "authors"

    getPosts = async (limit=10, offset=0) => {
        console.log("Getting posts");
        let response = await fetch(this.POSTS_URL + "?_embed", {
            method: 'GET'
        });
        let data = await response.json();
        data.count = response.headers.get("X-WP-Total")
        data.pages = response.headers.get("X-WP-TotalPages")
        return data;
    }

    getPostBySlug = async (slug) => {
        console.log("Getting Post");
        let response = await fetch(this.POSTS_URL + "?_embed&slug=" + slug, {
            method: 'GET'
        });
        let data = await response.json();
        return data[0];
    }

    getPostsInCategory = async (categoryId, limit=10, offset=0) => {
        console.log("Getting posts in category");
        let response = await fetch(this.POSTS_URL + "?_embed&categories=" + categoryId, {
            method: 'GET'
        });
        let data = await response.json();
        data.count = response.headers.get("X-WP-Total")
        data.pages = response.headers.get("X-WP-TotalPages")
        return data;
    }

    getAuthor = async (slug) => {
        console.log("Getting Author");
        let response = await fetch(this.AUTHOR_URL + "?slug=" + slug, {
            method: 'GET'
        });
        let data = await response.json();
        return data[0];
    }
}