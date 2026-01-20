"use client";

import { Fragment, useState } from "react";
import { Button, Input } from "./styles";
//import { getUserById } from 'edouard/app/services/settings';

const SearchField = () => {
  const [searchValue, setSeachValue] = useState<string>("");

  const search = async () => {
    console.log("ici");
    //const users = await getUserById(1)
  };

  return (
    <Fragment>
      <Input
        type="text"
        value={searchValue}
        onChange={(e) => setSeachValue(e.target.value)}
        placeholder="search..."
      />
      <Button onClick={() => search()} />
    </Fragment>
  );
};

export default SearchField;
