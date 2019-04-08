import React from 'react';
import {Link} from 'gatsby';
import Header from 'components/Header';
import MenuItem from 'components/MenuItem';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import Project from 'components/Project';
import SocialIcon from 'components/SocialIcon';
import Icon from 'components/Icon';
import Footer from 'components/Footer';
import Meta from './_Meta';

export default function Index() {
  function onClick() {
    console.log('click');
  }

  return (
    <Page>
      <Meta />
      <Header
        description="Meine Leidenschaft ist die Entwicklung von webbasierten Produkten die sich wirklich gut anfühlen. Die mit Ästhetik überzeugen und durch & durch performant sind. Dazu setze ich auf moderne Technologien wie React, node.js und GraphQL."
        homeLink="/de"
        menu={
          <>
            <MenuItem onClick={onClick}>Kontakt</MenuItem>
            <MenuItem
              color="pale"
              component={props => <Link to="/en" {...props} />}
            >
              EN
            </MenuItem>
          </>
        }
        subtitle="Partner für User Interface Entwicklung und Design"
        title="Jan Amann"
      />
      <SectionTitle>Ausgewählte Projekte</SectionTitle>
      <Project
        cta={
          <Project.CTA href="https://planung.kuechenfinder.com/">
            Zur App
          </Project.CTA>
        }
        intro="Per Dialog zur neuen Küche"
        style={{backgroundColor: '#F6F6F9'}}
        title="Küchenfinder Planungsapp"
        visual={
          <img alt="" src={require('../../images/kfi-configurator.png')} />
        }
      >
        <Project.Paragraph>
          Küchenfinder unterstützt dich beim Kauf deiner neuen Küche. Wer
          unentschlossen ist, kann sich mittels dieser App Frage für Frage zur
          Traumküche durchklicken.
        </Project.Paragraph>
        <Project.Paragraph>
          Küchenfinder ist ein Projekt von{' '}
          <Project.Anchor href="http://www.molindo.at">Molindo</Project.Anchor>.
          Mein Beitrag war die Umsetzung des Frontends mittels React und das
          Erstellen einer GraphQL API basierend auf REST Services.
        </Project.Paragraph>
      </Project>
      <Project
        cta={
          <Project.CTA href="https://www.shoemondo.com/uk">
            Zur Website
          </Project.CTA>
        }
        intro="Preisvergleich für Schuhliebhaber"
        style={{backgroundColor: '#FEFBFB'}}
        title="Launch von Shoemondo"
        visual={<img alt="" src={require('../../images/shoemondo.png')} />}
      >
        <Project.Paragraph>
          Shoemondo hilft dir dabei dein nächstes Lieblingspaar Schuhe zu finden
          und empfiehlt dir dabei den günstigsten Anbieter. Im ersten Schritt
          wurden 12 Partner integriert, wodurch ein Angebot von über 65.000
          Schuhen ermöglicht wurde.
        </Project.Paragraph>
        <Project.Paragraph>
          Meine Leistung war die Gestaltung des User Interface und die
          Implementierung davon in Form einer serverseitig gerenderten React
          App, welche mit einer GraphQL API kommuniziert.
        </Project.Paragraph>
      </Project>
      <Project
        cta={
          <Project.CTA href="https://research.fh-ooe.at">
            Zum Portal
          </Project.CTA>
        }
        intro="Forschungsinhalte sichtbar machen"
        style={{
          backgroundImage: `url(${require('../../images/fh-research-bg.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom'
        }}
        title="Wissensportal Relaunch"
        visual={
          <img
            alt=""
            src={require('../../images/fh-research.png')}
            style={{maxWidth: '400px'}}
          />
        }
      >
        <Project.Paragraph>
          Die Fachhochschule Oberösterreich ist die forschungsstärkste FH in
          Österreich. Dieses Portal bietet umfassenden Zugang zu Publikationen,
          Patenten, Personen und Projekten.
        </Project.Paragraph>
        <Project.Paragraph>
          Dieses Projekt wurde gemeinsam mit{' '}
          <Project.Anchor href="https://studiomitte.com">
            Studio Mitte
          </Project.Anchor>{' '}
          umgesetzt. Meine Leistung war die Erstellung der Screen Designs, sowie
          die Implementierung des Layouts & grundlegender Komponenten.
        </Project.Paragraph>
      </Project>
      <Footer
        menu={
          <MenuItem
            color="paleInverted"
            component={props => <Link to="/de/impressum" {...props} />}
          >
            Impressum
          </MenuItem>
        }
        social={
          <>
            <SocialIcon href="https://github.com/amannn">
              <Icon name="github" />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/jamannnnnn">
              <Icon name="twitter" />
            </SocialIcon>
          </>
        }
      >
        <Footer.Contact
          email="jan@amann.me"
          intro="Du planst ein Projekt?"
          telephone="+43 681 / 84 39 0 333"
          title="Lass mich von dir hören!"
        />
      </Footer>
    </Page>
  );
}
