import { WalletConnect } from "@/components/WalletConnect/WalletConnect";
import { useTruncatedAddress } from "@/hooks/useTruncatedAddress";

export const Index = (): JSX.Element => {
  const address = useTruncatedAddress();
  return (
    <body className="flex justify-center items-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blueGray-50">{address}</h1>
        <WalletConnect className="p-3 text-white rounded-lg border">
          Connect Wallet
        </WalletConnect>
      </div>
    </body>
  );
};

export default Index;
