import React from 'react';
import '../../css/B2BandB2CFulfillment.css';
import { FaWarehouse, FaTruck, FaShippingFast, FaClipboardCheck, FaChartLine, FaQuestionCircle } from 'react-icons/fa';

const B2BandB2CFulfillment = () => {
  return (
    <div className="fulfillment-container">
      {/* Hero Section */}
      <section className="fulfillment-hero">
        <div className="fulfillment-hero-content">
          <h1>B2B and B2C Order Fulfillment</h1>
          <h2>Optimized Solutions with Urbandot Couriers and Cargo</h2>
          <p className='fulfillment-container-p'>
            Whether you are handling orders for individual consumers or retail businesses, 
            the fulfillment process varies significantly. At Urbandot Couriers and Cargo, 
            we understand that every order represents your brand.
          </p>
        </div>
      </section>

      {/* B2B Section */}
      <section className="b2b-section">
        <div className="section-content">
          <h2>B2B Order Fulfillment Explained</h2>
          <p>
            B2B eCommerce fulfillment involves shipping large product quantities directly to 
            businesses or retailers. Also known as retail fulfillment (B2R), bulk orders help 
            companies maintain sufficient inventory for their operations.
          </p>

          <div className="considerations">
            <h3>Key Considerations for B2B Fulfillment</h3>
            <div className="considerations-grid">
              <div className="consideration-item">
                <FaClipboardCheck className="icon" />
                <h4>Precision & Compliance</h4>
                <p>Orders must meet compliance requirements, including tax regulations, SKU codes, barcoding, and invoice formatting.</p>
              </div>
              <div className="consideration-item">
                <FaShippingFast className="icon" />
                <h4>Shipping Costs & Lead Time</h4>
                <p>Wholesale orders tend to be costlier and have longer delivery timelines.</p>
              </div>
              <div className="consideration-item">
                <FaTruck className="icon" />
                <h4>Freight Requirements</h4>
                <p>Large orders may require sea freight, air freight, or specialized carriers to manage international trade regulations.</p>
              </div>
            </div>
          </div>

          <div className="services">
            <h3>Essential B2B Fulfillment Services</h3>
            <ul className="services-list">
              <li>Providing fast and efficient delivery solutions</li>
              <li>Optimizing warehouse management and inventory tracking</li>
              <li>Reducing operational costs through streamlined logistics strategies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* B2C Section */}
      <section className="b2c-section">
        <div className="section-content">
          <h2>B2C Order Fulfillment Explained</h2>
          <p>
            B2C fulfillment involves shipping products directly to individual customers. Unlike B2B, 
            where bulk purchases are common, B2C orders usually have lower order values and follow 
            a straightforward process with fewer regulatory constraints.
          </p>

          <div className="considerations">
            <h3>Key Considerations for B2C Fulfillment</h3>
            <div className="considerations-grid">
              <div className="consideration-item">
                <FaChartLine className="icon" />
                <h4>Pricing</h4>
                <p>Fixed product pricing applies, except for discounts during seasonal promotions.</p>
              </div>
              <div className="consideration-item">
                <FaWarehouse className="icon" />
                <h4>Order Volume</h4>
                <p>Customers usually place single-item orders rather than bulk purchases.</p>
              </div>
              <div className="consideration-item">
                <FaClipboardCheck className="icon" />
                <h4>Payment Processing</h4>
                <p>Payments are immediate, made via online transactions, credit cards, or digital wallets.</p>
              </div>
            </div>
          </div>

          <div className="benefits">
            <h3>Our B2C Fulfillment Benefits</h3>
            <ul className="benefits-list">
              <li>On-time delivery with real-time tracking</li>
              <li>Accurate packaging and documentation</li>
              <li>Effective return and refund management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="section-content">
          <h2>Differences Between B2B and B2C Fulfillment</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>B2B Order Fulfillment</th>
                  <th>B2C Order Fulfillment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Order Size</td>
                  <td>Bulk purchases</td>
                  <td>Small, individual orders</td>
                </tr>
                <tr>
                  <td>Payment Terms</td>
                  <td>Credit, invoices, or purchase orders</td>
                  <td>Immediate online payment</td>
                </tr>
                <tr>
                  <td>Delivery Time</td>
                  <td>Longer lead times</td>
                  <td>Faster shipping, often same-day delivery</td>
                </tr>
                <tr>
                  <td>Customer Impact</td>
                  <td>Focuses on long-term business relationships</td>
                  <td>Directly affects customer satisfaction</td>
                </tr>
                <tr>
                  <td>Regulations</td>
                  <td>Strict compliance with business requirements</td>
                  <td>Fewer regulations, more flexible policies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-content">
          <h2>Order Fulfillment Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <h3>1. Pre-Purchase Considerations</h3>
              <div className="step-comparison">
                <div className="b2b">
                  <h4>B2B</h4>
                  <p>Pricing varies based on bulk quantity and contract terms</p>
                </div>
                <div className="b2c">
                  <h4>B2C</h4>
                  <p>Pricing remains consistent and visible to all customers</p>
                </div>
              </div>
            </div>
            <div className="process-step">
              <h3>2. Purchase Process</h3>
              <div className="step-comparison">
                <div className="b2b">
                  <h4>B2B</h4>
                  <p>Orders require bulk transportation and specialized handling</p>
                </div>
                <div className="b2c">
                  <h4>B2C</h4>
                  <p>Single purchases and ship faster</p>
                </div>
              </div>
            </div>
            <div className="process-step">
              <h3>3. Post-Purchase & Customer Relations</h3>
              <div className="step-comparison">
                <div className="b2b">
                  <h4>B2B</h4>
                  <p>Demands ongoing business partnerships</p>
                </div>
                <div className="b2c">
                  <h4>B2C</h4>
                  <p>Focuses on customer satisfaction, reviews, and returns management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-content">
          <h2>FAQs about B2B and B2C logistics</h2>
          <div className="faq-grid">
            {[
              {
                question: "What is the difference between B2B and B2C logistics?",
                answer: "B2B logistics involves shipping goods in bulk to businesses or retailers, while B2C logistics focuses on delivering individual orders directly to customers."
              },
              {
                question: "Which type of logistics is faster: B2B or B2C?",
                answer: "B2C logistics is usually faster because it involves direct deliveries to customers. B2B shipments take longer due to bulk orders, inventory checks, and business agreements."
              },
              {
                question: "Why is B2B shipping more complex than B2C?",
                answer: "B2B shipping is complex because it requires large shipments, strict packaging rules, special invoicing, and compliance with business regulations. B2C shipping is simpler, as it focuses on individual deliveries."
              },
              {
                question: "Can one logistics provider handle both B2B and B2C deliveries?",
                answer: "Yes, some logistics providers, like Urbandot Couriers and Cargo, offer solutions for both B2B and B2C shipping, ensuring businesses can manage all their logistics needs efficiently."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <FaQuestionCircle className="faq-icon" />
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fulfillment-cta">
        <div className="cta-content-b2b">
          <h2>Why Choose Urbandot Couriers and Cargo?</h2>
          <div className="cta-features">
            <div className="cta-feature">
              <h3>Reliable Logistics Solutions</h3>
              <p>We specialize in handling both bulk shipments and single-order deliveries.</p>
            </div>
            <div className="cta-feature">
              <h3>Advanced Tracking & Management</h3>
              <p>Our smart logistics solutions provide real-time tracking and inventory control.</p>
            </div>
            <div className="cta-feature">
              <h3>Scalable Fulfillment Services</h3>
              <p>Whether you're expanding B2B partnerships or growing B2C sales, our solutions adapt to your business needs.</p>
            </div>
          </div>
          <button 
                type="submit" 
                className="login-btn" 
                style={{
                  backgroundColor: "red", // Sets the background color to red
                  color: "white", // Sets the text color to white
                  borderRadius: "15px", // Rounds the corners with a 15px radius
                  width:"50%",
                  marginRight:"30%",
                }}
              >
                PartnerUp Today
              </button>
        </div>
      </section>
    </div>
  );
};

export default B2BandB2CFulfillment; 