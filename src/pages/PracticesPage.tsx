import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { practices } from '@/data/content';

export function PracticesPage() {
  const { lang, t } = useLang();

  return (
    <>
      <PageHeader
        label={t('Експертиза', 'Expertise')}
        title={t('Практики', 'Practice Areas')}
        subtitle={t(
          'Шість напрямків, об\'єднаних одним принципом — стратегічне мислення та увага до деталей.',
          'Six practice areas united by one principle — strategic thinking and attention to detail.'
        )}
      />

      <section className="bg-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-px bg-ink/10">
            {practices.map((practice, i) => (
              <Reveal key={practice.id} delay={i * 0.06}>
                <Link
                  to={`/practices/${practice.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 bg-ivory p-8 lg:p-12 hover:bg-ink transition-colors duration-500"
                >
                  <div className="lg:col-span-1">
                    <span className="text-sm font-mono text-silver group-hover:text-cobalt transition-colors">
                      {practice.number}
                    </span>
                  </div>
                  <div className="lg:col-span-5">
                    <h2 className="text-2xl lg:text-3xl font-bold tracking-tight group-hover:text-ivory transition-colors mb-3">
                      {practice.title[lang]}
                    </h2>
                    <p className="text-sm text-silver group-hover:text-ivory/70 transition-colors">
                      {practice.tagline[lang]}
                    </p>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-sm text-ink/70 group-hover:text-ivory/70 leading-relaxed transition-colors">
                      {practice.description[lang]}
                    </p>
                  </div>
                  <div className="lg:col-span-1 flex items-start justify-end">
                    <ArrowUpRight className="w-5 h-5 text-silver group-hover:text-cobalt group-hover:rotate-45 transition-all duration-500" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-ink text-ivory py-24 lg:py-36">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <Reveal>
            <p className="label-lg text-silver/60 mb-4">{t('Процес', 'Process')}</p>
            <h2 className="text-section font-bold tracking-tight mb-16 lg:mb-24 max-w-2xl">
              {t('Як ми працюємо', 'How we work')}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10">
            {[
              { uk: 'Звернення', en: 'Initial inquiry' },
              { uk: 'Опис проблеми', en: 'Problem assessment' },
              { uk: 'Зустріч онлайн чи вживу', en: 'Online or in-person meeting' },
              { uk: 'Підписання договору', en: 'Engagement agreement' },
              { uk: 'Оплата', en: 'Fee arrangement' },
              { uk: 'Початок вирішення справи', en: 'Work begins' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-ink p-8 lg:p-10">
                  <span className="text-xs font-mono text-cobalt mb-4 block">
                    0{i + 1}
                  </span>
                  <p className="text-lg font-medium text-ivory">{step[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
