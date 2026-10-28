import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.0:0',
  releaseNotes: {
    en_US:
      "Updates God's Eye View to 0.3.0: street-level photos from Panoramax, KartaView, Mapillary and Google Street View; a phone layout; Spanish, Russian and Simplified Chinese; short share links; GeoJSON, KML and GPX import; GNSS interference and aircraft emergencies; and new camera, bikeshare and transit feeds. Map Tile Keys gains a Mapillary token, and Voice & Spend Controls gains a Gemini key for Gemini Live voice.",
    es_ES:
      "Actualiza God's Eye View a 0.3.0: fotos a pie de calle de Panoramax, KartaView, Mapillary y Google Street View; diseño para móvil; español, ruso y chino simplificado; enlaces cortos para compartir; importación de GeoJSON, KML y GPX; interferencias GNSS y emergencias de aeronaves; y nuevas fuentes de cámaras, bicicletas compartidas y transporte público. Claves de mosaicos de mapa añade un token de Mapillary, y Voz y control de gasto añade una clave de Gemini para la voz de Gemini Live.",
    de_DE:
      "Aktualisiert God's Eye View auf 0.3.0: Straßenfotos von Panoramax, KartaView, Mapillary und Google Street View; ein Layout für Smartphones; Spanisch, Russisch und vereinfachtes Chinesisch; kurze Teilen-Links; Import von GeoJSON, KML und GPX; GNSS-Störungen und Flugzeug-Notfälle; sowie neue Kamera-, Bikesharing- und Nahverkehrsquellen. Kartenkachel-Schlüssel erhält ein Mapillary-Token, Sprache & Kostenkontrolle einen Gemini-Schlüssel für die Sprachsteuerung mit Gemini Live.",
    pl_PL:
      "Aktualizuje God's Eye View do 0.3.0: zdjęcia z poziomu ulicy z Panoramax, KartaView, Mapillary i Google Street View; układ na telefon; hiszpański, rosyjski i chiński uproszczony; krótkie linki do udostępniania; import GeoJSON, KML i GPX; zakłócenia GNSS i sytuacje awaryjne samolotów; oraz nowe źródła kamer, rowerów miejskich i transportu publicznego. Klucze kafelków mapy dostają token Mapillary, a Głos i kontrola wydatków klucz Gemini do głosu Gemini Live.",
    fr_FR:
      "Met à jour God's Eye View vers 0.3.0 : photos au niveau de la rue de Panoramax, KartaView, Mapillary et Google Street View ; une mise en page pour téléphone ; espagnol, russe et chinois simplifié ; liens de partage courts ; import GeoJSON, KML et GPX ; interférences GNSS et urgences aériennes ; et de nouvelles sources de caméras, de vélos en libre-service et de transports. Clés de tuiles de carte ajoute un jeton Mapillary, et Voix et contrôle des dépenses une clé Gemini pour la voix Gemini Live.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
