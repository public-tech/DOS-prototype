import { cssStyles } from "./cssStyles"

export default function RedTag({title}) {
return (
    <>
      <span className={cssStyles.redHighlight.join(' ').toString()}>
        {title}
      </span>
    </>
)
}