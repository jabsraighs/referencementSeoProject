export default async function sitemap() {
    return [{
        url: "https://www.unterrainconfus.fr",
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly"
    }];
}