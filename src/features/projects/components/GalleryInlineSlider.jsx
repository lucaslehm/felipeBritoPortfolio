import { RiPlayCircleFill } from "@remixicon/react";

function getYouTubeId(url) {
  try {
    // vários formatos suportados
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.searchParams.has("v")) return u.searchParams.get("v");
    if (u.pathname.includes("/embed/")) return u.pathname.split("/embed/").pop();
    return null;
  } catch {
    return null;
  }
}

export default function GalleryInlineSlider({ galery = [], onClickItem = () => {} }) {
  const isVideo = (url) => !!getYouTubeId(url);

  if (!galery || galery.length === 0)
    return null;

  return (
    <div
      className="flex gap-4 overflow-x-auto py-2 snap-x snap-mandatory"
      style={{ scrollBehavior: "smooth" }}
    >
      {galery.map((item, i) => {
        const vid = getYouTubeId(item);
        const thumb = vid
          ? `https://img.youtube.com/vi/${vid}/hqdefault.jpg`
          : item;

        return (
          <div
            key={i}
            onClick={() => onClickItem(i)}
            className="relative w-36 h-24 shrink-0 snap-start cursor-pointer ring-3 ring-[#461901] shadow-[4px_4px_0px_#461901] bg-orange-100 overflow-hidden transform transition-all duration-300 hover:scale-105"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onClickItem(i)}
          >
            <img
              src={thumb}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {isVideo(item) && (
              <RiPlayCircleFill
                size={30}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-600"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}