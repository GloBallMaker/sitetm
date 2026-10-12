export type Lang = 'uk' | 'en';

export type Bilingual = Record<Lang, string>;

export interface PracticeArea {
  id: string;
  number: string;
  slug: string;
  title: Bilingual;
  tagline: Bilingual;
  description: Bilingual;
  services: Bilingual[];
}

export const practices: PracticeArea[] = [
  {
    id: 'business',
    number: '01',
    slug: 'business-corporate',
    title: {
      uk: 'Бізнес та корпоративне право',
      en: 'Business & Corporate',
    },
    tagline: {
      uk: 'Структурування, контракти, супровід',
      en: 'Structuring, contracts, ongoing support',
    },
    description: {
      uk: 'Корпоративне право, структурування бізнесу, договори, реєстрація юридичних осіб та постійний юридичний супровід комерційної діяльності.',
      en: 'Corporate law, business structuring, contracts, company formation, and ongoing legal support for commercial operations.',
    },
    services: [
      { uk: 'Реєстрація ТОВ в Україні', en: 'LLC registration in Ukraine' },
      { uk: 'Реєстрація ФОП', en: 'Sole proprietorship registration' },
      { uk: 'Громадські організації та благодійні фонди', en: 'NGOs and charitable foundations' },
      { uk: 'Корпоративні договори', en: 'Corporate agreements' },
      { uk: 'Постійний юридичний супровід', en: 'Ongoing legal support' },
      { uk: 'Комерційний консалтинг', en: 'Commercial advisory' },
    ],
  },
  {
    id: 'tech-ip',
    number: '02',
    slug: 'technology-ip',
    title: {
      uk: 'Технології та інтелектуальна власність',
      en: 'Technology & Intellectual Property',
    },
    tagline: {
      uk: 'IT-бізнес, стартапи, торговельні марки',
      en: 'IT businesses, startups, trademarks',
    },
    description: {
      uk: 'Юридичний супровід IT-компаній та стартапів, реєстрація торговельних марок, захист програмного коду, технологічні договори та ліцензування.',
      en: 'Legal support for IT companies and startups, trademark registration, software code protection, technology contracts, and licensing.',
    },
    services: [
      { uk: 'Реєстрація торговельних марок', en: 'Trademark registration' },
      { uk: 'Захист програмного коду', en: 'Software code protection' },
      { uk: 'Договори в сфері інтелектуальної власності', en: 'IP contracts and agreements' },
      { uk: 'Захист прав інтелектуальної власності', en: 'IP rights enforcement' },
      { uk: 'Юридичний супровід стартапів', en: 'Startup legal support' },
      { uk: 'Ліцензування технологій', en: 'Technology licensing' },
    ],
  },
  {
    id: 'tax-customs',
    number: '03',
    slug: 'tax-customs',
    title: {
      uk: 'Податки та митниця',
      en: 'Tax & Customs',
    },
    tagline: {
      uk: 'Податкове структурування, митні спори',
      en: 'Tax structuring, customs disputes',
    },
    description: {
      uk: 'Податкове структурування, податкові спори, митні спори та регуляторні питання. Відстоюємо інтереси клієнтів у складних податкових та митних провадженнях.',
      en: 'Tax structuring, tax disputes, customs matters, and regulatory issues. We represent clients in complex tax and customs proceedings.',
    },
    services: [
      { uk: 'Податкове структурування', en: 'Tax structuring' },
      { uk: 'Податкові спори', en: 'Tax disputes' },
      { uk: 'Митні спори', en: 'Customs disputes' },
      { uk: 'Регуляторні питання', en: 'Regulatory matters' },
      { uk: 'Міжнародна торгівля та митниця', en: 'International trade & customs' },
    ],
  },
  {
    id: 'disputes',
    number: '04',
    slug: 'disputes-crisis',
    title: {
      uk: 'Спори та кризовий супровід',
      en: 'Disputes & Crisis Response',
    },
    tagline: {
      uk: 'Комерційні спори, судові провадження',
      en: 'Commercial disputes, litigation',
    },
    description: {
      uk: 'Комерційні спори, літигація, кримінальні провадження та захист бізнес-інтересів. Досвід представництва у судових справах понад 10 років.',
      en: 'Commercial disputes, litigation, criminal proceedings, and protection of business interests. Over 10 years of courtroom experience.',
    },
    services: [
      { uk: 'Комерційні спори', en: 'Commercial disputes' },
      { uk: 'Літигація та арбітраж', en: 'Litigation & arbitration' },
      { uk: 'Кримінальні провадження', en: 'Criminal proceedings' },
      { uk: 'Захист бізнес-інтересів', en: 'Business interests protection' },
      { uk: 'Виконавче провадження', en: 'Enforcement proceedings' },
      { uk: 'ПДР та ДТП', en: 'Traffic violations & accidents' },
    ],
  },
  {
    id: 'private',
    number: '05',
    slug: 'private-clients',
    title: {
      uk: 'Приватні клієнти',
      en: 'Private Clients',
    },
    tagline: {
      uk: 'Цивільні справи, сімейне право',
      en: 'Civil matters, family law',
    },
    description: {
      uk: 'Цивільні справи, сімейне право та індивідуальне юридичне представництво. Захищаємо права та інтереси приватних осіб з увагою до деталей.',
      en: 'Civil matters, family law, and individual legal representation. We protect private clients\' rights and interests with attention to detail.',
    },
    services: [
      { uk: 'Цивільні справи', en: 'Civil matters' },
      { uk: 'Сімейне право', en: 'Family law' },
      { uk: 'Индивідуальне представництво', en: 'Individual representation' },
      { uk: 'Управління активами', en: 'Wealth management' },
    ],
  },
  {
    id: 'defence',
    number: '06',
    slug: 'defence-regulatory',
    title: {
      uk: 'Оборона та регуляторні питання',
      en: 'Defence & Regulatory Matters',
    },
    tagline: {
      uk: 'Військове право, мобілізація',
      en: 'Military law, mobilization',
    },
    description: {
      uk: 'Консультації та правова підтримка з питань мобілізації, служби в армії, військових злочинів та інших питань військового права.',
      en: 'Consultation and legal support on mobilization, military service, military crimes, and other military law matters.',
    },
    services: [
      { uk: 'Мобілізація та військова служба', en: 'Mobilization & military service' },
      { uk: 'Військові злочини', en: 'Military crimes' },
      { uk: 'Військове право', en: 'Military law' },
      { uk: 'Регуляторні питання', en: 'Regulatory matters' },
    ],
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: Bilingual;
  bio: Bilingual;
  expertise: Bilingual[];
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    id: 'mykhalevskyi',
    name: 'Юрій Михалевський',
    role: { uk: 'Керуючий партнер', en: 'Managing Partner' },
    bio: {
      uk: 'Більше 10-ти років досвіду представництва у судових справах. Спеціалізується на корпоративному праві, кримінальних провадженнях та захисті бізнес-інтересів.',
      en: 'Over 10 years of courtroom experience. Specializes in corporate law, criminal proceedings, and protection of business interests.',
    },
    expertise: [
      { uk: 'Корпоративне право', en: 'Corporate law' },
      { uk: 'Кримінальні провадження', en: 'Criminal proceedings' },
      { uk: 'Судові спори', en: 'Litigation' },
    ],
  },
  {
    id: 'shvadchenko',
    name: 'Євген Швадченко',
    role: { uk: 'Партнер', en: 'Partner' },
    bio: {
      uk: 'Захищає інтереси клієнтів всіма доступними юридичними способами. Фокус на комерційних спорах та правовому супроводі бізнесу.',
      en: 'Protects clients\' interests through all available legal means. Focus on commercial disputes and business legal support.',
    },
    expertise: [
      { uk: 'Комерційні спори', en: 'Commercial disputes' },
      { uk: 'Правовий супровід бізнесу', en: 'Business legal support' },
      { uk: 'Договори', en: 'Contracts' },
    ],
  },
  {
    id: 'shturmak',
    name: 'Владислав Штурмак',
    role: { uk: 'Юрист', en: 'Lawyer' },
    bio: {
      uk: 'Прекрасний комунікатор з державними органами та установами. Забезпечує ефективну взаємодію з регуляторними органами.',
      en: 'Excellent communicator with government bodies and institutions. Ensures effective interaction with regulatory authorities.',
    },
    expertise: [
      { uk: 'Взаємодія з державними органами', en: 'Government relations' },
      { uk: 'Регуляторні питання', en: 'Regulatory matters' },
      { uk: 'Адміністративне право', en: 'Administrative law' },
    ],
  },
  {
    id: 'koshil',
    name: 'Руслан Кошіль',
    role: { uk: 'Юрист', en: 'Lawyer' },
    bio: {
      uk: 'Девіз Руслана — професіоналізм та увага до деталей. Відповідає за підготовку та перевірку юридичних документів.',
      en: 'Ruslan\'s motto is professionalism and attention to detail. Responsible for drafting and reviewing legal documents.',
    },
    expertise: [
      { uk: 'Підготовка документів', en: 'Document drafting' },
      { uk: 'Корпоративне право', en: 'Corporate law' },
      { uk: 'Договори', en: 'Contracts' },
    ],
  },
  {
    id: 'manko',
    name: 'Юлія Манько',
    role: { uk: 'Юристка', en: 'Lawyer' },
    bio: {
      uk: 'Юристка з досвідом у цивільних та сімейних справах. Забезпечує правовий захист приватних клієнтів.',
      en: 'Lawyer with experience in civil and family matters. Provides legal protection for private clients.',
    },
    expertise: [
      { uk: 'Цивільні справи', en: 'Civil matters' },
      { uk: 'Сімейне право', en: 'Family law' },
      { uk: 'Приватні клієнти', en: 'Private clients' },
    ],
  },
  {
    id: 'onysko',
    name: 'Данило Онисько',
    role: { uk: 'Юрист', en: 'Lawyer' },
    bio: {
      uk: 'Право починається там, де слово має наслідки. Спеціалізується на правовому супроводі та консультуванні.',
      en: 'Law begins where words have consequences. Specializes in legal support and consulting.',
    },
    expertise: [
      { uk: 'Юридичний консалтинг', en: 'Legal consulting' },
      { uk: 'Правовий аналіз', en: 'Legal analysis' },
      { uk: 'Договори', en: 'Contracts' },
    ],
  },
  {
    id: 'gutnyk',
    name: 'Ростислав Гутник',
    role: { uk: 'Радник', en: 'Counsel' },
    bio: {
      uk: 'Митні спори — улюблена категорія справ Ростислава. Надає експертні консультації з митного та податкового права.',
      en: 'Customs disputes are Rostyslav\'s favorite category of cases. Provides expert consulting on customs and tax law.',
    },
    expertise: [
      { uk: 'Митні спори', en: 'Customs disputes' },
      { uk: 'Податкове право', en: 'Tax law' },
      { uk: 'Міжнародна торгівля', en: 'International trade' },
    ],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  service: Bilingual;
  text: Bilingual;
}

export const testimonials: Testimonial[] = [
  {
    id: 'oleg',
    name: 'Олег',
    service: { uk: 'Реєстрація торговельної марки', en: 'Trademark registration' },
    text: {
      uk: 'Вся робота була проведена на високому рівні професіоналізму та ефективності. Юристи ефективно керували всіма етапами процесу, включаючи підготовку документації та взаємодію з відповідними органами.',
      en: 'All work was carried out at a high level of professionalism and efficiency. The lawyers effectively managed all stages of the process, including document preparation and interaction with relevant authorities.',
    },
  },
  {
    id: 'yana',
    name: 'Яна',
    service: { uk: 'Митні спори', en: 'Customs disputes' },
    text: {
      uk: 'Юристи професійно та ефективно вирішували митні спори компанії, в якій я працюю, надаючи чіткі пояснення та представляючи мої інтереси з високим рівнем експертизи.',
      en: 'The lawyers professionally and efficiently resolved customs disputes for the company I work for, providing clear explanations and representing my interests with a high level of expertise.',
    },
  },
  {
    id: 'james',
    name: 'Джеймс',
    service: { uk: 'Супровід бізнесу', en: 'Business support' },
    text: {
      uk: 'Поради юристів допомогли мені прийняти усвідомлені рішення і забезпечити успішний старт для моєї компанії. Команда завжди була доступною для консультацій та швидко реагувала на мої запити.',
      en: 'The lawyers\' advice helped me make informed decisions and ensure a successful start for my company. The team was always available for consultations and responded quickly to my requests.',
    },
  },
];

export interface InsightArticle {
  id: string;
  slug: string;
  title: Bilingual;
  excerpt: Bilingual;
  category: Bilingual;
  date: string;
  readingTime: number;
  content: Bilingual;
}

export const insights: InsightArticle[] = [
  {
    id: 'tm-registration',
    slug: 'trademark-registration-guide',
    title: {
      uk: 'Захистіть свій бізнес: реєстрація торговельної марки та програмного коду',
      en: 'Protect your business: trademark and software code registration',
    },
    excerpt: {
      uk: 'Гарантуйте безпеку своїх ідей. Реєстрація торговельної марки та програмного коду — ключовий крок до захисту бренду та технологій від копіювання.',
      en: 'Secure your ideas. Registering a trademark and software code is a key step in protecting your brand and technology from copying.',
    },
    category: { uk: 'Інтелектуальна власність', en: 'Intellectual Property' },
    date: '2024-11-15',
    readingTime: 5,
    content: {
      uk: 'У сучасному бізнес-середовищі інтелектуальна власність стає одним із найцінніших активів компанії. Реєстрація торговельної марки забезпечує правовий захист вашого бренду, а реєстрація програмного коду захищає ваші технологічні рішення від несанкціонованого використання.\n\nПроцес реєстрації торговельної марки в Україні включає подання заявки до Укрпатенту, перевірку на унікальність, публікацію та видачу свідоцтва. Важливо правильно визначити класи товарів та послуг за МКТУ, щоб забезпечити максимальний захист.\n\nЩодо програмного коду, в Україні можна захистити його як об\'єкт авторського права. Це дає можливість підтвердити авторство та дату створення, що особливо важливо для IT-компаній та стартапів.\n\nРекомендуємо розпочати процес захисту інтелектуальної власності якнайшвидше, оскільки пріоритет визначається за датою подання заявки. Професійний юридичний супровід на цьому етапі дозволяє уникнути помилок, які можуть коштувати часу та коштів у майбутньому.',
      en: 'In today\'s business environment, intellectual property is becoming one of a company\'s most valuable assets. Trademark registration provides legal protection for your brand, while software code registration protects your technological solutions from unauthorized use.\n\nThe trademark registration process in Ukraine involves filing an application with Ukrpatent, checking for uniqueness, publication, and issuing a certificate. It\'s important to correctly identify the classes of goods and services under the Nice Classification to ensure maximum protection.\n\nFor software code, Ukraine allows protection as an object of copyright. This enables you to confirm authorship and creation date, which is especially important for IT companies and startups.\n\nWe recommend starting the intellectual property protection process as soon as possible, since priority is determined by the filing date. Professional legal support at this stage helps avoid mistakes that could cost time and money in the future.',
    },
  },
  {
    id: 'company-formation',
    slug: 'company-formation-ukraine',
    title: {
      uk: 'Реєстрація юридичних осіб в Україні: що потрібно знати',
      en: 'Company formation in Ukraine: what you need to know',
    },
    excerpt: {
      uk: 'Швидка та професійна реєстрація ТОВ, ФОП та громадських організацій в Україні з повною юридичною підтримкою. Огляд процесу та ключових моментів.',
      en: 'Fast and professional registration of LLCs, sole proprietorships, and NGOs in Ukraine with full legal support. An overview of the process and key points.',
    },
    category: { uk: 'Корпоративне право', en: 'Corporate Law' },
    date: '2024-10-20',
    readingTime: 7,
    content: {
      uk: 'Реєстрація юридичної особи в Україні — це перший крок до ведення легального бізнесу. Найпоширеніші організаційно-правові форми — Товариство з обмеженою відповідальністю (ТОВ) та Фізична особа-підприємець (ФОП).\n\nДля реєстрації ТОВ необхідно: визначити склад засновників, розмір статутного капіталу, обрати КВЕДи, підготувати статут та подати документи державному реєстратору. Процес зазвичай займає від 3 до 5 робочих днів.\n\nФОП реєструється швидше і простіше, що робить її популярною для малого бізнесу та індивідуальних підприємців. Однак варто враховувати, що ФОП несе відповідальність усім своїм майном.\n\nТакож ми надаємо супровід у реєстрації громадських організацій та благодійних фондів, які мають свої особливості та вимоги до установчих документів.\n\nПрофесійний юридичний супровід на етапі реєстрації дозволяє уникнути типових помилок: неправильного вибору КВЕДів, неадекватного статуту, проблем з податковою обліковою політикою.',
      en: 'Registering a legal entity in Ukraine is the first step toward running a legitimate business. The most common legal forms are the Limited Liability Company (LLC) and the Sole Proprietorship (FOP).\n\nTo register an LLC, you need to: determine the founders, share capital amount, select economic activity codes (KVED), prepare the charter, and submit documents to the state registrar. The process typically takes 3 to 5 business days.\n\nA sole proprietorship registers faster and simpler, making it popular for small businesses and individual entrepreneurs. However, it\'s important to note that a sole proprietor is liable with all their personal assets.\n\nWe also provide support for registering NGOs and charitable foundations, which have their own specific requirements for founding documents.\n\nProfessional legal support at the registration stage helps avoid common mistakes: incorrect KVED selection, inadequate charter provisions, and issues with tax accounting policies.',
    },
  },
  {
    id: 'customs-disputes',
    slug: 'customs-disputes-strategy',
    title: {
      uk: 'Митні спори: стратегія захисту інтересів бізнесу',
      en: 'Customs disputes: a strategy for protecting business interests',
    },
    excerpt: {
      uk: 'Митні спори вимагають глибокого розуміння законодавства та практичного досвіду. Розглядаємо ключові аспекти ведення митних спорів в Україні.',
      en: 'Customs disputes require deep understanding of legislation and practical experience. We examine key aspects of handling customs disputes in Ukraine.',
    },
    category: { uk: 'Митниця та податки', en: 'Customs & Tax' },
    date: '2024-09-10',
    readingTime: 6,
    content: {
      uk: 'Митні спори — одна з найскладніших категорій юридичних проваджень, оскільки вони вимагають одночасного розуміння митного, податкового та адміністративного законодавства.\n\nНайпоширеніші причини митних спорів: неправильна класифікація товарів за ТН ЗЕД, визначення митної вартості, застосування пільг та квот, а також порушення процедур митного контролю.\n\nЕфективна стратегія захисту починається з ретельного аналізу обставин справи. Важливо вчасно оскаржити рішення митного органу, дотримуючись строків, передбачених законом.\n\nНаш досвід ведення митних спорів показує, що успіх залежить від якості підготовки документальної бази, глибини правового аналізу та вміння презентувати аргументи в судовому засіданні.\n\nРекомендуємо бізнесу проводити превентивний аудит митних операцій, щоб виявити потенційні ризики до того, як вони переростуть у спір.',
      en: 'Customs disputes are one of the most complex categories of legal proceedings, as they require simultaneous understanding of customs, tax, and administrative law.\n\nThe most common causes of customs disputes: incorrect classification of goods under the HS code, determination of customs value, application of benefits and quotas, and violations of customs control procedures.\n\nAn effective defense strategy begins with a thorough analysis of the case circumstances. It\'s crucial to timely appeal the customs authority\'s decision, complying with statutory deadlines.\n\nOur experience in handling customs disputes shows that success depends on the quality of document preparation, depth of legal analysis, and the ability to present arguments in court.\n\nWe recommend that businesses conduct a preventive audit of customs operations to identify potential risks before they escalate into a dispute.',
    },
  },
  {
    id: 'startup-legal',
    slug: 'startup-legal-foundation',
    title: {
      uk: 'Юридичний фундамент для стартапу: що потрібно знати засновнику',
      en: 'Legal foundation for a startup: what a founder needs to know',
    },
    excerpt: {
      uk: 'Ми розуміємо унікальні виклики, з якими стикаються стартапи в сфері інформаційних технологій. Огляд ключових юридичних аспектів.',
      en: 'We understand the unique challenges faced by IT startups. An overview of key legal aspects for founders.',
    },
    category: { uk: 'Технології та IT', en: 'Technology & IT' },
    date: '2024-08-05',
    readingTime: 8,
    content: {
      uk: 'Стартапи в сфері інформаційних технологій стикаються з унікальними юридичними викликами з першого дня існування. Правильний юридичний фундамент може визначити успіх або невдачу проекту.\n\nКлючові юридичні аспекти для стартапу:\n\n1. Вибір організаційно-правової форми та реєстрація компанії.\n2. Розподіл часток між засновниками та засновницькі договори.\n3. Захист інтелектуальної власності — патенти, торговельні марки, авторське право на програмний код.\n4. Договори з працівниками та підрядниками, включаючи положення про конфіденційність та неконкуренцію.\n5. Правові аспекти залучення інвестицій — term sheets, договори про конвертовані позики.\n\nПрофесійна юридична підтримка на ранніх етапах дозволяє уникнути конфліктів між засновниками, захистити інтелектуальну власність та створити надійну основу для залучення інвестицій.',
      en: 'IT startups face unique legal challenges from day one. A proper legal foundation can determine a project\'s success or failure.\n\nKey legal aspects for a startup:\n\n1. Choosing the legal form and registering the company.\n2. Distribution of shares among founders and founders\' agreements.\n3. Intellectual property protection — patents, trademarks, software code copyright.\n4. Employment and contractor agreements, including confidentiality and non-compete clauses.\n5. Legal aspects of fundraising — term sheets, convertible loan agreements.\n\nProfessional legal support at early stages helps avoid conflicts between founders, protect intellectual property, and create a solid foundation for attracting investment.',
    },
  },
];

export const firmInfo = {
  name: 'T&M Partners',
  fullName: {
    uk: 'Танасишин, Михалевський і Партнери',
    en: 'Tanasyshyn, Mykhalevskyi & Partners',
  },
  established: 2014,
  city: { uk: 'Львів', en: 'Lviv' },
  country: { uk: 'Україна', en: 'Ukraine' },
  address: {
    uk: '79031, м. Львів, вул. Стрийська, 148, офіс 73',
    en: '79031, Lviv, 148 Stryiska St., Office 73',
  },
  phones: ['+38 (097) 967 12 33', '+38 (068) 100 99 10'],
  email: 'contact@tmlaw.com.ua',
  hours: {
    uk: 'Понеділок — П\'ятниця: 9:00 — 19:00\nВихідні: за домовленістю',
    en: 'Monday — Friday: 9:00 — 19:00\nWeekends: by appointment',
  },
};
