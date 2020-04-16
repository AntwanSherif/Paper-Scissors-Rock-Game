import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Modal({ open, title, children, closeModal }) {
    const modal = useRef(null);

    // toggle modal-related classes
    useEffect(() => {
        modal.current.classList.toggle('opacity-0');
        modal.current.classList.toggle('pointer-events-none');

        const body = document.querySelector('body');
        if(open) {
            body.classList.add('modal-active');
        } else {
            body.classList.remove('modal-active');
        }
    }, [open]);


    return (
        <div ref={modal} className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold text-dark">{title}</p>
                        <div className="modal-close cursor-pointer z-50"  onClick={closeModal}>
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>

                    {children}

                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    children: PropTypes.node,
    closeModal: PropTypes.func.isRequired
}