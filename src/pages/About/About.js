import React, {Component, PropTypes} from 'react';
import {Header, Icon, Button, ContentComponents, PageContent} from 'components';
const {H1, P, B, Img, HR, UL, LI, A} = ContentComponents;
import styles from './About.scss';

export default class About extends Component {
  static propTypes = {
    model: PropTypes.object
  };

  render() {
    let {menus} = this.props.model;

    return (
      <div>
        <Header title="About me" mini menu={menus.main} />

        <PageContent>
          <div className={styles.shortDescription}>
            <div className={styles.shortDescriptionText}>
              <P>Hi! I’m Jan, a <B>frontend developer</B> from Austria.</P>
              <P>Frontend technologies are my tools of choice to craft great user experiences. I approach product development from the design perspective and always put the users first.</P>
            </div>
            <div className={styles.portraitContainer}>
              <img className={styles.portrait} src={require('images/portrait.jpg')} alt="Jan Amann" />
            </div>
          </div>
          <HR />

          <H1>
            <div className={styles.h1IconContainer}>
              <Icon name="heart-outline" />
            </div>
            I focus on user experience.
          </H1>
          <P>Apps should solve the task of the user – and also work in an economical way for the company behind it. I believe in apps that solve business problems by <B>providing value to the users</B>. I don't like distracting people and making them jump through hoops.</P>
          <P>I'm also a big fan of <B>progressive enhancement</B>. The web platform became very capable in the recent past. I think people with fast devices and modern browsers shouldn't be punished by the market share of older browsers. Likewise, an app should also work for less capable devices. We should keep in mind that the vast majority of the next generation of internet users will come from emerging markets like India, where people use a lot of low-budget phones.</P>
          <P>But I don't do IE6 – sorry :)</P>
          <P>I appreciate apps that respond to context. People use smartphones differently than their laptops. Apps should respond to that –<B> beyond classical responsive design</B>.</P>

          <H1>
            <div className={styles.h1IconContainer}>
              <Icon name="flower-outline" />
            </div>
            I focus on aesthetics.
          </H1>
          <P>Much to designer's disfavour, these folks sadly aren't in full control of how exactly an app will look to an end user. Typically, almost every dot a designer has carefully drawn needs to be redone by a developer during development.</P>
          <P>When designers entrust me with their previous work, I take care that every pixel sits exactly at the right spot. This is nothing unfamiliar to me, as I'm an experienced UI designer myself.</P>
          <P>I also like to take on the design role myself.</P>

          <H1>
            <div className={styles.h1IconContainer}>
              <Icon name="lightning-bolt" />
            </div>
            I focus on performance.
          </H1>
          <P>I'm totally performance-obsessed. I'm in constant pursuit of the best techniques to make my apps run as fast as possible. Every aspect counts: <B>initial load and render time</B>, time to <B>respond to interactions</B> and the frame rate during <B>animations</B>.</P>
          <P>I think <A href="https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail">RAIL</A> is a great model on how to measure performance. I use this to squeeze out the last bit of performance for my apps.</P>
          <P>Recently I completed Google's Udacity course on <A href="https://www.udacity.com/course/browser-rendering-optimization--ud860">browser rendering optimization</A>.</P>
          <P>This mostly involves technical skills, but sometimes I also discover ways to improve the <B>perceived performance</B> of an app without actual technical changes.</P>

          <HR />

          <H1>My tech stack</H1>
          <P>I do everything that has some sort of logic in JavaScript: My client side apps, my server side apps and my build tools. When possible, I go for ECMAScript 2015.</P>
          <P>All of my recent projects are built with <A href="https://facebook.github.io/react/">React</A>. I'm really pleased with the results as well as how I was able to use it in very different ways.</P>
          <P>Here's a quick list:</P>
          <UL>
            <LI>Two <B>large single page apps</B> that talk with a REST backend. One of them is basically an admin interface with a high “feature to space” ratio (but still looks clean; kudos to the designer). The <A href="https://facebook.github.io/flux/docs/overview.html">Flux</A> architecture worked very well for these apps.</LI>
            <LI>Integration with a large Java application. I've built a rendering server that the Java app can talk to in order to get UI widgets. The response contains JavaScript code to initialize the widget on the client, but also some pre-rendered HTML, so there's no downside regarding SEO. Also API data is transferred to the client, so a refetch isn't necessary.</LI>
            <LI>A <B>widget for a WordPress site</B> – also for this project with pre-rendered HTML that is being spit out during the build process, while the client side reinitializes for interactivity.</LI>
            <LI>A <A routerLink="/projects/amann.me">static website</A> – the one you're currently looking at :)</LI>
          </UL>
          <P>Apart from the last one, all of these projects are yet to be published, so I unfortunately can't provide any more details for now.</P>
          <P>Besides React, I've also built beautiful things with AngularJS, Meteor and Polymer (e.g., this one: <A routerLink="/projects/chords">Chords</A>).</P>
          <P>In terms of build tools, I think that <A href="http://webpack.github.io/docs/what-is-webpack.html">webpack</A> is really amazing, but I also did my share of Grunt and Gulp setups. For testing my apps I use <A href="http://jasmine.github.io/">Jasmine</A> and <A href="https://facebook.github.io/jest/">Jest</A>.</P>
          <Img undersized src={require('./images/tech-logos.svg')} />
          <P>But I can also do vanilla JavaScript of course. I think technology should always be aligned with delivering the best user experience and not the other way around.</P>
          <HR />

          <P>If you're interested in working with me, I hope this gave you a rough first impression. Please get in touch with me if you want to chat about something!</P>

          <Button href="mailto:jan@amann.me" icon="mail">Say hello</Button>

        </PageContent>
      </div>
    );
  }
}
