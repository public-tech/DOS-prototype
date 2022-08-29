import Head from 'next/head'
import React from 'react'

import returnedCasestudiesMockData from '../data/returnedCasestudiesMockData'

import EssentialExperience from '../components/essentialExperience'
import SuggestedCaseStudies from '../components/suggestedCaseStudies'
import Themes from '../components/themes'
import SuggestedAnswer from '../components/suggestedAnswer'

export default function Home() {  
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState({ answer: 'No case study selected'});
  const [caseStudyIsLoaded, setCaseStudyIsLoaded] = React.useState(false);
  const [essentialExperience, setEssentialExperience] = React.useState('');


  const renderUi = (caseStudyIsLoaded) => {    
    if(caseStudyIsLoaded && essentialExperience) {
      return(
      <>
        <SuggestedCaseStudies
          casestudies={returnedCasestudiesMockData}
          selectedCaseStudy={selectedCaseStudy}
          setSelectedCaseStudy={setSelectedCaseStudy}
        ></SuggestedCaseStudies>
        <Themes></Themes>
        <SuggestedAnswer
          selectedCaseStudy={selectedCaseStudy}
          setSelectedCaseStudy={setSelectedCaseStudy}
        ></SuggestedAnswer>
      </>
      )
    }
  }

  return (
    <>
      <Head>
        <title>Prototype 0.0.1</title>
        <meta name="description" content="Prototype app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto">
        <form action="#" method="POST">
          <div className="overflow-hidden">
            <div className="bg-white p-5">
              
            <EssentialExperience
            caseStudyIsLoaded={caseStudyIsLoaded}
            setCaseStudyIsLoaded={setCaseStudyIsLoaded}
            essentialExperience={essentialExperience}
            setEssentialExperience={setEssentialExperience}
            ></EssentialExperience>   
            
            { renderUi(caseStudyIsLoaded) }
              
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
        </form>
        </div>
      </main>
    </>
  )
}