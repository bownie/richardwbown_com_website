export interface Idea {
  title: string;
  summary: string;
  relatedPost?: string;
}

export const ideas: Idea[] = [
  {
    title: "Platform as a product",
    summary:
      "Platform teams can start with existing systems and turn their capabilities into services that better support developers.",
    relatedPost: "how-to-build-a-successful-platform-team"
  },
  {
    title: "Reducing cognitive load",
    summary:
      "Cognitive load offers a way to understand team interactions and identify changes that can make team structures more realistic and effective.",
    relatedPost: "avoiding-toxicity-how-to-manage-cognitive-load"
  },
  {
    title: "Bounded contexts and flow",
    summary:
      "Bounded contexts can help teams define independent change and flow without requiring separate repositories or a microservices architecture.",
    relatedPost: "do-bounded-contexts-and-domain-driven-design-even-matter"
  },
  {
    title: "Hidden technical debt",
    summary:
      "Through Peter’s story, this article explores how underinvestment in legacy systems and technical debt affect software and the people maintaining it.",
    relatedPost: "legacy-systems-and-the-cost-of-hidden-technical-debt"
  },
  {
    title: "Residues of architecture over time",
    summary:
      "Barry O’Reilly’s Residues frames software architecture around criticality and how design choices endure amid time, change, and uncertainty.",
    relatedPost:
      "residues-time-change-and-uncertainty-in-software-architecture-barry-oreilly"
  },
  {
    title: "Making systems visible",
    summary:
      "Context diagrams, DDD context maps, C4 diagrams and process canvases help teams see systems clearly and reason about potential changes.",
    relatedPost: "how-to-visualise-your-systems"
  },
  {
    title: "Psychology of engineering teams",
    summary:
      "Autonomy, mastery and purpose shape how teams adopt platforms, tools and ways of working.",
    relatedPost:
      "daniel-pinks-drive-and-what-self-determination-theory-sdt-really-says"
  }
];
