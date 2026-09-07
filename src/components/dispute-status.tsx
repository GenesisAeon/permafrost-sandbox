import {
  isBistableTippingElement,
  isMagtTrendAModelOutput,
} from "@/lib/pf";
import { useLocale } from "@/lib/i18n/locale";
import { Split } from "lucide-react";

export function DisputeStatus() {
  const bistable = isBistableTippingElement();
  const magtModeled = isMagtTrendAModelOutput();
  const { t } = useLocale();

  return (
    <section
      className="rounded-xl bg-surface px-4 py-5 shadow-border sm:px-6 sm:py-6"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-elevated text-accent">
          <Split className="size-4" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-2xs font-medium uppercase tracking-[0.16em] text-subtle">
            {t.statusLabel}
          </p>
          <h2 className="mt-1 font-heading text-2xl leading-tight tracking-tight sm:text-3xl">
            {t.statusHeading}
          </h2>
          <p className="mt-2 font-mono text-xs text-accent">
            is_bistable_tipping_element() = {bistable ? "true" : "false"}
          </p>
          <p className="mt-1 font-mono text-xs text-accent">
            is_magt_trend_a_model_output() = {magtModeled ? "true" : "false"}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {t.statusBody}
          </p>
        </div>
      </div>
    </section>
  );
}
