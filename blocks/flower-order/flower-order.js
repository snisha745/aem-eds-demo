// Simple Flower Order Form block!
export default function decorate(block) {
  // First, clear any default content from Google Doc table
  block.innerHTML = '';

  // Create the HTML structure for the form
  const formHTML = `
    <div class="form-container">
      <h2>Order Your Flowers</h2>
      <p>Fill out the form below and we'll get back to you!</p>
      
      <form class="flower-form">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" required placeholder="John Doe">
        </div>
        
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required placeholder="john@example.com">
        </div>
        
        <div class="form-group">
          <label for="flowerType">Flower Type</label>
          <select id="flowerType" name="flowerType" required>
            <option value="">Select flowers...</option>
            <option value="roses">Red Roses</option>
            <option value="tulips">Tulips</option>
            <option value="sunflowers">Sunflowers</option>
            <option value="mixed">Mixed Bouquet</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="quantity">Quantity</label>
          <input type="number" id="quantity" name="quantity" min="1" value="1" required>
        </div>
        
        <div class="form-group">
          <label for="message">Special Instructions</label>
          <textarea id="message" name="message" rows="3" placeholder="Any special requests..."></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Place Order</button>
      </form>
      
      <div class="success-message" style="display: none; text-align: center; padding: 2rem; background: #e6f7e6; border-radius: 8px; margin-top: 1rem;">
        <h3 style="color: #138c13; margin-top: 0;">Thank You!</h3>
        <p style="color: #505050;">Your order has been received! We'll contact you soon!</p>
      </div>
    </div>
  `;

  // Insert form HTML into the block
  block.innerHTML = formHTML;

  // Add simple form submission handler (for demo purposes!)
  const form = block.querySelector('.flower-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload!
    // Hide form, show success message!
    form.style.display = 'none';
    block.querySelector('.success-message').style.display = 'block';
  });
}
