import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcher from '../../components/LocaleSwitcher';
import PageLayout from '../../components/PageLayout';
import {Link} from '../../navigation';

export default function Index() {
  const t = useTranslations('Index');
  const locale = useLocale();

  return (
    <PageLayout title={t('title')}>
      <p>{t('description')}</p>
      <LocaleSwitcher />
      <p>
        <Link href="/about" locale={locale as any}>
          {t('navigateToAbout')}
        </Link>
      </p>
      <h1 className="text-3xl font-bold underline">test page</h1>
    </PageLayout>
  );
}
