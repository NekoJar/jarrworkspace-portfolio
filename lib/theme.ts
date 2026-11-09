export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before first paint so a stored dark preference never flashes a light page.
 */
export const themeInitScript = `(function(){try{var stored=localStorage.getItem("${THEME_STORAGE_KEY}");var theme=stored==="dark"||stored==="light"?stored:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(theme==="dark"){document.documentElement.classList.add("dark");}document.documentElement.style.colorScheme=theme;}catch(e){}})();`;
