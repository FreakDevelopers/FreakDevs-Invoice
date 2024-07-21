import React from "react";
import InvoicePreview from "../InvoicePreview/InvoicePreview";
import html2pdf from "html2pdf.js";

function InvoicePreviewModal({ open, onClose, data, user }) {
  const downloadPdfHandler = () => {
    const input = document.getElementById("invoice");
    const opt = {
      margin: 0,
      filename: data.invoiceNumber,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf()
      .set(opt)
      .from(input)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        pdf.setProperties({
          title: data.invoiceNumber,
          subject: "Invoice Details",
          author: "Freakdevs",
          keywords: "invoice, finance",
          creator: "Freakdevs-Invoice",
        });
      })
      .save();
  };
  return (
    <div
      onClick={onClose}
      className={`fixed overflow-y-auto inset-0 justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`my-8 mx-auto w-[793.7px] h-[1122.5px] bg-white shadow p-0 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <InvoicePreview user={user} data={data} />
      </div>

      <div
        className={`flex justify-end mx-auto mb-8 -mt-4 w-[793.7px] shadow transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={downloadPdfHandler}
          className="px-3 py-2 bg-green-500 text-white rounded-md"
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
}

export default InvoicePreviewModal;
