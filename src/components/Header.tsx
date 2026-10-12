import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

export function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { to: '/practices', label: t('Практики', 'Practices') },
    { to: '/about', label: t('Про нас', 'About') },
    { to: '/team', label: t('Команда', 'Team') },
    { to: '/insights', label: t('Аналітика', 'Insights') },
    { to: '/contacts', label: t('Контакти', 'Contacts') },
  ];

  const isHome = location.pathname === '/';
  const headerBg = scrolled || menuOpen
    ? 'bg-ivory/95 backdrop-blur-md border-b border-ink/10'
    : isHome
      ? 'bg-transparent'
      : 'bg-ivory border-b border-ink/10';
  const textColor = scrolled || menuOpen || !isHome ? 'text-ink' : 'text-ivory';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="group flex items-center" aria-label="T&M Partners">
              <span className="relative h-11 w-11 overflow-hidden rounded-[10px] bg-ink shadow-sm">
                <img
                  src="/65394f7c2116030016324a73_optimized_1140_e1154x1154-7x0.webp"
                  alt="T&M Boutique Law Firm"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </span>
              <span className={`ml-3 text-[10px] font-medium uppercase tracking-label hidden sm:inline transition-colors ${scrolled || menuOpen || !isHome ? 'text-silver' : 'text-silver/70'}`}>
                Partners
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-sm font-medium transition-colors relative group ${textColor} ${
                    location.pathname.startsWith(item.to) ? 'text-cobalt' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-cobalt transition-all duration-300 ${
                    location.pathname.startsWith(item.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 lg:gap-6">
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium">
                <button
                  onClick={() => setLang('uk')}
                  className={`px-1.5 py-1 transition-colors ${
                    lang === 'uk' ? 'text-cobalt' : textColor + ' hover:text-cobalt'
                  }`}
                  aria-label="Українська"
                >
                  UA
                </button>
                <span className={textColor}>/</span>
                <button
                  onClick={() => setLang('en')}
                  className={`px-1.5 py-1 transition-colors ${
                    lang === 'en' ? 'text-cobalt' : textColor + ' hover:text-cobalt'
                  }`}
                  aria-label="English"
                >
                  EN
                </button>
              </div>

              <Link
                to="/contacts"
                className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 bg-cobalt text-ivory hover:bg-cobalt-dark transition-colors duration-300"
              >
                {t('Обговорити справу', 'Discuss a matter')}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden ${textColor}`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-ink" />
        <div className="relative h-full flex flex-col justify-center px-8 pt-20">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-baseline justify-between py-4 border-b border-ivory/10"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${i * 0.08 + 0.15}s`,
                }}
              >
                <span className="text-3xl font-bold text-ivory tracking-tight">
                  {item.label}
                </span>
                <span className="text-xs font-mono text-silver">
                  0{i + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-12 flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm font-medium">
              <button
                onClick={() => setLang('uk')}
                className={`px-2 py-1 ${lang === 'uk' ? 'text-cobalt' : 'text-ivory/60'}`}
              >
                UA
              </button>
              <span className="text-ivory/30">/</span>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 ${lang === 'en' ? 'text-cobalt' : 'text-ivory/60'}`}
              >
                EN
              </button>
            </div>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 bg-cobalt text-ivory"
            >
              {t('Обговорити справу', 'Discuss a matter')}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
