import type { Stance } from "@/lib/pf";
import { useLocale } from "@/lib/i18n/locale";
import { stanceLabel } from "@/lib/i18n/messages";
import { cn } from "@/lib/utils";

export function StanceBadge({ stance, className }: { stance: Stance; className?: string }) {
  const { t } = useLocale();
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-full px-2.5 text-2xs font-medium tracking-wide",
        stance === "observation"
          ? "bg-moderate/15 text-moderate"
          : "bg-accent/15 text-accent",
        className,
      )}
    >
      {stanceLabel(stance, t)}
    </span>
  );
}
