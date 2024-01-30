const createHeading = (text: string): HTMLHeadingElement => {
  const heading = document.createElement('h1')
  heading.textContent = text
  return heading
}

export default createHeading
