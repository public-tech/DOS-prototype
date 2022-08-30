import Link from "next/link";
import { cssStyles } from "./cssStyles"


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
