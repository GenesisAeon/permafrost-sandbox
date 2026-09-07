import { formatDe } from "@/lib/utils";
import {
  CARBON_STOCK_GT_HIGH,
  CARBON_STOCK_GT_LOW,
  CARBON_STOCK_GT_MID,
  MAGT_TREND_C_PER_DECADE,
  RELEASE_2C_GT_2100_HIGH,
  RELEASE_2C_GT_2100_LOW,
  RELEASE_4C_GT_2100_HIGH,
  RELEASE_4C_GT_2100_LOW,
} from "@/lib/pf/constants";
import type { EvidenceEntry, Stance } from "@/lib/pf/evidence";

export type Locale = "de" | "en";

export type Messages = {
  language: string;
  documentTitle: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  statusLabel: string;
  statusHeading: string;
  statusBody: string;
  filterHeading: string;
  filterHint: string;
  filterAll: string;
  filterObservation: string;
  filterCarbon: string;
  filterAria: string;
  hiddenOne: string;
  hiddenMany: (n: number) => string;
  hiddenSuffix: string;
  numbersHeading: string;
  evidenceHeading: string;
  evidenceLead: string;
  entriesCount: (visible: number, total: number) => string;
  coreClaim: string;
  citation: string;
  doiSource: string;
  close: string;
  drawerFoot: string;
  honestyHeading: string;
  sourcesHeading: string;
  sourcesLead: string;
  sourcesFoot: string;
  disclaimerHeading: string;
  disclaimerLead: string;
  disclaimerBody: string;
  linkKlimakatalog: string;
  linkAppsHub: string;
  linkGithub: string;
  linkSandboxGithub: string;
  stanceLabel: Record<Stance, string>;
  evidenceTitle: Record<EvidenceEntry["id"], string>;
  evidenceCore: Record<EvidenceEntry["id"], string>;
  headlines: Record<EvidenceEntry["id"], string>;
  keyNumberLabels: Record<string, string>;
  sourceNotes: Record<EvidenceEntry["id"], string>;
};

const evidenceCoreDe = (): Record<EvidenceEntry["id"], string> => ({
  esa_cci: `ESA CCI Permafrost v5.0: gemessener MAGT-Trend +${formatDe(MAGT_TREND_C_PER_DECADE)} °C/Dekade (1997-2023), 1 km Auflösung. Reale Satellitenmessung — kein Modelloutput. Variablen: MAGT (5 Tiefen), aktive Schicht (ALT), Permafrost-Ausdehnung.`,
  schuur2022: `Schuur et al. 2022: Permafrost-Kohlenstoffvorrat ${formatDe(CARBON_STOCK_GT_LOW)}-${formatDe(CARBON_STOCK_GT_HIGH)} Gt C (Mitte ${formatDe(CARBON_STOCK_GT_MID)}). Freisetzung bis 2100 unter 2 °C: ${formatDe(RELEASE_2C_GT_2100_LOW)}-${formatDe(RELEASE_2C_GT_2100_HIGH)} Gt; unter 4 °C: ${formatDe(RELEASE_4C_GT_2100_LOW)}-${formatDe(RELEASE_4C_GT_2100_HIGH)} Gt — modellierte Projektionen, keine Direktmessungen.`,
});

const evidenceCoreEn = (): Record<EvidenceEntry["id"], string> => ({
  esa_cci: `ESA CCI Permafrost v5.0: measured MAGT trend +${formatDe(MAGT_TREND_C_PER_DECADE)} °C/decade (1997-2023), 1 km resolution. Real satellite measurement — not a model output. Variables: MAGT (5 depths), active-layer thickness (ALT), permafrost extent.`,
  schuur2022: `Schuur et al. 2022: permafrost carbon stock ${formatDe(CARBON_STOCK_GT_LOW)}-${formatDe(CARBON_STOCK_GT_HIGH)} Gt C (mid ${formatDe(CARBON_STOCK_GT_MID)}). Release by 2100 under 2 °C: ${formatDe(RELEASE_2C_GT_2100_LOW)}-${formatDe(RELEASE_2C_GT_2100_HIGH)} Gt; under 4 °C: ${formatDe(RELEASE_4C_GT_2100_LOW)}-${formatDe(RELEASE_4C_GT_2100_HIGH)} Gt — modeled projections, not direct measurements.`,
});

const headlines = (): Record<EvidenceEntry["id"], string> => ({
  esa_cci: `MAGT +${formatDe(MAGT_TREND_C_PER_DECADE)} °C/decade · 1997-2023 · 1 km`,
  schuur2022: `${formatDe(CARBON_STOCK_GT_LOW)}-${formatDe(CARBON_STOCK_GT_HIGH)} Gt C · mid ${formatDe(CARBON_STOCK_GT_MID)}`,
});

