'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import type { Dictionary } from '@/i18n/dictionaries';

interface QuoteFormProps {
  locale: string;
  dict: Dictionary;
}

export default function QuoteForm({ locale, dict }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const serviceOptions = [
    { value: 'indoor', label: dict.quote.serviceOptions.indoor },
    { value: 'outdoor', label: dict.quote.serviceOptions.outdoor },
    { value: 'dvr', label: dict.quote.serviceOptions.dvr },
    { value: 'mobile', label: dict.quote.serviceOptions.mobile },
    { value: 'maintenance', label: dict.quote.serviceOptions.maintenance },
    { value: 'full', label: dict.quote.serviceOptions.full },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          service_type: formData.service,
          message: formData.description,
          form_type: 'quote',
          locale,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: '', description: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {dict.quote.form.name}
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={dict.quote.form.namePlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {dict.quote.form.phone}
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={dict.quote.form.phonePlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {dict.quote.form.email}
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder={dict.quote.form.emailPlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {dict.quote.form.service}
        </label>
        <select
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 outline-none bg-white"
        >
          <option value="">{dict.quote.form.servicePlaceholder}</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {dict.quote.form.description}
        </label>
        <textarea
          required
          rows={5}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder={dict.quote.form.descriptionPlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 outline-none resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green/10 text-green rounded-lg font-medium">
          {dict.quote.form.success}
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-100 text-red-600 rounded-lg font-medium">
          {dict.quote.form.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-secondary text-white font-semibold py-4 px-8 rounded-lg hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/25"
      >
        {status === 'loading' ? dict.quote.form.submitting : dict.quote.form.submit}
      </button>
    </form>
  );
}
