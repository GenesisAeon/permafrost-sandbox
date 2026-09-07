import {
  isBistableTippingElement,
  isMagtTrendAModelOutput,
} from "@/lib/pf";
import { useLocale } from "@/lib/i18n/locale";

export function DisclaimerBox() {
  const bistable = isBistableTippingElement();
  const magtModeled = isMagtTrendAModelOutput();
  const { t } = useLocale();

  const links = [
    {
      href: "https://klimakatalog.vercel.app/p/permafrost-utac",
      label: t.linkKlimakatalog,
    },
    {
      href: "https://apps-hub-alpha.vercel.app/",
      label: t.linkAppsHub,
    },
    {
      href: "https://github.com/GenesisAeon/permafrost-utac",
      label: t.linkGithub,
    },
    {
      href: "https://github.com/GenesisAeon/permafrost-sandbox",
      label: t.linkSandboxGithub,
    },
  ];

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.disclaimerHeading}</h2>
      <p className="mt-3 text-sm leading-relaxed text-fg">{t.disclaimerLead}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {t.disclaimerBody}{" "}
        <span className="font-mono text-accent">
          is_bistable_tipping_element() = {bistable ? "true" : "false"}
        </span>
        ;{" "}
        <span className="font-mono text-accent">
          is_magt_trend_a_model_output() = {magtModeled ? "true" : "false"}
        </span>
        .
      </p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            className="inline-flex min-h-11 items-center text-accent underline-offset-4 hover:underline"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