export const messages: Record<Locale, Messages> = {
  de: {
    language: "Sprache",
    documentTitle: "Permafrost-Sandbox",
    eyebrow: "Permafrost-Sandbox · permafrost-utac P60",
    titleLead: "Graduelles Feedback.",
    titleAccent: " Kein bistabiler Kipppunkt.",
    lead: "Reale ESA-CCI-Messungen und Schuur-2022-Kohlenstoffzahlen — und die Honesty, dass Permafrost-Auftauen laut IPCC AR6 kein klassisches bistabiles Kippelement ist.",
    statusLabel: "Honesty",
    statusHeading: "Kein bistabiler Kipppunkt · gemessenes Feedback",
    statusBody:
      "is_bistable_tipping_element() = false (IPCC AR6). is_magt_trend_a_model_output() = false (ESA CCI 1997-2023 gemessen). is_grace_suitable_for_permafrost_monitoring() = false. has_siberia_ground_station_data_gap() = true. Kein UTAC/CREP/AFET, kein erfundenes Gamma.",
    filterHeading: "Säule",
    filterHint: "Filter ändert die Ansicht, nicht den Befund.",
    filterAll: "alle",
    filterObservation: "Beobachtung",
    filterCarbon: "Kohlenstoff",
    filterAria: "Nach Säule filtern",
    hiddenOne: "1 Eintrag ausgeblendet",
    hiddenMany: (n) => `${n} Einträge ausgeblendet`,
    hiddenSuffix: "— die Honesty bleibt.",
    numbersHeading: "Kennzahlen (1:1 aus P60)",
    evidenceHeading: "Quellen-Säulen",
    evidenceLead:
      "Messung und Kohlenstoffvorrat getrennt halten — und die Kipppunkt-Honesty sichtbar lassen.",
    entriesCount: (visible, total) => `${visible} / ${total} Einträge`,
    coreClaim: "Kernaussage",
    citation: "Zitat",
    doiSource: "DOI / Quelle",
    close: "Schließen",
    drawerFoot:
      "Zwei Säulen, eine Honesty-Linie — kein bistabiler globaler Kipppunkt laut IPCC AR6.",
    honestyHeading: "Honesty-Checks",
    sourcesHeading: "Quellen",
    sourcesLead:
      "Konstanten 1:1 aus permafrost-utac (P60, v1.0.1). Die Oberfläche ist übersetzt; Zahlen und Zitationen bleiben in ihren Einheiten.",
    sourcesFoot:
      "Keine UTAC/CREP/AFET-Verknüpfung. Schuur 2022 hat in der Quelle keine DOI — keine erfunden. Owner: GenesisAeon / Johann Römer. MIT.",
    disclaimerHeading: "Disclaimer",
    disclaimerLead:
      "Reale, geprüfte Wissenschaft (ESA CCI v5.0, Schuur et al. 2022). Permafrost-Auftauen ist laut IPCC AR6 kein klassisches bistabiles Kippelement — graduelles, selbstverstärkendes Feedback mit regionalen abrupten Ereignissen (Thermokarst).",
    disclaimerBody:
      "Keine UTAC-, CREP- oder AFET-Brücke (bewusste Entscheidung der Quelle). Kein erfundenes Gamma. SyntheticPermafrostData ist illustrativ, kein Jahres-Messersatz. carbon_feedback_gt_per_year ist eine explizite Näherung, kein kalibriertes Emissionsmodell. Zahlen und DOIs stammen 1:1 aus permafrost-utac (P60, v1.0.1).",
    linkKlimakatalog: "Klimakatalog · permafrost-utac",
    linkAppsHub: "GenesisAeon Apps-Hub",
    linkGithub: "Quellpaket auf GitHub",
    linkSandboxGithub: "GitHub-Paket (Sandbox)",
    stanceLabel: {
      observation: "Beobachtung",
      carbon: "Kohlenstoff",
    },
    evidenceTitle: {
      esa_cci: "ESA CCI Permafrost v5.0 — gemessener MAGT-Trend",
      schuur2022: "Schuur et al. 2022 — Kohlenstoffvorrat / Freisetzung",
    },
    evidenceCore: evidenceCoreDe(),
    headlines: headlines(),
    keyNumberLabels: {
      magt: "MAGT-Trend",
      stock: "C-Vorrat Mitte",
      stock_range: "C-Vorrat Spanne",
      rel2c: "Freisetzung 2 °C bis 2100",
      rel4c: "Freisetzung 4 °C bis 2100",
    },
    sourceNotes: {
      esa_cci: "MAGT +0,29 °C/Dekade, 1997-2023, 1 km — gemessen, kein Modell.",
      schuur2022: "1460-1600 Gt C (Mitte 1500); Release-Spannen 2 °C / 4 °C.",
    },
  },
  en: {
    language: "Language",
    documentTitle: "Permafrost Sandbox",
    eyebrow: "Permafrost sandbox · permafrost-utac P60",
    titleLead: "Gradual feedback.",
    titleAccent: " Not a bistable tipping element.",
    lead: "Real ESA CCI measurements and Schuur 2022 carbon figures — and the honesty that permafrost thaw is not a classical bistable tipping element per IPCC AR6.",
    statusLabel: "Honesty",
    statusHeading: "Not a bistable tipping element · measured feedback",
    statusBody:
      "is_bistable_tipping_element() = false (IPCC AR6). is_magt_trend_a_model_output() = false (ESA CCI 1997-2023 measured). is_grace_suitable_for_permafrost_monitoring() = false. has_siberia_ground_station_data_gap() = true. No UTAC/CREP/AFET, no invented gamma.",
    filterHeading: "Pillar",
    filterHint: "The filter changes the view, not the finding.",
    filterAll: "all",
    filterObservation: "Observation",
    filterCarbon: "Carbon",
    filterAria: "Filter by pillar",
    hiddenOne: "1 entry hidden",
    hiddenMany: (n) => `${n} entries hidden`,
    hiddenSuffix: "— honesty stays.",
    numbersHeading: "Key numbers (1:1 from P60)",
    evidenceHeading: "Source pillars",
    evidenceLead:
      "Keep measurement and carbon stock separate — and keep the tipping-element honesty explicit.",
    entriesCount: (visible, total) => `${visible} / ${total} entries`,
    coreClaim: "Core claim",
    citation: "Citation",
    doiSource: "DOI / source",
    close: "Close",
    drawerFoot:
      "Two pillars, one honesty line — not a classical bistable global tipping element per IPCC AR6.",
    honestyHeading: "Honesty checks",
    sourcesHeading: "Sources",
    sourcesLead:
      "Constants 1:1 from permafrost-utac (P60, v1.0.1). The chrome is translated; numbers and citations stay in their units.",
    sourcesFoot:
      "No UTAC/CREP/AFET link. Schuur 2022 has no DOI in the source — none invented. Owner: GenesisAeon / Johann Römer. MIT.",
    disclaimerHeading: "Disclaimer",
    disclaimerLead:
      "Real, citation-checked science (ESA CCI v5.0, Schuur et al. 2022). Permafrost thaw is not a classical bistable tipping element per IPCC AR6 — a gradual, self-amplifying feedback with regional abrupt events (thermokarst).",
    disclaimerBody:
      "No UTAC, CREP, or AFET bridge (deliberate source choice). No invented gamma. SyntheticPermafrostData is illustrative, not a per-year measurement substitute. carbon_feedback_gt_per_year is an explicit approximation, not a calibrated emissions model. Numbers and DOIs are 1:1 from permafrost-utac (P60, v1.0.1).",
    linkKlimakatalog: "Climate catalog · permafrost-utac",
    linkAppsHub: "GenesisAeon Apps-Hub",
    linkGithub: "Source package on GitHub",
    linkSandboxGithub: "GitHub package (sandbox)",
    stanceLabel: {
      observation: "Observation",
      carbon: "Carbon",
    },
    evidenceTitle: {
      esa_cci: "ESA CCI Permafrost v5.0 — measured MAGT trend",
      schuur2022: "Schuur et al. 2022 — carbon stock / release",
    },
    evidenceCore: evidenceCoreEn(),
    headlines: headlines(),
    keyNumberLabels: {
      magt: "MAGT trend",
      stock: "Carbon stock mid",
      stock_range: "Carbon stock range",
      rel2c: "Release 2 °C by 2100",
      rel4c: "Release 4 °C by 2100",
    },
    sourceNotes: {
      esa_cci: "MAGT +0.29 °C/decade, 1997-2023, 1 km — measured, not modeled.",
      schuur2022: "1460-1600 Gt C (mid 1500); release ranges at 2 °C / 4 °C.",
    },
  },
};

