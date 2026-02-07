'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service...' },
  { value: 'Marketing Strategy', label: 'Marketing Strategy' },
  { value: 'Corporate Gifting', label: 'Corporate Gifting' },
  { value: 'Both Services', label: 'Both Services' },
  { value: 'Other', label: 'Other' },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  }),
};

const messageVariants = {
  initial: { opacity: 0, y: -16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

const NEXT_STEPS = [
  { num: 1, text: 'We review your goals' },
  { num: 2, text: 'A strategist calls within 24h' },
  { num: 3, text: 'You get a custom strategy deck' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          service: formData.service,
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      setStatus('success');

      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputFocusClass =
    'transition-all duration-300 focus:scale-[1.01] focus:outline-none focus:ring-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
            Your Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-white/80 text-ink placeholder:text-[rgba(76,70,63,0.6)] ${
              errors.name ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-line focus:ring-primary/20 focus:border-primary'
            } ${inputFocusClass}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </motion.div>
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
        >
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
            Your Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-white/80 text-ink placeholder:text-[rgba(76,70,63,0.6)] ${
              errors.email ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-line focus:ring-primary/20 focus:border-primary'
            } ${inputFocusClass}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
        >
          <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border border-line bg-white/80 text-ink placeholder:text-[rgba(76,70,63,0.6)] focus:ring-primary/20 focus:border-primary ${inputFocusClass}`}
          />
        </motion.div>
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={3}
        >
          <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">
            Service <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              aria-required="true"
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? 'service-error' : undefined}
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-white/80 text-ink appearance-none pr-10 ${
                !formData.service ? 'text-[rgba(76,70,63,0.6)]' : ''
              } ${
                errors.service ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-line focus:ring-primary/20 focus:border-primary'
              } ${inputFocusClass}`}
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value} disabled={option.value === ''}>
                  {option.label}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {errors.service && (
            <p id="service-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.service}
            </p>
          )}
        </motion.div>
      </div>
      <motion.div
        variants={fieldVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={4}
      >
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
          Your Message
          {formData.message.length > 0 && (
            <span className="text-ink-muted font-normal ml-2">({formData.message.length}/2000)</span>
          )}
        </label>
        <textarea
          id="message"
          name="message"
          aria-describedby={undefined}
          placeholder="Optional — tell us about your project"
          rows={4}
          maxLength={2000}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border border-line bg-white/80 text-ink placeholder:text-[rgba(76,70,63,0.6)] focus:ring-primary/20 focus:border-primary ${inputFocusClass}`}
        />
      </motion.div>

      {/* Success / Error Messages */}
      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            key="success"
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-4 bg-green-50 border border-green-200 rounded-lg"
            role="alert"
          >
            <div className="flex items-center gap-2 text-green-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">You&apos;re in good hands.</span>
            </div>
            <p className="mt-1 text-sm text-green-600">A strategist will reach out within 24 hours to discuss your goals.</p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            key="error"
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-4 bg-red-50 border border-red-200 rounded-lg"
            role="alert"
          >
            <div className="flex items-center gap-2 text-red-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="font-medium">Something went wrong</span>
            </div>
            <p className="mt-1 text-sm text-red-600">Please try again later or contact us directly.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={fieldVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={5}
      >
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full py-4 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Get My Custom Strategy</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </button>
      </motion.div>

      {/* What happens next? */}
      <motion.div
        variants={fieldVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={6}
        className="space-y-3"
      >
        <p className="text-xs text-center text-ink-muted font-medium uppercase tracking-wider">
          What happens next?
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {NEXT_STEPS.map((step, i) => (
            <div key={step.num} className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold shrink-0">
                {step.num}
              </span>
              <span className="text-xs text-ink-muted">{step.text}</span>
              {i < NEXT_STEPS.length - 1 && (
                <svg className="w-3 h-3 text-ink-muted/40 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Trust text */}
        <p className="text-xs text-center text-ink-muted">
          No spam. No obligation. Just strategy.
        </p>
      </motion.div>

      <div className="flex items-center justify-center gap-2 text-center text-sm text-ink-muted">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>We&apos;ll get back to you within <span className="font-semibold">24 hours</span></span>
      </div>
    </form>
  );
}
