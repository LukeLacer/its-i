import React from 'react';

const Canvas = (props: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>) => {
    const canvasStyling = {
        width: '256px',
        height: '256px',
        border: '1px solid black',
        cursor: 'crosshair'
    }
    return <div className='canvas-wrapper'>
        <p>Desenhe</p>
        <canvas {...props} style={canvasStyling} />
    </div>
}

export default Canvas;