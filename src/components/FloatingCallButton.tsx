import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { primaryPhone, telHref } from '../data/business'

export default function FloatingCallButton() {
  return (
    <motion.a
      href={telHref(primaryPhone)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, type: 'spring', stiffness: 260, damping: 20 }}
      whileTap={{ scale: 0.92 }}
      className="lg:hidden fixed bottom-5 right-5 z-40 w-15 h-15 rounded-full bg-accent-500 text-white shadow-2xl shadow-accent-600/40 flex items-center justify-center"
      aria-label="Call Now"
    >
      <span className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-40" />
      <Phone size={24} strokeWidth={2.25} className="relative" />
    </motion.a>
  )
}
