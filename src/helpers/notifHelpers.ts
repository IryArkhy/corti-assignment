import { toast } from 'react-toastify';

export const notifyError = (notifMessage: string): void => {
  toast.error(notifMessage, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
