import React, {Component} from 'react';
import NewAuctionForm from '../components/NewAuctionForm.jsx';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import ImageUpload from '../components/ImageUpload.jsx';

export default class NewAuction extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: "" ,
      redirect: false,
      newImage: "",
      thumbnails: ""
    };
  }

  callAPI() {
      fetch("http://localhost:3001/auctions/new")
          .then(res => res.text())
          .then(res => this.setState({ data: res }));
  }

  componentDidMount() {
      this.callAPI();
  }

  newAuctionHandler = (data) =>{

    //set data to be sent to db in newAuction
    const newAuction = {
      user_id: localStorage.getItem('user_id'),
      category: data.category,
      name: data.name,
      description: data.description,
      image: this.state.newImage,
      min_bid: data.min_bid
    }

    fetch("http://localhost:3001/auctions", {
      method: 'POST',
      body: JSON.stringify(newAuction), 
      headers: {"Content-Type": "application/json"}
    })
    .then((response) => {
      debugger
      console.log(response)
      if(response.ok){
        return response.json()
      } else {
        throw Error(`Request rejected with status ${response.status}`);
      }
    }).then((response) => 
      console.log(response)
    ).catch((err) => console.log('error' + err))

    this.setState({ redirect: true });
  }

  showWidget = (widget) => {
    widget.open()
  }

  //upload image and get response (url) using cloudinary widget
  imageUpload = () => {
  window.cloudinary.openUploadWidget({ 
    cloud_name: 'dnbiul08h', 
    upload_preset: 'ubpwiohr',
    tags:['final_project'],
    thumbnails: '.image_upload' },
      (error, result) => {
        if(result.event === 'success'){
          this.setState({
            newImage: result.info.secure_url, 
            thumbnails: result.info.thumbnail_url})
        }
    });
  }
    render() {
      if (this.state.redirect == true ) {
        return <Redirect to='/' />
      }

      return (
        <div>  
          <NewAuctionForm onSubmit={(data) => {
            this.newAuctionHandler(data)
          }} 
          url={this.state.newImage} 
          />
        {/* <CloudinaryContext cloudName="dnbiul08h"> */}
          {/* <Image publicId={this.state.thumbnails} type="fetch">
            <Transformation width="200" height="200" crop="thumb" fetchFormat="auto" />
          </Image> */}
        {/* </CloudinaryContext> */}
        <div className="image_upload">
          <Button onClick={this.imageUpload}>Upload photo</Button>
        </div>
        <div id="photo-form"></div>
        </div>
      )
    }
  }