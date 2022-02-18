export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3003"
      : "https://med-monitor-db.herokuapp.com";
  };
  