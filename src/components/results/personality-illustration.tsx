import { BASE_TYPE_ICON, PERSONALITY_ICON } from "@/lib/data/icons";
import type { PersonalityProfile } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PersonalityIllustrationProps {
  profile: PersonalityProfile;
  className?: string;
  id?: string;
  /** Use in small contexts (grid thumbnails, history/admin rows) — shows just the spirit-animal
   * name (dropping the code badge) and shrinks the overlay text, which otherwise gets badly
   * truncated below ~200px. */
  compact?: boolean;
}

export function PersonalityIllustration({ profile, className, id, compact = false }: PersonalityIllustrationProps) {
  const { primary, secondary, accent, background } = profile.colorPalette;
  const TypeIcon = PERSONALITY_ICON[profile.code];
  const BaseIcon = BASE_TYPE_ICON[profile.mbti];

  return (
    <div
      id={id}
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-3xl border border-border/60 shadow-xl",
        className,
      )}
      style={{ backgroundColor: background }}
      role="img"
      aria-label={`Illustration for ${profile.title} (${profile.code})`}
    >
      <div
        className="absolute -left-10 -top-16 size-56 rounded-full opacity-70 blur-2xl"
        style={{ backgroundColor: secondary }}
      />
      <div
        className="absolute -bottom-20 -right-10 size-64 rounded-full opacity-60 blur-2xl"
        style={{ backgroundColor: accent }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, ${primary}33, transparent 55%)`,
        }}
      >
        <div
          className="flex size-2/5 items-center justify-center rounded-full shadow-2xl ring-4 ring-white/20"
          style={{ backgroundImage: `linear-gradient(135deg, ${primary}, ${accent})` }}
        >
          <TypeIcon className="size-1/2 text-white drop-shadow" strokeWidth={1.5} />
        </div>
      </div>
      <div
        className="absolute right-[6%] top-[6%] flex aspect-square w-[20%] min-w-4 items-center justify-center rounded-full bg-white/15 shadow ring-1 ring-white/25 backdrop-blur-sm"
        title={`Base type: ${profile.mbti}`}
      >
        <BaseIcon className="size-1/2 text-white" strokeWidth={2} />
      </div>
      {compact ? (
        <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/50 to-transparent p-2">
          <span className="min-w-0 max-w-full truncate rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
            {profile.spiritAnimal}
          </span>
        </div>
      ) : (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1.5 bg-gradient-to-t from-black/50 to-transparent p-2.5 sm:gap-2 sm:p-4">
          <span className="shrink-0 rounded-full bg-white/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-white backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
            {profile.code}
          </span>
          <span className="min-w-0 truncate rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
            {profile.spiritAnimal}
          </span>
        </div>
      )}
    </div>
  );
}
