/**
 * Structured evidence entries + honesty APIs for permafrost-utac (P60).
 * Honesty checks encode source NOTES / DISCLAIMER structurally as is_/does_ honesty APIs.
 * Ported 1:1 from permafrost-utac v1.0.1 constants.py + DISCLAIMER.md.
 * No UTAC/CREP/AFET framing -- see constants.ts and DISCLAIMER.md.
 */

import {
  CARBON_STOCK_GT_HIGH,
  CARBON_STOCK_GT_LOW,
  CARBON_STOCK_GT_MID,
  ESA_CCI_CITATION,
  ESA_CCI_END_YEAR,
  ESA_CCI_START_YEAR,
  GRACE_UNSUITABLE_NOTE,
  MAGT_TREND_C_PER_DECADE,
  NOT_A_BISTABLE_TIPPING_ELEMENT_NOTE,
  RELEASE_2C_GT_2100_HIGH,
  RELEASE_2C_GT_2100_LOW,
  RELEASE_4C_GT_2100_HIGH,
  RELEASE_4C_GT_2100_LOW,
  SCHUUR_2022_CITATION,
  SIBERIA_DATA_GAP_NOTE,
} from "./constants.ts";

/**
 * Evidence stance relative to the package pillars.
 * - observation: ESA CCI measured MAGT / extent
 * - carbon: Schuur et al. 2022 stock and release ranges
 */
export type Stance = "observation" | "carbon";

export type EvidenceEntry = {
  id: "esa_cci" | "schuur2022";
  label: string;
  stance: Stance;
  citation: string;
};

export const ALL_EVIDENCE: readonly EvidenceEntry[] = [
  {
    id: "esa_cci",
    label: "ESA CCI Permafrost v5.0 (measured MAGT 1997-2023)",
    stance: "observation",
    citation: ESA_CCI_CITATION,
  },
  {
    id: "schuur2022",
    label: "Schuur et al. 2022 (permafrost carbon stock / release)",
    stance: "carbon",
    citation: SCHUUR_2022_CITATION,
  },
];

export function observationEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "observation");
}

export function carbonEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "carbon");
}

/** Headline honesty: NOT a classical bistable tipping element (IPCC AR6). */
export function isBistableTippingElement(): boolean {
  return false;
}

/** MAGT 0.29 C/decade is a measured ESA CCI quantity, not a model output. */
export function isMagtTrendAModelOutput(): boolean {
  return false;
}

export function magtTrendCPerDecade(): number {
  return MAGT_TREND_C_PER_DECADE;
}

export function esaCciPeriod(): readonly [number, number] {
  return [ESA_CCI_START_YEAR, ESA_CCI_END_YEAR];
}

/** GRACE/GRACE-FO ~300 km footprint unsuitable vs 1 km ESA CCI. */
export function isGraceSuitableForPermafrostMonitoring(): boolean {
  return false;
}

/** Siberia GTN-P/CALM ground-station underrepresentation since 2022. */
export function hasSiberiaGroundStationDataGap(): boolean {
  return true;
}

/** ESA CCI satellite-based: comparatively less affected by Siberia gap. */
export function isEsaCciComparativelyLessAffectedBySiberiaGap(): boolean {
  return true;
}

/** SyntheticPermafrostData is illustrative, not a per-year measurement. */
export function isSyntheticDataAPerYearMeasurement(): boolean {
  return false;
}

/** carbon_feedback_gt_per_year is an explicit approximation, not calibrated. */
export function isCarbonFeedbackACalibratedEmissionsModel(): boolean {
  return false;
}

export function carbonStockGtMid(): number {
  return CARBON_STOCK_GT_MID;
}

export function carbonStockGtRange(): readonly [number, number] {
  return [CARBON_STOCK_GT_LOW, CARBON_STOCK_GT_HIGH];
}

/** Structural: mid estimate lies inside the published low-high range. */
export function isCarbonStockWithinPublishedRange(): boolean {
  return (
    CARBON_STOCK_GT_LOW <= CARBON_STOCK_GT_MID &&
    CARBON_STOCK_GT_MID <= CARBON_STOCK_GT_HIGH
  );
}

export function release2cGt2100Range(): readonly [number, number] {
  return [RELEASE_2C_GT_2100_LOW, RELEASE_2C_GT_2100_HIGH];
}

export function release4cGt2100Range(): readonly [number, number] {
  return [RELEASE_4C_GT_2100_LOW, RELEASE_4C_GT_2100_HIGH];
}

export {
  NOT_A_BISTABLE_TIPPING_ELEMENT_NOTE,
  SIBERIA_DATA_GAP_NOTE,
  GRACE_UNSUITABLE_NOTE,
};
