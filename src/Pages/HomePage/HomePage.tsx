import React, { FC, useEffect } from "react";
import { getPlaceHolderPost } from "../../api/placeHolder.service";

const HomePage: FC = () => {
  const placeHoder = async () => {
    const result = await getPlaceHolderPost();
    console.log(result);
  };

  useEffect(() => {
    placeHoder();
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
