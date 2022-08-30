import { cssStyles } from "./cssStyles"

export default function GreenTag({title}) {
return (
    <>
      <span className={cssStyles.greenHighlight.join(' ').toString()}>
        {title}
      </span>
    </>
)
}