// Hero block decoration
export default function decorate(block) {
  // First, make a SAFE copy of everything we need BEFORE modifying DOM!
  const originalHTML = block.innerHTML;
  
  // Create a temporary div to safely extract elements
  const temp = document.createElement('div');
  temp.innerHTML = originalHTML;
  
  // Extract elements from temp (safe!)
  const picture = temp.querySelector('picture');
  
  // Get all text elements
  let title = '';
  let subtitle = '';
  let ctaLink = null;
  
  // First, get all divs and look for title (the first strong text not in a p with link)
  const allDivs = Array.from(temp.querySelectorAll('div'));
  for (const div of allDivs) {
    const text = div.textContent.trim();
    if (text && !text.includes('Hero Banner') && !text.includes('Button Link') && !text.includes('Explore Now') && !div.querySelector('a')) {
      if (!title && text.length > 10) {
        title = text;
      }
    }
  }
  
  // Get all paragraphs
  const allParagraphs = Array.from(temp.querySelectorAll('p'));
  allParagraphs.forEach(p => {
    // Check if this paragraph has a link
    const a = p.querySelector('a');
    if (a) {
      // This is the CTA
      ctaLink = a.cloneNode(true);
    } else {
      // This is regular text
      const text = p.textContent.trim();
      if (text && !text.includes('Hero Banner') && !text.includes('Button Link')) {
        if (!subtitle) {
          subtitle = text;
        }
      }
    }
  });
  
  // If no CTA link found, create one
  if (!ctaLink) {
    ctaLink = document.createElement('a');
    ctaLink.href = '/blogs';
    ctaLink.textContent = 'Explore Now';
  }
  
  // Now clear the real block and build our clean version
  while (block.firstChild) {
    block.firstChild.remove();
  }
  
  if (picture) {
    block.appendChild(picture);
  }
  
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'hero-content';
  
  if (title) {
    const h1 = document.createElement('h1');
    h1.textContent = title;
    contentWrapper.appendChild(h1);
  }
  
  if (subtitle) {
    const p = document.createElement('p');
    p.textContent = subtitle;
    contentWrapper.appendChild(p);
  }
  
  const p = document.createElement('p');
  p.className = 'button-wrapper';
  ctaLink.className = 'button primary';
  p.appendChild(ctaLink);
  contentWrapper.appendChild(p);
  
  block.appendChild(contentWrapper);
}
