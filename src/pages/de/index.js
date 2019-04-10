/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {Link} from 'gatsby';
import Header from 'components/Header';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import Project from 'components/Project';
import Icon from 'components/Icon';
import Footer from 'components/Footer';
import Meta from './_Meta';

export default function Index() {
  return (
    <Page>
      <Meta />
      <Header
        description="Meine Leidenschaft ist die Entwicklung von webbasierten Produkten die sich wirklich gut anfühlen. Die durch Ästhetik überzeugen und auf Performance setzen. Dazu setze ich auf moderne Technologien wie React, node.js und GraphQL."
        homeLink="/de"
        menu={
          <>
            <Header.MenuItem
              component={props => <a href="#kontakt" {...props} />}
            >
              Kontakt
            </Header.MenuItem>
            <Header.MenuItem
              color="pale"
              component={props => <Link to="/en" {...props} />}
            >
              EN
            </Header.MenuItem>
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
          Küchenfinder unterstützt Sie beim Kauf Ihrer neuen Küche. Wer
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
          Shoemondo hilft Ihnen dabei Ihr nächstes Lieblingspaar Schuhe zu
          finden und empfiehlt Ihnen dabei den günstigsten Anbieter. Im ersten
          Schritt wurden 12 Partner integriert um ein umfangreiches Sortiment an
          Schuhen zu ermöglichen.
        </Project.Paragraph>
        <Project.Paragraph>
          Meine Leistung war die Gestaltung des User Interface und die
          Implementierung davon in Form einer serverseitig gerenderten React
          App, welche mit einer GraphQL API kommuniziert.
        </Project.Paragraph>
      </Project>
      <Project
        cta={
          <Project.CTA href="https://research.fh-ooe.at/de/index">
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
          Patenten, Forschern und Projekten.
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
          <Footer.MenuItem
            component={props => <Link to="/de/impressum" {...props} />}
          >
            Impressum
          </Footer.MenuItem>
        }
        social={
          <>
            <Footer.SocialIcon
              aria-label="Github"
              href="https://github.com/amannn"
            >
              <Icon name="github" />
            </Footer.SocialIcon>
            <Footer.SocialIcon
              aria-label="Twitter"
              href="https://twitter.com/jamannnnnn"
            >
              <Icon name="twitter" />
            </Footer.SocialIcon>
          </>
        }
      >
        <div id="kontakt">
          <Footer.Contact
            email="jan@amann.me"
            intro="Sie planen ein Projekt?"
            telephone="+43 681 / 84 39 0 333"
            title="Freut mich von Ihnen zu hören!"
          />
        </div>
      </Footer>
    </Page>
  );
}
