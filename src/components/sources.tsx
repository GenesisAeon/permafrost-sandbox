import { useLocale } from "@/lib/i18n/locale";
import { ESA_CCI_DOI, ESA_CCI_URL } from "@/lib/pf";
import type { EvidenceEntry } from "@/lib/pf";

const CITES: {
  id: EvidenceEntry["id"];
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi: string | null;
  url: string | null;
}[] = [
  {
    id: "esa_cci",
    authors: "ESA Climate Change Initiative (CCI) / University of Oslo / CEDA",
    year: "v5.0",
    title: "ESA CCI Permafrost v5.0 (MAGT, ALT, extent; 1997-2023, 1 km)",
    journal: "NERC EDS Centre for Environmental Data Analysis",
    doi: ESA_CCI_DOI,
    url: ESA_CCI_URL,
  },
  {
    id: "schuur2022",
    authors: "Schuur, E.A.G. et al.",
    year: "2022",
    title: "Permafrost and Climate Change: Carbon Cycle Feedbacks From the Warming Arctic",
    journal: "Annual Review of Environment and Resources, 47, 343-371",
    doi: null,
    url: null,
  },
];

export function Sources() {
  const { t } = useLocale();

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.sourcesHeading}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{t.sourcesLead}</p>
      <ul className="mt-5 space-y-4 text-sm">
        {CITES.map((c) => (
          <li key={`${c.authors}-${c.year}`} className="border-t border-ring pt-4">
            <p className="text-fg">
              {c.authors} ({c.year}). <span className="italic">{c.title}.</span>
              {c.journal ? ` ${c.journal}.` : null}
            </p>
            <p className="mt-1 text-muted">{t.sourceNotes[c.id]}</p>
            {c.doi ? (
              <a
                className="mt-1 inline-flex min-h-11 items-center font-mono text-xs text-accent underline-offset-4 hover:underline"
                href={`https://doi.org/${c.doi}`}
                target="_blank"
                rel="noreferrer"
              >
                doi:{c.doi}
              </a>
            ) : c.url ? (
              <a
                className="mt-1 inline-flex min-h-11 items-center font-mono text-xs text-accent underline-offset-4 hover:underline"
                href={c.url}
                target="_blank"
                rel="noreferrer"
              >
                {c.url}
              </a>
            ) : (
              <p className="mt-1 font-mono text-xs text-subtle">
                no DOI in source package — none invented
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs leading-relaxed text-subtle">{t.sourcesFoot}</p>
    </section>
  );
}
