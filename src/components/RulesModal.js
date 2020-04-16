import React, { useState } from 'react';
import Button from './common/Button';
import Modal from './common/Modal';
import RulesImg from '../assets/rules.svg';


export default function RulesModal({ className }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Button outlined className={className} onClick={openModal}>
                RULES
            </Button>

            <Modal open={isModalOpen} title='RULES' closeModal={closeModal}>
                <div className='h-96 flex items-center justify-center'>
                    <img src={RulesImg} alt='Game rules' />
                </div>
            </Modal>
        </>
    )
}
