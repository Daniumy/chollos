// Config que cambia por entorno SIN recompilar.
// La inyecta /config.js (en Kubernetes, un ConfigMap distinto por entorno).
export type EnvName = 'local' | 'dev' | 'prod';

export interface RuntimeConfig {
  ENV_NAME: EnvName;
  SHOW_ENV_BANNER: boolean;
  BANNER_COLOR: string;
  CONTACT_EMAIL: string;
}

declare global {
  interface Window {
    __RUNTIME_CONFIG__?: Partial<RuntimeConfig>;
  }
}

const defaults: RuntimeConfig = {
  ENV_NAME: 'local',
  SHOW_ENV_BANNER: true,
  BANNER_COLOR: '#6b7280',
  CONTACT_EMAIL: 'hola@chollosfuentealamo.com',
};

// Si config.js no carga o le falta algún campo, usamos los defaults.
export const runtimeConfig: RuntimeConfig = {
  ...defaults,
  ...window.__RUNTIME_CONFIG__,
};