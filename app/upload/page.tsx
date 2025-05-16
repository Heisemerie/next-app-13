"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState(""); //to store the public id to be passed to the cloudinary image component

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="An image" />
      )}
      <CldUploadWidget
        uploadPreset="guxzjmiv"
        onSuccess={(result, widget) => {
          console.log(result); // has a public id property in the info object
          if (result.event !== "success") return;
          const info = result.info as unknown as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
