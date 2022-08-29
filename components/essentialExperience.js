import React from 'react'

const cssStyles = {
  input: 
  [
      'mt-1',
      'focus:ring-indigo-500',  
      'focus:border-indigo-500', 
      'block w-full', 
      'sm:text-sm', 
      'bg-gray-50', 
      'border-gray-200', 
      'border-solid', 
      'border-2',
      'p-2', 
      'rounded-md'
  ],
  suggestedAnswer: 
  [   
      'mt-1',
      'h-96',
      'focus:ring-indigo-500',  
      'focus:border-indigo-500', 
      'sm:text-sm', 
      'bg-gray-50', 
      'border-gray-200', 
      'border-solid', 
      'border-2',
      'p-2', 
      'rounded-md'
  ],
  button: 
  [
      'w-full', 
      'bg-indigo-50', 
      'border-indigo-200', 
      'border-solid', 
      'border-2',
      'p-2',
      'm-2',
      'rounded-lg',
      'hover:bg-indigo-200'
  ],
  redHighlight:
  [
      'bg-red-800', 
      'text-white', 
      'inline',
      'text-sm', 
      'p-1', 
  ],
  greenHighlight:
  [
      'bg-green-800', 
      'text-white', 
      'inline',
      'text-sm', 
      'p-1', 
  ],
  blueHighlight:
  [
      'bg-blue-800', 
      'text-white', 
      'inline',
      'text-sm', 
      'p-1', 
  ]
} 

export default function EssentialExperience({
  caseStudyIsLoaded, 
  setCaseStudyIsLoaded, 
  essentialExperience, 
  setEssentialExperience
}) {
  

  function searchCaseStudies(event) {
    event.preventDefault();
    setCaseStudyIsLoaded(true);
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
          onChange={event => setEssentialExperience(event.target.value)}
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
  