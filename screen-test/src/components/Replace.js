import React from 'react'

const Replace = (string) => {
  const text = string.replace(/&quot;/g, '\"')
  const text2 = text.replace(/&amp;/g, '\&')
  const text3 = text2.replace(/&#039;/g, '\'')
  return text3
}
export default Replace