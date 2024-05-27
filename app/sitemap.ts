import { Posts } from "./posts";

const URL = process.env.WEBSITE_URL;

export default async function sitemap() {
    const getArticles = async () => {
        const articles = Posts;
        const paths: {
            slug: string[];
            date: string;
        }[] = [];
        articles.map((article) => {
            paths.push({
                slug: [article.slug],
                date: article.date.toDateString(),
            });
        });

        return paths;
    };

    const allArticles = await getArticles();

    const posts = allArticles.map((item) => ({
        url: `${URL}/blog/${item.slug[0]}`,
        lastModified: new Date(item.date),
        changeFrequency: 'yearly',
    }));

    return [...posts, {
        url: "https://www.unterrainconfus.fr",
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly"
    }];
}