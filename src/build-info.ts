// Se fija al compilar. En CI, Jenkins pasa el commit como APP_VERSION.
export const APP_VERSION = import.meta.env.VITE_APP_VERSION ?? 'local';