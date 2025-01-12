import React, { useState } from "react";
import Web3 from "web3";
import { contractABI } from "./constants/abi";

function PaymentComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCredit = async () => {
    setIsLoading(true);
    const contractAddress = "0xe296dB5dc9779B6eEF1411966196657104F4C3D7";
    const walletAddress = "0x2aF6d726B110747F02AFaAa9a23d63B1d85D9878";

    try {
      const web3 = new Web3(Web3.givenProvider);
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      const tx = {
        from: walletAddress,
        to: "0xD2539f4b7aEc9d07D755c12A965e28c09a25065B", // 가게 지갑 주소
        gas: 210000,
        data: contract.methods
          .addCredit(
            "오삼숙이",
            walletAddress,
            "private",
            import.meta.env.VITE_PASSWORD,
            web3.utils.toWei("10000", "ether"), // 결제 금액
            "0xD2539f4b7aEc9d07D755c12A965e28c09a25065B"
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
