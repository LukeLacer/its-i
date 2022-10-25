import React from 'react';
import Image from 'next/image';

interface IImageResultModalProps {
    image_data: string;
    closeModal: Function;
    message: string;
}

const ImageResultModal = ({image_data, closeModal, message}: IImageResultModalProps) => {
    return (
        <div className='modal-wrapper'>
            { message === "True"
                ? <span className='true-message'>A letra é um i</span>
                : <span className='false-message'>A letra não é um i</span>
            }
            <Image alt='Image preview' src={image_data} width={300} height={300} />
            <button onClick={() => closeModal()}>Close</button>
        </div>
    )
}

export default ImageResultModal;