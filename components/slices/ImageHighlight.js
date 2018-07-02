import React from 'react'
import {Link as PrismicLink, RichText, Date} from 'prismic-reactjs'
import { linkResolver } from '../prismic'

// Components
import VariableLink from '../VariableLink'

export const ImageHighlight = (props) => {

  // Get the link
  const highlightLink = PrismicLink.url(props.slice.primary.link, linkResolver)
  const linkLabel = RichText.asText(props.slice.primary.link_label)
  const link =
    highlightLink && linkLabel != " " ?
    <p><VariableLink link={props.slice.primary.link} label={props.slice.primary.link_label}/></p> :
    null

  return (
    <section className="highlight content-section">
      <div className="highlight-left">
        <h2>{RichText.asText(props.slice.primary.title)}</h2>
        <h3>{RichText.asText(props.slice.primary.headline)}</h3>
        {link}
      </div>
      <div className="highlight-right">
        <img src={props.slice.primary.featured_image.url} alt={props.slice.primary.featured_image.alt} />
      </div>
    </section>
  )
}

export default ImageHighlight
