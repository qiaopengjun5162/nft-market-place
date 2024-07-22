import { Address } from 'viem'
import { useReadContracts } from 'wagmi'
import { NFTMarketABI } from "../abis/NFTMarketAbi"

const NFTMarketContract = {
    address: process.env.NFTMarketContractAddress as Address,
    abi: NFTMarketABI,
} as const

const ListNFT = () => {
    const result = useReadContracts({
        contracts: [
            {
                ...NFTMarketContract,
                functionName: 'getAllNFTs',
                // args: [],
            },
        ],
    })

    return (
        <div>
            <h1>List NFT</h1>
            {result.data?.map((nft: any) => <div key={nft.tokenId}>
                {nft.tokenId}
                {nft.seller}
                {nft.price}
            </div>)}
        </div >
    )
}

export default ListNFT
