
import { useState } from 'react';
import './App.css'
import DisplayData from './components/DisplayData';
import FileUpload from './components/FileUpload';

function App() {
  const [licenseData, setLicenseData] = useState(null);

  return (
    <>
      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <h1>Driving License OCR Extraction</h1>
        <FileUpload setLicenseData={setLicenseData} />
        {licenseData && <DisplayData licenseData={licenseData} />}
      </div>
    </>
  )
}

export default App
