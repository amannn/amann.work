import React from 'react';
import {ContentComponents} from 'components';
const {Img, P, HR, ScreenStack, Video, A} = ContentComponents;

export default {
  name: 'chords',
  title: 'Chords',
  description: 'Your personal assistant to play and sing along to your favourite songs.',
  feature: {
    type: 'image',
    style: {right: '-33px', bottom: '-248px', width: '300px'},
    url: require('./images/detail-nexus.png')
  },
  bgImageUrl: require('./images/blur.png'),
  bgImageBlends: ['rgba(121,154,165,0.8)'],
  mainImageUrl: require('./images/detail-systembars.png'),
  bodyContent: (
    <div>
      <P>As a guitar player myself, I've tried a good deal of apps which assist you when singing along to songs. I always felt that there was a bit room for improvement in terms of user experience design.</P>
      <P>This is my take on delivering a good experience with such an app.</P>
      <Img src={require('./images/songs-nexus.png')} width="320px" />
      <P>There's no sophisticated multi-level navigation – just your songs. Most hobby guitar players will only have between 10 and 30 songs anyway. A clear structure helps you to quickly identify the song you want to play.</P>
      <P>If you happen to have a lot of songs, you can still use the search feature. But apart from showing you matchings songs from your favourites, this also searches for other matching songs through a remote API. In this way I was able to merge two features into a single UI element.</P>
      <Img src={require('./images/search-nexus.png')} width="320px" />
      <P>When you've decided for a song to play, you get an immersive, fullscreen experience. If you've ever been to a chords or tab website, you might notice that the positioning of the chords works without the need for a monospace font.</P>
      <P>Furthermore, specific chords are always highlighted with the same colour, so if you've used the app for a bit, you might intuitively play the right chord just by subconciously noticing the respective colour.</P>
      <Img src={require('./images/detail-nexus.png')} width="320px" />
      <P>From here you can also save the song as a favourite, or transpose the song up or down if you prefer to sing in a different pitch.</P>
      <HR />
      <P>What enhances the experience is that the colour used for the play button is always computed dynamically from the shown image.</P>
      <ScreenStack screens={[
        require('./images/detail-paused-1.png'),
        require('./images/detail-paused-2.png'),
        require('./images/detail-paused-4.png')
      ]} />
      <P>This is achieved through <A href="http://lokeshdhakar.com/projects/color-thief/">Color Thief</A> – a small colour extraction library. It's really not much effort to implement, but I think it really improves the experience.</P>
      <P>I'm also a big fan of guiding the user with subtle, appropriate animations. I like motion that feels natural and guides the user, instead of drawing attention to itself.</P>
      <Video
        width="320px"
        poster={require('./videos/animations-poster.png')}
        videos={[{
          type: 'webm',
          src: require('./videos/animations.webm')
        }, {
          type: 'ogg',
          src: require('./videos/animations.ogv')
        }, {
          type: 'mp4',
          src: require('./videos/animations.mp4')
        }]}
      />
      <P>When a user is logged in, the collection of songs will be persistently saved in a remote database. So when a user comes back later, or even on a different device, she will find her favourite songs – just like she left them.</P>
      <P>As it is mandatory for every personal project, I, of course, completely overengineered the app. So if, hypothetically, a registered user opens the app on two different devices at the same time, all changes to a song are synced in realtime.</P>
      <Video
        poster={require('./videos/realtime-poster.png')}
        videos={[{
          type: 'webm',
          src: require('./videos/realtime.webm')
        }, {
          type: 'ogg',
          src: require('./videos/realtime.ogv')
        }, {
          type: 'mp4',
          src: require('./videos/realtime.mp4')
        }]}
      />
      <P>This is achieved through a realtime <A href="https://www.meteor.com/">Meteor</A> backend.</P>
      <P>Regarding technological aspects, the UI is built with <A href="https://www.polymer-project.org/">Polymer</A>, Google's response to modern web development. Polymer leverages <A href="http://webcomponents.org/">Web Components</A>, a new set of standards for building apps, that is being worked on by the W3C.</P>
      <HR />
      <P>If you're a guitar player who is now convinced about using this app, I sadly have to disappoint you. As the legal aspects of chords and lyrics are fairly complex and the price for using such data isn't affordable with the earnings of a small app, I've put the project on hold and decided not to publish it.</P>
      <P>But if you know better about these legal aspects, please <A href="mailto:jan@amann.me">let met know</A>.</P>
    </div>
  )
};
