import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.1:0',
  releaseNotes: {
    en_US: `God's Eye View 0.2.1: agent access over MCP, a hardened LAN server, and per-endpoint usage throttles on by default.`,
    es_ES: `God's Eye View 0.2.1: acceso de agentes mediante MCP, un servidor LAN más seguro y límites de uso por endpoint activados de forma predeterminada.`,
    de_DE: `God's Eye View 0.2.1: Agentenzugriff über MCP, gehärteter LAN-Server und standardmäßig aktivierte Nutzungsgrenzen pro Endpunkt.`,
    pl_PL: `God's Eye View 0.2.1: dostęp agentów przez MCP, zabezpieczony serwer LAN oraz domyślnie włączone limity użycia dla poszczególnych endpointów.`,
    fr_FR: `God's Eye View 0.2.1 : accès agent via MCP, serveur LAN durci et limites d'utilisation par endpoint activées par défaut.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
