import {
  hasSiberiaGroundStationDataGap,
  isBistableTippingElement,
  isCarbonFeedbackACalibratedEmissionsModel,
  isCarbonStockWithinPublishedRange,
  isEsaCciComparativelyLessAffectedBySiberiaGap,
  isGraceSuitableForPermafrostMonitoring,
  isMagtTrendAModelOutput,
  isSyntheticDataAPerYearMeasurement,
} from "@/lib/pf";
import { useLocale } from "@/lib/i18n/locale";
import { keyNumbersForLocale } from "@/lib/i18n/messages";

export function KeyNumbers() {
  const { t } = useLocale();
  const numbers = keyNumbersForLocale(t);

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.numbersHeading}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {numbers.map((n) => (
          <div key={n.id} className="rounded-lg bg-elevated p-3">
            <p className="text-2xs font-medium uppercase tracking-[0.12em] text-subtle">
              {n.label}
            </p>
            <p className="mt-1 font-mono text-lg tabular-nums text-fg">{n.value}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-6 text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
        {t.honestyHeading}
      </h3>
      <ul className="mt-3 space-y-2 font-mono text-xs text-muted">
        <li>
          is_bistable_tipping_element() ={" "}
          <span className="text-accent">{String(isBistableTippingElement())}</span>
        </li>
        <li>
          is_magt_trend_a_model_output() ={" "}
          <span className="text-accent">{String(isMagtTrendAModelOutput())}</span>
        </li>
        <li>
          is_grace_suitable_for_permafrost_monitoring() ={" "}
          <span className="text-accent">
            {String(isGraceSuitableForPermafrostMonitoring())}
          </span>
        </li>
        <li>
          has_siberia_ground_station_data_gap() ={" "}
          <span className="text-accent">
            {String(hasSiberiaGroundStationDataGap())}
          </span>
        </li>
        <li>
          is_esa_cci_comparatively_less_affected_by_siberia_gap() ={" "}
          <span className="text-accent">
            {String(isEsaCciComparativelyLessAffectedBySiberiaGap())}
          </span>
        </li>
        <li>
          is_synthetic_data_a_per_year_measurement() ={" "}
          <span className="text-accent">
            {String(isSyntheticDataAPerYearMeasurement())}
          </span>
        </li>
        <li>
          is_carbon_feedback_a_calibrated_emissions_model() ={" "}
          <span className="text-accent">
            {String(isCarbonFeedbackACalibratedEmissionsModel())}
          </span>
        </li>
        <li>
          is_carbon_stock_within_published_range() ={" "}
          <span className="text-accent">
            {String(isCarbonStockWithinPublishedRange())}
          </span>
        </li>
      </ul>
    </section>
  );
}
