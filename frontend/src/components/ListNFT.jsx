import React, { useState } from 'react';

const ListNF = () => {

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">List NFT</h2>
      <input
        type="text"
        placeholder="NFT Contract Address"
        //value={nftContract}
        //onChange={(e) => setNftContract(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
      />
      <input
        type="text"
        placeholder="Token ID"
        //value={tokenId}
        //onChange={(e) => setTokenId(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
      />
      <input
        type="text"
        placeholder="Price in ETH"
        //value={price}
        //onChange={(e) => setPrice(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
      />
      <button
        //onClick={handleListNFT}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        List NFT
      </button>
    </div>
  );
};

export default ListNF;
