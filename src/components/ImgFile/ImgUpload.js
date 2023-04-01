import React, { useState } from 'react';
import { Upload, message, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

const ImageUploader = () => {
  const [fileList, setFileList] = useState([]);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('http://localhost/tu/api/sell.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Create random folder name
      const folderName = Math.random().toString(36).substring(7);
      const folderPath = path.join(__dirname, 'uploads', folderName);

      // Create folder if it doesn't exist
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }

      // Resize and save image to folder
      const image = sharp(file.path);
      await image.resize(800, 800).jpeg({ quality: 90 }).toFile(path.join(folderPath, response.data.filename));

      // Save folder name to database
      await axios.post('http://localhost/tu/api/sell.php', { folder: folderName });

      // Update file list
      message.success(`${file.name} yüklendi`);
      const newFileList = [...fileList, { uid: response.data.uid, name: file.name, status: 'done', url: response.data.url }];
      setFileList(newFileList);
    } catch (error) {
      message.error(`Dosya yüklenirken hata oluştu: ${error.message}`);
    }
  };

  const handleImageRemove = async (file) => {
    try {
      await axios.post('http://localhost/tu/api/delete.php', { uid: file.uid });
      message.success(`${file.name} silindi`);
      const newFileList = fileList.filter(f => f.uid !== file.uid);
      setFileList(newFileList);
    } catch (error) {
      message.error(`Dosya silinirken hata oluştu: ${error.message}`);
    }
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleImageChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleImageBeforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Sadece JPG/PNG dosyaları yüklenebilir');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Dosya boyutu 2MB\'dan küçük olmalıdır');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      fileList.forEach(file => {
        formData.append('files[]', file.originFileObj);
      });
      await axios.post('http://localhost/tu/api/sell.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      message.success('Resimler gönderildi');
      setFileList([]);
    } catch (error) {
      message.error(`Resim gönderilirken hata oluştu: ${error.message}`);
    }
  };

  const renderUploadButton = () => {
    return (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Resim yükle</div>
      </div>
    );
  };

  return (
    <>
      <Upload
        name="file"
        action="http://localhost/tu/api/sell.php"
        headers={{ 'Access-Control-Allow-Origin': '*' }}
        listType="picture-card"
        fileList={fileList}
        beforeUpload={handleImageBeforeUpload}
        onPreview={handlePreview}
        onChange={handleImageChange}
        onRemove={handleImageRemove}
        customRequest={({ file }) => handleImageUpload(file)}
      >
        {fileList.length >= 25 ? null : renderUploadButton()}
      </Upload>
      <Button onClick={handleSubmit}>ммм</Button>
    </>
  );
};

export default ImageUploader;
