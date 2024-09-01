import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import '../styles/showConfirmDialog.css'
export const showConfirmDialog = (onConfirm) => {
  confirmAlert({
    title: "Confirm to Delete",
    message: "Are you sure you want to delete this room?",
    buttons: [
      {
        label: "Yes",
        onClick: onConfirm,
      },
      {
        label: "No",
        onClick: () => {},
      },
    ],
  });
};
