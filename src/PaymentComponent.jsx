import React, { useState } from "react";
import Web3 from "web3";
import { contractABI } from "./constants/abi";

function PaymentComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCredit = async () => {
    setIsLoading(true);
    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
    const walletAddress = import.meta.env.VITE_WALLET_ADDRESS;

    try {
      const web3 = new Web3(Web3.givenProvider);
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      const tx = {
        from: walletAddress,
        to: import.meta.env.VITE_STORE_ADDRESS, // 가게 지갑 주소
        gas: 210000,
        data: contract.methods
          .addCredit(
            "다성반점",
            walletAddress,
            "public",
            "",
            web3.utils.toWei("0.1", "ether"), // 결제 금액
            "0x860E57F925F51de2b7B365c523758CD8eA8CCE35" // 가게 지갑 주소
          )
          .encodeABI(),
      };

      const receipt = await web3.eth.sendTransaction(tx);
      console.log("결제 성공:", receipt);
      alert("결제가 완료되었습니다!");
    } catch (error) {
      console.error("결제 실패:", error);
      alert("결제에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          position: "absolute",
        }}
        onClick={handleAddCredit}
        disabled={isLoading}
      >
        {isLoading ? "처리중..." : "결제하기"}
      </button>
    </div>
  );
}

export default PaymentComponent;
