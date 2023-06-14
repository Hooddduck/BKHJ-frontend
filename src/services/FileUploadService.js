import http from '../common/http-common'

const upload = (file, boardId, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);
  formData.append("boardId", boardId);

  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFilesByBoardId = (boardId) => {
  return http.get(`/files/board/${boardId}`);
};

const getFiles = () => {
  return http.get("/files");
};

const FileUploadService = {
  upload,
  getFiles,
  getFilesByBoardId,
};

export default FileUploadService; 
