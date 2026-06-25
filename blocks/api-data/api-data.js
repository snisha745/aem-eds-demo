export default async function decorate(block) {
  block.innerHTML = '<p style="text-align: center; font-size: 1.2rem; padding: 2rem;">Loading data...</p>';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    const posts = await response.json();

    let html = `
      <h2 style="text-align: center; margin-bottom: 2.5rem;">Latest Blog Posts</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
    `;

    posts.forEach(post => {
      html += `
        <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1.5rem; background: #fff;">
          <h3 style="margin: 0 0 0.75rem; color: #25365e; font-size: 1.25rem;">${post.title}</h3>
          <p style="margin: 0; color: #505050; line-height: 1.6;">${post.body.substring(0, 100)}...</p>
          <p style="margin-top: 1rem; margin-bottom: 0;"><a href="#" style="color: #4361ee; font-weight: 500;">Read more →</a></p>
        </div>
      `;
    });

    html += '</div>';

    // Update block content!
    block.innerHTML = html;

  } catch (error) {
    // If something goes wrong, show error message
    block.innerHTML = `
      <p style="text-align: center; color: #c32c36;">
        Oops! We couldn't load the data.
      </p>
    `;
    console.error('API fetch error:', error);
  }
}
