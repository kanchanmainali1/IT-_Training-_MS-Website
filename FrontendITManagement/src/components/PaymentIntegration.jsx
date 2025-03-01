import React from 'react';

const PaymentIntegration = () => {
  return (
    <div className="bg-gray-50 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Payment Integration</h2>
      <p className="mb-4 text-gray-700">
        We offer seamless integration with multiple payment gateways:
      </p>
      <div className="space-y-2">
        <div>
          <h3 className="font-semibold">Local Options:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>eSewa</li>
            <li>Khalti</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">International Options:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Stripe</li>
            <li>PayPal</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default PaymentIntegration;
