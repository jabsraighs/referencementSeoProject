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
            backgroundImage: "url('https://images.unsplash.com/photo-1527236767782-6820249d9ea0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
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
                    <i className="fa-solid fa-address-book"></i>
                  </div>
                  <h6 className="text-xl font-semibold"> Terrain Confus </h6>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                        <div className="flex items-center">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>
                            </div>
                            <div>
                                <h4 className="text-gray-600"> Nous retrouver </h4>
                            </div>
                        </div>
                    </li>
                    <li className="py-2">
                        <div className="flex items-center">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                                    <i className="fa-solid fa-envelope"></i>
                                </span>
                            </div>
                            <div>
                                <h4 className="text-gray-600"> unTerrainConfus@gmail.com </h4>
                            </div>
                        </div>
                    </li>
                    <li className="py-2">
                        <div className="flex items-center">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                                <i className="fa-solid fa-phone-volume"></i>
                                </span>
                            </div>
                            <div>
                                <h4 className="text-gray-600"> (+33) 655 2645 33 </h4>
                            </div>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fa-regular fa-circle-question"></i>
                  </div>
                  <h6 className="text-xl font-semibold"> Liens Rapides </h6>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                        <div className="flex items-center">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                               <i className="fa-solid fa-user-group"></i>
                                </span>
                            </div>
                            <div>
                                <h4 className="text-gray-600"> Services </h4>
                            </div>
                        </div>
                    </li>
                    <li className="py-2">
                        <div className="flex items-center">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                                    <i className="fa-solid fa-calendar-days"></i>
                                </span>
                            </div>
                            <div>
                                <h4 className="text-gray-600"> Reservation </h4>
                            </div>
                        </div>
                    </li>
                    <li className="py-2">
                        <div className="flex items-center">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                                    <i className="fa-solid fa-comments"></i>                                </span>
                            </div>
                            <div>
                                <h4 className="text-gray-600"> FAQ  </h4>
                            </div>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fa-solid fa-business-time"></i>
                  </div>
                  <h6 className="text-xl font-semibold"> heures d&apos;ouvertures </h6>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                        <div className="flex items-center">
                            
                            <div>
                                <h4 className="text-gray-600"> Lundi - vendredi </h4>
                            </div>
                             <div> 
                                <i className="fa-solid fa-clock"></i> 
                            </div>
                            <div>
                                   <h4> 09:00 H - 13:00 H</h4>
                            </div>
                        </div>
                    </li>
                    <li className="py-2">
                        <div className="flex items-center ">
                            
                            <div >
                                <h4 className="text-gray-600"> Samedi - Dimanche </h4>  
                                
                            </div>
                            <div> 
                                <i className="fa-solid fa-clock"></i> 
                            </div>
                            <div>
                                   <h4> 09:00 H - 13:00 H</h4>
                            </div>

                        </div>
                    </li>
                    <li className="py-2">
                        <div className="flex items-center">

                            <div>
                                <h4 className="text-gray-600"> Vacances </h4>
                            </div>
                             <div> 
                                <i className="fa-solid fa-clock"></i> 
                            </div>
                            <div>
                                   <h4> 09:00 H - 13:00 H</h4>
                            </div>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
               
                <h3 className="text-3xl font-semibold">
                 Pour toute question ou demande d&apos;information.
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  N&apos;hésitez pas à nous contacter. Vous pouvez nous joindre par téléphone du lundi au vendredi, de 9h à 18h, ou par email. Vous pouvez également remplir notre formulaire de contact en ligne, disponible sur cette page. Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais et de vous accompagner dans votre projet. Merci de votre confiance et à bientôt sur unterrainconfus.fr 
                </p>
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
                  <span> Quels types d&apos;hébergement proposez-vous ? </span>
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
