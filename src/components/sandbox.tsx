import { useMemo, useState } from "react";
import {
  ALL_EVIDENCE,
  isBistableTippingElement,
  type EvidenceEntry,
} from "@/lib/pf";
import { DisputeStatus } from "@/components/dispute-status";
import {
  StanceFilter,
  type StanceFilter as StanceFilterValue,
} from "@/components/stance-filter";
import { KeyNumbers } from "@/components/key-numbers";
import { EvidencePanel } from "@/components/evidence-panel";
import { EvidenceDrawer } from "@/components/evidence-drawer";
import { DisclaimerBox } from "@/components/disclaimer-box";
import { Sources } from "@/components/sources";
import { LocaleSwitch } from "@/components/locale-switch";
import { useLocale } from "@/lib/i18n/locale";

export function Sandbox() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<StanceFilterValue>("all");
  const [selectedId, setSelectedId] = useState<EvidenceEntry["id"] | null>(null);

  const visible = useMemo(() => {
    if (filter === "all") return ALL_EVIDENCE;
    return ALL_EVIDENCE.filter((e) => e.stance === filter);
  }, [filter]);

  const selected = ALL_EVIDENCE.find((e) => e.id === selectedId) ?? null;
  const hiddenCount = ALL_EVIDENCE.length - visible.length;
  const bistable = isBistableTippingElement();

  return (
    <div className="min-h-dvh overflow-x-hidden bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12">
        <header className="max-w-3xl">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p className="text-2xs font-medium uppercase tracking-[0.18em] text-subtle">
              {t.eyebrow}
            </p>
            <LocaleSwitch />
          </div>
          <h1 className="mt-3 font-heading text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            {t.titleLead}
            <span className="italic text-accent">{t.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t.lead}
          </p>
        </header>

        <div className="mt-8 space-y-4">
          <DisputeStatus />

          <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-2xl tracking-tight">
                  {t.filterHeading}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  {t.filterHint}{" "}
                  <span className="font-mono text-accent">
                    is_bistable_tipping_element() = {bistable ? "true" : "false"}
                  </span>
                </p>
              </div>
              <StanceFilter value={filter} onChange={setFilter} />
            </div>
            {hiddenCount > 0 ? (
              <p className="mt-3 text-xs text-subtle">
                {hiddenCount === 1 ? t.hiddenOne : t.hiddenMany(hiddenCount)}{" "}
                {t.hiddenSuffix}
              </p>
            ) : null}
          </section>

          <KeyNumbers />

          <EvidencePanel
            visible={visible}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />

          <DisclaimerBox />
          <Sources />
        </div>
      </div>

      <EvidenceDrawer
        entry={selected}
        open={selectedId != null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null);
        }}
      />
    </div>
  );
}
