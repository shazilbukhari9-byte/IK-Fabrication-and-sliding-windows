import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { business, mailHref, telHref } from '../data/business'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name || 'Website Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`,
    )
    window.location.href = `${mailHref}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const fields: { key: keyof typeof form; label: string; type: string; textarea?: boolean }[] = [
    { key: 'name', label: 'Your Name', type: 'text' },
    { key: 'phone', label: 'Phone Number', type: 'tel' },
    { key: 'message', label: 'Tell us what you need', type: 'text', textarea: true },
  ]

  return (
    <section id="contact" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-primary-950 dark:text-white text-balance">
            Let's talk about your project
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-primary-900/5 dark:border-white/5 p-6 flex gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary-50 dark:bg-primary-900/40 flex items-center justify-center">
                <MapPin size={20} className="text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <p className="font-display font-semibold text-primary-950 dark:text-white mb-1">
                  Workshop Address
                </p>
                <p className="text-sm text-primary-700/80 dark:text-neutral-400">
                  {business.address}
                </p>
              </div>
            </div>

            {business.owners.map((owner) => (
              <a
                key={owner.phone}
                href={telHref(owner.phone)}
                className="rounded-2xl bg-white dark:bg-neutral-900 border border-primary-900/5 dark:border-white/5 p-6 flex gap-4 items-center hover:border-accent-400/50 hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary-50 dark:bg-primary-900/40 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <Phone size={20} className="text-primary-600 dark:text-primary-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-display font-semibold text-primary-950 dark:text-white">
                    {owner.name}
                  </p>
                  <p className="text-sm text-primary-700/80 dark:text-neutral-400">+91 {owner.phone}</p>
                </div>
              </a>
            ))}

            <a
              href={mailHref}
              className="rounded-2xl bg-white dark:bg-neutral-900 border border-primary-900/5 dark:border-white/5 p-6 flex gap-4 items-center hover:border-accent-400/50 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary-50 dark:bg-primary-900/40 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                <Mail size={20} className="text-primary-600 dark:text-primary-300 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-display font-semibold text-primary-950 dark:text-white">Email</p>
                <p className="text-sm text-primary-700/80 dark:text-neutral-400">{business.email}</p>
              </div>
            </a>

            <div className="rounded-2xl overflow-hidden border border-primary-900/5 dark:border-white/5 h-52">
              <iframe
                title="IK Sliding Window Location"
                src="https://www.google.com/maps?q=Hinjewadi+Phase+3,+Pune,+Maharashtra+411057&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl bg-white dark:bg-neutral-900 border border-primary-900/5 dark:border-white/5 p-8 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                  >
                    <CheckCircle2 size={56} className="text-accent-500 mb-4" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-primary-950 dark:text-white">
                    Opening your email app…
                  </h3>
                  <p className="text-sm text-primary-700/70 dark:text-neutral-400 mt-2 max-w-sm">
                    We've pre-filled your message — just hit send from your email client to
                    reach us.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {fields.map((field) => (
                    <div key={field.key} className="relative">
                      <label
                        htmlFor={field.key}
                        className="block text-sm font-medium text-primary-800 dark:text-neutral-300 mb-2"
                      >
                        {field.label}
                      </label>
                      {field.textarea ? (
                        <motion.textarea
                          id={field.key}
                          required
                          rows={4}
                          value={form[field.key]}
                          onFocus={() => setFocused(field.key)}
                          onBlur={() => setFocused(null)}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          animate={{
                            borderColor: focused === field.key ? '#C17A3D' : 'rgba(60,90,118,0.15)',
                          }}
                          className="w-full rounded-xl border-2 bg-neutral-50 dark:bg-neutral-800 dark:text-white px-4 py-3 text-sm outline-none resize-none transition-colors"
                        />
                      ) : (
                        <motion.input
                          id={field.key}
                          type={field.type}
                          required
                          value={form[field.key]}
                          onFocus={() => setFocused(field.key)}
                          onBlur={() => setFocused(null)}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          animate={{
                            borderColor: focused === field.key ? '#C17A3D' : 'rgba(60,90,118,0.15)',
                          }}
                          className="w-full rounded-xl border-2 bg-neutral-50 dark:bg-neutral-800 dark:text-white px-4 py-3 text-sm outline-none transition-colors"
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 font-semibold shadow-lg shadow-accent-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Send size={16} />
                    Send Enquiry
                  </button>
                  <p className="text-xs text-primary-600/60 dark:text-neutral-500">
                    Opens your email app with the message pre-filled to {business.email}.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
