import React from 'react'
import PropTypes from 'prop-types'
import { SuccessStoriesPostTemplate } from '../../templates/success-stories-post'

const SuccessStoriesPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <SuccessStoriesPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

SuccessStoriesPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SuccessStoriesPostPreview
