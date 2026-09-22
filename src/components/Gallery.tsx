import { useState } from 'react'
import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import { galleryImages } from '../data/gallery'
import Lightbox from './Lightbox'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Our Work
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-primary-950 dark:text-white text-balance">
            Recent installations across Pune
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              onClick={() => setActiveIndex(i)}
              className="group relative mb-5 w-full block overflow-hidden rounded-2xl bg-primary-100 dark:bg-primary-900/40 break-inside-avoid text-left"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ aspectRatio: img.aspect }}
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                  const placeholder = e.currentTarget.nextElementSibling as HTMLElement | null
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div
                style={{ aspectRatio: img.aspect }}
                className="hidden w-full items-center justify-center bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-800 dark:to-primary-900 text-primary-400 dark:text-primary-500 text-xs font-medium p-4 text-center"
              >
                {img.caption}
                <br />
                (photo pending)
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/0 to-primary-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="inline-flex items-center gap-1.5 text-white/70 text-xs mb-2">
                  <Expand size={13} /> View full size
                </span>
                <p className="text-white font-display font-semibold text-sm">{img.caption}</p>
                <span className="text-accent-300 text-xs mt-0.5">{img.category}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  )
}
