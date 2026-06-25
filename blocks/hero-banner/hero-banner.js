// Hero Banner block decoration
export default function decorate(block) {
  // First, make a SAFE copy of everything we need BEFORE modifying DOM!
  const originalHTML = block.innerHTML;
  
  // Create a temporary div to safely extract elements
  const temp = document.createElement('div');
  temp.innerHTML = originalHTML;
  
  // Extract elements from temp (safe!)
  const picture = temp.querySelector('picture');
  const allText = [];
  
  temp.querySelectorAll('div').forEach(div => {
    const text = div.textContent.trim();
    if (text && !text.includes('Hero Banner') && !text.includes('Button Link')) {
      if (!allText.includes(text)) {
        allText.push(text);
      }
    }
  });
  
  const title = allText.find(t => t.length > 0 && !t.includes('/')) || '';
  const subtitle = allText.find(t => t !== title && t.length > 10) || '';
  
  let ctaLink = temp.querySelector('a');
  if (!ctaLink) {
    ctaLink = document.createElement('a');
    ctaLink.href = '/blogs';
    ctaLink.textContent = 'Explore Now';
  } else {
    // Clone the link to detach it from temp
    ctaLink = ctaLink.cloneNode(true);
  }
  
  // Now clear the real block and build our clean version
  while (block.firstChild) {
    block.firstChild.remove();
  }
  
  if (picture) {
    block.appendChild(picture);
  }
  
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'hero-banner-content';
  
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
