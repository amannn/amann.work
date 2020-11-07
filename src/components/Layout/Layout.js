import Footer from 'components/Footer';
import Header from 'components/Header';
import PageWrapper from 'components/PageWrapper';

export default function Layout({children, description, slim, subtitle, title}) {
  return (
    <>
      <Header
        description={description}
        slim={slim}
        subtitle={subtitle}
        title={title}
      />
      <PageWrapper slim={slim}>{children}</PageWrapper>
      <Footer />
    </>
  );
}
