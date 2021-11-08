import React, {useEffect, useRef, useState} from 'react'
import './Post.css'
import {Button} from 'react-bootstrap'
import {MdModeEdit} from 'react-icons/md'
import firebase from "firebase";


export const Post = (props) => {
    const [file,setFile] = useState()
    const [previewUrl, setpreviewUrl] = useState()
    const filePickerRef = useRef()
    const [ data, setData ] = useState({})

    const db = firebase.firestore()
    const storage = firebase.storage()

    useEffect(() => {
        if(!file){
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setpreviewUrl(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    },[file])

    function pickedHandler (event) {
    let pickedFile;
    if(event.target.files && event.target.files.length === 1){
        pickedFile = event.target.files[0]
        setFile(pickedFile)
    }
    }

    function pickedImageHandler () {
        filePickerRef.current.click()
    }
    return (
        <div className='form-control center'>
            <input type="file"
            id={props.id}
                   ref={filePickerRef}
                   style={{display:'none'}}
                   accept='.jpg,.png,.jpeg'
                   onChange={pickedHandler}
            />
            <div className={`image-upload ${props.center && 'center'}`}>
                <div className="image-upload__preview">
                    {previewUrl && <img src = {previewUrl} alt='previewUrl'/>}
                    {!previewUrl && (
                        <div className="center">
                            <Button className='image-upload-button'
                                    type='button'
                                    onClick={pickedImageHandler}>  <MdModeEdit className='icon'></MdModeEdit></Button>
                        </div>
                    )}
                </div>
                <div>
                    {  previewUrl && (
                        <div className="center">
                            <Button className='image-upload-button'
                                    type='button'
                                    onClick={pickedImageHandler}>
                                <MdModeEdit className='icon'></MdModeEdit>
                            </Button>
                        </div>
                    )

                    }
                </div>
            </div>

        </div>
    )
}