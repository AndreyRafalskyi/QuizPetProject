export const DOMFormatString = (str: string) => {
  return new DOMParser().parseFromString(str, "text/html").body.textContent || "";
};
