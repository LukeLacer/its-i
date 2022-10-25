/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';

interface IFilePickerProps {
    chosenimage: Function;
}


const FilePicker = ({chosenimage}: IFilePickerProps) => {

    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        if (!selectedFile) return
        var reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = function () {
            chosenimage(reader.result);
        };
        reader.onerror = function () {
          alert('Algum erro não deixou a gente ler a imagem');
        };
    }, [selectedFile])

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

    return (<div className='file-picker-wrapper'>
        <input type="file" name="file" accept="image/*" onChange={changeHandler} />
    </div>)
}

export default FilePicker;