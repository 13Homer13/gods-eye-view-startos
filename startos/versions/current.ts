import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.1:1',
  releaseNotes: {
    en_US:
      "Restarting God's Eye View while it is still starting stops every process of the previous run.",
    es_ES:
      "Reiniciar God's Eye View mientras aún se está iniciando detiene todos los procesos de la ejecución anterior.",
    de_DE:
      "Ein Neustart von God's Eye View, während es noch startet, beendet alle Prozesse des vorherigen Laufs.",
    pl_PL:
      "Ponowne uruchomienie God's Eye View w trakcie uruchamiania zatrzymuje wszystkie procesy poprzedniego uruchomienia.",
    fr_FR:
      "Redémarrer God's Eye View pendant son démarrage arrête tous les processus de l'exécution précédente.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
