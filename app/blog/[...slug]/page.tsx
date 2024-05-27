import { Posts } from '@/app/posts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({
    params
}: {
    params: { slug: string[] }
}): Promise<Metadata | undefined> {
    const slug = decodeURI(params.slug.join('/'))
    const post = Posts.find((p) => p.slug === slug)

    if (post === null || post === undefined) {
        notFound();
    }

    const canonicalUrl = `${process.env.WEBSITE_URL}/blog/${slug === "/" ? "" : slug}`

    return {
        title: post.titre,
        description: post.sousTitre.split(".")[0],
        alternates: {
            canonical: canonicalUrl,
            languages: {
                fr: `${process.env.WEBSITE_URL}/blog/${slug}`,
            },
        },
        openGraph: {
            title: post.titre,
            description: post.sousTitre.split(".")[0],
            siteName: "Terrain confus",
            locale: 'fr_FR',
            type: 'article',
            publishedTime: new Date(post.date).toDateString(),
            modifiedTime: new Date(post.date).toDateString(),
            url: './',
            images: [
                {
                    url: post.image,
                    height: 600,
                    width: 600,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.titre,
            description: post.sousTitre.split(".")[0],
            images: [
                {
                    url: post.image,
                    height: 600,
                    width: 600,
                }
            ],
        },
    }
}

export const generateStaticParams = async () => {
    const paths = Posts.map((p) => ({ slug: p.slug.split("/") }))

    return paths
}

export default async function BlogPost({ params }: { params: { slug: string[] } }) {
    const slug = decodeURI(params.slug.join('/'))
    const post = Posts.find((p) => p.slug === slug)

    if (post === null || post === undefined) {
        notFound();
    }

    return (
        <main>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                style={{
                    minHeight: "75vh"
                }}>
                <div className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: `url('${post.image}')`
                    }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="sm:pr-12 pr-0">
                                <h1 className="text-white font-semibold text-3xl sm:text-5xl">
                                    {post.titre}
                                </h1>
                                <p className="mt-4 text-md sm:text-lg text-gray-300">
                                    {post.sousTitre}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style={{ height: "70px" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-white fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </div>
            <section className="pb-20 bg-white -mt-24">
                <div className="container mx-auto px-4">
                    <div className="">
                        <div className="mx-8 space-y-8 pb-8 pt-6 md:space-y-5">
                            <p className="mt-8 text-sm font-extrabold leading-9 tracking-tight text-gray-900 sm:text-lg sm:leading-10 md:text-xl md:leading-14">
                                {post.titre}
                            </p>
                            <p className="mt-8 text-sm font-extrabold leading-9 tracking-tight text-gray-900 sm:text-lg sm:leading-10 md:text-xl md:leading-14">
                                {post.sousTitre}
                            </p>
                            <p className="mt-8 text-sm font-extrabold leading-9 tracking-tight text-gray-900 sm:text-lg sm:leading-10 md:text-xl md:leading-14">
                                {post.contenu}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};