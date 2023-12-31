import { memo } from "react";
import { blankATagType } from "./type";

/**
 * Renders a blank Target anchor tag with the specified link and text.
 * Dependent on React.memo
 *
 * @param {string} link - The URL link for the anchor tag.
 * @param {string} text - The text to display within the anchor tag.
 * @return {JSX.Element} - The JSX element representing the anchor tag.
 */
const BlankATag = ({link, text}: blankATagType): JSX.Element => (
    <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
    > 
        {text} 
    </a>
);

export default memo(BlankATag);
