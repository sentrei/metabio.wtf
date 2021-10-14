import dynamic from "next/dynamic";

const WalletConnect = dynamic(
  () => {
    return import("@/components/WalletConnect").then(mod => {
      return mod.WalletConnect;
    });
  },
  {
    ssr: false,
  },
);

export const HomeHero = () => {
  return (
    <section className="pt-20 pb-24 sm:pb-24">
      <div className="px-4 mx-auto mt-16 sm:mt-24 max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-trueGray-700">
            <span className="block xl:inline">
              The only bio you need in the
            </span>{" "}
            <span className="block xl:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              metaverse
            </span>{" "}
            <span role="img" aria-label="happy">
              🥳
            </span>
          </h1>
          <p className="mx-auto mt-3 md:mt-5 max-w-md md:max-w-3xl text-base sm:text-lg md:text-xl text-gray-500">
            Show everyone what you’ve done and what you own.
          </p>
        </div>
        <div className="sm:flex sm:justify-center mx-auto mt-8 md:mt-16 max-w-md">
          <div className="rounded-md shadow">
            <WalletConnect
              href="/profile"
              connectedChildren="Enter profile"
              className="py-4 px-8 text-xl text-blueGray-100 bg-indigo-600 hover:bg-indigo-700 bg-gradient-to-r rounded-lg border-2 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 duration-200 hover:scale-110 focus:outline-none"
            >
              Connect wallet
            </WalletConnect>
          </div>
        </div>
      </div>
    </section>
  );
};
