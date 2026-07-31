"use client";

import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useT } from "@/lib/i18n/use-translations";
import { buildProfileSections } from "@/lib/profile-sections-data";
import type { PersonalityProfile } from "@/lib/types";

export function ProfileSections({ profile }: { profile: PersonalityProfile }) {
  const t = useT();
  const sections = buildProfileSections(profile);

  return (
    <Accordion multiple defaultValue={["overview", "coreMotivation"]} className="w-full">
      {sections.map(({ id, titleKey, icon: Icon, content, variant = "badges" }) => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger className="font-heading text-base">
            <span className="flex items-center gap-2.5">
              <Icon className="size-4 text-brand" />
              {t(titleKey)}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {Array.isArray(content) ? (
              variant === "list" ? (
                <ul className="flex flex-col gap-3">
                  {content.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {content.map((item) => (
                    <Badge key={item} variant="secondary" className="px-3 py-1.5 text-sm font-normal">
                      {item}
                    </Badge>
                  ))}
                </div>
              )
            ) : (
              <p className="text-muted-foreground leading-relaxed">{content}</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
