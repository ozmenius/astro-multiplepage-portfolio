/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Google Tag Manager container ID, e.g. "GTM-XXXXXXX". */
  readonly PUBLIC_GTM_ID?: string;
  /** Web3Forms access key for the contact form. */
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
