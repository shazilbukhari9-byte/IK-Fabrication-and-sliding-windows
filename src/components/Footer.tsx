import { Mail, MapPin, Phone } from 'lucide-react'
import { business, mailHref, telHref } from '../data/business'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200/80 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                <span className="font-display font-bold text-white text-sm">IK</span>
              </div>
              <div className="leading-tight">
                <p className="font-display font-bold text-white text-base">IK Sliding Window</p>
                <p className="text-[11px] uppercase tracking-wider text-accent-400 font-medium">
                  ik fabrication and sliding window
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{business.tagline}</p>
          </div>

          <div>
            <p className="font-display font-semibold text-white mb-4">Quick Links</p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-accent-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold text-white mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 shrink-0" />
                <span>
                  {business.owner.name}
                  <br />
                  {business.owner.phones.map((phone, i) => (
                    <span key={phone}>
                      <a href={telHref(phone)} className="hover:text-accent-400 transition-colors">
                        {phone}
                      </a>
                      {i < business.owner.phones.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a
                  href={mailHref}
                  className="flex items-center gap-2 hover:text-accent-400 transition-colors"
                >
                  <Mail size={14} /> {business.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold text-white mb-4">Workshop</p>
            <p className="flex gap-2 text-sm leading-relaxed">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              {business.address}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-400/70">
          <p>© {new Date().getFullYear()} IK Sliding Window. All rights reserved.</p>
          <p>Manufacturers of Sliding Windows, Doors, Grills, Gates & Prefab Structures</p>
        </div>
      </div>
    </footer>
  )
}
