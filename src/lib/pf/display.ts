import {
  CARBON_STOCK_GT_HIGH,
  CARBON_STOCK_GT_LOW,
  CARBON_STOCK_GT_MID,
  ESA_CCI_DOI,
  ESA_CCI_URL,
  MAGT_TREND_C_PER_DECADE,
  RELEASE_2C_GT_2100_HIGH,
  RELEASE_2C_GT_2100_LOW,
  RELEASE_4C_GT_2100_HIGH,
  RELEASE_4C_GT_2100_LOW,
} from "./constants.ts";
import type { EvidenceEntry, Stance } from "./evidence.ts";
import { formatDe } from "../utils.ts";

export const STANCE_LABEL_DE: Record<Stance, string> = {
  observation: "Beobachtung",
  carbon: "Kohlenstoff",
};

/** ESA CCI has a dataset DOI; Schuur 2022 citation in source has no DOI — do not invent one. */
export const EVIDENCE_DOI: Record<EvidenceEntry["id"], string | null> = {
  esa_cci: ESA_CCI_DOI,
  schuur2022: null,
};

export const EVIDENCE_URL: Record<EvidenceEntry["id"], string | null> = {
  esa_cci: ESA_CCI_URL,
  schuur2022: null,
};

export function stanceLabelDe(stance: Stance): string {
  return STANCE_LABEL_DE[stance];
}

export function headlineFor(entry: EvidenceEntry): string {
  switch (entry.id) {
    case "esa_cci":
      return `MAGT +${formatDe(MAGT_TREND_C_PER_DECADE)} °C/decade · 1997-2023 · 1 km`;
    case "schuur2022":
      return `${formatDe(CARBON_STOCK_GT_LOW)}-${formatDe(CARBON_STOCK_GT_HIGH)} Gt C · mid ${formatDe(CARBON_STOCK_GT_MID)}`;
  }
}

export const KEY_NUMBERS = [
  {
    id: "magt",
    label: "MAGT trend",
    value: `+${formatDe(MAGT_TREND_C_PER_DECADE)} °C/dec`,
  },
  {
    id: "stock",
    label: "Carbon stock mid",
    value: `${formatDe(CARBON_STOCK_GT_MID)} Gt`,
  },
  {
    id: "stock_range",
    label: "Carbon stock range",
    value: `${formatDe(CARBON_STOCK_GT_LOW)}-${formatDe(CARBON_STOCK_GT_HIGH)} Gt`,
  },
  {
    id: "rel2c",
    label: "Release 2°C by 2100",
    value: `${formatDe(RELEASE_2C_GT_2100_LOW)}-${formatDe(RELEASE_2C_GT_2100_HIGH)} Gt`,
  },
  {
    id: "rel4c",
    label: "Release 4°C by 2100",
    value: `${formatDe(RELEASE_4C_GT_2100_LOW)}-${formatDe(RELEASE_4C_GT_2100_HIGH)} Gt`,
  },
] as const;
