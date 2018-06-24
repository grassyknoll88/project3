// import React, { Component } from "react";
// import "./ImageUpload.css";
// import DropzoneS3Uploader from "react-dropzone-s3-uploader";

// class ImageUpload extends React.Component {
//   handleFinishedUpload = info => {
//     console.log("File uploaded with filename", info.filename);
//     console.log("Access it on s3 at", info.fileUrl);
//   };

//   handleError(error) {
//     console.log(error);
//   }

//   handleonProgress(infoMessage) {
//     console.log(infoMessage);
//   }

//   render() {
//     const uploadOptions = {
//       server: "http://localhost:8080",
//       signUrl: "/s3/sign",
//       signingUrlQueryParams: { uploadType: "avatar" }
//     };
//     const s3Url = "https://s3.us-east-1.amazonaws.com/pup-life/";
//     return (
//       <DropzoneS3Uploader
//         onFinish={this.handleFinishedUpload}
//         onError={this.handleError}
//         onProgress={this.onProgress}
//         s3Url={s3Url}
//         maxSize={1024 * 1024 * 5}
//         upload={uploadOptions}
//       />
//     );
//   }
// }

// export default ImageUpload;
