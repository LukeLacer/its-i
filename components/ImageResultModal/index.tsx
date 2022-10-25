import React from 'react';
import Image from 'next/image';
import Modal from '../Modal';

interface IImageResultModalProps {
    image_data: string;
    closeModal: Function;
    message: string;
}

const ImageResultModal = ({image_data, closeModal, message}: IImageResultModalProps) => {
    return (
        <Modal close={closeModal}>
            { message === "True"
                ? <span className='true-message'>A letra é um i</span>
                : <span className='false-message'>A letra não é um i</span>
            }
            <Image alt='Image preview' src={image_data} width={300} height={300} />
            <button onClick={() => closeModal()}>Close</button>
        </Modal>
    )
}

export default ImageResultModal;