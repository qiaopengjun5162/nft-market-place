import { useAccount } from 'wagmi'


const AccountInfo = () => {
    const account = useAccount()
    return (
        <div className='flex flex-col gap-2 text-black'>
            <p>Address: {account.address}</p>
            <p>addresses: {account.addresses}</p>
            <p>chainId: {account.chainId}</p>
            <p>chain: {account.chain?.name}</p>
            <p>isConnecting: {account.isConnecting.toString()}</p>
            <p>isReconnecting: {account.isReconnecting.toString()}</p>
            <p>status: {account.status}</p>
        </div>
    )
}

export default AccountInfo
