import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Canvas from '../components/Canvas'
import ImageResultModal from '../components/ImageResultModal'
import FilePicker from '../components/FilePicker'
import apiClient from '../services/apiClient'
import Information from '../components/Information'
import Loading from '../components/Loading'
import useScrollBlock from '../hooks/useScrollBlock'

export default function Home() {
  const [image_base64, setImage_base64] = useState(null)
  const [message, setMessage] = useState(null)
  const [processedImage, setProcessedImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock();

  const startLoading = () => {
    blockScroll()
    setLoading(true)
  }

  const stopLoading = () => {
    allowScroll();
    setLoading(false);
  };

  const sendImage = (img_data) => {
    startLoading();
    apiClient.post('itsi', { imageData: img_data })
    .then((res) => {
      stopLoading();
      setImage_base64(img_data);
      setMessage(res.data.message);
      setProcessedImage(res.data.processedImg);
    })
    .catch(error => {
      alert('Ocorreu algum erro na hora de receber a resposta');
      stopLoading();
    });
  };

  const closeModal = () => {
    setImage_base64(null);
  };

  return (
    <div className='home-wrapper'>
      <Information />
      <div className='image-picker-wrapper'>
        <Canvas width={256} height={256} chosenimage={sendImage}/>
        <FilePicker chosenimage={sendImage}/>
      </div>
      {image_base64 ? <ImageResultModal closeModal={closeModal} image_data={image_base64} processed_image={`data:image/jpg;base64,${processedImage}`} message={message} /> : null}
      {loading ? <Loading /> : null}
    </div>
  )
}
