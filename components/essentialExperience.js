import React from 'react'
import { cssStyles } from "./cssStyles"


export default function EssentialExperience({
  selectedCaseStudy,
  setSelectedCaseStudy,
  caseStudyIsLoaded, 
  setCaseStudyIsLoaded, 
  essentialExperience, 
  setEssentialExperience
}) {

  function searchCaseStudies(event) {
    event.preventDefault();
    setCaseStudyIsLoaded(true);
  }

  function enableSearchButton(event){
    setEssentialExperience(event.target.value)
    clearSuggestedAnswerIfEssentialExperienceisEmpty()
    
  }

  function clearSuggestedAnswerIfEssentialExperienceisEmpty() {
    if(!essentialExperience) {
      setSelectedCaseStudy({ answer: 'No case study selected'})
    }
  }

  return (
    <>
    <div className="grid grid-cols-6">
      <div className="col-span-6 my-5">
      <label htmlFor="essentialexperience" className="block text-sm font-medium text-gray-700">
        Essential experience
      </label>
      <div className="mt-1">
        <textarea
          id="essentialexperience"
          name="essentialexperience"
          rows={5}
          className={cssStyles.input.join(' ').toString()}
          placeholder="Enter essential experince"
          onChange={enableSearchButton}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Brief description for your profile. URLs are hyperlinked.
      </p>
      </div>
      <div className="col-span-6 text-right">
        <button
          onClick={searchCaseStudies}
          disabled={!essentialExperience}
          className="disabled:opacity-25 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Search Case Studies
        </button>
      </div>               
    </div>
    </>
    )
}
  