const React = require('react')
const getParts = require('ec-highlighter-core')
const PropTypes = require('prop-types')

ECHighlighter.propTypes = {
  highlightClassName: PropTypes.string,
  highlightStyle: PropTypes.object,
  normalClassName: PropTypes.string,
  normalStyle: PropTypes.object,
  searchPhrase: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const defaultHighlightStyle = {
  fontWeight: 'bold',
  backgroundColor: 'yellow',
  color: 'black'
}

const getChildren = (array, styles) => {
  return array.map((item, index) => {
    const style = styles?.normalStyle
    const className = styles?.normalClassName
    const props = { key: `${item.text}_${index}`, style, className }
    if (item.match) {
      props.style =
        props.highlightClassName || props.highlightStyle
          ? props.highlightStyle
          : defaultHighlightStyle
      props.className = props.highlightClassName
    }
    // console.log('PROPS:', props)
    return React.createElement('span', props, item.text)
  })
}

function ECHighlighter ({
  text,
  searchPhrase,
  highlightClassName,
  highlightStyle,
  normalClassName,
  normalStyle,
  ...restProps
}) {
  const parts = getParts(text, searchPhrase)

  return React.createElement(
    'span',
    restProps,
    getChildren(parts, {
      highlightClassName,
      highlightStyle,
      normalClassName,
      normalStyle
    })
  )
}
module.exports = ECHighlighter
