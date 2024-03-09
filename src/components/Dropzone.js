import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { IconX } from "@tabler/icons-react";
const Flex = styled(Box, {
  name: "Flex",
})({
  display: "flex",
  alignItems: "center",
});

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "150px",
  justifyContent: "center",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function getBase64(file, setInput) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    setInput([file]);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}

const Dropzone = () => {
  const [files, setFiles] = useState([]);

  const handleFiles = async (file) => {
    console.log(file);
    if (file) {
      file.forEach((file) => {
        getBase64(file, setFiles);
      });
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    isFocused,
  } = useDropzone({
    onDrop: (files) => handleFiles(files),
    maxFiles: 1,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  const handleRemove = (index) => {
    let removeFile = [...files];
    removeFile.splice(index, 1);
    setFiles(removeFile);
  };

  return (
    <Box>
      <Box {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </Box>
      <Flex sx={{ gap: 5, mt: 2 }}>
        {files && files.length > 0 && (
          <>
            <Flex sx={{ gap: "1rem", alignItems: "center" }}>
              {files.map((file, index) => (
                <>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: ".5rem",
                      backgroundColor: "#005e9e",
                      borderRadius: "8px",
                      color: "#fff",
                      padding: ".35rem 1rem",
                    }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                      {file.name}
                    </Typography>{" "}
                    <IconButton
                      size="small"
                      onClick={() => handleRemove(index)}
                      sx={{ color: "#fff" }}>
                      <IconX size={18} />
                    </IconButton>
                  </Box>
                </>
              ))}
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Dropzone;
