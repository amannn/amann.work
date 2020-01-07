import React from 'react';
import labels from 'localized/de/labels';
import LocalizedFooter from 'localized/de/LocalizedFooter';
import LocalizedHeader from 'localized/de/LocalizedHeader';
import LocalizedMeta from 'localized/de/LocalizedMeta';
import Page from 'components/Page';
import Project, {
  ProjectAnchor,
  ProjectLink,
  ProjectParagraph,
  ProjectVisual
} from 'components/Project';
import BlogRoll from 'components/BlogRoll';
import Button from 'components/Button';
import DeviceFrame from 'components/DeviceFrame';
import GithubRepositories from 'components/GithubRepositories';
import OpenSourceContributions from 'components/OpenSourceContributions';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';
import ResponsiveGrid from 'components/ResponsiveGrid';
import {ServicesItem} from 'components/Services';
import useBlogPosts from 'hooks/useBlogPosts';
import useOpenSourceContributions from 'hooks/useOpenSourceContributions';
import useMaintainedOpenSourceRepositories from 'hooks/useMaintainedOpenSourceRepositories';

export default function Index() {
  const posts = useBlogPosts();
  const contributions = useOpenSourceContributions();
  const repositories = useMaintainedOpenSourceRepositories();

  return (
    <Page>
      <LocalizedMeta />
      <LocalizedHeader
        description={labels.description}
        showPortrait
        subtitle={labels.tagline}
        title={labels.title}
      />
      <Section
        description="Ich arbeite sowohl mit Start-ups als auch etablierten Unternehmen zusammen. Der wichtigste Aspekt für mich ist eine bedeutungsvolle Lösung zu schaffen die Mehrwert für Menschen bietet."
        title="Leistungen"
      >
        <Wrapper>
          <ResponsiveGrid>
            <ServicesItem title="React Apps">
              Mit mehr als 4 Jahren Erfahrung mit React und mehr als 3 Jahren
              GraphQL, kann ich Ihnen beim Entwurf und der Umsetzung von
              anspruchsvollen Apps helfen, die gerne verwendet werden.
            </ServicesItem>
            <ServicesItem title="Design-Systeme">
              User Interfaces sind komponentenbasiert. Durch das Identifizieren
              der grundlegenden Bausteine und das Erstellen flexibler
              Schnittstellen, stelle ich sicher, dass Ihre Apps auf einem
              soliden Fundament stehen.
            </ServicesItem>
            <ServicesItem title="Mobile Apps">
              Um eine großartige User Experience auf Mobile zu erreichen muss
              Performance an erster Stelle stehen. Das bedeutet jedoch nicht,
              dass Kompromisse bei Animationen oder nützlichen Touch-Gesten
              gemacht werden müssen.
            </ServicesItem>
            <ServicesItem title="Consulting und Code Reviews">
              Ich gebe mein Wissen gerne im Rahmen von Planungen, Workshops und
              Reviews weiter. Ich arbeite mich in Ihre Probleme ein und finde
              mit Ihrem Team gemeinsam eine passende Lösung.
            </ServicesItem>
          </ResponsiveGrid>
        </Wrapper>
      </Section>
      <Section title="Ausgewählte Projekte">
        <Project
          cta={
            <ProjectLink href="https://planung.kuechenfinder.com/">
              Zur App
            </ProjectLink>
          }
          intro="Per Dialog zur neuen Küche"
          title="Küchenfinder Planungsapp"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../images/kfi-configurator-1.png')}
                />
              </DeviceFrame>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../images/kfi-configurator-2.png')}
                />
              </DeviceFrame>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../images/kfi-configurator-3.png')}
                />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            Küchenfinder unterstützt Sie beim Kauf Ihrer neuen Küche. Wer
            unentschlossen ist, kann sich mittels dieser App Frage für Frage zur
            Traumküche durchklicken.
          </ProjectParagraph>
          <ProjectParagraph>
            Küchenfinder ist ein Projekt von{' '}
            <ProjectAnchor href="http://www.molindo.at">Molindo</ProjectAnchor>.
            Mein Beitrag war die Umsetzung des Frontends mit React. Da bei
            dieser App größtenteils Client-seitiger State anfällt, setzte ich
            auf Redux als State Management Lösung.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://www.kuechenfinder.com/fuer-kuechenexperten">
              Mehr erfahren
            </ProjectLink>
          }
          intro="Datengetriebene Empfehlungen"
          title="Dashboard für Küchenanbieter"
          visual={
            <ProjectVisual>
              <DeviceFrame type="mobile">
                <img
                  alt=""
                  src={require('../../images/kfi-shops-mobile.png')}
                />
              </DeviceFrame>
              <DeviceFrame type="desktop">
                <img
                  alt=""
                  src={require('../../images/kfi-shops-desktop.png')}
                />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            Jeden Monat informieren sich mehr als 120.000 Besucher auf
            Küchenfinder. Anbieter können sich anmelden und Kriterien,
            Leistungen & Daten erfassen, wodurch die Vermittlung von
            Wunschkunden mittels einer{' '}
            <ProjectAnchor href="https://www.kuechenfinder.com/kuechenplanung/">
              Suchmaschine
            </ProjectAnchor>{' '}
            ermöglicht wird. Kundenanfragen können von Anbietern selbständig in
            dieser App verwaltet werden.
          </ProjectParagraph>
          <ProjectParagraph>
            Für diese App entwickelte ich eine Bibliothek, die mehr als 100
            flexibel wiederverwendbare Komponenten umfasst und die Grundlage
            sämtlicher Screens darstellt. Zudem entwickelte ich eine GraphQL API
            auf Basis von REST Services, welche die Entwicklungszeit mit Hilfe
            von Apollo Client verkürzte.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://www.zemtu.com/">
              Mehr erfahren
            </ProjectLink>
          }
          intro="Mobilität für die Zukunft"
          title="Carsharing App"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img alt="" src={require('../../images/zemtu-1.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../images/zemtu-2.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../images/zemtu-3.png')} />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            Um den hohen Erwartungen ihrer internationalen Kunden gerecht zu
            werden, entwickelt das talentierte Team von Zemtu eine moderne
            Mobile App, die den Prozess von der Reservierung bis zum Aufsperren
            eines Autos digital abbildet.
          </ProjectParagraph>
          <ProjectParagraph>
            In regelmäßigen Workshops unterstütze ich das Team mit Beratung und
            Mithilfe bei Themen wie Software Architektur, React, GraphQL,
            Animationen und Performance.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://www.shoemondo.com/uk">
              Zur Website
            </ProjectLink>
          }
          intro="Preisvergleich für Schuhliebhaber"
          title="Launch von Shoemondo"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img alt="" src={require('../../images/shoemondo-1.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../images/shoemondo-2.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../images/shoemondo-3.png')} />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            Shoemondo hilft Ihnen dabei Ihr nächstes Lieblingspaar Schuhe zu
            finden und empfiehlt Ihnen dabei den günstigsten Anbieter. Im ersten
            Schritt wurden 12 Partner integriert um ein umfangreiches Sortiment
            an Schuhen zu ermöglichen.
          </ProjectParagraph>
          <ProjectParagraph>
            Meine Leistung war die Gestaltung des User Interface und die
            Implementierung davon in Form einer serverseitig gerenderten React
            App, welche mit einer GraphQL API kommuniziert.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://research.fh-ooe.at/de/index">
              Zum Portal
            </ProjectLink>
          }
          intro="Forschungsinhalte sichtbar machen"
          title="Wissensportal Relaunch"
          visual={
            <ProjectVisual>
              <DeviceFrame type="mobile">
                <img
                  alt=""
                  src={require('../../images/fh-research-mobile.png')}
                />
              </DeviceFrame>
              <DeviceFrame type="desktop">
                <img
                  alt=""
                  src={require('../../images/fh-research-desktop.png')}
                />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            Die Fachhochschule Oberösterreich ist die forschungsstärkste FH in
            Österreich. Dieses Portal bietet umfassenden Zugang zu
            Publikationen, Patenten, Forschern und Projekten.
          </ProjectParagraph>
          <ProjectParagraph>
            Dieses Projekt wurde gemeinsam mit{' '}
            <ProjectAnchor href="https://studiomitte.com">
              Studio Mitte
            </ProjectAnchor>{' '}
            umgesetzt. Meine Leistung war die Erstellung der Screen Designs,
            sowie die Implementierung des Layout Prototyps und grundlegender
            Komponenten.
          </ProjectParagraph>
        </Project>
      </Section>
      <Section title="Letzte Artikel">
        <Wrapper background padding>
          <BlogRoll posts={posts} />
        </Wrapper>
      </Section>
      <Section title="Open source libraries">
        <Wrapper background padding>
          <GithubRepositories
            repositories={repositories}
            showMoreButton={<Button>Mehr anzeigen</Button>}
          />
        </Wrapper>
      </Section>
      <Section title="Open source contributions">
        <Wrapper background padding>
          <OpenSourceContributions
            contributions={contributions}
            showMoreButton={<Button>Mehr anzeigen</Button>}
          />
        </Wrapper>
      </Section>
      <LocalizedFooter />
    </Page>
  );
}
