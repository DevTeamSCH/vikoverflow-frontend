export default () => {
  const isDark =
    typeof window === "undefined"
      ? false
      : window.localStorage.getItem("vikoverflow-dark-mode");

  if (!isDark) {
    window.localStorage.setItem("vikoverflow-dark-mode", "1");
    document.querySelector("html").classList.add("dark");
  } else {
    window.localStorage.removeItem("vikoverflow-dark-mode");
    document.querySelector("html").classList.remove("dark");
  }
};

export const isDarkMode = () => {
  try {
    return typeof window === "undefined"
      ? false
      : window.localStorage.getItem("vikoverflow-dark-mode");
  } catch (error) {
    console.log(error);
  }
};
