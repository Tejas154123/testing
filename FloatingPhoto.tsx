import React from 'react';
import { ImageSlot } from './ImageSlot';

interface FloatingPhotoProps {
  id: string;
  src: string;
  alt: string;
  rotation: string;
  className?: string;
  onImageChange?: (newUrl: string) => void;
}

export const FloatingPhoto: React.FC<FloatingPhotoProps> = ({
  id,
  src,
  alt,
  rotation,
  className = '',
  onImageChange,
}) => {
  return (
    <div
      id={`floating-photo-${id}`}
      className={`border-[2.5px] border-black bg-white brutal-shadow-sm p-1 transition-all duration-200 hover:scale-110 hover:z-30 hover:rotate-0 ${rotation} ${className}`}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 overflow-hidden bg-neutral-100">
        <ImageSlot
          id={id}
          src={src}
          alt={alt}
          className="w-full h-full"
          onImageChange={onImageChange}
        />
      </div>
    </div>
  );
};
