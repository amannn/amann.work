export default function Fonts() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* font-weight: 400 */
          /* latin */
          @font-face {
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: local('Ubuntu Regular'), local('Ubuntu-Regular'), url(/fonts/4iCs6KVjbNBYlgoKfw72nU6AFw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* font-weight: 500 */
          /* latin */
          @font-face {
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: local('Ubuntu Medium'), local('Ubuntu-Medium'), url(/fonts/4iCv6KVjbNBYlgoCjC3jsGyNPYZvgw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `.replace(/\s+/g, ' ')
      }}
    />
  );
}
