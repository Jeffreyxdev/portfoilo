/* eslint-disable react/prop-types */
import toast, { Toaster } from 'react-hot-toast';
import { Download } from 'lucide-react';

const Resume = ({ pdfUrl, fileName, buttonText }) => {
  const downloadPDF = async () => {
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }
      const blob = await response.blob();
      const link = document.createElement('a');
      const blobUrl = URL.createObjectURL(blob);
      link.href = blobUrl;
      link.download = fileName || 'download.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(`Error downloading PDF: ${errorMessage}`);
      console.error('Error downloading PDF:', errorMessage);
    }
  };

  return (
    <div className="transition-all duration-300 active:scale-[0.96] max-w-[220px] mx-auto md:mx-0 flex justify-center lg:justify-start">
      <button
        onClick={downloadPDF}
        className="btn-primary cursor-pointer"
      >
        <Download className="w-4 h-4" />
        {buttonText || 'Download PDF'}
      </button>
      <Toaster
        toastOptions={{
          style: {
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-subtle)',
          },
        }}
      />
    </div>
  );
};

export default Resume;