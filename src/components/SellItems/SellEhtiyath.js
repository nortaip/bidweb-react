import '../../App.css';
import { Form, Select, Upload, Button, Space, Input, Checkbox, Radio, InputNumber, Col, Row, Modal, message, Alert, } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageUploader from '../ImgFile/ImgUpload';

const { Option } = Select;

function SellingItem() {
    const [inputs, setInputs] = useState([]);
    const [brands, setBrands] = useState([]);
    const [Year, setYear] = useState([]);
    useEffect((brand) => {
        fetch('http://localhost/tu/api/brand_name.php')
            .then(response => response.json())
            .then(data => {
                // İlk veri seti burada state'e atanır
                setBrands(data);
            });
        // İkinci endpoint'ten veri çekme işlemi
        fetch('http://localhost/tu/api/yearGet.php')
            .then(response => response.json())
            .then(data => {
                // İkinci veri seti burada state'e atanır
                setYear(data);
            });
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const onFinish = (values) => {
        try {
            console.log('Received values of form: ', values);
            axios.post('http://localhost/tu/api/sellEhtiyat.php', values).then(function (response) {
                console.log(response.data);
                // navigate('/');
            });
        }
        catch (errInfo) {
            console.log('Error-:', errInfo);
        }
    };
    const onReset = () => {
        Form.resetFields();
    };
    const onFinishFailed = () => {
        message.error('Müvafiq sahələr boş qala bilməz!');
    };
    const [fileList, setFileList] = useState([

    ]);
    const navigate = useNavigate();
    const onChange = ({ file, fileList: newFileList }) => {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    useEffect((brands) => {
        fetch('http://localhost/tu/api/brand_name.php')
            .then(response => response.json())
            .then(data => {
                // İlk veri seti burada state'e atanır
                setBrands(data);
            });

        // İkinci endpoint'ten veri çekme işlemi
        fetch('http://localhost/tu/api/yearGet.php')
            .then(response => response.json())
            .then(data => {
                // İkinci veri seti burada state'e atanır
                setYear(data);
            });
    }, []);

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
    const onclick = async (values) => {
        const formData = new FormData();
        formData.append("Marka", values.Marka);
        formData.append("description", values.description);
        fileList.forEach((file) => {
            formData.append("resimler[]", file.originFileObj);
        });
        try {
            const response = await axios.post("http://localhost/tu/api/sell.php", formData);
            console.log(response.data);
            // navigate('/');
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const uploadProps = {
        // name: 'filert',
        action: 'http://localhost/tu/api/sellEhtiyat.php',
        listType: 'picture-card',
        fileList,
        handleImageUpload,
        onChange,
        beforeUpload: (file) => {
            if (fileList.length < 4) { // Sadece 4 dosya seçimine izin ver
                // Aynı klasör adı kullanarak dosyayı fileList array'ine ekle
                setFileList([...fileList, { ...file, uid: file.uid, name: file.name, status: 'done', url: URL.createObjectURL(file) }]);
            }
            return false; // Dosyayı yükleme
        },
        onPreview: (file) => {
            window.open(file.url, '_blank');
        },
    };

    return (
        <div className="container ">
            <Form
                onFinish={onFinish}
                className="login-form container"
                initialValues={{
                    remember: true,
                }}
                encType="multipart/form-data"
                layout="vertical"
                onFinishFailed={onFinishFailed}
            >
                {(fields, { add, remove }) => (
                    <Space direction="vertical"
                        style={{
                            width: '100%',
                        }}
                    >
                        <Space direction="vertical" size='large'>
                            <div style={{ gap: "10" }}>
                                {/* Marka,model,add+ */}
                                <Row gutter={[16, 16]}>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Marka"
                                            name="Marka"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik Markanı secin',
                                                },
                                            ]}
                                        >
                                            <Select
                                                name="Marka"
                                                size='large'
                                                placeholder="Mersedes"
                                            >
                                                {brands.map(brand => (
                                                    <Option key={brand.brand_name} value={brand.brand_name}>
                                                        {brand.brand_name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Model"
                                            name="Model"
                                        >
                                            <Input
                                                placeholder="Model"
                                                mode="multiple"
                                                size="large"
                                                name="Model"
                                                onChange={handleChange}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Nəsil"
                                            name="Nesil"
                                        >
                                            <Input
                                                placeholder="Nesil"
                                                mode="multiple"
                                                size="large"
                                                name="Nesil"
                                                onChange={handleChange}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                {/* Mühərrikin həcmı , VIN-kod*/}
                                <Row gutter={[16, 16]}>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Mühərrikin həcmı"
                                            name='Mhhec'
                                        >
                                            <InputNumber
                                                style={{
                                                    width: '100%',
                                                }}
                                                size="large"
                                                name='Mhhec'
                                                placeholder="sm3"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Mühərrikin gücü"
                                            name="mhguc"
                                        >
                                            <InputNumber
                                                style={{
                                                    width: '100%',
                                                }}
                                                name="mhguc"
                                                size="large"
                                                placeholder="mühərrikin gücü ag"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="OEM-kod"
                                            name="OEM"
                                        >
                                            <Input
                                                style={{
                                                    width: '100%',
                                                }}
                                                name="OEM"
                                                size="large"
                                                placeholder="000000***00"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                {/* il , Yanacaq növü ,Sürətlər qutusu*/}
                                <Row gutter={[16, 16]}>
                                    <Col span={8}>
                                        <Form.Item
                                            label="İL"
                                            name='CYear'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik ilini secin',
                                                },
                                            ]}
                                        >
                                            <Select
                                                label="İL"
                                                name='CYear'
                                                size='large'
                                                placeholder="İL"
                                            >
                                                {Year.map(brand => (
                                                    <Option key={brand.id} value={brand.name}>
                                                        {brand.brand_name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Sürətlər qutusu"
                                            name="Suret"

                                        >
                                            <Select
                                                name="Suret"
                                                size="large"
                                                placeholder="Avtomatik"
                                                options={[
                                                    {
                                                        value: 'Mexaniki',
                                                        label: 'Mexaniki',
                                                    },
                                                    {
                                                        value: 'Avtomatik',
                                                        label: 'Avtomatik',
                                                    },
                                                    {
                                                        value: 'Robot',
                                                        label: 'Robot',
                                                    },
                                                    {
                                                        value: 'Dəyişən Sürətlər',
                                                        label: 'Dəyişən Sürətlər',
                                                    }
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Yanacaq növü"
                                            name='Yanacaq'
                                        >
                                            <Select
                                                name='Yanacaq'
                                                size="large"
                                                placeholder="Benzin"
                                                options={[
                                                    {
                                                        value: 'Benzin',
                                                        label: 'Benzin',
                                                    },
                                                    {
                                                        value: 'Dizel',
                                                        label: 'Dizel',
                                                    },
                                                    {
                                                        value: 'Electrik',
                                                        label: 'Electrik',
                                                    }
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                {/* Rəng ,Yürüş */}
                                <Row gutter={[16, 16]}>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Rəngi"
                                            name='color'
                                        >
                                            <Select
                                                name='color'
                                                size="large"
                                                placeholder="Yaş Asfalt"
                                                options={[
                                                    {
                                                        value: 'Ağ',
                                                        label: 'Ağ',
                                                    },
                                                    {
                                                        value: 'Qara',
                                                        label: 'Qara',
                                                    },
                                                    {
                                                        value: 'Yaş Asfalt',
                                                        label: 'Yaş Asfalt',
                                                    },
                                                    {
                                                        value: 'Boz',
                                                        label: 'Boz',
                                                    },
                                                    {
                                                        value: 'Gümüşü',
                                                        label: 'Gümüşü',
                                                    },
                                                    {
                                                        value: 'Bej',
                                                        label: 'Bej',
                                                    },
                                                    {
                                                        value: 'Tünd qırmızı',
                                                        label: 'Tünd qırmızı',
                                                    },
                                                    {
                                                        value: 'Qırmızı',
                                                        label: 'Qırmızı',
                                                    },
                                                    {
                                                        value: 'Çəhrayı',
                                                        label: 'Çəhrayı',
                                                    },
                                                    {
                                                        value: 'Narıncı',
                                                        label: 'Narıncı',
                                                    },
                                                    {
                                                        value: 'Qızılı',
                                                        label: 'Qızılı',
                                                    },
                                                    {
                                                        value: 'Sarı',
                                                        label: 'Sarı',
                                                    },
                                                    {
                                                        value: 'Yaşıl',
                                                        label: 'Yaşıl',
                                                    },
                                                    {
                                                        value: 'Mavi',
                                                        label: 'Mavi',
                                                    },
                                                    {
                                                        value: 'Göy',
                                                        label: 'Göy',
                                                    },
                                                    {
                                                        value: 'Bənövşəyi',
                                                        label: 'Bənövşəyi',
                                                    },
                                                    {
                                                        value: 'Qəhvəyi',
                                                        label: 'Qəhvəyi',
                                                    },
                                                ]}

                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Yürüş"
                                            name="March"
                                        >
                                            <InputNumber
                                                style={{
                                                    width: '100%',
                                                }}
                                                name="March"
                                                size="large"
                                                placeholder="Yürüş"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                {/* Əlavə məlumat, qiymət ,Ötürücü */}
                                <Row gutter={[16, 16]}>

                                    <Col span={8}>
                                        <Form.Item
                                            label="Qiymət"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik Qiymeti boş saxlamayın',
                                                },
                                            ]}
                                            extra={<span><SmileOutlined />  Qeyd edek ki qiymət yalnız AZN ile yazılmalıdır!</span>}
                                            name='Price'
                                        >
                                            <InputNumber
                                                style={{
                                                    width: '100%',
                                                }}
                                                size="large"
                                                name='Price'
                                                placeholder="13 000 AZN"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Əlavə məlumat"
                                            name='elave'
                                        >
                                            <Input.TextArea allowClear showCount placeholder='Əlavə məlumat' onChange={handleChange} size='large' name='elave' mode="multiple" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </div>
                            {/* İmg add*/}
                            <Space direction="vertical"
                                size='middle'
                                style={{
                                    width: '100%',
                                }}>
                                <h2>Foto qalereya</h2>
                                <Alert message="25-a qədər şəkil yükləyə bilərsiniz. Hər bir şəkil 500000 KB-dan kiçik olmalıdır." type="info" />
                                {/* <ImageUploader/> */}
                                <Form.Item
                                    name='files'
                                    extra="Şəkillər yaxşı keyfiyyətdə olmalıdır. Nəqliyyat vasitəsi yaxşı işıqlandırılmış olmalı, şəkillərin üzərində loqotip və digər yazılar olmamalıdır. Skrinşotlar qəbul olunmur."
                                >
                                    <Upload {...uploadProps}>
                                        {fileList.length < 25 && '+ Upload'}
                                    </Upload>
                                    <p className="ant-upload-hint">1.Minimum – 5 şəkil (ön, arxa, yan, mator və bütöv ön panelin görüntüsü mütləqdir).</p>
                                    <p className="ant-upload-hint">2.Maksimum – 25 şəkil.</p>
                                    <p className="ant-upload-hint">3.Optimal ölçü – 1024x768 piksel.</p>
                                </Form.Item>
                            </Space>

                            {/* Vip premium Chat */}
                            <Row>
                                <Space direction="vertical">
                                    {/* <Alert message="Əgər heç bir təklif göndərilməmişsə, siz auksionunuzu avtomatik olaraq yenidən siyahıya salmağı (Avtomatik reististlər) seçə bilərsiniz." type="info" showIcon /> */}
                                    <h3 className='Bold'>Əlavə seçimlər</h3>
                                    <Space >
                                        <Col span={24}>
                                            <Form.Item name="prem" valuePropName="checked" noStyle>
                                                <Checkbox className='chek h4 Medium'>Xüsusi göstərin (Premium elan)</Checkbox>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item name="to_up" valuePropName="checked" noStyle>
                                                <Checkbox className='chek h4 Medium'>Cəsarətli olun (İrəli çək)</Checkbox>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item name="vip" valuePropName="checked" noStyle>
                                                <Checkbox className='chek h4 Medium'>Vurğulanmalıdır (Vip et)</Checkbox>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item name="Kredit" valuePropName="checked" noStyle>
                                                <Checkbox className='chek h4 Medium'>Kredit</Checkbox>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item name="Barter" valuePropName="checked" noStyle>
                                                <Checkbox className='chek h4 Medium'>Barter</Checkbox>
                                            </Form.Item>
                                        </Col>
                                    </Space>
                                </Space>
                            </Row >
                        </Space>
                        {/* Buttons */}
                        <div className=' asfgcvxd'>
                            {/* Bottons*/}
                            <Button htmlType="button" block onClick={onReset}>
                                Sahələri Sıfırla
                            </Button>
                            <Button htmlType="submit" block type="primary">
                                Elanı Paylaş
                            </Button>
                        </div>
                    </Space >
                )
                }
            </Form >
        </div >
    );
}

export default SellingItem;