import type { ToasterProps } from 'react-hot-toast'

export const toastConfig: ToasterProps = {
  position: 'top-center',

  toastOptions: {
    duration: 3000,

    style: {
      background: '#363636', 
      color: '#fff',        
    },

    success: {
      duration: 2000, 
      iconTheme: {
        primary: '#4ade80',  
        secondary: '#fff',   
      },
    },

    error: {
      duration: 3000, 
      iconTheme: {
        primary: '#ef4444',  
        secondary: '#fff',   
      },
    },
  },
}
