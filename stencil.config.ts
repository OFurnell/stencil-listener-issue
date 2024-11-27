import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-listener-issue',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
