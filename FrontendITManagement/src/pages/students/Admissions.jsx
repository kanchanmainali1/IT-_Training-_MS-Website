// src/pages/Admission.jsx
import React from 'react';
import AdmissionProcess from '../../components/AdmissionProcess';
import OnlineRegistration from '../../components/OnlineRegistration';
import PaymentIntegration from '../../components/PaymentIntegration';

const Admissions = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admission Process</h1>
      <AdmissionProcess />
      <OnlineRegistration />
      <PaymentIntegration />
    </div>
  );
};

export default Admissions;
