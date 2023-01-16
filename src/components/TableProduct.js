import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import { Descriptions } from 'antd';
function TableProduct() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (

        <Descriptions className='sdfhsfyjg table' size='small' bordered >
            <Descriptions.Item span={2} label="Marka">{P.category}</Descriptions.Item>
            <Descriptions.Item label="Model">{P.title}</Descriptions.Item>
            <Descriptions.Item span={2} label="Buraxılış ili">{P.year}</Descriptions.Item>
            <Descriptions.Item label="Ban növü">{P.Ban}</Descriptions.Item>
            <Descriptions.Item span={2} label="Şassi İD">{P.shassi}</Descriptions.Item>
            <Descriptions.Item label="Rəng">{P.color}</Descriptions.Item>
            <Descriptions.Item span={2} label="Mühərrik gücü">{P.HP}</Descriptions.Item>
            <Descriptions.Item label="Mühərrik">{P.litr}</Descriptions.Item>
            <Descriptions.Item span={2} label="Yanacaq növü">{P.Benzin}</Descriptions.Item>
            <Descriptions.Item label="Yürüş">{P.Km}</Descriptions.Item>
            <Descriptions.Item span={2} label="Sürətlər qutusu">{P.mekanik}</Descriptions.Item>
            <Descriptions.Item label="Ötürücü">{P.transmitter}</Descriptions.Item>
        </Descriptions>

    )
}

export default TableProduct