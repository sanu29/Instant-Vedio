
import { ToastContainer, toast } from 'react-toastify';
export const Toast = (msg) =>{
   return toast.success(msg, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}