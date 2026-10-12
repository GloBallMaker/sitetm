import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { firmInfo } from '@/data/content';

export function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-editorial px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center">
              <span className="relative h-16 w-16 overflow-hidden rounded-[14px] bg-ink shadow-sm">
                <img
                  src="/65394f7c2116030016324a73_optimized_1140_e1154x1154-7x0.webp"
                  alt="T&M Boutique Law Firm"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </span>
              <span className="ml-3 text-xs font-medium uppercase tracking-label text-silver">
                Partners
              </span>
            </Link>
            <p className="mt-6 text-sm text-silver leading-relaxed max-w-xs">
              {t(
                'Бутікове адвокатське об\'єднання. Львів, Україна. З 2014 року.',
                'Boutique law firm. Lviv, Ukraine. Since 2014.'
              )}
            </p>
            <p className="mt-4 text-xs text-silver/60">
              © {new Date().getFullYear()} {t('АО «Танасишин, Михалевський і Партнери»', 'Tanasyshyn, Mykhalevskyi & Partners')}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="label-sm text-silver/60 mb-5">
              {t('Навігація', 'Navigation')}
            </p>
            <ul className="space-y-3">
              {[
                { to: '/practices', label: t('Практики', 'Practices') },
                { to: '/about', label: t('Про нас', 'About') },
                { to: '/team', label: t('Команда', 'Team') },
                { to: '/insights', label: t('Аналітика', 'Insights') },
                { to: '/contacts', label: t('Контакти', 'Contacts') },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-ivory/80 hover:text-cobalt transition-colors editorial-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5">
            <p className="label-sm text-silver/60 mb-5">
              {t('Контакти', 'Contact')}
            </p>
            <div className="space-y-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(firmInfo.address[lang])}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-ivory/80 hover:text-cobalt transition-colors group"
              >
                <MapPin className="w-4 h-4 mt-0.5 text-silver flex-shrink-0" />
                <span>{firmInfo.address[lang]}</span>
              </a>
              <div className="flex flex-col gap-2">
                {firmInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-sm text-ivory/80 hover:text-cobalt transition-colors"
                  >
                    <Phone className="w-4 h-4 text-silver flex-shrink-0" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${firmInfo.email}`}
                className="flex items-center gap-3 text-sm text-ivory/80 hover:text-cobalt transition-colors"
              >
                <Mail className="w-4 h-4 text-silver flex-shrink-0" />
                <span>{firmInfo.email}</span>
              </a>
            </div>

            <Link
              to="/contacts"
              className="inline-flex items-center gap-1.5 mt-8 text-sm font-semibold text-cobalt hover:text-cobalt-light transition-colors"
            >
              {t('Обговорити справу', 'Discuss a matter')}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-silver/50">
            {t('Всі права захищені.', 'All rights reserved.')}
          </p>
          <Link
            to="/privacy"
            className="text-xs text-silver/50 hover:text-ivory transition-colors"
          >
            {t('Повідомлення про обробку персональних даних', 'Privacy Policy & Personal Data Processing')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
