import React from 'react';
import Section from 'components/Section';
import labels from 'localized/de/labels';
import LocalizedFooter from 'localized/de/LocalizedFooter';
import LocalizedHeader from 'localized/de/LocalizedHeader';
import LocalizedMeta from 'localized/de/LocalizedMeta';
import HomeFooter from 'components/HomeFooter';
import Page from 'components/Page';
import Project from 'components/Project';
import PhoneFrame from 'components/PhoneFrame';

export default function Index() {
  return (
    <Page>
      <LocalizedMeta />
      <LocalizedHeader
        description={labels.description}
        showPortrait
        subtitle={labels.tagline}
        title={labels.title}
      />
      <Section title={<Section.Title>Ausgewählte Projekte</Section.Title>}>
        <Project
          backgroundColor="#F6F6F9"
          cta={
            <Project.CTA href="https://planung.kuechenfinder.com/">
              Zur App
            </Project.CTA>
          }
          intro="Per Dialog zur neuen Küche"
          title="Küchenfinder Planungsapp"
          visual={
            <Project.Visual layout="phones">
              <PhoneFrame>
                <img
                  alt=""
                  src={require('../../images/kfi-configurator-1.png')}
                />
              </PhoneFrame>
              <PhoneFrame>
                <img
                  alt=""
                  src={require('../../images/kfi-configurator-2.png')}
                />
              </PhoneFrame>
              <PhoneFrame>
                <img
                  alt=""
                  src={require('../../images/kfi-configurator-3.png')}
                />
              </PhoneFrame>
            </Project.Visual>
          }
        >
          <Project.Paragraph>
            Küchenfinder unterstützt Sie beim Kauf Ihrer neuen Küche. Wer
            unentschlossen ist, kann sich mittels dieser App Frage für Frage zur
            Traumküche durchklicken.
          </Project.Paragraph>
          <Project.Paragraph>
            Küchenfinder ist ein Projekt von{' '}
            <Project.Anchor href="http://www.molindo.at">
              Molindo
            </Project.Anchor>
            . Mein Beitrag war die Umsetzung des Frontends mit React. Da bei
            dieser App größtenteils Client-seitiger State anfällt, setzte ich
            auf Redux als State Management Lösung.
          </Project.Paragraph>
        </Project>
        <Project
          cta={
            <Project.CTA href="https://www.kuechenfinder.com/fuer-kuechenexperten">
              Mehr erfahren
            </Project.CTA>
          }
          intro="Datengetriebene Empfehlungen"
          style={{backgroundColor: '#F8FAFA'}}
          title="Dashboard für Küchenanbieter"
          visual={
            <div style={{height: 640}}>
              <img
                alt=""
                src={require('../../images/kfi-shops.png')}
                style={{height: 'auto', maxWidth: '100%', maxHeight: '100%'}}
              />
            </div>
          }
        >
          <Project.Paragraph>
            Jeden Monat informieren sich mehr als 120.000 Besucher auf
            Küchenfinder. Anbieter können sich anmelden und Kriterien,
            Leistungen & Daten erfassen, wodurch die Vermittlung von
            Wunschkunden mittels einer{' '}
            <Project.Anchor href="https://www.kuechenfinder.com/kuechenplanung/">
              Suchmaschine
            </Project.Anchor>{' '}
            ermöglicht wird. Kundenanfragen können von Anbietern selbständig in
            dieser App verwaltet werden.
          </Project.Paragraph>
          <Project.Paragraph>
            Für diese App entwickelte ich eine Bibliothek, die mehr als 100
            flexibel wiederverwendbare Komponenten umfasst und die Grundlage
            sämtlicher Screens darstellt. Zudem entwickelte ich eine GraphQL API
            auf Basis von REST Services, welche die Entwicklungszeit mit Hilfe
            von Apollo Client verkürzte.
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
            Schritt wurden 12 Partner integriert um ein umfangreiches Sortiment
            an Schuhen zu ermöglichen.
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
            Österreich. Dieses Portal bietet umfassenden Zugang zu
            Publikationen, Patenten, Forschern und Projekten.
          </Project.Paragraph>
          <Project.Paragraph>
            Dieses Projekt wurde gemeinsam mit{' '}
            <Project.Anchor href="https://studiomitte.com">
              Studio Mitte
            </Project.Anchor>{' '}
            umgesetzt. Meine Leistung war die Erstellung der Screen Designs,
            sowie die Implementierung des Layout Prototyps und grundlegender
            Komponenten.
          </Project.Paragraph>
        </Project>
      </Section>
      <LocalizedFooter component={HomeFooter} />
    </Page>
  );
}
