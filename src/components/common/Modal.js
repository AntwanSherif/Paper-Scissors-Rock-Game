import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';

const Modal = React.forwardRef(({ open, title, children, closeModal }, ref) => {
    // toggle modal-related classes
    useEffect(() => {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');

        modal.classList.toggle('opacity-0');
        modal.classList.toggle('pointer-events-none');

        if (open) {
            body.classList.add('modal-active');
        } else {
            body.classList.remove('modal-active');
        }
    }, [open]);


    return (
        <PoseGroup>
            <div key='modal' ref={ref} className='modal fixed w-full h-full top-0 left-0 flex items-center justify-center'>
                <div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>

                <div className='modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto'>

                    <div className='modal-content py-4 text-left px-6'>
                        <div className='flex justify-between items-center pb-3'>
                            <p className='text-2xl font-bold text-dark'>{title}</p>
                            <div className='modal-close cursor-pointer z-50' onClick={closeModal}>
                                <svg className='fill-current text-black' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
                                    <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
                                </svg>
                            </div>
                        </div>

                        {children}

                    </div>
                </div>
            </div>
        </PoseGroup>
    )
});

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    children: PropTypes.node,
    closeModal: PropTypes.func.isRequired
}


const AnimatedModal = posed(Modal)({
    enter: {
        y: 0,
        opacity: 1,
        delay: 100,
        transition: {
            y: { type: 'spring', stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
});

AnimatedModal.displayName = 'AnimatedModal';

export default props => <AnimatedModal pose={props.open ? 'enter' : 'exit'} {...props} />;