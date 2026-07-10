import { BASE_TYPE_ICON, PERSONALITY_ICON } from "@/lib/data/icons";
import type { PersonalityProfile } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PersonalityIllustrationProps {
  profile: PersonalityProfile;
  className?: string;
  id?: string;
}

export function PersonalityIllustration({ profile, className, id }: PersonalityIllustrationProps) {
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
        className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/15 shadow ring-1 ring-white/25 backdrop-blur-sm"
        title={`Base type: ${profile.mbti}`}
      >
        <BaseIcon className="size-4 text-white" strokeWidth={2} />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/50 to-transparent p-4">
        <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-xs font-semibold text-white backdrop-blur-sm">
          {profile.code}
        </span>
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {profile.spiritAnimal}
        </span>
      </div>
    </div>
  );
}
