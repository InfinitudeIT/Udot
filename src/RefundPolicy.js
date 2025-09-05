import React from "react";
import "../src/css/refundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-policy-container">
      <h1>Refund & Cancellation Policy</h1>
      
      <h2>1. Account Closure:</h2>
      <ul>
        <li>You may request to close your account at any time by emailing us at <a href="mailto:support@urbandot.in">support@urbandot.in</a>.</li>
        <li>Upon account closure, all your content and data will be permanently deleted from our platform. Please ensure that you intend to close your account, as this action is irreversible.</li>
      </ul>

      <h2>2. Refund Process:</h2>
      <ul>
        <li>If you wish to discontinue our services, you may request a refund by emailing us at <a href="mailto:support@urbandot.in">support@urbandot.in</a> or raising a ticket through our support system.</li>
        <li>Our team will reach out to discuss your concerns. If you still decide to discontinue, we will review and approve your refund request.</li>
        <li><strong>Important:</strong> If there are any in-transit shipments in the forward delivery leg, we will not refund the full amount, as those shipments may become RTO (Return to Origin), and additional charges could apply. Full refunds will only be processed when:
          <ul>
            <li>There are no open shipments on the account.</li>
            <li>There is no probability of weight discrepancies being raised.</li>
          </ul>
        </li>
        <li>Refunds will be approved within 7 days from the approval date and will be credited to the bank account linked to your Urbandot account.</li>
      </ul>

      <h2>3. Service Modification or Termination:</h2>
      <ul>
        <li>We reserve the right to modify or terminate the service at any time without notice.</li>
      </ul>

      <h2>4. Fraud Prevention:</h2>
      <ul>
        <li>If we suspect fraudulent activity in connection with your account (by investigation, conviction, settlement, or otherwise), we reserve the right to suspend or terminate your account without notice.</li>
      </ul>

      <div className="important-note">
        <p><strong>Note:</strong> No refunds are offered, even if a plan is close mid-month.</p>
      </div>

      <h2>Contact</h2>
      <p>If you have any questions or comments or wish to exercise your rights under applicable legislation, please contact our grievance officer/privacy team by sending an email to <a href="mailto:support@urbandot.in">support@urbandot.in</a>.</p>
    </div>
  );
};

export default RefundPolicy;
