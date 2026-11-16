export type TalkRole = "guest" | "host" | "speaker";

export interface Talk {
  show: string;
  title: string;
  date: string;
  url: string;
  role: TalkRole;
}

export const talks: Talk[] = [
  {
    show: "InfoQ Engineering Culture Podcast",
    title:
      "Leading from Any Position: Richard Bown on Humane Engineering Organizations",
    date: "12 December 2025",
    url: "https://www.infoq.com/podcasts/humane-engineering-organizations/",
    role: "guest"
  },
  {
    show: "We Are Developers World Congress",
    title: "The QUEST for Better Software",
    date: "July 2023",
    url: "https://www.youtube.com/watch?v=44nFyKMRa9Q",
    role: "speaker"
  }
];

export const showTalks = process.env.SHOW_TALKS === "true";
