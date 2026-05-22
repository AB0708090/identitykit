import React, { useState } from 'react';
import Landing from './Landing';
import Form from './Form';
import ThankYou from './ThankYou';

export default function App() {
  const [page, setPage] = useState('landing');
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div>
      {page === 'landing' && <Landing onStart={() => setPage('form')} />}
      {page === 'form' && <Form onSubmit={(data) => { setSubmittedData(data); setPage('thankyou'); }} />}
      {page === 'thankyou' && <ThankYou data={submittedData} />}
    </div>
  );
}
