import Image from 'next/image';
export default function Home() {
  return (
    <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh"
        }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/webspeedtest/image/upload/c_limit,dpr_1,h_901,q_auto,w_1351/v1717192263/vbh46ungdqzor0smnysu.avif')"
          }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="sm:pr-12 pr-0">
                <h1 className="text-white font-semibold text-3xl sm:text-5xl">
                  Votre havre de paix en pleine nature
                </h1>
                <p className="mt-4 text-md sm:text-lg text-gray-300">
                  Loin du tumulte du quotidien, découvrez un havre de paix où vous pourrez vous ressourcer en pleine nature. Que vous soyez à la recherche d&apos;une escapade paisible en famille ou d&apos;une aventure exaltante entre amis, Terrain Confus a quelque chose à offrir à chacun.
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
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Profitez d&apos;une large gamme d&apos;activités</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    En plein air : randonnée, vélo, kayak, escalade... ou accordez-vous un moment de détente au spa ou au bord de la piscine.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Hébergement confortable et convivial
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Bungalows, chalets, tentes... trouvez le logement qui correspond le mieux à vos besoins et à votre budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fa-brands fa-intercom"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Un accueil chaleureux et personnalisé
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Notre équipe passionnée vous attend. Nous sommes là pour vous aider à créer un séjour inoubliable.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Découvrez un monde d&apos;aventures à Terrain Confus
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Terrain Confus est bien plus qu&apos;un simple lieu de villégiature. C&apos;est un havre de paix où vous pourrez vous reconnecter avec la nature et vivre des aventures extraordinaires.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                Que vous soyez à la recherche d&apos;une escapade en famille ou d&apos;une virée entre amis, nous avons tout ce qu&apos;il vous faut pour vous créer un séjour inoubliable.
              </p>
              <a
                href="#"
                className="font-bold text-gray-800 mt-8"
              >
                Réservez votre séjour dès aujourd&apos;hui !
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-wordss w-full mb-6 shadow-lg rounded-lg bg-gray-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?w=600&h=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px"
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-gray-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Des services de qualités
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Évadez-vous dans un monde d&apos;aventures et de détente à Terrain Confus, où nature, activités et relaxation se rencontrent.
                  </p>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
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

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="sentier dans la forêt entouré d'arbres au couleurs d'un vert luxuriant"
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8MXwwfHx8MA%3D%3D"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-300">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Une expérience unique
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Chez Terrain Confus, nous croyons que chaque visiteur mérite une expérience exceptionnelle. Que vous cherchiez à vous échapper de la routine quotidienne, à explorer des paysages naturels magnifiques, ou à vivre des aventures palpitantes, notre espace vous offre tout cela et bien plus encore.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Nature Préservée et Sentiers Pittoresques
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Aventures pour Tous les Goûts</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Bien être au coeur de la nature</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-0 pt-4 sm:pt-0 relative block bg-gray-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
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
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Construisez votre Aventure
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Chez Terrain Confus vous pouvez construire votre propre aventure. Le meilleur choix que vous puissiez faire est de venir chez nous.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Services d&apos;Excellence
              </h6>
              <p className="mt-2 mb-4 text-gray-500">
                Nous vous proposons une gamme de services conçus pour rendre votre séjour inoubliable. De l&apos;accueil chaleureux à l&apos;assistance personnalisée, chaque détail est soigneusement pensé pour votre confort et votre plaisir.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Développez Votre Expérience
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Nos activités variées et nos équipements de qualité sont là pour enrichir votre séjour. Que ce soit à travers nos sentiers de randonnée, nos zones de détente, ou nos aventures palpitantes, chaque moment passé chez nous est une opportunité de grandir et de s&apos;épanouir.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Prêt pour le Décollage
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Le moment est venu de sortir de votre routine et de découvrir ce que Terrain Confus a à offrir. Réservez votre séjour dès maintenant et préparez-vous à vivre des moments inoubliables au cœur de la nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">Questions les plus fréquemment posées</h2>
          <div className="max-w-screen-md mx-auto">
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              <h3 id="accordion-flush-heading-1">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                  <span>Quelles sont les activités disponibles à Terrain Confus ?</span>
                  <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </h3>
              <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Nous offrons une variété d&apos;activités pour tous les goûts, y compris la randonnée, le VTT, l&apos;escalade, le kayak, les séances de yoga en plein air, et bien plus encore. Vous trouverez toujours quelque chose qui correspond à vos envies d&apos;aventure ou de détente.</p>
                </div>
              </div>
              <h3 id="accordion-flush-heading-2">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                  <span>Quels types d&apos;hébergement proposez-vous ?</span>
                  <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </h3>
              <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Nous proposons différents types d&apos;hébergement, allant des cabanes écologiques aux tentes de luxe en passant par les lodges confortables. Tous nos hébergements sont conçus pour vous offrir un maximum de confort tout en respectant l&apos;environnement.</p>
                </div>
              </div>
              <h3 id="accordion-flush-heading-3">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                  <span>Comment puis-je réserver mon séjour à Terrain Confus ?</span>
                  <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </h3>
              <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Vous pouvez facilement réserver votre séjour en ligne sur notre site web. Il vous suffit de visiter notre page de réservation, de sélectionner vos dates de séjour et le type d&apos;hébergement souhaité, puis de suivre les instructions pour finaliser votre réservation.</p>
                </div>
              </div>
              <h3 id="accordion-flush-heading-4">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                  <span>Y a-t-il des options de restauration sur place ?</span>
                  <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </h3>
              <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Oui, nous avons un restaurant sur place qui propose une cuisine délicieuse avec des ingrédients frais et locaux. Nous offrons également des options végétariennes, véganes et sans gluten pour répondre à toutes les préférences alimentaires.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
