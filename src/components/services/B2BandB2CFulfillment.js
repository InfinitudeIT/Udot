import React from 'react';
import '../../css/B2BandB2CFulfillment.css';
import {
  FaWarehouse, FaTruck, FaShippingFast, FaClipboardCheck,
  FaChartLine, FaQuestionCircle
} from 'react-icons/fa';

const B2BandB2CFulfillment = () => {
  return (
    <div className="ff-wrapper">
      {/* Hero Section */}
      <section className="ff-hero">
        <div className="ff-hero-content">
          <h1>B2B and B2C Order Fulfillment</h1>
          <h2>Optimized Solutions with Urbandot Couriers and Cargo</h2>
          <p className="ff-intro-text">
            Whether you are handling orders for individual consumers or retail businesses, 
            the fulfillment process varies significantly. At Urbandot Couriers and Cargo, 
            we understand that every order represents your brand.
          </p>
        </div>
      </section>

      {/* B2B Section */}
      <section className="ff-b2b">
        <div className="ff-section-inner">
          <h2>B2B Order Fulfillment Explained</h2>
          <p>B2B eCommerce fulfillment involves shipping large product quantities directly to businesses or retailers...</p>

          <div className="ff-considerations">
            <h3>Key Considerations for B2B Fulfillment</h3>
            <div className="ff-grid">
              <div className="ff-item">
                <FaClipboardCheck className="ff-icon" />
                <h4>Precision & Compliance</h4>
                <p>Orders must meet compliance requirements...</p>
              </div>
              <div className="ff-item">
                <FaShippingFast className="ff-icon" />
                <h4>Shipping Costs & Lead Time</h4>
                <p>Wholesale orders tend to be costlier...</p>
              </div>
              <div className="ff-item">
                <FaTruck className="ff-icon" />
                <h4>Freight Requirements</h4>
                <p>Large orders may require sea freight, air freight, or specialized carriers...</p>
              </div>
            </div>
          </div>

          <div className="ff-services">
            <h3>Essential B2B Fulfillment Services</h3>
            <ul className="ff-list">
              <li>Providing fast and efficient delivery solutions</li>
              <li>Optimizing warehouse management and inventory tracking</li>
              <li>Reducing operational costs through streamlined logistics strategies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* B2C Section */}
      <section className="ff-b2c">
        <div className="ff-section-inner">
          <h2>B2C Order Fulfillment Explained</h2>
          <p>B2C fulfillment involves shipping products directly to individual customers...</p>

          <div className="ff-considerations">
            <h3>Key Considerations for B2C Fulfillment</h3>
            <div className="ff-grid">
              <div className="ff-item">
                <FaChartLine className="ff-icon" />
                <h4>Pricing</h4>
                <p>Fixed product pricing applies, except for discounts...</p>
              </div>
              <div className="ff-item">
                <FaWarehouse className="ff-icon" />
                <h4>Order Volume</h4>
                <p>Customers usually place single-item orders...</p>
              </div>
              <div className="ff-item">
                <FaClipboardCheck className="ff-icon" />
                <h4>Payment Processing</h4>
                <p>Payments are immediate, made via online transactions...</p>
              </div>
            </div>
          </div>

          <div className="ff-benefits">
            <h3>Our B2C Fulfillment Benefits</h3>
            <ul className="ff-list">
              <li>On-time delivery with real-time tracking</li>
              <li>Accurate packaging and documentation</li>
              <li>Effective return and refund management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="ff-comparison">
        <div className="ff-section-inner">
          <h2>Differences Between B2B and B2C Fulfillment</h2>
          <div className="ff-table-wrapper">
            <table className="ff-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>B2B</th>
                  <th>B2C</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Order Size</td><td>Bulk</td><td>Individual</td></tr>
                <tr><td>Payment Terms</td><td>Invoices, PO</td><td>Online, instant</td></tr>
                <tr><td>Delivery Time</td><td>Longer</td><td>Faster</td></tr>
                <tr><td>Customer Impact</td><td>Business-oriented</td><td>Customer satisfaction</td></tr>
                <tr><td>Regulations</td><td>Strict compliance</td><td>More flexible</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="ff-process">
        <div className="ff-section-inner">
          <h2>Order Fulfillment Process</h2>
          <div className="ff-process-steps">
            {[
              {
                title: "1. Pre-Purchase Considerations",
                b2b: "Pricing varies based on bulk quantity...",
                b2c: "Pricing remains consistent and visible..."
              },
              {
                title: "2. Purchase Process",
                b2b: "Orders require bulk transportation...",
                b2c: "Single purchases and ship faster"
              },
              {
                title: "3. Post-Purchase & Customer Relations",
                b2b: "Demands ongoing business partnerships",
                b2c: "Focuses on customer satisfaction..."
              }
            ].map((step, idx) => (
              <div key={idx} className="ff-step">
                <h3>{step.title}</h3>
                <div className="ff-step-comparison">
                  <div className="ff-step-box b2b"><h4>B2B</h4><p>{step.b2b}</p></div>
                  <div className="ff-step-box b2c"><h4>B2C</h4><p>{step.b2c}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ff-faq">
        <div className="ff-section-inner">
          <h2>FAQs about B2B and B2C Logistics</h2>
          <div className="ff-faq-grid">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="ff-faq-item">
                <FaQuestionCircle className="ff-icon" />
                <h3>FAQ Question {index + 1}</h3>
                <p>Corresponding answer content here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ff-cta">
        <div className="ff-cta-inner">
          <h2>Why Choose Urbandot Couriers and Cargo?</h2>
          <div className="ff-cta-features">
            <div className="ff-cta-box">
              <h3>Reliable Logistics Solutions</h3>
              <p>We specialize in handling both bulk shipments and single-order deliveries.</p>
            </div>
            <div className="ff-cta-box">
              <h3>Advanced Tracking & Management</h3>
              <p>Our smart logistics solutions provide real-time tracking and inventory control.</p>
            </div>
            <div className="ff-cta-box">
              <h3>Scalable Fulfillment Services</h3>
              <p>Whether you're expanding B2B partnerships or growing B2C sales, our solutions adapt to your business needs.</p>
            </div>
          </div>
          <button
            type="submit"
            className="ff-cta-btn"
          >
            PartnerUp Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default B2BandB2CFulfillment;
