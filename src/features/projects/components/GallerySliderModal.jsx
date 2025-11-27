import { RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { useEffect, useState } from "react";

function getYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.searchParams.has("v")) return u.searchParams.get("v");
    if (u.pathname.includes("/embed/")) return u.pathname.split("/embed/").pop();
    return null;
  } catch {
    return null;
  }
}

export default function GallerySliderModal({ images = [], startIndex = 0, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const [loadedIframes, setLoadedIframes] = useState(new Set());

  useEffect(() => {
    setCurrent(startIndex);
  }, [startIndex]);

  // When modal opens and current is a video, mark as loaded (so iframe is created)
  useEffect(() => {
    const id = getYouTubeId(images[current] || "");
    if (id) {
      setLoadedIframes((s) => new Set(s).add(current));
    }
  }, [current, images]);

  const isVideo = (url) => !!getYouTubeId(url);

  const prev = () => setCurrent((v) => (v - 1 + images.length) % images.length);
  const next = () => setCurrent((v) => (v + 1) % images.length);

  // keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <dialog
      open
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 h-full w-full"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[1118px] h-[80vh] ring-3 ring-[#461901] shadow-[10px_10px_0px_#461901] bg-yellow-50 flex flex-col">
        {/* header */}
        <div className="p-3 bg-orange-400 ring-3 ring-[#461901] flex justify-between items-center">
          <span className="font-bold text-orange-950">Galeria</span>
          <RiCloseLine size={24} className="cursor-pointer text-orange-900" onClick={onClose} />
        </div>

        {/* content */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden">
          {/* Prev */}
          <RiArrowLeftSLine
            size={48}
            className="absolute left-4 text-orange-800 cursor-pointer z-20"
            onClick={prev}
          />

          {/* Media area with fade transition */}
          <div className="w-full h-full flex items-center justify-center p-4">
            <div
              key={current}
              className="max-h-full max-w-full flex items-center justify-center transition-opacity duration-500 ease-in-out"
              style={{ width: "100%" }}
            >
              {isVideo(images[current]) ? (
                loadedIframes.has(current) ? (
                  <iframe
                    title={`video-${current}`}
                    src={`https://www.youtube.com/embed/${getYouTubeId(images[current])}?rel=0&showinfo=0`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  // placeholder thumbnail that loads iframe when clicked
                  <div className="w-full h-full flex items-center justify-center">
                    <button
                      onClick={() => setLoadedIframes((s) => new Set(s).add(current))}
                      className="flex flex-col items-center gap-2"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${getYouTubeId(images[current])}/hqdefault.jpg`}
                        alt="video-thumb"
                        className="max-h-[70vh] object-contain"
                        loading="lazy"
                      />
                      <div className="mt-3 px-4 py-2 ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] bg-orange-400 text-orange-950 font-semibold">
                        Abrir vídeo
                      </div>
                    </button>
                  </div>
                )
              ) : (
                <img
                  src={images[current]}
                  alt={`img-${current}`}
                  className="max-h-[75vh] max-w-full object-contain transition-opacity duration-500"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* Next */}
          <RiArrowRightSLine
            size={48}
            className="absolute right-4 text-orange-800 cursor-pointer z-20"
            onClick={next}
          />
        </div>

        {/* thumbs small strip */}
        <div className="p-3 border-t border-orange-200 overflow-x-auto flex gap-3">
          {images.map((it, idx) => {
            const vid = getYouTubeId(it);
            const thumb = vid ? `https://img.youtube.com/vi/${vid}/mqdefault.jpg` : it;
            return (
              <div
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-24 h-16 shrink-0 cursor-pointer ring-3 ring-[#461901] overflow-hidden ${
                  idx === current ? "shadow-[4px_4px_0px_#461901] scale-105" : "opacity-90"
                } transition-all duration-300`}
              >
                <img src={thumb} alt={`t-${idx}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>
    </dialog>
  );
}