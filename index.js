function getParts (text, highlight) {
  if (!text) return null
  if (!highlight) return [{ text, match: false }]
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
  return parts
    .filter(x => !!x)
    .map(part => ({
      text: part,
      match: part.toLowerCase() === (highlight || '').toLowerCase()
    }))
}
module.exports = getParts
