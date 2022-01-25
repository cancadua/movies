import React, {useRef} from 'react'


const FileUploader = ({onFileSelect}) => {

    const fileInput = useRef(null)


    return (

        <div className="file-uploader">
            <input type="file">
                <button onClick={() => fileInput.current && fileInput.current.click()} className="btn btn-primary"/>
            </input>
        </div>

    )
}

export default FileUploader;