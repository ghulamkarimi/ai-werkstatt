import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ message, type }: { message: string; type: "success" | "error" }) => (
  <div style={{
    background: "transparent",
    color: "white",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}>
    <div style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "4px solid rgba(255, 255, 255, 0.3)",
      borderTop: `4px solid ${type === "success" ? "#00ff00" : "#ff0000"}`,
      animation: "spin 1s linear infinite",
    }} />
    <span>{message}</span>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export const NotificationService = {
  success(message: string) {
    toast(<CustomToast message={message} type="success" />, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  },
  error(message: string) {
    toast(<CustomToast message={message} type="error" />, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  },
};
