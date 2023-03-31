import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--my-blue": "#4285f4",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": "#000",
  "--white": "#fff",
  "--gray": "#ccc",
  "--gray-base": "#666",
  "--component-bg": "#fff",
  "--component-text-color": "#000",

  /* Brand */
  "--brand-primary": "#073772",

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": "#073772",
  "--default-button-success-color": "#0f9d58",
  "--default-button-warning-color": "#f4b400",
  "--default-button-danger-color": "#db4437",

  /* State */
  "--state-info-color": "#4285f4",
  "--state-success-color": "#0f9d58",
  "--state-warning-color": "#f4b400",
  "--state-danger-color": "#db4437",

  /* Navbar */
  "--main-navigation-color": "#073772",
  "--main-navigation-color--inverted": "#fff",

  "--focus-color": "#4285f4",
});
