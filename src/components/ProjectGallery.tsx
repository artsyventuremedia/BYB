import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProjectGallery({
  title,
  images,
  columns = 2,
}: {
  title: string;
  images: string[];
  columns?: 1 | 2;
}) {
  if (!images.length) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4",
        columns === 2 && "md:grid-cols-2 md:gap-5"
      )}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className={cn(
            "relative aspect-[4/5] overflow-hidden rounded-lg bg-ink",
            columns === 2 && i % 3 === 0 && "aspect-[16/9] md:col-span-2"
          )}
        >
          <Image
            src={src}
            alt={`${title} — image ${i + 1}`}
            fill
            sizes={columns === 1 ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
