import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.1:1',
  releaseNotes: {
    en_US: `StartOS package improvements; no change to God's Eye View.`,
    es_ES: `Mejoras en el paquete de StartOS; sin cambios en God's Eye View.`,
    de_DE: `Verbesserungen am StartOS-Paket; keine Änderungen an God's Eye View.`,
    pl_PL: `Ulepszenia pakietu StartOS; bez zmian w God's Eye View.`,
    fr_FR: `Améliorations du paquet StartOS ; aucun changement pour God's Eye View.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
