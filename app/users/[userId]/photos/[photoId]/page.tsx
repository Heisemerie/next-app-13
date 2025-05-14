import React from "react";

interface Props {
  params: { userId: number; photoId: number };
}

const PhotoPage = ({ params: { userId, photoId } }: Props) => {
  return (
    <div>
      PhotoPage User{userId} Photo{photoId}
    </div>
  );
};

export default PhotoPage;
