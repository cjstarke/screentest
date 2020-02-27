import React from 'react'

const Replace = (string) => {
  const text = string.replace(/&quot;/g, '\"')
  const text2 = text.replace(/&amp;/g, '\&')
  const text3 = text2.replace(/&#039;/g, '\'')
  const text4 = text3.replace(/&ldquo;/g, '"')
  const text5 = text4.replace(/&rdquo;/g, '"')
  const text6 = text5.replace(/&egrave/g, 'e')
  
  return text6
}
export default Replace