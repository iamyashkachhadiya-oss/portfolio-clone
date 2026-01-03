export const SECTION_IDS = ["home", "resume", "blog", "about"] as const;

export type SectionId = (typeof SECTION_IDS)[number];
