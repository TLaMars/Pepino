/**
 * Detects if the current platform is macOS using modern Client Hints API with fallback
 */
const isMacOS = () => {
  // Try modern Client Hints API first
  if (typeof navigator !== "undefined" && "userAgentData" in navigator) {
    return (
      (navigator as any).userAgentData?.platform?.toLowerCase() === "macos"
    );
  }
  // Fallback to userAgent
  return (
    typeof navigator !== "undefined" && /macintosh/i.test(navigator.userAgent)
  );
};

export default isMacOS;
