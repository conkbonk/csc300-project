import { useState } from "react";

function TicketPurchase() {
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("")
  const [ticketBuying, setTicketBuying] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add code to update user purchase history with the details of the current purchase
    const purchaseDetails = {
      ticketBuying,
      cardType,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
      paypalEmail,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      // Add any other details you want to include in the purchase history
    };

    // Here's an example of how you could update the user's purchase history using localStorage
    const purchaseHistory = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
    const updatedPurchaseHistory = [...purchaseHistory, purchaseDetails];
    localStorage.setItem("purchaseHistory", JSON.stringify(updatedPurchaseHistory));

    // Reset form fields
    setTicketBuying("");
    setCardType("");
    setCardNumber("");
    setExpiryMonth("");
    setExpiryYear("");
    setCvv("");
    setPaypalEmail("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
       <div>
        <label htmlFor="">Ticket Type </label>
        <select id="ticketBuying" name="ticketBuying" value={ticketBuying} onChange={(event) => setTicketBuying(event.target.value)}>
          <option value="">--Select--</option>
          <option value="Red Line">Red Line</option>
          <option value="Orange Line">Orange Line</option>
          <option value="Blue Line">Blue Line</option>
          <option value="Commuter Rail">Commuter Rail</option>
          <option value="Ferry">Ferry</option>
        </select>
      </div>

      <div>
        <label htmlFor="cardType">Card Type</label>
        <select id="cardType" name="cardType" value={cardType} onChange={(event) => setCardType(event.target.value)}>
          <option value="">--Select--</option>
          <option value="amex">Amex</option>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
        </select>
      </div>

      <div>
        <label htmlFor="cardNumber">Card Number</label>
        <input id="cardNumber" name="cardNumber" type="text" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <div>
          <label htmlFor="expiryMonth">Expiry Month</label>
          <input id="expiryMonth" name="expiryMonth" type="text" value={expiryMonth} onChange={(event) => setExpiryMonth(event.target.value)} />
        </div>

        <div>
          <label htmlFor="expiryYear">Expiry Year</label>
          <input id="expiryYear" name="expiryYear" type="text" value={expiryYear} onChange={(event) => setExpiryYear(event.target.value)} />
        </div>

        <div>
          <label htmlFor="cvv">CVV</label>
          <input id="cvv" name="cvv" type="text" value={cvv} onChange={(event) => setCvv(event.target.value)} />
        </div>

      </div>
      <div>
        <label htmlFor="paypalEmail">PayPal Email</label>
        <input id="paypalEmail" name="paypalEmail" type="text" value={paypalEmail} onChange={(event) => setPaypalEmail(event.target.value)} />
      </div>
      <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "blue", color: "white", border: "none", borderRadius: "0.5rem", cursor: "pointer" }}>Purchase</button>
    </form>
  );
}
export default TicketPurchase;

