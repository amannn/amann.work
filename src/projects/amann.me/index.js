import React from 'react';
import {ContentComponents, GithubGist} from 'components';
const {H1, UL, LI, B, P, HR, Code, A} = ContentComponents;

export default {
  name: 'amann.me',
  title: 'amann.me',
  description: 'Take a look behind the scenes of the website you\'re currently browsing.',
  feature: {
    type: 'image',
    style: {right: '-33px', bottom: '-246px', width: '300px'},
    url: require('./images/main-nexus.png')
  },
  bgImageUrl: require('./images/blur.png'),
  bgImageBlends: ['rgba(77, 100, 107, 0.9)'],
  mainImageUrl: require('./images/main-systembars.png'),
  bodyContent: (
    <div>
      <P>Ok, this is pretty meta – I'm writing about the website your currently on. But I really like the way it is built, so let's have a look at that.</P>
      <HR />
      <H1>The goal</H1>
      <P>I wanted a website that fulfills the following requirements:</P>
      <UL>
        <LI>All possible routes of the website should be rendered to <B>static HTML pages</B> at build time, so they can be served as quickly as possible. Pre-rendered HTML also makes the website very easy to deploy, as the files can be served from every web server. Lastly, search engines have an easier job indexing a site when there's prerendered HTML.</LI>
        <LI>When the website is loaded, all subsequent route changes should be handled on the <B>client side</B>, so they happen as fast as possible. Since the HTML code for the website is pretty small, I also want all routes to be preloaded, so the client doesn't have to talk to the server at all to make a page transition.</LI>
      </UL>
      <H1>The solution</H1>
      <P>This was easily possible with <A href="https://facebook.github.io/react/">React</A> and <A href="https://github.com/rackt/react-router">React Router</A>.</P>
      <P>As React runs just as well in a node.js context as in the browser, the whole code for the pre-rendering is exactly the same as the one for the client side app.</P>
      <P>When the browser has already rendered the fetched HTML and CSS code, the rest of the website is downloaded as a single JavaScript bundle. As React keeps the desired HTML structure in a JavaScript representation, this bundle already contains the HTML code for all remaining sites.</P>
      <P>The JavaScript bundle is also surprisingly small. With gzip compression, this only accounts for ~100KB. Therefore, by the time the user clicks the first time, the client side app will have surely been loaded.</P>
      <P>A nice side effect of this approach is that even if you disable JavaScript in the browser, you can still browse between the pages by clicking on links. That's cool, right? It's a website written in JavaScript that works even when the user chooses to turn off JavaScript.</P>
      <P>But, of course, something like a <A href="/photos/wilhering" target="_blank">photo gallery</A> won't work without JavaScript. But if you'd give every single image its own route, you could still achieve that.</P>

      <H1>Animations</H1>
      <P>Motion design is something really important to me. With this project I tried to incorporate natural motion – moving elements should closely resemble physical objects from the real world.</P>
      <P>If you check out a <A href="/photos/old-rhine" target="_blank">photo gallery</A>, you might notice a difference of the movement from traditional CSS animations. All motion is calculated with spring formulas, which come really close to movement in the real world. Try to navigate fast through the pictures and you'll notice the speed of the movement increasing (you can also use the arrow keys) – you'd have to hack CSS animations quite a bit for such a behaviour.</P>
      <P>On a mobile phone you can also use swipe gestures to navigate through the photos. When you reach the end, you'll notice the motion of the elements telling you that you've reached the end – no need for an error message.</P>
      <P>The base for the animations are from <A href="https://github.com/iamralpht/iamralpht.github.io/tree/master/physics">Ralph Thomas</A> – a true genius in the field of physics-based UIs.</P>

      <H1>Fun with modules</H1>
      <P>What keeps the app together is the module bundler <A href="https://webpack.github.io/">webpack</A>. If you're doing frontend, I can only advise you to have a look at an <A href="https://github.com/petehunt/webpack-howto">introduction</A>. Here's a list of things webpack does with an overseeable configuration:</P>
      <UL>
        <LI>Compiles SASS to CSS.</LI>
        <LI>Compiles ES2015+ with <A href="http://www.2ality.com/2014/09/es6-modules-final.html">modules</A> to ES5, so it runs in the browser (uses <A href="https://babeljs.io/">Babel</A>).</LI>
        <LI>Renders all possible routes of the websites to static HTML files.</LI>
        <LI>Images with a maximum size of 1KB will be inlined into the HTML code to avoid unnecessary HTTP requests.</LI>
        <LI>Images above that limit will be served as a separate asset so they can be cached. Caching problems are avoided by giving images a unique name on every deploy.</LI>
        <LI>Other static assets like JavaScript, CSS and videos will also get a cache-friendly name.</LI>
      </UL>
      <P>Webpack can also output a JSON file containing all the names of the generated assets. In an earlier version of this website, I used that to cache all static assets with a <A href="https://github.com/amannn/amann.me/blob/master/src/index.js#L33">service worker</A> in an offline cache, so the whole website also runs offline. However, I removed that feature later, since the website has grown quite a bit in size and you don't want a website that you're visiting for the first time to put 20MB of images and videos in a (semi-)permanent cache. But for an app that somebody uses frequently, this approach would be a great addition to the UX.</P>
      <P>Regarding CSS, I wanted to try a new structural approach. Usually I recommend <A href="http://getbem.com/naming/">BEM</A> for React apps, but the long class names can make your HTML code a bit noisy. That's a point where <A href="https://github.com/css-modules/css-modules">CSS modules</A> really shine.</P>
      <P>With CSS modules you can write code like this:</P>
      <GithubGist gist="amannn/7d111560a14f636eeff1" />
      <P>At first you might get frightened, because it looks like the class names <Code>.root</Code> and <Code>.icon</Code> will be used. Those are names that are guaranteed to cause naming collisions in every website that uses more than a few divs.</P>
      <P>But what's actually happening, is that those class names will be scoped to that CSS file. That CSS file can be loaded through webpack into a JavaScript module, where those names can be accessed. What makes this concept work, is that the actual class names will automatically be generated at build time. Therefore the deployed website will use class names like <Code>.lLSSjheLU1W5Br9UATESw</Code>, which will prevent name clashes.</P>
      <P>It's actually very similar to what you get by using the <A href="http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201/">style encapsulation</A> features of shadow DOM, but without sacrificing on browser support.</P>
      <P>I really like how clean the HTML and CSS code looks :)</P>

      <H1>Developer experience</H1>
      <P>I love being efficient when developing.</P>
      <P>If you clone this website from <A href="https://github.com/amannn/amann.me/">Github</A> and run it in development mode, you'll find almost every single piece of the app is hot reloadable. That means no more continuously hitting refresh in your browser or losing the state of what you were currently working on. This is something people have seen for quite some time now with CSS code. But hot reloading complete UI components built with JavaScript is simply amazing.</P>
      <P>Development can be such a joy when tools don't get in your way. I should thank <A href="https://twitter.com/dan_abramov">Dan Abramov</A> for his great work in this area at this point.</P>

      <HR />
      <P>If you want, you can check out the full code of this website on <A href="https://github.com/amannn/amann.me/">Github</A>.</P>
    </div>
  )
};
