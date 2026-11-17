const defaultSocialLinks = {
  linkedin: "https://www.linkedin.com/in/richard-bown/",
  bluesky: "https://bsky.app/profile/bownie.bsky.social"
};

export const socialLinks = {
  linkedin:
    import.meta.env.LINKEDIN_URL?.trim() || defaultSocialLinks.linkedin,
  bluesky: import.meta.env.BLUESKY_URL?.trim() || defaultSocialLinks.bluesky
};
