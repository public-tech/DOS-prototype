import { INTERNALS } from "next/dist/server/web/spec-extension/request";
import RedTag from "./redTag";
import BlueTag from "./blueTag";
import GreenTag from "./greenTag";

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

  