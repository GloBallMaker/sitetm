import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { firmInfo } from '@/data/content';

export function AboutPage() {
  const { lang, t } = useLang();

  return (
    <>
      <PageHeader
        label={t('Про фірму', 'The Firm')}
        title={t(
          'Незалежне юридичне мислення для бізнесу',
          'Independent legal thinking for business'
        )}
        subtitle={t(
          'Бутікове адвокатське об\'єднання, засноване у 2014 році. Індивідуальна увага до кожної справи.',
          'A boutique law firm established in 2014. Individual attention to every matter.'
        )}
      />

      {/* Narrative */}
      <section className="bg-ivory py-24 lg:py-36">
        <div className="mx-auto max-w-prose px-6">
          <Reveal>
            <p className="text-2xl lg:text-3xl font-light leading-snug tracking-tight text-balance text-ink mb-8">
              {t(
                'Адвокатське об\'єднання «Танасишин, Михалевський і Партнери» надає свої юридичні послуги з 2014 року.',
                'Tanasyshyn, Mykhalevskyi & Partners has been providing legal services since 2014.'
              )}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base lg:text-lg text-ink/70 leading-relaxed mb-6">
              {t(
                'Ми віримо, що кожна справа має свій унікальний контекст та особливості, і тому завжди заслуговує на індивідуальний підхід. Інтереси наших клієнтів — це наш головний пріоритет, і ми завжди готові відстоювати їхні права та інтереси з великим захопленням і відповідальністю.',
                'We believe that every matter has its own unique context and characteristics, and therefore always deserves an individual approach. Our clients\' interests are our foremost priority, and we are always ready to defend their rights and interests with great dedication and responsibility.'
              )}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-base lg:text-lg text-ink/70 leading-relaxed mb-6">
              {t(
                'Ми горді бути вашими юридичними партнерами та завжди готові допомогти вам у вирішенні ваших правових питань. Звертайтеся до нас — досвід, справедливість та підтримка вашого успіху.',
                'We are proud to be your legal partners and always ready to help you resolve your legal matters. Turn to us — experience, justice, and support for your success.'
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-ink text-ivory py-24 lg:py-36">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <Reveal>
            <p className="label-lg text-silver/60 mb-4">{t('Принципи', 'Principles')}</p>
            <h2 className="text-section font-bold tracking-tight mb-16 lg:mb-24 max-w-2xl">
              {t('Чому обирають нас', 'Why clients choose us')}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              {
                uk: 'Індивідуальна увага',
                en: 'Individual attention',
                desc_uk: 'Кожна справа має свій унікальний контекст та заслуговує на індивідуальний підхід.',
                desc_en: 'Every matter has its own unique context and deserves an individual approach.',
              },
              {
                uk: 'Розуміння комерційного контексту',
                en: 'Commercial awareness',
                desc_uk: 'Ми розуміємо бізнес наших клієнтів та надаємо практичні рішення.',
                desc_en: 'We understand our clients\' business and provide practical solutions.',
              },
              {
                uk: 'Пряма комунікація',
                en: 'Direct communication',
                desc_uk: 'Прозорість та доступність на всіх етапах співпраці.',
                desc_en: 'Transparency and accessibility at every stage of collaboration.',
              },
              {
                uk: 'Довгострокові відносини',
                en: 'Long-term relationships',
                desc_uk: 'Будуємо довіру через результати та надійність.',
                desc_en: 'We build trust through results and reliability.',
              },
            ].map((principle, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border-t border-ivory/10 pt-8">
                  <span className="text-xs font-mono text-cobalt mb-3 block">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-4">
                    {principle[lang]}
                  </h3>
                  <p className="text-silver leading-relaxed">
                    {lang === 'uk' ? principle.desc_uk : principle.desc_en}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Editorial statement */}
      <section className="bg-ivory py-24 lg:py-36">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <Reveal>
              <div>
                <span className="text-5xl lg:text-6xl font-extrabold text-cobalt block mb-3">
                  {firmInfo.established}
                </span>
                <p className="text-sm text-silver uppercase tracking-label">
                  {t('рік заснування', 'established')}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <span className="text-5xl lg:text-6xl font-extrabold text-ink block mb-3">
                  10+
                </span>
                <p className="text-sm text-silver uppercase tracking-label">
                  {t('років досвіду', 'years of experience')}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <span className="text-5xl lg:text-6xl font-extrabold text-ink block mb-3">
                  6
                </span>
                <p className="text-sm text-silver uppercase tracking-label">
                  {t('напрямків практики', 'practice areas')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <h2 className="text-2xl lg:text-4xl font-bold tracking-tight max-w-xl">
                {t('Познайомтеся з нашою командою', 'Meet our team')}
              </h2>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 bg-cobalt text-ivory hover:bg-cobalt-dark transition-colors"
              >
                {t('Перейти до команди', 'View the team')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
