import { cssStyles } from "./cssStyles"

export default function BluedTag({title}) {
return (
    <>
      <span className={cssStyles.blueHighlight.join(' ').toString()}>
        {title}
      </span>
    </>
)
}