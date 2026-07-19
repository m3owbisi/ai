export const THEME_STORAGE_KEY = "equal-ai-theme";

export const THEME_GIF_PRESETS = {
  one: "https://media.giphy.com/media/KBbr4hHl9DSahKvInO/giphy.gif?cid=790b76112m5eeeydoe7et0cr3j3ekb1erunxozyshuhxx2vl&ep=v1_stickers_search&rid=giphy.gif&ct=s",
} as const;

export const THEME_COLORS = {
  cursor: {
    dark: "#BAFF29",
    light: "#00B140",
    accent: "#E5FE40",
  },
  navbar: {
    bgLight: "zinc-100",
    bgDark: "zinc-800",
    textLight: "zinc-600",
    textDark: "zinc-400",
    hoverLight: "zinc-950",
    hoverDark: "zinc-50",
  },
} as const;

export type ThemeAnimationVariant =
  | "circle"
  | "rectangle"
  | "gif"
  | "polygon"
  | "circle-blur";

export type ThemeAnimationStart =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"
  | "top-center"
  | "bottom-center"
  | "bottom-up"
  | "top-down"
  | "left-right"
  | "right-left";

export type ThemeAnimationOptions = {
  variant?: ThemeAnimationVariant;
  start?: ThemeAnimationStart;
  blur?: boolean;
  gifUrl?: string;
};
