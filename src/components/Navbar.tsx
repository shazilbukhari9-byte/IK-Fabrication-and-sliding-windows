import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { business, primaryPhone, telHref } from '../data/business'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  const menu = (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
          onClick={onClose}
        />
      )}
      {open && (
        <motion.div
          key="mobile-menu-drawer"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          className="lg:hidden fixed inset-y-0 right-0 h-dvh w-[78%] max-w-xs bg-neutral-50 dark:bg-neutral-900 z-[100] shadow-2xl flex flex-col overflow-y-auto pt-24 px-8 gap-1"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={onClose}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i + 0.1 }}
              className="py-4 text-lg font-display font-semibold text-primary-800 dark:text-neutral-100 border-b border-primary-900/5 dark:border-white/5"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href={telHref(primaryPhone)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 text-white px-5 py-3.5 text-sm font-semibold shadow-lg shrink-0"
          >
            <Phone size={16} strokeWidth={2.5} />
            Call {business.owner.name.split(' ')[0]}
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(menu, document.body)
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const scrollY = window.scrollY
    const { style } = document.body
    style.position = 'fixed'
    style.top = `-${scrollY}px`
    style.left = '0'
    style.right = '0'
    return () => {
      style.position = ''
      style.top = ''
      style.left = ''
      style.right = ''
      window.scrollTo(0, scrollY)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-lg shadow-md shadow-primary-900/5 border-b border-primary-900/5 dark:border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-18 py-3">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md">
              <span className="font-display font-bold text-white text-sm">IK</span>
            </div>
            <div className="leading-tight text-left">
              <p className="font-display font-bold text-primary-900 dark:text-white text-base">
                IK Sliding Window
              </p>
              <p className="text-[11px] uppercase tracking-wider text-accent-600 dark:text-accent-400 font-medium">
                ik fabrication and sliding window
              </p>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-primary-700 dark:text-neutral-200 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={telHref(primaryPhone)}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-accent-500/25 transition-all hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
            >
              <Phone size={16} strokeWidth={2.5} />
              Call Now
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-primary-800 dark:text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={24} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
