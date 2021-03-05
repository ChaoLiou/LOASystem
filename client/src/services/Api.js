import config from "@/services/config";

export default () => {
  return {
    get(url) {
      return fetchBase(url);
    },
    post(url) {
      return fetchBase(url);
    },
    patch(url) {
      return fetchBase(url);
    },
    put(url) {
      return fetchBase(url);
    },
    delete(url) {
      return fetchBase(url);
    }
  };
};

async function fetchBase(url) {
  const urlObj = new URL(config.API_URL + url, location.origin);
  if (!urlObj.pathname.endsWith(".json")) {
    if (urlObj.pathname.endsWith("/")) {
      urlObj.pathname = urlObj.pathname.slice(0, urlObj.pathname.length - 1);
    }
    urlObj.pathname += ".json";
  }
  const res = await fetch(urlObj.href);
  const json = await res.json();
  return { data: { success: true, ...json, message: "", logs: "" } };
}
