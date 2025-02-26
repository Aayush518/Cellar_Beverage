interface ProductGalleryProps {
  images: string[];
  activeIndex: number;
  onImageSelect: (index: number) => void;
}

export function ProductGallery({ images, activeIndex, onImageSelect }: ProductGalleryProps) {
  return (
    <div className="grid grid-cols-5 gap-4 mt-12">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onImageSelect(index)}
          className={`relative group overflow-hidden rounded-lg ${
            index === activeIndex ? 'ring-2 ring-amber-500' : ''
          }`}
        >
          <img
            src={image}
            alt={`Product view ${index + 1}`}
            className={`w-full aspect-square object-cover transition-all duration-300 ${
              index === activeIndex ? '' : 'opacity-50 group-hover:opacity-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      ))}
    </div>
  );
}