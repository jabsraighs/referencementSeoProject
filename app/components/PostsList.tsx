"use client"

import React from 'react'
import { Post } from '../blog/page'
import Link from 'next/link'
import Tag from './Tag'

interface Props {
    posts: Post[]
}

const PostsList = ({ posts }: Props) => {
    return (
        <section className="pb-20 bg-white -mt-24">
            <div className="container mx-auto px-4">
                <div className="">
                    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                            Blog
                        </h1>
                    </div>
                    <ul className='flex justify-content-center flex-col mx-2 sm:mx-32'>
                        {posts.length <= 0 && 'Aucun articles trouvés.'}
                        {posts.map(({ slug, date, sousTitre, titre, tags }) => {
                            return (
                                <li key={slug} className="py-4">
                                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                        <dl>
                                            <dt className="sr-only">Publié le</dt>
                                            <dd className="text-base font-medium leading-6 text-gray-500">
                                                <time dateTime={date.toLocaleDateString("fr-FR")}>{date.toLocaleDateString("fr-FR")}</time>
                                            </dd>
                                        </dl>
                                        <div className="space-y-3 xl:col-span-3">
                                            <div>
                                                <h3 className="text-2xl font-bold leading-8 tracking-tight hover:opacity-60">
                                                    <Link href={`/blog/${slug}`} className="text-gray-900">
                                                        {titre}
                                                    </Link>
                                                </h3>
                                                <div className="flex flex-wrap">
                                                    {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                                                </div>
                                            </div>
                                            <div className="prose max-w-none text-gray-500">
                                                {sousTitre}
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PostsList