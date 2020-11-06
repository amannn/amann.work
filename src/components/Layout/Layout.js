import Footer from 'components/Footer';
import Header from 'components/Header';
import PageWrapper from 'components/PageWrapper';
import styles from './Layout.module.scss';

export default function Layout({children, slim, subtitle, title}) {
  return (
    <>
      <Header slim={slim} subtitle={subtitle} title={title} />
      <PageWrapper slim={slim}>{children}</PageWrapper>
      <Footer />
    </>
  );
}
