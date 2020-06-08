import React from 'react';
import LightboxDeviceVideo from 'components/LightboxDeviceVideo';
import labels from 'localized/de/labels';
import LocalizedFooter from 'localized/de/LocalizedFooter';
import LocalizedHeader from 'localized/de/LocalizedHeader';
import LocalizedMeta from 'localized/de/LocalizedMeta';
import Page from 'components/Page';
import Project, {
  ProjectAnchor,
  ProjectLink,
  ProjectParagraph,
  ProjectVisual,
  ProjectTestimonial
} from 'components/Project';
import BlogRoll from 'components/BlogRoll';
import Button from 'components/Button';
import DeviceFrame from 'components/DeviceFrame';
import GithubRepositories from 'components/GithubRepositories';
import OpenSourceContributions from 'components/OpenSourceContributions';
import OpenSourceLayout from 'components/OpenSourceLayout';
import Projects from 'components/Projects';
import ResponsiveGrid from 'components/ResponsiveGrid';
import Section from 'components/Section';
import {ServicesItem} from 'components/Services';
import Wrapper from 'components/Wrapper';
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
        description="Ich arbeite sowohl mit Start-ups als auch etablierten Unternehmen zusammen. Der wichtigste Aspekt für mich ist eine bedeutungsvolle Lösung zu schaffen, die Mehrwert für Menschen bietet."
        title="Leistungen"
      >
        <Wrapper>
          <ResponsiveGrid>
            <ServicesItem title="React Apps">
              Mit 5 Jahren Erfahrung mit React und 4 Jahren GraphQL kann ich
              Ihnen beim Entwurf und der Umsetzung von anspruchsvollen Apps
              helfen, die gerne verwendet werden.
            </ServicesItem>
            <ServicesItem title="Komponentenbibliotheken">
              Stellen Sie Ihre Apps auf ein solides Fundament, indem die
              grundlegenden Bausteine identifiziert und mit einer flexiblen
              Schnittstelle versehen werden.
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
        <Projects
          showMoreButton={
            <Button color="accent">Mehr Projekte anzeigen</Button>
          }
        >
          <Project
            cta={
              <ProjectLink href="https://www.setlist.fm/">
                Setlist erstellen
              </ProjectLink>
            }
            id="setlist-edit"
            intro="Millionen von Setlists stets zur Hand"
            testimonial={
              <ProjectTestimonial
                image={
                  <img
                    alt="Christof Flachsmann"
                    src={require('../../assets/christof-flachsmann.jpg')}
                  />
                }
                personLink="https://www.flachsmann.at/"
                personName="Christof Flachsmann"
                personTitle="UX/UI Designer"
                quote={
                  'Die Zusammenarbeit mit Jan war wie immer hervorragend. Als Designer kann ich mich darauf verlassen, dass das Endprodukt unkompliziert und pünktlich in Perfektion umgesetzt wird.\nBesonders schätze ich an Jan, dass er ein Design weiter denkt und sich proaktiv einbringt, wie man das Produkt noch weiter verbessern kann. Ich freue mich schon auf unser nächstes gemeinsames Projekt!'
                }
              />
            }
            title="Neues Editierinterface für setlist.fm"
            visual={
              <ProjectVisual>
                <DeviceFrame type="desktop">
                  <img
                    alt=""
                    src={require('../../assets/setlist-edit-desktop.png')}
                  />
                </DeviceFrame>
                <LightboxDeviceVideo
                  poster={require('../../assets/setlist-edit-mobile-poster.png')}
                  source={require('../../assets/setlist-edit-mobile.mp4')}
                />
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
              nahtlos in die existierende Plattform integriert sind und mit
              einer GraphQL API kommunizieren. Um den hohen Erwartungen an
              Mobile Apps gerecht zu werden wurde besonderer Fokus auf
              Touch-Gesten, hilfreiche Animationen, Runtime Performance und
              einen Offline-first Ansatz gelegt.
            </ProjectParagraph>
          </Project>
          <Project
            cta={
              <ProjectLink href="https://www.kuechenfinder.com/kuechenplanung">
                Küchenexperten finden
              </ProjectLink>
            }
            id="kuechenfinder"
            intro="Datengetriebene Empfehlungen"
            title="Küchenexperten-Suche"
            visual={
              <ProjectVisual>
                <DeviceFrame type="desktop">
                  <img
                    alt=""
                    src={require('../../assets/kfi-shops-desktop.png')}
                  />
                </DeviceFrame>
                <DeviceFrame>
                  <img
                    alt=""
                    src={require('../../assets/kfi-configurator-1.png')}
                  />
                </DeviceFrame>
              </ProjectVisual>
            }
          >
            <ProjectParagraph>
              Küchenfinder ist eine österreichische Plattform die von{' '}
              <ProjectAnchor href="http://www.molindo.at">
                Molindo
              </ProjectAnchor>{' '}
              entwickelt wird und Ihnen dabei hilft eine neue Küche zu finden.
              Mehr als 2 Millionen Personen besuchen die Seite jährlich und
              verwenden die datengetriebene Suchmaschine um qualifizierte
              Experten zu finden.
            </ProjectParagraph>
            <ProjectParagraph>
              Ich habe mehrere React Apps für die Plattform entwickelt: Ein
              Küchenkonfigurator für Kunden, eine App für Experten um
              Kundenanfragen zu verwalten und eine App für Administratoren um
              Stammdaten zu konfigurieren. Außerdem habe ich eine GraphQL API in
              Node.js implementiert, welche die verteilten Daten aus REST
              Microservices für Clients zugänglich macht.
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
              zukünftig die benutzerfreundliche Grundlage für
              Datenmanagementapps bildet.
            </ProjectParagraph>
            <ProjectParagraph>
              Um diese Herausforderung zu bewältigen, wurde ein 6-köpfiges Team
              von Frontend Spezialisten von{' '}
              <ProjectAnchor href="https://alm.sh/">
                alm engineering
              </ProjectAnchor>
              ,{' '}
              <ProjectAnchor href="https://peerigon.com/">
                Peerigon
              </ProjectAnchor>
              ,{' '}
              <ProjectAnchor href="https://compose.us/">
                compose.us
              </ProjectAnchor>{' '}
              und mir geschaffen. Mein Beitrag umfasste Anforderungserhebung in
              Workshops, Spezifikation von Funktionen & Komponenten APIs, UX
              Design, Frontend Development, Code Review und die Definition von
              GraphQL APIs. Eine Palette von mehr als 150 Komponenten bildet nun
              die Grundlage für 20 Application Packages – Tendenz steigend.
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
              die den Prozess von der Reservierung bis zum Aufsperren eines
              Autos digital abbildet.
            </ProjectParagraph>
            <ProjectParagraph>
              In regelmäßigen Workshops unterstütze ich das Team mit Beratung
              und Mithilfe bei Themen wie Software Architektur, React, GraphQL,
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
        </Projects>
      </Section>
      <Section title="Letzte Artikel">
        <Wrapper background padding>
          <BlogRoll posts={posts} />
        </Wrapper>
      </Section>
      <Section
        description="Ich bin dankbar, Teil einer Community zu sein, in der Ideen und Wissen offen geteilt werden. Mit veröffentlichten Libraries und der Mithilfe bei Projekten Dritter leiste ich meinen Beitrag."
        title="Open source"
      >
        <Wrapper background padding>
          <OpenSourceLayout
            contributions={
              <OpenSourceContributions
                contributions={contributions}
                showMoreButton={<Button>Mehr anzeigen</Button>}
              />
            }
            contributionsTitle="Letzte Beiträge"
            libraries={
              <GithubRepositories
                repositories={repositories}
                showMoreButton={<Button>Mehr anzeigen</Button>}
              />
            }
            librariesTitle="Meine Libraries"
          />
        </Wrapper>
      </Section>
      <LocalizedFooter />
    </Page>
  );
}
