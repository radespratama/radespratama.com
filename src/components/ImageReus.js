import Image from "next/image";

export default function ImageReus({
  src, alt, imgClass, size,
}) {
  return (
    <div className={`relative ${size}`}>
      <Image src={src} alt={alt} className={`${imgClass} z-[2]`} objectFit="cover" layout="fill" />
      <div className="h-36 w-36 md:w-40 md:h-40 rounded-full border-4 border-dashed border-white dark:border-gray-950 absolute top-2 left-3 z-[1]" />
    </div>
  );
}
