import React from "react";

type TypeConfirmationModal = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationModal = ({
  message,
  onConfirm,
  onCancel,
}: TypeConfirmationModal) => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-graydark bg-opacity-50">
      <div className="rounded-lg bg-white p-8">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded px-4 py-2"
            onClick={onCancel}
          >
            Tidak
          </button>
          <button
            className="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={onConfirm}
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
