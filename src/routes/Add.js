import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import '../styles.css';


const Add = () => {
    const [image, setImage] = useState('');

    function sendMovie () {
        console.log('submit')
    }

    const handleInputChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        console.log(image)
    }

    return (
        <div>
            <div className={'background'}>
                <form className={'movieViewContainer'} onSubmit={sendMovie()}>
                    <div className={'uploadContainer'}>
                        <label htmlFor="file-input" className={'uploadLabel'}>
                            {(image && <img src={image} className={'movieUpload'} alt={''}/>) ||
                                <img src={'../upload.png'} className={'movieUpload'} alt={''}/>}
                        </label>
                        <input className="imageUpload" id="file-input" type="file" onChange={handleInputChange}/>
                    </div>
                    <div className={'flex1'}>
                        <textarea placeholder={'Title...'} className={'uploadTitle'} onChange={handleInputChange}/>
                        <textarea placeholder={'Description...'} className={'uploadContent'} onChange={handleInputChange}/>
                        <input type="submit" value="Submit" className={'submitButton'}/>
                    </div>
                </form>
            </div>
            <div>
                <Footer/>
                <Bar/>
            </div>
        </div>
    );
};


export default Add;
