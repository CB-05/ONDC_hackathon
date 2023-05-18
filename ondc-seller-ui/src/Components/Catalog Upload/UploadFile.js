import React, { useState } from "react";
import axios from "axios";
import ButtonLight from "../../UI/Button/ButtonLight";

const UploadFile = (category) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  const handleFileUpload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("category", JSON.stringify(category));
    console.log(JSON.stringify(category));
    axios
      .post("http://localhost:8000/api/upload", data)
      .then((res) => {
        setUploadStatus("File uploaded successfully");
        document.getElementById("status").style.color = "green";
      })
      .catch((err) => {
        setUploadStatus("File upload failed");
        document.getElementById("status").style.color = "red";
      });
  };

  return (
    <div>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileInput} />
        <br /> <br />
        <ButtonLight type="submit" text="Upload Template File" />
        <br /> <br />
        <span id="status">{uploadStatus}</span>
      </form>
    </div>
  );
};

export default UploadFile;
