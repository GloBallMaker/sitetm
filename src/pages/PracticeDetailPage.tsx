import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { BackLink, ArrowLink } from '@/components/PageHeader';
import { practices } from '@/data/content';

export function PracticeDetailPage() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const practice = practices.find((p) => p.slug === slug);

  if (!practice) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-silver mb-4">{t('Сторінку не знайдено', 'Page not found')}</p>
          <Link to="/practices" className="text-cobalt font-semibold">
            {t('Повернутися до практик', 'Back to practices')}
          </Link>
        </div>
      </div>
    );
  }

  const otherPractices = practices.filter((p) => p.slug !== slug);

  return (
    <>
      <section className="bg-ink text-ivory pt-40 pb-20 lg:pt-52 lg:pb-28">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <BackLink to="/practices" label={t('Усі практики', 'All practices')} />
          <Reveal>
            <span className="text-sm font-mono text-cobalt mb-6 block">{practice.number}</span>
            <h1 className="text-display font-extrabold tracking-ultra-tight text-balance max-w-4xl mb-8">
              {practice.title[lang]}
            </h1>
            <p className="text-lg lg:text-xl text-silver max-w-xl leading-relaxed">
              {practice.description[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="label-lg mb-6">{t('Послуги', 'Services')}</p>
            </Reveal>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-ink/10">
                {practice.services.map((service, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <li className="flex items-center gap-4 py-5 group">
                      <span className="text-xs font-mono text-silver w-8">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base lg:text-lg font-medium flex-1 group-hover:text-cobalt transition-colors">
                        {service[lang]}
                      </span>
                      <Check className="w-4 h-4 text-cobalt opacity-0 group-hover:opacity-100 transition-opacity" />
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other practices */}
      <section className="bg-ivory-200 py-20 lg:py-32 border-t border-ink/10">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <Reveal>
            <p className="label-lg mb-8">{t('Інші практики', 'Other practices')}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
            {otherPractices.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <Link
                  to={`/practices/${p.slug}`}
                  className="group block bg-ivory-200 p-8 hover:bg-ink transition-colors duration-500"
                >
                  <span className="text-xs font-mono text-silver group-hover:text-cobalt transition-colors">
                    {p.number}
                  </span>
                  <h3 className="text-xl font-bold mt-3 group-hover:text-ivory transition-colors">
                    {p.title[lang]}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <h2 className="text-2xl lg:text-4xl font-bold tracking-tight max-w-xl">
                {t(
                  'Маєте питання з цієї практики?',
                  'Have a question about this practice area?'
                )}
              </h2>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 bg-cobalt text-ivory hover:bg-cobalt-dark transition-colors"
              >
                {t('Обговорити справу', 'Discuss a matter')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
