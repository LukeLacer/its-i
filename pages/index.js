import styles from '../styles/Home.module.css'
import Canvas from '../components/Canvas'

export default function Home() {
  const sendDraw = (img_data) => {
    let img = new Image();
    img.src = img_data;
    alert('Essa imagem pode ser uma letra "i"');
  }
  return (
    <>
      <Canvas width={256} height={256} sendDraw={sendDraw}/>
    </>
  )
}
