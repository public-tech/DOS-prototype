import cssStyles from "../config/cssStyles"

export default function SuggestedAnswer({
  selectedCaseStudy, 
  setSelectedCaseStudy,
  essentialExperience, 
  setEssentialExperience
}) {
  
    return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 my-5">
        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
          Suggested answer
        </label>
        <div className="mt-1">
          <div 
            id="suggestedanswer"
            className={cssStyles.suggestedAnswer.join(' ').toString()}
            dangerouslySetInnerHTML={{ __html: selectedCaseStudy.answer}} //TODO must be a safer way to do this
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Word count: <strong>{selectedCaseStudy.answer.split(' ').length}</strong>
        </p>
        </div>             
      </div>
    </>
    )
}
  