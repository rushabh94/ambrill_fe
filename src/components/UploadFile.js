import React from "react";
import { Box } from "@mui/material";
import Dropzone from "./Dropzone";

const UploadFile = () => {
  return (
    <Box>
      <h1 className="m-2 text-xl">Please upload excel file here</h1>
      <Dropzone />
    </Box>
  );
};

export default UploadFile;
