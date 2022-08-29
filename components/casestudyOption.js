import Link from "next/link";

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

export default function CasestudyOption({option, selectedCaseStudy, setSelectedCaseStudy}) {
    
    function handleLoadCaseStudy(event, option) {
        setSelectedCaseStudy(option)
    }
    return (
    <>
        <li className='inline-block'>
            <Link href='#'>
            <a
                onClick={(event) => handleLoadCaseStudy(event, option)}
                key={option.key}
                title='#'
                className={cssStyles.button.join(' ').toString()}
            >
            {option.bid}
            </a>
            </Link>
        </li>
    </>
    )
}
