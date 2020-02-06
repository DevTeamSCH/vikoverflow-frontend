export default () => {
  try {
    const isDark =
      typeof window === "undefined"
        ? false
        : window.localStorage.getItem("dark-mode");

    if (!isDark) {
      window.localStorage.setItem("dark-mode", "1");
      document.querySelector("html").classList.add("dark");
    } else {
      window.localStorage.removeItem("dark-mode");
      document.querySelector("html").classList.remove("dark");
    }
  } catch (error) {
    console.log(error);
  }
};
