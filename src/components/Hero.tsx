import { motion } from 'framer-motion'
import { ArrowDown, PhoneCall } from 'lucide-react'
import { primaryPhone, telHref } from '../data/business'

const headline = ['Precision-Crafted', 'Sliding Windows', '& Doors, Built to Last.']

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
}

const word = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Mesh / gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-50 via-primary-50 to-accent-50 dark:from-neutral-950 dark:via-primary-950 dark:to-neutral-950" />
      <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-accent-300/30 dark:bg-accent-500/10 blur-[100px] -z-10" />
      <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-primary-300/30 dark:bg-primary-500/10 blur-[100px] -z-10" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#3C5A76 1px, transparent 1px), linear-gradient(90deg, #3C5A76 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/5 border border-primary-900/10 dark:border-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-accent-300 mb-6 backdrop-blur-sm"
          >
            Hinjewadi Phase-3 · Pune
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-balance text-primary-950 dark:text-white"
          >
            {headline.map((line, li) => (
              <span key={li} className="block overflow-hidden pb-1">
                <motion.span variants={word} className="inline-block">
                  {li === 1 ? (
                    <span className="text-accent-500">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-lg text-primary-700/90 dark:text-neutral-300 max-w-lg text-balance"
          >
            KGN Enterprises fabricates sliding windows, doors, grills, decorative gates
            and prefab structures — precision-cut, direct from our Hinjewadi workshop,
            straight to your site.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={telHref(primaryPhone)}
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-7 py-3.5 font-semibold shadow-xl shadow-accent-500/25 transition-all hover:shadow-2xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
            >
              <PhoneCall size={18} strokeWidth={2.5} />
              Get a Free Quote
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full bg-transparent border-2 border-primary-500/30 dark:border-white/20 hover:border-primary-500 dark:hover:border-white/50 text-primary-800 dark:text-white px-7 py-3.5 font-semibold transition-all hover:-translate-y-0.5"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="mt-10 flex items-center gap-6 text-sm text-primary-600 dark:text-neutral-400"
          >
            <div>
              <span className="font-display font-bold text-2xl text-primary-900 dark:text-white">15+</span>
              <p>Years Active</p>
            </div>
            <div className="w-px h-8 bg-primary-900/10 dark:bg-white/10" />
            <div>
              <span className="font-display font-bold text-2xl text-primary-900 dark:text-white">500+</span>
              <p>Installations</p>
            </div>
            <div className="w-px h-8 bg-primary-900/10 dark:bg-white/10" />
            <div>
              <span className="font-display font-bold text-2xl text-primary-900 dark:text-white">100%</span>
              <p>Owner-Run</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <SlidingWindowGraphic />
        </motion.div>
      </div>

      <motion.a
        href="#products"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-500 dark:text-neutral-400"
        aria-label="Scroll down"
      >
        <span className="text-[11px] uppercase tracking-widest font-medium">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}

function SlidingWindowGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary-600 to-primary-800 shadow-2xl shadow-primary-900/30 animate-float" />
      <div className="absolute inset-6 rounded-[2rem] border-4 border-primary-300/40 overflow-hidden bg-gradient-to-b from-sky-200/40 to-primary-200/20">
        {/* window frame grid */}
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="border-r-4 border-primary-300/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 via-transparent to-transparent" />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary-300/40 -translate-y-1/2" />

        {/* sliding accent panel animation */}
        <motion.div
          className="absolute top-4 bottom-4 w-1/2 rounded-lg bg-accent-400/20 border-2 border-accent-400/50"
          animate={{ left: ['4%', '48%', '4%'] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        />
      </div>
      <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl bg-accent-500 shadow-xl shadow-accent-500/40 flex items-center justify-center rotate-6">
        <span className="font-display font-bold text-white text-center text-sm leading-tight -rotate-6">
          Built to
          <br />
          Measure
        </span>
      </div>
    </div>
  )
}
