import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CARBON_STOCK_GT_HIGH,
  CARBON_STOCK_GT_LOW,
  CARBON_STOCK_GT_MID,
  ESA_CCI_DOI,
  MAGT_TREND_C_PER_DECADE,
  PACKAGE_ID,
  SOURCE_VERSION,
  ALL_EVIDENCE,
  carbonStockGtMid,
  hasSiberiaGroundStationDataGap,
  isBistableTippingElement,
  isCarbonFeedbackACalibratedEmissionsModel,
  isCarbonStockWithinPublishedRange,
  isEsaCciComparativelyLessAffectedBySiberiaGap,
  isGraceSuitableForPermafrostMonitoring,
  isMagtTrendAModelOutput,
  isSyntheticDataAPerYearMeasurement,
  magtTrendCPerDecade,
  release2cGt2100Range,
  release4cGt2100Range,
} from "./index.ts";

describe("permafrost-sandbox domain (P60)", () => {
  it("ports package id and version", () => {
    assert.equal(PACKAGE_ID, 60);
    assert.equal(SOURCE_VERSION, "1.0.1");
  });

  it("keeps ESA CCI DOI exact", () => {
    assert.equal(ESA_CCI_DOI, "10.5285/a6fbedd8ee5b472c8e84e55f746c1704");
  });

  it("keeps Schuur carbon stock range 1:1", () => {
    assert.equal(CARBON_STOCK_GT_LOW, 1460.0);
    assert.equal(CARBON_STOCK_GT_HIGH, 1600.0);
    assert.equal(CARBON_STOCK_GT_MID, 1500.0);
    assert.equal(carbonStockGtMid(), 1500.0);
    assert.equal(isCarbonStockWithinPublishedRange(), true);
  });

  it("keeps release ranges 1:1", () => {
    assert.deepEqual(release2cGt2100Range(), [50.0, 100.0]);
    assert.deepEqual(release4cGt2100Range(), [150.0, 250.0]);
  });

  it("keeps measured MAGT trend", () => {
    assert.equal(MAGT_TREND_C_PER_DECADE, 0.29);
    assert.equal(magtTrendCPerDecade(), 0.29);
    assert.equal(isMagtTrendAModelOutput(), false);
  });

  it("encodes source honesty notes as is_*/does_*", () => {
    assert.equal(isBistableTippingElement(), false);
    assert.equal(isGraceSuitableForPermafrostMonitoring(), false);
    assert.equal(hasSiberiaGroundStationDataGap(), true);
    assert.equal(isEsaCciComparativelyLessAffectedBySiberiaGap(), true);
    assert.equal(isSyntheticDataAPerYearMeasurement(), false);
    assert.equal(isCarbonFeedbackACalibratedEmissionsModel(), false);
  });

  it("has observation and carbon evidence pillars", () => {
    assert.equal(ALL_EVIDENCE.length, 2);
    assert.ok(ALL_EVIDENCE.some((e) => e.stance === "observation"));
    assert.ok(ALL_EVIDENCE.some((e) => e.stance === "carbon"));
  });
});
