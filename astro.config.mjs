import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "NeueMontrealMedium",
      cssVariable: "--font-neue-montreal-medium",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Medium.woff2"],
            weight: "medium",
            style: "medium",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "NeueMontrealRegular",
      cssVariable: "--font-neue-montreal-regular",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Regular.woff2"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});
