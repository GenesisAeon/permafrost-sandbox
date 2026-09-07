/**
 * Real, independently verified constants for permafrost-utac (P60).
 * Ported 1:1 from src/permafrost_utac/constants.py (package v1.0.1).
 * Deliberately has NO UTAC/CREP/AFET bridge. See DISCLAIMER.md.
 * No invented numbers, Gamma, or DOIs.
 */

export const PACKAGE_ID = 60;
export const SOURCE_VERSION = "1.0.1";

export const ESA_CCI_CITATION =
  "ESA Climate Change Initiative (CCI) Permafrost, v5.0. Produced by the " +
  "University of Oslo, hosted by the NERC EDS Centre for Environmental " +
  "Data Analysis (CEDA). Covers 1997-2023, Northern Hemisphere (and " +
  "Antarctica for some variables), 1 km spatial resolution. Variables: " +
  "mean annual ground temperature (MAGT, at 5 depths), active layer " +
  "thickness (ALT), and permafrost extent.";

export const ESA_CCI_DOI = "10.5285/a6fbedd8ee5b472c8e84e55f746c1704";
export const ESA_CCI_URL = "https://climate.esa.int/en/projects/permafrost/data/";
export const ESA_CCI_START_YEAR = 1997;
export const ESA_CCI_END_YEAR = 2023;
export const ESA_CCI_RESOLUTION_KM = 1.0;

export const SCHUUR_2022_CITATION =
  'Schuur, E.A.G. et al. (2022). "Permafrost and Climate Change: Carbon ' +
  'Cycle Feedbacks From the Warming Arctic". Annual Review of ' +
  "Environment and Resources, 47, 343-371.";

export const CARBON_STOCK_GT_LOW = 1460.0;
export const CARBON_STOCK_GT_HIGH = 1600.0;
export const CARBON_STOCK_GT_MID = 1500.0;

export const RELEASE_2C_GT_2100_LOW = 50.0;
export const RELEASE_2C_GT_2100_HIGH = 100.0;
export const RELEASE_4C_GT_2100_LOW = 150.0;
export const RELEASE_4C_GT_2100_HIGH = 250.0;

/** Measured MAGT warming trend ESA CCI 1997-2023 — not a model output. */
export const MAGT_TREND_C_PER_DECADE = 0.29;

export const CRITICAL_TEMP_LOWER_C = -1.0;
export const FROZEN_THRESHOLD_C = 0.0;

export const NOT_A_BISTABLE_TIPPING_ELEMENT_NOTE =
  "Permafrost thaw is NOT a classical bistable tipping element with a " +
  "single global bifurcation point (IPCC AR6). It behaves as a gradual, " +
  "self-amplifying feedback mechanism with regional abrupt events " +
  "(thermokarst) -- a structurally different kind of risk than e.g. AMOC " +
  "collapse. This distinction is why this package deliberately does not " +
  "implement a UTAC/CREP bridge: there is no established bistable " +
  "threshold to hang a Gamma value on here.";

export const SIBERIA_DATA_GAP_NOTE =
  "The largest permafrost regions (Siberia) have been underrepresented " +
  "in ground-station networks (GTN-P, CALM) since 2022 for geopolitical " +
  "reasons. ESA CCI, being satellite-based, is comparatively less " +
  "affected by this gap, but it is a real limitation of the wider " +
  "permafrost-monitoring literature worth disclosing.";

export const GRACE_UNSUITABLE_NOTE =
  "GRACE/GRACE-FO gravimetry is not suitable for permafrost monitoring " +
  "at meaningful resolution (~300 km footprint, far coarser than the " +
  "1 km ESA CCI product).";
