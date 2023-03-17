import React from "react";
import "./App.css";
import html2pdf from "html2pdf.js";

const DownloadWebPage = () => {
  const handleDownload = () => {
    const opt = {
      margin: 0.5,
      filename: "page.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    const element = document.body;
    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      <h1>Convert Web Page into Pdf</h1>
      <button className="butn" onClick={handleDownload}>
        Download PDF
      </button>
    </>
  );
};

export default DownloadWebPage;
