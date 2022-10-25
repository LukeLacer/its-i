import React from 'react';
import Image from 'next/image';

interface IModalProps {
    children: JSX.Element | JSX.Element[],
    close: Function
}

const Modal = ({ children, close }: IModalProps) => {
    return (
        <div className='modal' onClick={() => close()}>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    )
}

export default Modal;