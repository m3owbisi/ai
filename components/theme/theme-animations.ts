import type { ThemeAnimationStart, ThemeAnimationVariant } from "@/components/theme/theme-config";

type Animation = { name: string; css: string };
const styleId = "theme-transition-styles";

export function injectThemeTransitionStyles(css: string) {
  if (typeof document === "undefined") return;
  let styleElement = document.getElementById(styleId) as HTMLStyleElement | null;
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }
  styleElement.textContent = css;
}

function clipPosition(start: ThemeAnimationStart) {
  switch (start) {
    case "top-left": return "0% 0%";
    case "top-right": return "100% 0%";
    case "bottom-left": return "0% 100%";
    case "bottom-right": return "100% 100%";
    case "top-center": return "50% 0%";
    case "bottom-center": return "50% 100%";
    default: return "50% 50%";
  }
}

function rectangleClipPath(start: ThemeAnimationStart) {
  switch (start) {
    case "top-down": return ["polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"];
    case "left-right": return ["polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"];
    case "right-left": return ["polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"];
    default: return ["polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"];
  }
}

function polygonClipPath(start: ThemeAnimationStart) {
  if (start === "top-right") {
    return {
      darkFrom: "polygon(150% -71%, 250% 71%, 250% 71%, 150% -71%)",
      darkTo: "polygon(150% -71%, 250% 71%, 50% 171%, -71% 50%)",
      lightFrom: "polygon(-71% 50%, 50% 171%, 50% 171%, -71% 50%)",
      lightTo: "polygon(-71% 50%, 50% 171%, 250% 71%, 150% -71%)",
    };
  }
  return {
    darkFrom: "polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%)",
    darkTo: "polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%)",
    lightFrom: "polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%)",
    lightTo: "polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%)",
  };
}

function viewTransitionBase(duration = "0.7s") {
  return `
    ::view-transition-group(root) {
      animation-duration: ${duration};
      animation-timing-function: var(--expo-out);
    }
    ::view-transition-old(root),
    .light::view-transition-old(root) {
      animation: none;
      z-index: -1;
    }
  `;
}

export function createThemeAnimation(
  variant: ThemeAnimationVariant,
  start: ThemeAnimationStart = "center",
  blur = false,
  gifUrl = "",
): Animation {
  const blurStart = blur ? "filter: blur(8px);" : "";
  const blurEnd = blur ? "filter: blur(0);" : "";
  const blurFrame = blur ? "50% { filter: blur(4px); }" : "";
  const blurNew = blur ? "filter: blur(2px);" : "";

  if (variant === "gif") {
    return { name: "gif", css: `
      ::view-transition-group(root) { animation-timing-function: var(--expo-in); }
      ::view-transition-new(root) { mask: url('${gifUrl}') center / 0 no-repeat; animation: equal-theme-gif 1.4s both; ${blurNew} }
      ::view-transition-old(root) { animation: equal-theme-gif 1.4s both; }
      @keyframes equal-theme-gif { 0% { mask-size: 0; ${blurStart} } 20% { mask-size: 44vmax; } ${blurFrame} 100% { mask-size: 200vmax; ${blurEnd} } }
    ` };
  }

  if (variant === "rectangle") {
    const [from, to] = rectangleClipPath(start);
    return { name: `rectangle-${start}`, css: `
      ${viewTransitionBase()}
      ::view-transition-new(root) { animation-name: equal-theme-rectangle-${start}; ${blurNew} }
      @keyframes equal-theme-rectangle-${start} { from { clip-path: ${from}; ${blurStart} } ${blurFrame} to { clip-path: ${to}; ${blurEnd} } }
    ` };
  }

  if (variant === "polygon") {
    const clip = polygonClipPath(start);
    return { name: `polygon-${start}`, css: `
      ${viewTransitionBase()}
      ::view-transition-new(root) { animation-name: equal-theme-polygon-light-${start}; ${blurNew} }
      .light::view-transition-new(root) { animation-name: equal-theme-polygon-dark-${start}; ${blurNew} }
      @keyframes equal-theme-polygon-dark-${start} { from { clip-path: ${clip.darkFrom}; ${blurStart} } ${blurFrame} to { clip-path: ${clip.darkTo}; ${blurEnd} } }
      @keyframes equal-theme-polygon-light-${start} { from { clip-path: ${clip.lightFrom}; ${blurStart} } ${blurFrame} to { clip-path: ${clip.lightTo}; ${blurEnd} } }
    ` };
  }

  const position = clipPosition(start);
  const radius = start === "center" ? "100%" : "150%";
  const shouldBlur = variant === "circle-blur" || blur;
  return { name: `${variant}-${start}`, css: `
    ${viewTransitionBase(variant === "circle-blur" ? "1s" : "0.7s")}
    ::view-transition-new(root) { animation-name: equal-theme-circle-${start}; ${shouldBlur ? "filter: blur(2px);" : ""} }
    @keyframes equal-theme-circle-${start} {
      from { clip-path: circle(0% at ${position}); ${shouldBlur ? "filter: blur(8px);" : ""} }
      ${shouldBlur ? "50% { filter: blur(4px); }" : ""}
      to { clip-path: circle(${radius} at ${position}); ${shouldBlur ? "filter: blur(0);" : ""} }
    }
  ` };
}
