import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img
        src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Spotify-512.png"
        className="w-52 mb-5"
        alt="Logo"
      />

      {/* Image from: https://www.iconfinder.com/icons/1298766/spotify_music_sound_icon */}

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#10bc4c] hover:bg-[#00cb54] text-black p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            <p className="font-sans">Login with {provider.name}</p>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
