export const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "store_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "string",
        name: "record_type",
        type: "string",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "credit",
        type: "uint256",
      },
    ],
    name: "addCredit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "store_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "string",
        name: "record_type",
        type: "string",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
    ],
    name: "getCredit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "store_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "string",
        name: "record_type",
        type: "string",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "credit",
        type: "uint256",
      },
    ],
    name: "useCredit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
