// Source asset is 1396x196; keep that aspect ratio when scaling by height.
const ASPECT_RATIO = 1396 / 196;

/**
 * Plant360.AI wordmark, served from the brand asset in /public.
 */
export function Logo({ height = 22 }: { height?: number }) {
  return (
    <img
      src="/plant360-ai-logo.png"
      alt="Plant360.AI"
      height={height}
      width={Math.round(height * ASPECT_RATIO)}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
