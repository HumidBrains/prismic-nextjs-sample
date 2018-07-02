import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../prismic'

export const TextSection = (props) => {

  // Add the class that defines the number of columns
  const sectionClass =
    props.slice.slice_label ?
    "text-section-" + props.slice.slice_label :
    "text-section-1col"

  return (
    <section className={"content-section " + sectionClass}>
      {RichText.render(props.slice.primary.rich_text, linkResolver)}
    </section>
  )
}

export default TextSection
