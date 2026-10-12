import { useLang } from '@/context/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { firmInfo } from '@/data/content';

export function PrivacyPage() {
  const { lang, t } = useLang();

  return (
    <>
      <PageHeader
        label={t('Правова інформація', 'Legal Information')}
        title={t(
          'Повідомлення про обробку персональних даних',
          'Privacy Policy & Personal Data Processing'
        )}
      />

      <section className="bg-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-prose px-6">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4">
                  {t('1. Загальні положення', '1. General provisions')}
                </h2>
                <p className="text-base text-ink/70 leading-relaxed">
                  {t(
                    'Це повідомлення визначає порядок обробки та захисту персональних даних користувачів сайту T&M Partners (далі — Сайт) адвокатським об\'єднанням «Танасишин, Михалевський і Партнери» (далі — Об\'єднання).',
                    'This notice defines the procedure for processing and protecting personal data of users of the T&M Partners website (hereinafter — the Site) by the Tanasyshyn, Mykhalevskyi & Partners law association (hereinafter — the Association).'
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">
                  {t('2. Які дані ми збираємо', '2. What data we collect')}
                </h2>
                <p className="text-base text-ink/70 leading-relaxed mb-3">
                  {t(
                    'Через контактну форму на Сайті ми збираємо:',
                    'Through the contact form on the Site, we collect:'
                  )}
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-ink/70 leading-relaxed">
                  <li>{t('Ім\'я', 'Name')}</li>
                  <li>{t('Назву компанії (за наявності)', 'Company name (if provided)')}</li>
                  <li>{t('Email або номер телефону', 'Email or phone number')}</li>
                  <li>{t('Область інтересу', 'Area of interest')}</li>
                  <li>{t('Опис справи', 'Description of the matter')}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">
                  {t('3. Мета обробки даних', '3. Purpose of data processing')}
                </h2>
                <p className="text-base text-ink/70 leading-relaxed">
                  {t(
                    'Персональні дані обробляються виключно для зв\'язку з вами, розгляду вашого запиту та надання юридичних послуг.',
                    'Personal data is processed solely for the purpose of contacting you, reviewing your inquiry, and providing legal services.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">
                  {t('4. Зберігання та захист', '4. Storage and protection')}
                </h2>
                <p className="text-base text-ink/70 leading-relaxed">
                  {t(
                    'Ми застосовуємо технічні та організаційні заходи для захисту ваших персональних даних від несанкціонованого доступу, зміни або знищення. Дані зберігаються протягом строку, необхідного для виконання зазначених цілей, або відповідно до вимог законодавства.',
                    'We apply technical and organizational measures to protect your personal data from unauthorized access, alteration, or destruction. Data is retained for the period necessary to fulfill the stated purposes or in accordance with legal requirements.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">
                  {t('5. Передача даних третім особам', '5. Sharing with third parties')}
                </h2>
                <p className="text-base text-ink/70 leading-relaxed">
                  {t(
                    'Ми не передаємо ваші персональні дані третім особам без вашої згоди, за винятком випадків, передбачених законом.',
                    'We do not share your personal data with third parties without your consent, except in cases required by law.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">
                  {t('6. Ваші права', '6. Your rights')}
                </h2>
                <p className="text-base text-ink/70 leading-relaxed">
                  {t(
                    'Ви маєте право на доступ до своїх персональних даних, їх виправлення або видалення. Для реалізації цих прав звертайтеся на ',
                    'You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at '
                  )}
                  <a href={`mailto:${firmInfo.email}`} className="text-cobalt hover:underline">
                    {firmInfo.email}
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">
                  {t('7. Контактна інформація', '7. Contact information')}
                </h2>
                <p className="text-base text-ink/70 leading-relaxed">
                  {firmInfo.address[lang]}
                  <br />
                  {firmInfo.phones.join(' · ')}
                  <br />
                  {firmInfo.email}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
