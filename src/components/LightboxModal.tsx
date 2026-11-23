import {useEffect} from 'react';
import {ChevronLeft, ChevronRight, X} from 'lucide-react';
import type {GalleryPhoto} from '../data/portfolioData';
import {ResilientImage} from './ResilientImage';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function LightboxModal({
  photos,
  activeIndex,
  onClose,
  onSelectIndex,
}: LightboxModalProps) {
  const isOpen = activeIndex !== null && photos[activeIndex] !== undefined;
  const current = isOpen ? photos[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight' && activeIndex !== null) {
        onSelectIndex((activeIndex + 1) % photos.length);
      } else if (event.key === 'ArrowLeft' && activeIndex !== null) {
        onSelectIndex((activeIndex - 1 + photos.length) % photos.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeIndex, photos.length, onClose, onSelectIndex]);

  if (!isOpen || !current || activeIndex === null) {
    return null;
  }

  const handlePrev = () => {
    onSelectIndex((activeIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    onSelectIndex((activeIndex + 1) % photos.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.caption}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#061226]/92 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl flex flex-col gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 text-white">
          <div className="min-w-0">
            <p className="text-xs text-blue-200/80 truncate">{current.category}</p>
            <p className="text-sm sm:text-base font-medium text-white truncate">
              {current.caption}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-xs tabular-nums text-blue-100/75 px-2">
              {activeIndex + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup tampilan foto"
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center rounded-xl bg-[#040D1C]/70 border border-white/12 overflow-hidden max-h-[75vh] min-h-[320px]">
          <ResilientImage
            src={current.src}
            alt={current.alt}
            fallbackTitle={current.caption}
            className="max-h-[74vh] w-auto max-w-full object-contain select-none"
          />

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Foto sebelumnya"
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#07162E]/80 hover:bg-[#0B2C5D] text-white border border-white/15 transition-colors focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Foto berikutnya"
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#07162E]/80 hover:bg-[#0B2C5D] text-white border border-white/15 transition-colors focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
