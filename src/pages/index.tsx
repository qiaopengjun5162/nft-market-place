import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import BuyNFT from '../components/BuyNFT';
import ListNFT from '../components/ListNFT';
import AccountInfo from '../hooks/AccountInfo';

const Home: NextPage = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 p-4">
        <ConnectButton />
      </div>
      <hr />
      <AccountInfo />
      <BuyNFT />
      <ListNFT />
    </div>
  );
};

export default Home;
