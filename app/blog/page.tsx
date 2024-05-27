import { Metadata } from 'next';
import React from 'react'
import { Posts } from '../posts';
import PostsList from '../components/PostsList';

export interface Post {
    titre: string;
    contenu: string;
    sousTitre: string;
    tags: string[];
    slug: string;
    date: Date;
}

export const metadata: Metadata = {
    title: "Blog : nature, amusement, bien être et lieu convivial | Terrain Confus",
    description: "Évadez-vous dans un havre de paix où nature, aventure et détente se rencontrent. Séjour inoubliable pour tous: escapade paisible ou aventure exaltante.",
    alternates: {
        canonical: `${process.env.WEBSITE_URL}/blog`,
        languages: {
            fr: `${process.env.WEBSITE_URL}/blog`
        }
    },
};

const Blog = () => {
    const data: Post[] = Posts;
    return (
        <main>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                style={{
                    minHeight: "75vh"
                }}>
                <div className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="sm:pr-12 pr-0">
                                <h1 className="text-white font-semibold text-3xl sm:text-5xl">
                                    Blog
                                </h1>
                                <p className="mt-4 text-md sm:text-lg text-gray-300">
                                    Découvrez chacun de nos articles
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
            <PostsList posts={data} />
        </main>
    );
}

export default Blog