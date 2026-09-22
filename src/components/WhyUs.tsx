import { motion } from 'framer-motion'
import { Handshake, MapPin, Ruler, Settings2 } from 'lucide-react'

const points = [
  {
    icon: Ruler,
    title: 'Precision-Cut Frames',
    desc: 'Every frame is measured and cut to millimetre accuracy in our own workshop, so installation is fast and gaps are non-existent.',
  },
  {
    icon: Handshake,
    title: 'Direct-From-Workshop Pricing',
    desc: 'No middlemen, no dealer markup — you deal with the fabricators, which means honest pricing on every job.',
  },
  {
    icon: MapPin,
    title: 'Local to Hinjewadi, Pune',
    desc: 'Based right in Hinjewadi Phase-3, we can turn around site visits and measurements quickly across Pune.',
  },
  {
    icon: Settings2,
    title: 'Full-Service, Start to Finish',
    desc: 'From measurement to fabrication to on-site installation — one team handles the entire process.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-primary-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-primary-500/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-white text-balance">
            An owner-run workshop that treats every job like it's ours
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="flex gap-5"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <point.icon size={24} className="text-accent-400" strokeWidth={1.75} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display font-bold text-accent-400/60 text-sm">
                    0{i + 1}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-primary-200/80 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
