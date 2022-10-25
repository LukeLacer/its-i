/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';

interface ICanvasProps extends React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> {
    width: number;
    height: number;
    chosenimage: Function;
}

const Canvas = ({width, height, chosenimage, ...rest}: ICanvasProps) => {

    const canvasStyling = {
        width: `${width}px`,
        height: `${height}px`,
        border: '1px solid black',
        cursor: 'crosshair'
    };

    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = width * 2;
        canvas.height = height * 2;

        const context = canvas.getContext('2d');
        context.scale(2,2);
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height)
        context.lineCap = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        contextRef.current = context;
    }, []);
    

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    }

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    const draw = ({nativeEvent}) => {
        if (!isDrawing) return
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    }

    const clearDraw = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height)
    }

    const sendImage = () => {
        chosenimage(canvasRef.current.toDataURL());
        clearDraw();
    }

    return (<div className='canvas-wrapper'>
        <canvas
            {...rest}
            style={canvasStyling}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseOut={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
        />
        <div className='canvas-button-wrapper'>
            <button className='canvas-clear-button' onClick={e => clearDraw()}>Clear</button>
            <button className='canvas-send-button' onClick={e => sendImage()}>Send</button>
        </div>
    </div>)
}

export default Canvas;
