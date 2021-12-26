import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Spotify Clone with Next.js</title>
        <link
          rel="icon"
          type="image/png"
          href="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Spotify-256.png"
        />
        {/* Image from: https://www.iconfinder.com/icons/1298766/spotify_music_sound_icon */}
      </Head>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
