import React from "react";

class ImageCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.imageRef = React.createRef();
  // }
  // componentDidMount() {
  //   this.imageRef.current.addEventListner("load", this.setSpans);
  // }
  // setSpans = () => {
  //   console.log(this.imageRef.current.clientHeight);
  // };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={urls.regular} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
