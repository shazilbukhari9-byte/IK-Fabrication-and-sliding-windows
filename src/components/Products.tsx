import { motion } from 'framer-motion'
import {
  DoorOpen,
  Grid3x3,
  LayoutTemplate,
  PanelsTopLeft,
  Sparkles,
  Wrench,
} from 'lucide-react'

const products = [
  {
    icon: PanelsTopLeft,
    title: 'Sliding Windows',
    desc: 'Smooth-glide aluminium sliding windows built to precise measurements for durability and weather resistance.',
  },
  {
    icon: DoorOpen,
    title: 'Sliding Doors',
    desc: 'Space-saving sliding doors for balconies, offices and homes — sturdy frames, silent tracks.',
  },
  {
    icon: Grid3x3,
    title: 'Grills & Safety Windows',
    desc: 'Custom safety grills that balance protection with ventilation and clean visual lines.',
  },
  {
    icon: Sparkles,
    title: 'Decorative Laser-Cut Gates',
    desc: 'Intricate laser-cut designs that turn a functional gate into a statement entrance.',
  },
  {
    icon: LayoutTemplate,
    title: 'Prefab Structures',
    desc: 'Fast-to-install prefabricated structures for sheds, cabins, site offices and extensions.',
  },
  {
    icon: Wrench,
    title: 'Custom Fabrication',
    desc: 'Have a unique requirement? We design and fabricate to your exact specifications.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Products() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            What We Build
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-primary-950 dark:text-white text-balance">
            Fabrication, engineered around your space
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl bg-white dark:bg-neutral-900 border border-primary-900/5 dark:border-white/5 p-7 shadow-sm hover:shadow-xl hover:shadow-primary-900/10 dark:hover:shadow-black/40 transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/40 flex items-center justify-center mb-5 group-hover:bg-accent-500 transition-colors duration-300">
                <p.icon
                  size={22}
                  strokeWidth={2}
                  className="text-primary-600 dark:text-primary-300 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-primary-950 dark:text-white mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-primary-700/80 dark:text-neutral-400 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
