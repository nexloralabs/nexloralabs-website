import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NexLora Labs — Freelance Software Engineering Team",
    short_name: "NexLora Labs",
    description:
      "NexLora Labs is a freelance engineering team that designs, builds, deploys & automates digital products for businesses of all sizes.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF8",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
