'use client';

import { useState } from 'react';

const DonationComponent = () => {
  const [donationMethod, setDonationMethod] = useState('qr'); // 'qr' or 'bank'
  const [copiedField, setCopiedField] = useState(null);
  const bankDetails = {
    // --- UPDATE THESE DETAILS ---
    accountHolder: 'Name of Your Foundation/NGO',
    accountNumber: '123456789012',
    ifscCode: 'YOURBANK000123',
    bankName: 'Your Bank Name',
    branch: 'Your City, State',
  };

  const copyToClipboard = (text, fieldKey) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedField(fieldKey);
        setTimeout(() => {
          setCopiedField(null);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const getTabClass = (method) => {
    return donationMethod === method
      ? 'bg-emerald-600 text-white' // Using a green color for donation theme
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-lg font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Support Our Cause{' '}
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Your contribution makes a world of difference. Thank you for your
        generosity.
      </p>

      {/* Donation Method Tabs */}
      <div className="flex rounded-lg border border-gray-200 overflow-hidden mb-8">
        <button
          className={`flex-1 py-3 px-4 text-center font-semibold transition-colors duration-300 ${getTabClass('qr')}`}
          onClick={() => setDonationMethod('qr')}
        >
          Donate via QR (UPI)
        </button>
        <button
          className={`flex-1 py-3 px-4 text-center font-semibold transition-colors duration-300 ${getTabClass('bank')}`}
          onClick={() => setDonationMethod('bank')}
        >
          Donate via Bank Transfer
        </button>
      </div>

      {/* Donation Details */}
      <div className="text-center">
        {donationMethod === 'qr' ? (
          <div>
            <p className="text-gray-600">
              Scan the QR code with any UPI app to donate.
            </p>
            {/* --- UPDATE UPI QR & ID --- */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=your-foundation-upi@okhdfcbank"
              alt="Donation QR Code"
              className="w-64 h-64 mx-auto my-5 p-2 border rounded-lg"
            />
            <p className="text-sm text-gray-600">
              Or donate to UPI ID:{' '}
              <strong className="font-mono">
                your-foundation-upi@okhdfcbank
              </strong>
            </p>
          </div>
        ) : (
          <div className="text-left">
            <p className="text-gray-600 text-center mb-6">
              You can also donate directly to our bank account using NEFT, IMPS,
              or RTGS.
            </p>
            <ul className="space-y-4">
              {Object.entries(bankDetails).map(([key, value]) => (
                <li
                  key={key}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >
                  <span className="font-semibold text-gray-700">
                    {key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (str) => str.toUpperCase())}
                    :
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-gray-800">{value}</span>

                    <button
                      onClick={() => copyToClipboard(value, key)}
                      className="text-xs py-1 px-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors"
                    >
                      {copiedField === key ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center text-sm text-gray-500 bg-green-50 p-4 rounded-lg border border-dashed border-green-300">
        <p className="font-semibold text-green-800">
          All donations are eligible for tax exemption under Section 80G of the
          Income Tax Act, 1961.
        </p>
        <p className="mt-2 text-green-700">
          For a receipt, please email your transaction details to{' '}
          <strong className="font-semibold">accounts@yourfoundation.org</strong>
          .
        </p>
      </div>
    </div>
  );
};

export default DonationComponent;
