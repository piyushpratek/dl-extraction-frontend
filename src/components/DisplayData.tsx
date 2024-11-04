import React from 'react';

interface DisplayDataProps {
    licenseData: {
        name: string;
        relation: string;
        address: string;
        dob: string;
        dlNumber: string;
        issuedOn: string;
        validTill: string;
    };
}

const DisplayData: React.FC<DisplayDataProps> = ({ licenseData }) => {
    return (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
            <h2>Extracted License Data</h2>
            <p><strong>Name:</strong> {licenseData.name}</p>
            <p><strong>S/W/D of:</strong> {licenseData.relation}</p>
            <p><strong>Address:</strong> {licenseData.address}</p>
            <p><strong>Date of Birth:</strong> {licenseData.dob}</p>
            <p><strong>DL Number:</strong> {licenseData.dlNumber}</p>
            <p><strong>Issued On:</strong> {licenseData.issuedOn}</p>
            <p><strong>Valid Till:</strong> {licenseData.validTill}</p>
        </div>
    );
};

export default DisplayData;
