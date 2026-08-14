'use client';

import { useState, FormEvent } from 'react';
import { COMPANY } from '@/lib/constants';
import type { Dictionary } from '@/i18n/dictionaries';

interface QuoteFormProps {
  dict: Dictionary;
}

export default function QuoteForm({ dict }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    description: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const serviceOptions = [
    { value: 'indoor', label: dict.quote.serviceOptions.indoor },
    { value: 'outdoor', label: dict.quote.serviceOptions.outdoor },
    { value: 'dvr', label: dict.quote.serviceOptions.dvr },
    { value: 'wifi', label: dict.quote.serviceOptions.wifi },
    { value: 'mobile', label: dict.quote.serviceOptions.mobile },
    { value: 'maintenance', label: dict.quote.serviceOptions.maintenance },
    { value: 'full', label: dict.quote.serviceOptions.full },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const selectedService = serviceOptions.find((option) => option.value === formData.service)?.label || formData.service;
      const whatsappMessage = encodeURIComponent(
        `السلام عليكم، أريد طلب عرض سعر\n\nالاسم: ${formData.name}\nرقم الهاتف: ${formData.phone}\nالخدمة: ${selectedService}\nالوصف:\n${formData.description}`
      );

      if (typeof window !== 'undefined') {
        window.open(`${COMPANY.whatsappLink}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
      }

      setStatus('success');
      setFormData({ name: '', phone: '', service: '', description: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full min-h-12 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-base';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quote-name" className="block text-sm font-semibold text-gray-700 mb-2">
            {dict.quote.form.name}
          </label>
          <input
            id="quote-name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={dict.quote.form.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className="block text-sm font-semibold text-gray-700 mb-2">
            {dict.quote.form.phone}
          </label>
          <input
            id="quote-phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={dict.quote.form.phonePlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="quote-service" className="block text-sm font-semibold text-gray-700 mb-2">
          {dict.quote.form.service}
        </label>
        <select
          id="quote-service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={`${inputClass} bg-white`}
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
        <label htmlFor="quote-description" className="block text-sm font-semibold text-gray-700 mb-2">
          {dict.quote.form.description}
        </label>
        <textarea
          id="quote-description"
          required
          rows={5}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder={dict.quote.form.descriptionPlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'success' && (
        <div role="status" aria-live="polite" className="p-4 bg-green/10 text-green rounded-lg font-medium">
          {dict.quote.form.success}
        </div>
      )}
      {status === 'error' && (
        <div role="alert" className="p-4 bg-red-100 text-red-600 rounded-lg font-medium">
          {dict.quote.form.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full min-h-12 bg-secondary text-white font-semibold py-4 px-8 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? dict.quote.form.submitting : dict.quote.form.submit}
      </button>
    </form>
  );
}
