import pinataSDK from '@pinata/sdk';

const pinata = pinataSDK(process.env.PINATA_API_KEY || '', process.env.PINATA_SECRET_API_KEY || '');

export async function set(json) {
  // TODO :
  // 1 . add type of ipfs data to set ['auction_settings', 'auction_bid']
  // 2.  add validation for data scheme of the data types
  const result = await pinata.pinJSONToIPFS(json);
  return result.IpfsHash;
}
