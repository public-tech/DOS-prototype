import CasestudyOption from './casestudyOption'

export default function SuggestedCaseStudies({casestudies, selectedCaseStudy, setSelectedCaseStudy}) {
return (
    <><div className="grid grid-cols-12">
        <div className="col-span-1 my-5">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Suggested case studies:
            </label>
        </div>
        <div className="col-span-11 my-5">
            <ul className="block text-sm font-medium text-gray-700">
                {casestudies.results.map(item => (
                    <CasestudyOption
                    key={item.key}
                    option={item}
                    selectedCaseStudy={selectedCaseStudy}
                    setSelectedCaseStudy={setSelectedCaseStudy}
                    ></CasestudyOption>
                ))}
            </ul>
        </div>
    </div>
    </>
)
}