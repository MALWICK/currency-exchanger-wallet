import React, { useState } from 'react';
import './deposit.css';
import Modal1 from '../../Modals/Modal2/Modal2';

function DepositBtn() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="deposit__btn"
      >
        Deposit
      </button>
      {isOpen && <Modal1 setIsOpen={setIsOpen} />}
    </div>
  );
}

export default DepositBtn;
