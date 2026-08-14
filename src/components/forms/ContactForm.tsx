'use client';

import { useState, FormEvent } from 'react';
import { COMPANY } from '@/lib/constants';
import type { Dictionary } from '@/i18n/dictionaries';

interface ContactFormProps {
  dict: Dictionary;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const whatsappMessage = encodeURIComponent(
        `السلام عليكم، أريد التواصل معكم\n\nالاسم: ${formData.name}\nرقم الهاتف: ${formData.phone}\nالرسالة:\n${formData.message}`
      );

      if (typeof window !== 'undefined') {
        window.open(`${COMPANY.whatsappLink}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
      }

      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full min-h-12 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-base';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
            {dict.contact.form.name}
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={dict.contact.form.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">
            {dict.contact.form.phone}
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={dict.contact.form.phonePlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
          {dict.contact.form.message}
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={dict.contact.form.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'success' && (
        <div role="status" aria-live="polite" className="p-4 bg-green/10 text-green rounded-lg font-medium">
          {dict.contact.form.success}
        </div>
      )}
      {status === 'error' && (
        <div role="alert" className="p-4 bg-red-100 text-red-600 rounded-lg font-medium">
          {dict.contact.form.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full min-h-12 bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? dict.contact.form.submitting : dict.contact.form.submit}
      </button>
    </form>
  );
}
