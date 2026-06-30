// Simple Flower Order Form block!
export default function decorate(block) {
  // Always clear any content and just show our form!
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
          <label for="address">Delivery Address</label>
          <input type="text" id="address" name="address" required placeholder="123 Main St, City, Country">
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
          <label for="deliveryDate">Delivery Date</label>
          <input type="date" id="deliveryDate" name="deliveryDate">
        </div>
        
        <div class="form-group">
          <label for="message">Special Instructions</label>
          <textarea id="message" name="message" rows="3" placeholder="Any special requests..."></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Place Order</button>
      </form>
      
      <div class="success-message" style="display: none;">
        <h3>Thank You!</h3>
        <p>Your order has been received! We'll contact you soon!</p>
      </div>
    </div>
  `;

  // Insert form HTML into the block
  block.innerHTML = formHTML;

  // Add simple form submission handler (for demo purposes!)
  const form = block.querySelector('.flower-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload!
    
    // Collect form data to show what was sent
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Order Submitted:', data);
    
    // Hide form, show success message!
    form.style.display = 'none';
    block.querySelector('.success-message').style.display = 'block';
  });
}
