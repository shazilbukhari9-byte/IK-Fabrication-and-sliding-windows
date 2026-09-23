import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const stats = [
  { value: 15, suffix: '+', label: 'Years Active' },
  { value: 500, suffix: '+', label: 'Installations Done' },
  { value: 8, suffix: '', label: 'Skilled Team Members' },
  { value: 25, suffix: 'km', label: 'Service Radius in Pune' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="font-display font-bold text-4xl sm:text-5xl text-white">
      {display}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            About Us
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-primary-950 dark:text-white text-balance">
            A hands-on workshop, run by the people who build your order
          </h2>
          <div className="mt-6 space-y-4 text-primary-700/90 dark:text-neutral-300 leading-relaxed">
            <p>
              IK Sliding Window, trading as ik fabrication and sliding window, is a Hinjewadi-based
              fabrication workshop owned and run by Irfan Khan. What
              started as a small local operation has grown into a trusted name for
              sliding windows, doors, grills, decorative gates and prefab structures
              across Pune.
            </p>
            <p>
              Every order — from a single window to a full building's façade — passes
              through the same hands that measure, cut, weld and install it. That's the
              difference between a factory catalogue and a workshop that actually knows
              your site.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Owner-Run', 'Hinjewadi-Based', 'Site-to-Site Service'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-200 text-xs font-semibold px-4 py-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/20 border-4 border-white dark:border-neutral-800">
            <img
              src="/gallery/workshop-storefront.jpg"
              alt="IK Sliding Window workshop storefront in Hinjewadi Phase-3, Pune"
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-6 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-900 p-10 sm:p-12 shadow-2xl shadow-primary-900/20 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent-400/20 blur-2xl" />
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 relative">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-1 text-primary-200/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
