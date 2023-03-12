import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import Description from '../components/Description';
import { message, Popconfirm } from 'antd';

function TableProduct() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    const confirm = (e) => {
        console.log(e);
        message.success('Reportet Item');
    };

    const cancel = (e) => {
        console.log(e);
        message.error('Igronirng');
    };

    return (
        <>
            <div className='fsdasw contaioner'>
                <div className='f-hrfeed'>
                    <div className='f-hrfeed-left'>
                        <h3 className='f-hrfetys Bold'>{P.title}</h3>
                        <div className='f-hrfehheu'>{P.location} </div>
                    </div>
                    <div className='f-hrfeed-right'>
                        <div className='f-iconafs'>
                            <div className="like-icon"></div>
                            <div className="Share"></div>
                            <Popconfirm
                                title="Report"
                                description="Are you sure to Report this Post?"
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                <div className="Menu-Datt"></div>
                            </Popconfirm>

                        </div>
                    </div>
                </div>
                <div className='f-hrfeedjf'>
                    <h3>Ümumi</h3>
                    <div className='f-hrmkdsf' >
                        <div className='sfjdfk'>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Marka</h4>
                                </div>
                                <h4 className='Regular'><a href='#'>{P.category}</a></h4>
                            </div>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Model</h4>
                                </div>
                                <h4 className='Regular'>{P.title}</h4>
                            </div>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Buraxılış ili</h4>
                                </div>
                                <h4 className='Regular'>{P.year}</h4>
                            </div>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Ban növü</h4>
                                </div>
                                <h4 className='Regular'>{P.Ban}</h4>
                            </div>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Şassi İD</h4>
                                </div>
                                <h4 className='Regular'>{P.shassi}</h4>
                            </div>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Rəng</h4>
                                </div>
                                <h4 className='Regular'>{P.color}</h4>
                            </div>
                        </div>
                        <div className='sfjdfk'>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Mühərrik gücü</h4>
                                </div>
                                <h4 className='Regular'><a href='#'>{P.HP}</a></h4>
                            </div>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Mühərrik həcmi</h4>
                                </div>
                                <h4 className='Regular'>{P.litr}</h4>
                            </div>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Yanacaq növü</h4>
                                </div>
                                <h4 className='Regular'>{P.Benzin}</h4>
                            </div>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Yürüş</h4>
                                </div>
                                <h4 className='Regular'>{P.Km}</h4>
                            </div>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Ötürücü</h4>
                                </div>
                                <h4 className='Regular'>{P.transmitter}</h4>
                            </div>
                            <div className='Lkfsa'>
                                <div className='skufesf'>
                                    <span className='skkgetC'></span>
                                    <h4 className='Regular'>Sürətlər qutusu</h4>
                                </div>
                                <h4 className='Regular'>{P.Tam}</h4>
                            </div>
                        </div>
                    </div>
                    <Description />
                </div>

            </div>
        </>
    )
}

export default TableProduct