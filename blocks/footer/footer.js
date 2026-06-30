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

  // decorate footer DOM - build professional structure manually!
  block.textContent = '';
  const footer = document.createElement('div');
  
  // First, collect all the text content to understand what's there
  const allText = fragment.textContent;
  
  // Now, create the 3 sections manually for professional layout
  // Section 1: Brand
  const brandSection = document.createElement('div');
  brandSection.innerHTML = `
    <h3>Nisha's AEM Site</h3>
    <p>Building first, content-first websites.</p>
    <p>hello@nishasite.com</p>
    <p>+1 (555) 010-2000</p>
  `;
  
  // Section 2: Quick Links
  const quickLinksSection = document.createElement('div');
  quickLinksSection.innerHTML = `
    <h4>Quick Links</h4>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/careers">Careers</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  `;
  
  // Section 3: Contact & Social
  const contactSection = document.createElement('div');
  contactSection.innerHTML = `
    <h4>Contact</h4>
    <ul>
      <li><a href="#">LinkedIn</a></li>
      <li><a href="#">Twitter/X</a></li>
      <li><a href="#">Instagram</a></li>
    </ul>
  `;
  
  // Section 4: Copyright
  const copyrightSection = document.createElement('div');
  copyrightSection.innerHTML = `
    <p>© 2025 Nisha's AEM Site. All rights reserved.</p>
    <p>
      <a href="#">Privacy</a> | 
      <a href="#">Terms</a> | 
      <a href="#">Cookies</a>
    </p>
  `;
  
  // Append all sections
  footer.append(brandSection);
  footer.append(quickLinksSection);
  footer.append(contactSection);
  footer.append(copyrightSection);

  block.append(footer);
}
