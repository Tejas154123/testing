import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface ImageSlotProps {
  id: string;
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  onImageChange?: (newUrl: string) => void;
  aspectRatio?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  id,
  src,
  alt,
  className = '',
  imgClassName = '',
  onImageChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onImageChange) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageChange(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id={`slot-container-${id}`} className={`relative group overflow-hidden ${className}`}>
      <img
        id={`img-${id}`}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-200 group-hover:scale-102 ${imgClassName}`}
      />
      {onImageChange && (
        <button
          id={`btn-upload-${id}`}
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title="Click to replace with your original Figma image"
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-1.5 cursor-pointer backdrop-blur-[1px] p-2"
        >
          <Upload className="w-5 h-5 text-yellow-300 animate-bounce" />
          <span className="text-[11px] font-pixel tracking-wide text-yellow-200 bg-black/80 px-2 py-1 border border-black rounded">
            REPLACE IMAGE
          </span>
        </button>
      )}
      <input
        ref={fileInputRef}
        id={`file-input-${id}`}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};
