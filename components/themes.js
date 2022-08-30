import RedTag from "./redTag";
import BlueTag from "./blueTag";
import GreenTag from "./greenTag";

const setThemeColour = (item) => { //TODO this is ugly 
    switch (item.colour) {
        case 'red': 
            return <RedTag title={item.name}></RedTag>
        case 'green':
            return <GreenTag title={item.name}></GreenTag>
        case 'blue':
            return <BlueTag title={item.name}></BlueTag>
        default:
            return <RedTag title={item.name}></RedTag>
    }
}


export default function Themes(selectedCaseStudy, setSelectedCaseStudy) {
    if(selectedCaseStudy.selectedCaseStudy.themes) {
        return (
        <>
        <div className="grid grid-cols-12">
            <div className="col-span-1 my-5">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Themes:
                </label>
            </div>
            <div className="col-span-11 my-5">
                <ul className="block list-disc text-black">
                    {selectedCaseStudy.selectedCaseStudy.themes.map(item => (
                        <li key={item.id} className="my-1">{setThemeColour(item)}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
        )
    }
}

  