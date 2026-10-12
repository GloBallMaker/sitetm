import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { team } from '@/data/content';

export function TeamPage() {
  const { lang, t } = useLang();

  return (
    <>
      <PageHeader
        label={t('Команда', 'Team')}
        title={t('Юристи, які думають стратегічно', 'Lawyers who think strategically')}
        subtitle={t(
          'Команда професіоналів з глибоким досвідом у різних галузях права.',
          'A team of professionals with deep experience across multiple areas of law.'
        )}
      />

      <section className="bg-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-editorial px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={(i % 3) * 0.08}>
                <article className="group">
                  {/* Portrait placeholder — sophisticated geometric */}
                  <div className="relative aspect-[3/4] bg-ink overflow-hidden mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-extrabold text-ivory/10 tracking-ultra-tight">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-cobalt opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((exp, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] uppercase tracking-label text-ivory/80 bg-ivory/10 px-2 py-1"
                          >
                            {exp[lang]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-cobalt font-medium mb-4">
                    {member.role[lang]}
                  </p>
                  <p className="text-sm text-ink/70 leading-relaxed mb-4">
                    {member.bio[lang]}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-silver hover:text-cobalt transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  )}
                </article>
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
                {t('Хочете працювати з нами?', 'Want to work with us?')}
              </h2>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 bg-cobalt text-ivory hover:bg-cobalt-dark transition-colors"
              >
                {t('Зв\'язатися з нами', 'Get in touch')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
