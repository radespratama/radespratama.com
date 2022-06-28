import Image from 'next/image';

export default function ImageReus({ src, alt, imgClass, size }) {
  return (
    <div className={`relative ${size}`}>
      <Image
        src={src}
        alt={alt}
        className={`${imgClass} z-[2]`}
        objectFit="cover"
        layout="fill"
      />
    </div>
  );
}
