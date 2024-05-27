import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Blog | Terrain Confus",
    description: "Évadez-vous dans un havre de paix où nature, aventure et détente se rencontrent. Séjour inoubliable pour tous: escapade paisible ou aventure exaltante.",
    alternates: {
      canonical: "https://www.unterrainconfus.fr/blog",
      languages: {
        fr: "https://www.unterrainconfus.fr/blog"
      }
    },
  };

const Blog = () => {
    return (
        <h1>Blog</h1>
      );
}

export default Blog