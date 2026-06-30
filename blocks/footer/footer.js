import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM - flatten all sections!
  block.textContent = '';
  const footer = document.createElement('div');
  
  // Flatten all content from fragment - extract all children
  const allChildren = [];
  fragment.querySelectorAll(':scope > div, :scope > p, :scope > h1, :scope > h2, :scope > h3, :scope > ul, :scope > ol, :scope > strong').forEach(el => {
    if (el.classList && (el.classList.contains('section') || el.classList.contains('default-content-wrapper'))) {
      // It's a section/wrapper - add its children
      allChildren.push(...Array.from(el.children));
    } else {
      // Add directly
      allChildren.push(el);
    }
  });

  // Group them into 3 sections manually if needed (based on Google Doc's structure)
  // For now, just add all children into footer div
  allChildren.forEach(el => footer.append(el));

  block.append(footer);
}
