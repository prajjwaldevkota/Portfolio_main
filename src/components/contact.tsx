"use client"

import { useState, useCallback, useEffect } from "react"
import { Mail, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "03dec271-8971-4ef7-a7b0-e90b5afd4d95",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  useEffect(() => {
    const saved = localStorage.getItem("contactFormData")
    if (saved) {
      try {
        setFormData((prev) => ({ ...prev, ...JSON.parse(saved) }))
      } catch {}
    }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => {
      localStorage.setItem("contactFormData", JSON.stringify(formData))
    }, 1000)
    return () => clearTimeout(t)
  }, [formData])

  const validateEmail = useCallback((email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), [])

  const validate = useCallback(() => {
    const e: typeof errors = {}
    if (!formData.name.trim()) e.name = "Name is required"
    if (!formData.email.trim()) e.email = "Email is required"
    else if (!validateEmail(formData.email)) e.email = "Invalid email"
    if (!formData.message.trim()) e.message = "Message is required"
    else if (formData.message.trim().length < 10) e.message = "At least 10 characters"
    setErrors(e)
    return Object.keys(e).length === 0
  }, [formData, validateEmail])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setSubmitStatus(null)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "", access_key: formData.access_key })
        localStorage.removeItem("contactFormData")
        setErrors({})
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-lg text-zinc-200 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label mb-4">LET&apos;S WORK TOGETHER</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Left — Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3">Get in Touch</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Choose your preferred method to connect and let&apos;s discuss your project.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:devkota.prj@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                  <Mail className="h-4 w-4 text-zinc-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-200">devkota.prj@gmail.com</p>
                  <p className="text-xs text-zinc-500">Quick inquiries & questions</p>
                </div>
              </a>
            </div>

            <p className="text-xs text-zinc-600">
              Response within 24 hours · Available for hire
            </p>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-lg font-semibold text-zinc-200 mb-1">Send a Message</h3>
              <p className="text-xs text-zinc-500 mb-6">
                Fill out the form and I&apos;ll get back to you within 24 hours.
              </p>

              {submitStatus === "success" && (
                <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4" />
                  Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-2 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  Failed to send. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
