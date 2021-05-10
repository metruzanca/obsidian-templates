function shield({label = '', message, color}) {
  const baseUrl = 'https://img.shields.io/badge'
  if(message === undefined)
    throw new Error("Message is required")
  if(color === undefined)
    throw new Error("color is required")
  const imgAlt = label === '' ? message : `${label}:${message}`
  return `![${imgAlt}](${baseUrl}/${label}-${message}-${color})`
}


function createShield(message) {
  switch(message) {
    // Add custom/preset tag shields here
    case 'frontend': 
      return shield({message, color: 'purple'})
    case 'backend': 
      return shield({message, color: 'orange'})
    default:
      // return `![](${shield({message, color: blue})})`
      return ''
  }
}


module.exports = function(tp) {
  const tags = tp.frontmatter.tags
  let shields = ''
  for (const tag of tags) {
    shields += createShield(tag)
  }
  console.log(shields)
  return shields
}