export function stanceLabel(stance: Stance, t: Messages): string {
  return t.stanceLabel[stance];
}

export function headlineForLocale(entry: EvidenceEntry, t: Messages): string {
  return t.headlines[entry.id];
}

export function keyNumbersForLocale(t: Messages) {
  return [
    {
      id: "magt",
      label: t.keyNumberLabels.magt,
      value: `+${formatDe(MAGT_TREND_C_PER_DECADE)} °C/dec`,
    },
    {
      id: "stock",
      label: t.keyNumberLabels.stock,
      value: `${formatDe(CARBON_STOCK_GT_MID)} Gt`,
    },
    {
      id: "stock_range",
      label: t.keyNumberLabels.stock_range,
      value: `${formatDe(CARBON_STOCK_GT_LOW)}-${formatDe(CARBON_STOCK_GT_HIGH)} Gt`,
    },
    {
      id: "rel2c",
      label: t.keyNumberLabels.rel2c,
      value: `${formatDe(RELEASE_2C_GT_2100_LOW)}-${formatDe(RELEASE_2C_GT_2100_HIGH)} Gt`,
    },
    {
      id: "rel4c",
      label: t.keyNumberLabels.rel4c,
      value: `${formatDe(RELEASE_4C_GT_2100_LOW)}-${formatDe(RELEASE_4C_GT_2100_HIGH)} Gt`,
    },
  ] as const;
}
