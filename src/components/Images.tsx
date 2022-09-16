import Image from "next/image";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  size: string;
  onBlur?: boolean;
}

export default function Images({
  src,
  alt,
  className,
  size,
  onBlur,
}: ImageProps) {
  return (
    <div className={`relative cursor-pointer ${size}`}>
      <Image
        src={src}
        alt={alt}
        className={`${className} z-[2] ${onBlur && "unblur"}`}
        objectFit="cover"
        layout="fill"
        loading="lazy"
      />
    </div>
  );
}
