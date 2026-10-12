import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { practices, testimonials, insights, firmInfo } from '@/data/content';

export function HomePage() {
  const { lang, t } = useLang();

  return (
    <>
      <Hero />

      {/* Practices */}
      <section className="bg-ivory py-24 lg:py-36">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <Reveal>
            <div className="flex items-end justify-between mb-16 lg:mb-24">
              <div>
                <p className="label-lg mb-4">{t('Експертиза', 'Expertise')}</p>
                <h2 className="text-section font-bold tracking-tight max-w-2xl">
                  {t('Шість напрямків практики', 'Six practice areas')}
                </h2>
              </div>
              <Link
                to="/practices"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-dark transition-colors editorial-link"
              >
                {t('Усі практики', 'All practices')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink/10">
            {practices.map((practice, i) => (
              <Reveal key={practice.id} delay={i * 0.08}>
                <Link
                  to={`/practices/${practice.slug}`}
                  className="group block bg-ivory p-8 lg:p-12 hover:bg-ink transition-colors duration-500 h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-xs font-mono text-silver group-hover:text-cobalt transition-colors">
                      {practice.number}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-silver group-hover:text-cobalt group-hover:rotate-45 transition-all duration-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3 group-hover:text-ivory transition-colors">
                    {practice.title[lang]}
                  </h3>
                  <p className="text-silver group-hover:text-ivory/70 text-sm leading-relaxed max-w-md transition-colors">
                    {practice.tagline[lang]}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="md:hidden mt-8">
            <Link
              to="/practices"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt"
            >
              {t('Усі практики', 'All practices')}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-ink text-ivory py-24 lg:py-40">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="label-lg text-silver/60 mb-6">{t('Про фірму', 'The Firm')}</p>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-extrabold text-cobalt">{firmInfo.established}</span>
                <span className="text-sm text-silver">{t('рік заснування', 'established')}</span>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-8" delay={0.1}>
              <p className="text-2xl lg:text-4xl font-light leading-snug tracking-tight text-balance">
                {t(
                  'Ми — незалежне бутікове адвокатське об\'єднання. Кожна справа має свій унікальний контекст, і тому заслуговує на індивідуальний підхід. Інтереси наших клієнтів — наш головний пріоритет.',
                  'We are an independent boutique law firm. Every matter has its own unique context and deserves an individual approach. Our clients\' interests are our foremost priority.'
                )}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 mt-10 text-sm font-semibold text-cobalt hover:text-cobalt-light transition-colors editorial-link"
              >
                {t('Дізнатися більше', 'Learn more')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ivory py-24 lg:py-36">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <Reveal>
            <p className="label-lg mb-4">{t('Довіра', 'Trust')}</p>
            <h2 className="text-section font-bold tracking-tight mb-16 lg:mb-24 max-w-2xl">
              {t('Що кажуть наші клієнти', 'What our clients say')}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.id} delay={i * 0.1}>
                <figure className="border-t border-ink/10 pt-8 h-full flex flex-col">
                  <blockquote className="text-base text-ink/80 leading-relaxed flex-1">
                    "{testimonial.text[lang]}"
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-silver mt-1">{testimonial.service[lang]}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights preview */}
      <section className="bg-ivory-200 py-24 lg:py-36 border-t border-ink/10">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <Reveal>
            <div className="flex items-end justify-between mb-16 lg:mb-24">
              <div>
                <p className="label-lg mb-4">{t('Аналітика', 'Insights')}</p>
                <h2 className="text-section font-bold tracking-tight max-w-2xl">
                  {t('Правовий контекст для бізнесу', 'Legal context for business')}
                </h2>
              </div>
              <Link
                to="/insights"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-dark transition-colors editorial-link"
              >
                {t('Усі статті', 'All articles')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {insights.slice(0, 2).map((article, i) => (
              <Reveal key={article.id} delay={i * 0.1}>
                <Link
                  to={`/insights/${article.slug}`}
                  className="group block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-cobalt">{article.category[lang]}</span>
                    <span className="text-xs text-silver">·</span>
                    <span className="text-xs text-silver">{formatDate(article.date, lang)}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-4 group-hover:text-cobalt transition-colors leading-snug">
                    {article.title[lang]}
                  </h3>
                  <p className="text-sm text-silver leading-relaxed mb-4">
                    {article.excerpt[lang]}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-silver">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTime} {t('хв читання', 'min read')}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-ink text-ivory py-24 lg:py-40">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <Reveal>
            <div className="text-center">
              <p className="label-lg text-silver/60 mb-8">{t('Почнемо розмову', 'Start a conversation')}</p>
              <h2 className="text-hero font-extrabold tracking-ultra-tight text-balance mb-8">
                {t(
                  'КОЖНА СКЛАДНА СПРАВА ПОЧИНАЄТЬСЯ З РОЗМОВИ.',
                  'EVERY COMPLEX MATTER STARTS WITH A CONVERSATION.'
                )}
              </h2>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 bg-cobalt text-ivory hover:bg-cobalt-dark transition-colors duration-300"
              >
                {t('Обговорити вашу справу', 'Discuss your matter')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { Clock } from 'lucide-react';

function formatDate(dateStr: string, lang: 'uk' | 'en') {
  const date = new Date(dateStr);
  const months = {
    uk: ['січ', 'лют', 'бер', 'квіт', 'трав', 'черв', 'лип', 'серп', 'вер', 'жовт', 'лист', 'груд'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };
  return `${date.getDate()} ${months[lang][date.getMonth()]} ${date.getFullYear()}`;
}

function Hero() {
  const { lang, t } = useLang();

  return (
    <section className="relative min-h-screen bg-ink text-ivory flex flex-col overflow-hidden">
      {/* Abstract background visual */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[60%] h-full opacity-[0.04]">
          <svg viewBox="0 0 600 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-1/4 right-[10%] w-px h-72 bg-gradient-to-b from-transparent via-cobalt to-transparent opacity-30" />
        <div className="absolute bottom-1/4 left-[5%] w-48 h-px bg-gradient-to-r from-transparent via-silver to-transparent opacity-20" />
      </div>

      <div className="relative flex-1 flex items-center pt-32 pb-20">
        <div className="mx-auto max-w-editorial w-full px-6 lg:px-12">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 lg:mb-16">
            <span className="text-xs font-medium uppercase tracking-label text-silver">
              {t('Незалежне юридичне мислення', 'Independent legal thinking')}
            </span>
            <span className="w-1 h-1 bg-silver/40 rounded-full" />
            <span className="text-xs font-medium uppercase tracking-label text-silver">
              {t('Україна', 'Ukraine')}
            </span>
            <span className="w-1 h-1 bg-silver/40 rounded-full" />
            <span className="text-xs font-medium uppercase tracking-label text-silver">
              {t('З 2014 року', 'Since 2014')}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-hero font-extrabold tracking-ultra-tight leading-[0.9] mb-8 lg:mb-12">
            <span className="block">WE THINK</span>
            <span className="block">
              <span className="text-cobalt">BEYOND</span> THE LAW.
            </span>
          </h1>

          {/* Supporting copy */}
          <div className="max-w-xl mb-12 lg:mb-16">
            <p className="text-lg lg:text-xl text-silver leading-relaxed">
              {t(
                'Допомагаємо бізнесу долати складність, захищати створене та впевнено ухвалювати рішення.',
                'We help businesses navigate complexity, protect what they build, and make decisions with confidence.'
              )}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/practices"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 bg-cobalt text-ivory hover:bg-cobalt-dark transition-colors duration-300"
            >
              {t('Дослідити експертизу', 'Explore our expertise')}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 border border-ivory/20 text-ivory hover:bg-ivory hover:text-ink transition-colors duration-300"
            >
              {t('Обговорити вашу справу', 'Discuss your matter')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom metadata bar */}
      <div className="relative border-t border-ivory/10">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-8">
              <div>
                <p className="text-xs text-silver/50 uppercase tracking-label">{t('Локація', 'Location')}</p>
                <p className="text-sm text-ivory mt-1">{firmInfo.city[lang]}, {firmInfo.country[lang]}</p>
              </div>
            </div>
            <Link
              to="/about"
              className="group flex items-center gap-2 text-sm text-silver hover:text-ivory transition-colors"
            >
              {t('Про фірму', 'About the firm')}
              <span className="inline-flex w-8 h-8 items-center justify-center border border-ivory/20 group-hover:border-cobalt group-hover:bg-cobalt transition-all">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
