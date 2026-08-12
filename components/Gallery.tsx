import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Clinic"
            title="A Look Inside"
            description="A calm, clean and modern space designed with your comfort in mind."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[13rem]">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={(index % 3) * 80}
              className={
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 1 || index === 2
                    ? "md:col-start-3"
                    : ""
              }
            >
              <figure className="group relative h-full overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] md:absolute md:inset-0 md:aspect-auto">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 66vw, 100vw"
                        : "(min-width: 1024px) 33vw, 100vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <figcaption className="absolute inset-x-4 bottom-4 translate-y-1 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
