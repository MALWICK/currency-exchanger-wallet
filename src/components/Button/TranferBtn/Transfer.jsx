import React, { useState } from 'react';
import './transfer.css';
import Modal2 from '../../Modals/Modal3/Modal3';

function Transfer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="transfer__btn"
      >
        Transfer Money
      </button>
      {isOpen && <Modal2 setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Transfer;
