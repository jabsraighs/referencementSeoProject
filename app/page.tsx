import Image from 'next/image';
export default function Home() {
return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div>
      <h1> Bienvenue sur Terrain Confus</h1>
      <h2>  Bienvenue sur Terrain Confus, un espace unique où la nature, l&apos;aventure et la détente se rencontrent. Que vous soyez à la recherche d&apos;une escapade tranquille ou d&apos;une aventure palpitante, notre terrain a quelque chose à offrir à chacun.</h2>
    <p>
    Un Havre de Paix et de Sérénité
    Terrain Confus est le lieu idéal pour ceux qui cherchent à s&apos;évader du quotidien. Niché au cœur de la nature, notre site offre des paysages pittoresques et des espaces paisibles parfaits pour se ressourcer. Promenez-vous le long de nos sentiers ombragés, écoutez le chant des oiseaux et laissez-vous envelopper par la tranquillité des environs. Nos aires de pique-nique, aménagées avec soin, sont parfaites pour un déjeuner en plein air en famille ou entre amis.

    Aventurez-vous dans l&apos;Inconnu
    Pour les amateurs de sensations fortes, Terrain Confus propose une gamme d&apos;activités excitantes. Explorez nos sentiers de randonnée qui serpentent à travers des forêts denses et des collines escarpées. Testez vos compétences sur notre parcours d&apos;accrobranche, ou plongez dans les eaux claires de notre lac pour une baignade rafraîchissante. Nos circuits de VTT et de course à pied sont conçus pour les aventuriers de tous niveaux, garantissant une montée d&apos;adrénaline pour tous.

    Détente et Bien-être
    Après une journée d&apos;aventure, profitez de nos installations dédiées à la détente et au bien-être. Offrez-vous un moment de relaxation dans notre spa, où des soins et des massages vous attendent pour revitaliser votre corps et votre esprit. Détendez-vous dans nos bains thermaux ou profitez d&apos;une séance de yoga en plein air avec vue sur la nature environnante. Nos hébergements confortables, allant des cabanes rustiques aux lodges de luxe, sont parfaits pour un séjour reposant et mémorable.

    Événements et Activités pour Tous
    Terrain Confus accueille également divers événements tout au long de l&apos;année, tels que des festivals de musique, des marchés artisanaux et des ateliers de bien-être. Participez à nos ateliers de cuisine locale, apprenez des techniques de survie en pleine nature ou rejoignez nos randonnées guidées pour découvrir la faune et la flore de la région.

    Réservez Votre Séjour
    Prêt à découvrir tout ce que Terrain Confus a à offrir ? Réservez votre séjour dès aujourd&apos;hui et préparez-vous à vivre une expérience inoubliable. Notre équipe dévouée est là pour s&apos;assurer que chaque visiteur repart avec des souvenirs précieux et une envie de revenir. 
      
   </p>
   </div>
    <div id="content" className=" flex grid gap-x-8 gap-y-4 grid-cols-3">
         
     
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt=" " />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Les Terrains Confus: Naviguer dans l&apos;Incertitude </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">La notion de &quot;terrains confus&quot; réfère aux zones d&apos;incertitude ou de complexité dans divers domaines, qu&apos;il s&apos;agisse de technologie, de droit, de psychologie ou de tout autre champ.</p>
          <a href="/articleOne" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="/articleTwo" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="/articleThree" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">     
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="/articleFour" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="/articleFive" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="/articleSix" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>

    </div>
      



  </main>
);
}
