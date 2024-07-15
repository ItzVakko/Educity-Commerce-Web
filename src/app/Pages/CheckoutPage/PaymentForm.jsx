import React from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  return (
    <aside className="payment-form-wrapper">
      <form className="payment-form">
        <h2>პერსონალური ინფორმაცია</h2>
        <div className="line"></div>

        <div className="input-wrappers">
          <div className="two-input-wrapper">
            <input type="text" id="name" placeholder="სახელი" />
            <input type="text" id="surname" placeholder="გვარი" />
          </div>
          <div className="two-input-wrapper">
            <input type="email" id="email" placeholder="ელ.ფოსტა" />
            <input
              type="text"
              id="number"
              min="9"
              max="20"
              placeholder="ტელეფონის ნომერი"
            />
          </div>
          <input type="text" id="address" placeholder="მისამართი" />
          <input
            type="text"
            id="voucher"
            placeholder="შეიყვანეთ ვაუჩერის კოდი"
          />
        </div>

        <h2>გადახდის მეთოდი</h2>
        <div className="line"></div>
        <div className="input-wrappers">
          <input
            type="text"
            id="card-owner-name"
            placeholder="ბარათის მფლობელის სახელი"
          />
          <input type="text" id="card-number" placeholder="ბარათის ნომერი" />

          <div className="two-input-wrapper">
            <input type="text" id="exp-date" placeholder="EXP Date" />
            <input type="text" id="cvc" placeholder="CVC" />
          </div>
        </div>
      </form>
    </aside>
  );
};

export default PaymentForm;
