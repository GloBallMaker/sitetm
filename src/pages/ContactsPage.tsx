import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { firmInfo, practices } from '@/data/content';
import { supabase } from '@/lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactsPage() {
  const { lang, t } = useLang();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const area = (formData.get('area') as string)?.trim();
    const description = (formData.get('description') as string)?.trim();
    const consent = formData.get('consent') as string;

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = t('Вкажіть ім\'я', 'Please enter your name');
    if (!email) newErrors.email = t('Вкажіть email або телефон', 'Please enter email or phone');
    if (!description) newErrors.description = t('Опишіть вашу справу', 'Please describe your matter');
    if (!consent) newErrors.consent = t('Необхідна згода на обробку даних', 'Consent is required');

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('submitting');

    try {
      const { error } = await supabase.from('contact_inquiries').insert({
        name,
        company: (formData.get('company') as string)?.trim() || null,
        email_or_phone: email,
        area_of_interest: area || null,
        description,
        consent_given: true,
        lang,
      });

      if (error) throw error;

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHeader
        label={t('Контакти', 'Contact')}
        title={t('Почнемо розмову', 'Let\'s start a conversation')}
        subtitle={t(
          'Кожна складна справа починається з розмови. Розкажіть нам про вашу ситуацію, і ми зв\'яжемося з вами найближчим часом.',
          'Every complex matter starts with a conversation. Tell us about your situation, and we\'ll get back to you shortly.'
        )}
      />

      <section className="bg-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              {status === 'success' ? (
                <div className="border border-cobalt/20 bg-cobalt/5 p-12 text-center">
                  <CheckCircle2 className="w-12 h-12 text-cobalt mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-3">
                    {t('Дякуємо за звернення!', 'Thank you for reaching out!')}
                  </h3>
                  <p className="text-silver mb-8">
                    {t(
                      'Наш юрист зв\'яжеться з вами найближчим часом.',
                      'Our lawyer will contact you shortly.'
                    )}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm font-semibold text-cobalt hover:text-cobalt-dark transition-colors"
                  >
                    {t('Надіслати ще одне повідомлення', 'Send another message')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {status === 'error' && (
                    <div className="flex items-center gap-3 border border-red-400/30 bg-red-50 px-5 py-4">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-800">
                        {t(
                          'Не вдалося надіслати форму. Спробуйте пізніше або зв\'яжіться з нами напряму.',
                          'Could not send the form. Please try again later or contact us directly.'
                        )}
                      </p>
                    </div>
                  )}

                  <FormField
                    label={t('Ім\'я', 'Name')}
                    name="name"
                    required
                    error={errors.name}
                    lang={lang}
                  />

                  <FormField
                    label={t('Компанія (необов\'язково)', 'Company (optional)')}
                    name="company"
                    lang={lang}
                  />

                  <FormField
                    label={t('Email або телефон', 'Email or phone')}
                    name="email"
                    required
                    error={errors.email}
                    lang={lang}
                  />

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="area">
                      {t('Область інтересу', 'Area of interest')}
                    </label>
                    <select
                      id="area"
                      name="area"
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-base focus:border-cobalt transition-colors outline-none"
                    >
                      <option value="">{t('Оберіть практику', 'Select a practice')}</option>
                      {practices.map((p) => (
                        <option key={p.id} value={p.title[lang]}>
                          {p.title[lang]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="description">
                      {t('Короткий опис справи', 'Brief description of the matter')} *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      required
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-base focus:border-cobalt transition-colors outline-none resize-none"
                      placeholder={t('Опишіть вашу ситуацію...', 'Describe your situation...')}
                    />
                    {errors.description && (
                      <p className="text-xs text-red-600 mt-1">{errors.description}</p>
                    )}
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-1 w-4 h-4 accent-cobalt flex-shrink-0"
                    />
                    <span className="text-sm text-ink/70 leading-relaxed">
                      {t(
                        'Я даю згоду на обробку моїх персональних даних відповідно до повідомлення про обробку персональних даних.',
                        'I consent to the processing of my personal data in accordance with the privacy policy.'
                      )}
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-xs text-red-600 -mt-4">{errors.consent}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 bg-cobalt text-ivory hover:bg-cobalt-dark transition-colors disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t('Надсилання...', 'Sending...')}
                      </>
                    ) : (
                      <>
                        {t('Надіслати', 'Send message')}
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Reveal>

            {/* Contact info */}
            <Reveal className="lg:col-span-5" delay={0.1}>
              <div className="lg:pl-8">
                <p className="label-lg mb-8">{t('Контактна інформація', 'Contact information')}</p>

                <div className="space-y-8">
                  <ContactItem
                    icon={<MapPin className="w-5 h-5" />}
                    label={t('Адреса', 'Address')}
                  >
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(firmInfo.address[lang])}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink/80 hover:text-cobalt transition-colors"
                    >
                      {firmInfo.address[lang]}
                    </a>
                  </ContactItem>

                  <ContactItem
                    icon={<Phone className="w-5 h-5" />}
                    label={t('Телефон', 'Phone')}
                  >
                    <div className="flex flex-col gap-1">
                      {firmInfo.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="text-sm text-ink/80 hover:text-cobalt transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </ContactItem>

                  <ContactItem
                    icon={<Mail className="w-5 h-5" />}
                    label={t('Email', 'Email')}
                  >
                    <a
                      href={`mailto:${firmInfo.email}`}
                      className="text-sm text-ink/80 hover:text-cobalt transition-colors"
                    >
                      {firmInfo.email}
                    </a>
                  </ContactItem>

                  <ContactItem
                    icon={<Clock className="w-5 h-5" />}
                    label={t('Робочі години', 'Business hours')}
                  >
                    <p className="text-sm text-ink/80 whitespace-pre-line">
                      {firmInfo.hours[lang]}
                    </p>
                  </ContactItem>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({
  label,
  name,
  required,
  error,
  lang,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  lang: 'uk' | 'en';
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2" htmlFor={name}>
        {label} {required && '*'}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        className="w-full bg-transparent border-b border-ink/20 py-3 text-base focus:border-cobalt transition-colors outline-none"
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-ink/5 text-ink">
        {icon}
      </div>
      <div>
        <p className="text-xs text-silver uppercase tracking-label mb-2">{label}</p>
        {children}
      </div>
    </div>
  );
}
