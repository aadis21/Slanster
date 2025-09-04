// Slanster/src/components/DlansterDashboard/cvBuilder/utils/link.utils.ts
import { URL_REGEX } from "../constants/regex.constants";

export const websiteLinkCreator = (url: string): string => {
  let parsedURL = "";
  if (url.startsWith("http") && URL_REGEX.test(url)) {
    return url;
  }
  const withHTTP = url.startsWith("http://") || url.startsWith("https://");
  const withWWW = url.startsWith("www.");

  if (!withHTTP && withWWW) return parsedURL.concat("https://", url);
  if (!withHTTP && !withWWW) return parsedURL.concat("https://", url);

  return "Invalid Link";
};

export const resolvedWebsiteLink = (link: string): string => {
  if (URL_REGEX.test(link)) {
    try {
      const url = new URL(link);
      return url.hostname;
    } catch {
      return "Invalid Link";
    }
  }
  return "Invalid Link";
};
