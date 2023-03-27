import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Alert, Space } from 'antd';
import { useState } from 'react';
import SellingItem from '../SellItems/SellItemForm';
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const ImgUpload = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([

    ]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <>
            <Space direction="vertical"
                style={{
                    width: '100%',
                }}>
                <h2>Foto qalereya</h2>
                <Alert message="22-a qədər şəkil yükləyə bilərsiniz. Hər bir şəkil 500000 KB-dan kiçik olmalıdır." type="info" />
                <Upload
                    action="http://localhost/tu/api/sell.php"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    name='Image'
                    maxCount={25}
                >
                    {fileList.length >= 25 ? null : uploadButton}
                </Upload>
                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                        alt="example"
                        style={{
                            width: '100%',
                        }}
                        src={previewImage}
                    />
                </Modal>
                <h5>Şəkillər yaxşı keyfiyyətdə olmalıdır. Nəqliyyat vasitəsi yaxşı işıqlandırılmış olmalı, şəkillərin üzərində loqotip və digər yazılar olmamalıdır. Skrinşotlar qəbul olunmur.</h5>
            </Space>
        </>
    );
};
export default ImgUpload;