import React, { Component } from "react";

class DisplayImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };

        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
            console.log(img)
        }
    };

    render() {
        return (
            <div className={'uploadContainer'}>
                <label htmlFor="file-input" className={'flex1'}>
                    {(this.state.image && <img src={this.state.image} className={'movieUpload'}/>) ||
                        <img src={'../login.png'} className={'movieUpload'}/>}
                </label>
                <input className="imageUpload" id="file-input" type="file" onChange={this.onImageChange}/>
            </div>
        );
    }
}
export default DisplayImage;