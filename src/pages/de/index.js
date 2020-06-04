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
import ScreenVideo from 'components/ScreenVideo';

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
              Mit 5 Jahren Erfahrung mit React und mehr als 3 Jahren GraphQL,
              kann ich Ihnen beim Entwurf und der Umsetzung von anspruchsvollen
              Apps helfen, die gerne verwendet werden.
            </ServicesItem>
            <ServicesItem title="Komponentenbibliotheken">
              User Interfaces sind komponentenbasiert. Ich identifiziere in
              Ihrem Projekt die grundlegenden Bausteine und versehe diese mit
              flexiblen Schnittstellen. Dadurch stehen Ihre Apps auf einem
              soliden Fundament.
            </ServicesItem>
            <ServicesItem title="Mobile Apps">
              Um eine großartige User Experience auf Mobile zu erreichen muss
              Performance an erster Stelle stehen. Das bedeutet jedoch nicht,
              dass Kompromisse bei Animationen oder nützlichen Touch-Gesten
              gemacht werden müssen.
            </ServicesItem>
            <ServicesItem title="Consulting und Code Reviews">
              Ich gebe mein Wissen gerne im Rahmen von Projektplanungen,
              Workshops und Reviews weiter. Ich arbeite mich in Ihre Probleme
              ein und finde mit Ihrem Team gemeinsam eine passende Lösung.
            </ServicesItem>
          </ResponsiveGrid>
        </Wrapper>
      </Section>
      <Section title="Ausgewählte Projekte">
        <Project
          cta={
            <ProjectLink href="https://www.setlist.fm/">
              Add a setlist
            </ProjectLink>
          }
          id="setlist-edit"
          intro="Millionen von Setlists stets zur Hand"
          title="Neues Editierinterface für setlist.fm"
          visual={
            <ProjectVisual>
              <DeviceFrame type="desktop">
                <img
                  alt=""
                  src={require('../../assets/setlist-edit-desktop.png')}
                />
              </DeviceFrame>
              <DeviceFrame>
                <ScreenVideo
                  autoPlay={false}
                  poster={require('../../assets/setlist-edit-mobile-poster.png')}
                  source={require('../../assets/setlist-edit-mobile.mp4')}
                />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            Mit{' '}
            <ProjectAnchor href="https://www.similarweb.com/website/setlist.fm#overview">
              Millionen von monatlichen Aufrufen
            </ProjectAnchor>{' '}
            zählt setlist.fm zu den populärsten Musik-Services der Welt und
            ermöglicht es seinen Usern ihr Wissen über Konzert-Setlists
            miteinander zu teilen. Das Team von{' '}
            <ProjectAnchor href="http://molindo.at">Molindo</ProjectAnchor>{' '}
            machte sich daran das Herzstück der Plattform neu zu denken: Das
            Hinzufügen und Editieren von Setlists. Für die Implementierung des
            User Interfaces wurde ich als Entwicklungspartner beauftragt.
          </ProjectParagraph>
          <ProjectParagraph>
            Das Frontend dieses Projekts besteht aus vier React Widgets welche
            nahtlos in die existierende Plattform integriert sind und mit einer
            GraphQL API kommunizieren. Um den hohen Erwartungen an Mobile Apps
            gerecht zu werden wurde besonderer Fokus auf Touch-Gesten,
            hilfreiche Animationen, Runtime Performance und einen Offline-first
            Ansatz gelegt.
          </ProjectParagraph>
        </Project>
        <Project
          id="alpine"
          intro="Bausteine für anspruchsvolle User Interfaces"
          title="React-basierte Komponentenbibliothek"
          visual={
            <ProjectVisual>
              <DeviceFrame type="desktop">
                <img
                  alt=""
                  src={require('../../assets/alpine-design-system.png')}
                />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            <ProjectAnchor href="https://www.alpine.com/">
              Alpine Electronics
            </ProjectAnchor>{' '}
            ist ein internationales Unternehmen, das sich auf Audio- und
            Navigationssysteme für Autos spezialisiert hat. Die Firma zählt
            Hersteller wie BMW, Audi und Mercedes zu ihren Kunden und hat mehr
            als 13.000 Angestellte. Ziel dieses Projekts war es eine
            umfangreiche Bibliothek an React-Komponenten zu schaffen, welche
            zukünftig die benutzerfreundliche Grundlage für Datenmanagementapps
            bildet.
          </ProjectParagraph>
          <ProjectParagraph>
            Um diese Herausforderung zu bewältigen, wurde ein 6-köpfiges Team
            von Frontend Spezialisten von{' '}
            <ProjectAnchor href="https://alm.sh/">
              alm engineering
            </ProjectAnchor>
            ,{' '}
            <ProjectAnchor href="https://peerigon.com/">Peerigon</ProjectAnchor>
            ,{' '}
            <ProjectAnchor href="https://compose.us/">compose.us</ProjectAnchor>{' '}
            und mir geschaffen. Mein Beitrag umfasste Anforderungserhebung in
            Workshops, Spezifikation von Funktionen & Komponenten APIs, UX
            Design, Frontend Development, Code Review und die Definition von
            GraphQL APIs. Eine Palette von mehr als 150 Komponenten bildet nun
            die Grundlage für 20 Application Packages – Tendenz steigend.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://planung.kuechenfinder.com/">
              Zur App
            </ProjectLink>
          }
          id="kuechenfinder-configurator"
          intro="Per Dialog zur neuen Küche"
          title="Küchenfinder Planungsapp"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../assets/kfi-configurator-1.png')}
                />
              </DeviceFrame>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../assets/kfi-configurator-2.png')}
                />
              </DeviceFrame>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../assets/kfi-configurator-3.png')}
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
          id="kuechenfinder-shops"
          intro="Datengetriebene Empfehlungen"
          title="Dashboard für Küchenanbieter"
          visual={
            <ProjectVisual>
              <DeviceFrame type="mobile">
                <img
                  alt=""
                  src={require('../../assets/kfi-shops-mobile.png')}
                />
              </DeviceFrame>
              <DeviceFrame type="desktop">
                <img
                  alt=""
                  src={require('../../assets/kfi-shops-desktop.png')}
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
            sämtlicher Screens darstellt. Außerdem habe ich eine GraphQL API in
            Node.js implementiert, welche die verteilten Daten aus REST
            Microservices für Clients zugänglich macht.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://www.zemtu.com/">
              Mehr erfahren
            </ProjectLink>
          }
          id="zemtu"
          intro="Mobilität für die Zukunft"
          title="Carsharing App"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img alt="" src={require('../../assets/zemtu-1.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../assets/zemtu-2.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../assets/zemtu-3.png')} />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            Um den Erwartungen ihrer internationalen Kunden gerecht zu werden,
            entwickelt das talentierte Team von Zemtu eine moderne Mobile App,
            die den Prozess von der Reservierung bis zum Aufsperren eines Autos
            digital abbildet.
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
          id="shoemondo"
          intro="Preisvergleich für Schuhliebhaber"
          title="Launch von Shoemondo"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img alt="" src={require('../../assets/shoemondo-1.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../assets/shoemondo-2.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../assets/shoemondo-3.png')} />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            Shoemondo hilft Ihnen dabei Ihr nächstes Lieblingspaar Schuhe zu
            finden und empfiehlt Ihnen dabei den günstigsten Anbieter. Um ein
            umfangreiches Sortiment an Schuhen zu ermöglichen wurden im ersten
            Schritt 12 Partner integriert.
          </ProjectParagraph>
          <ProjectParagraph>
            Meine Leistung war die Gestaltung des User Interface und die
            Implementierung davon in Form einer serverseitig gerenderten React
            App, welche mit einer GraphQL API kommuniziert.
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
