//! Çagırma Şekli 
// <div
// aria-live="polite"
// aria-atomic="true"
// style={{ position: "relative", minHeight: "200px" }}
// >
// {/* Success Toast */}
// <ToastComponent
//   show={showSuccessToast}
//   onClose={() => setShowSuccessToast(false)}
//   type="success"
//   message="Password changed successfully."
// />

// {/* Error Toast */}
// <ToastComponent
//   show={showErrorToast}
//   onClose={() => setShowErrorToast(false)}
//   type="error"
//   message="An error occurred while changing password."
// />
// </div>

//! ---------------------------------
import React, { useState, useEffect } from "react";

const ToastComponent = ({ show, onClose, type, message }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    // Set the visibility status when 'show' prop changes
    setIsVisible(show);

    if (show) {
      // Hide the toast after 3000 milliseconds (3 seconds)
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000);

      // Clean up the timer when the component unmounts or 'show' changes
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: 100,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div
        className={`toast ${isVisible ? "show" : ""}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
         <div
          className={`toast-header ${
            type === "success" ? "bg-success" : "bg-danger"
          } text-white`}
        >
          <strong className="me-auto">
            {type === "success" ? "Success" : "Error"}
          </strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
};

export default ToastComponent;
