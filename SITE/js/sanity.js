const SANITY_PROJECT_ID = "vl89okmp";
const SANITY_DATASET = "production";
const SANITY_API_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}`;

async function sanityFetch(query) {
  const url = `${SANITY_API_URL}?query=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    if (!response.ok) {
      const errMsg = data?.error?.description || `HTTP ${response.status}`;
      throw new Error(`Sanity API : ${errMsg}`);
    }
    return data?.result ?? data;
  } catch (err) {
    console.error("sanityFetch error:", err);
    throw err;
  }
}

function imageUrl(assetOrUrl, width = 800) {
  const placeholder =
    "https://via.placeholder.com/800x400?text=Image+non+disponible";
  if (!assetOrUrl) return placeholder;
  if (typeof assetOrUrl === "string")
    return `${assetOrUrl}?w=${width}&auto=format`;
  if (assetOrUrl.url) return `${assetOrUrl.url}?w=${width}&auto=format`;
  return placeholder;
}
