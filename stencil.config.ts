import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import postcssConfig from './postcss.config'

export const config: Config = {
  namespace: 'liquid-docs',
  tsconfig: 'tsconfig.json',
  srcDir: 'src',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      dir: 'dist_docs/dist',
    },
  ],
  plugins: [postcss(postcssConfig)],
  buildEs5: false,
  extras: {
    cssVarsShim: false,
    dynamicImportShim: false,
    shadowDomShim: false,
    safari10: false,
    scriptDataOpts: false,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: false,
  },
}
