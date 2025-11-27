import { useState } from "react";
import GalleryInlineSlider from "./GalleryInlineSlider";
import GallerySliderModal from "./GallerySliderModal";

export default function ProjectCard({
  projetcName,
  projectDescription,
  projectCoverURL,
  projectGalery = [],
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <>
      {modalOpen && (
        <GallerySliderModal
          images={projectGalery}
          startIndex={startIndex}
          onClose={() => setModalOpen(false)}
        />
      )}

      <div className="ring-3 ring-[#461901] shadow-[7px_7px_0px_#461901] bg-yellow-50 p-6">
        <div className="flex gap-8 items-start max-w-[1118px] w-full mx-auto
                        md:flex-row flex-col">
          {/* LEFT - COVER */}
          <div className="w-[420px] h-[300px] md:w-80 md:h-60 shrink-0 ring-3 ring-[#461901] overflow-hidden">
            <img
              src={projectCoverURL}
              alt={projetcName}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* RIGHT - TEXT + SLIDER */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-orange-800 text-2xl font-bold">{projetcName}</h2>
              <p className="text-orange-900 mt-3">{projectDescription}</p>
            </div>

            <div className="mt-4">
              <GalleryInlineSlider
                galery={projectGalery}
                onClickItem={(i) => {
                  setStartIndex(i);
                  setModalOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
