import React from 'react';
import Image from 'next/image';
import Modal from '../Modal';

interface IImageResultModalProps {
    image_data: string;
    closeModal: Function;
    message: string;
    processed_image: string;
}

const ImageResultModal = ({image_data, closeModal, message, processed_image}: IImageResultModalProps) => {
    return (
        <Modal close={closeModal}>
            { message === "True"
                ? <span className='true-message'>A letra é um i</span>
                : <span className='false-message'>A letra não é um i</span>
            }
            <div className='images-wrapper'>
                <div className='single-image-wrapper'>
                    <span>Imagem enviada</span>
                    <Image className='given-image' alt='Image preview' src={image_data} width={300} height={300} />
                </div>
                <div className='single-image-wrapper'>
                    <span>Imagem processada</span>
                    <Image className='pre-processed-image' alt='Image processed preview' src={processed_image} width={300} height={300} />
                </div>
            </div>
            <button onClick={() => closeModal()}>Close</button>
        </Modal>
    )
}

export default ImageResultModal;