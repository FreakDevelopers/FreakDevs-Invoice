import React from "react";
import InvoicePreview from "../InvoicePreview/InvoicePreview";

function InvoicePreviewModal({ open, onClose, data, user }) {
  return (
    <div
      onClick={onClose}
      className={`fixed overflow-y-auto inset-0 justify-center items-center transition-colors ${
        open ? "visible bg-black/30" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`my-8 mx-auto w-[793.7px] h-[1122.5px] bg-white shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <InvoicePreview user={user} data={data} />
      </div>
    </div>
  );
}

export default InvoicePreviewModal;
