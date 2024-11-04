import React, { ChangeEvent } from 'react';
import axios from 'axios';

interface FileUploadProps {
    setLicenseData: (data: any) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ setLicenseData }) => {
    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const formData = new FormData();
            formData.append('licenseImage', e.target.files[0]);

            try {
                const response = await axios.post('http://localhost:5000/api/v1/license/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setLicenseData(response.data.data);
            } catch (error) {
                console.error('Failed to upload file:', error);
                alert('Failed to upload and process file');
            }
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
    );
};

export default FileUpload;
