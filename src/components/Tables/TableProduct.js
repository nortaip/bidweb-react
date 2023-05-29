import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Description from '../Description';
import { message, Popconfirm } from 'antd';
import { RWebShare } from "react-web-share";
import axios from 'axios';
import Hashtags from '../Hashtags';
import SkeletonP from '../Skeletons/skaletonProduct';
import { CONN_KEY } from "../../Conn";


function LikeButtons({ id }) {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="">
            <svg viewBox="0 0 24 24" width="24" height="24" onClick={toggleLike}>
                <path
                    fill={isLiked ? 'red' : 'none'}
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M12 21.35l-1.84-1.67C5.4 14.76 2 11.55 2 7.77 2 4.42 4.42 2 7.77 2c2.34 0 4.54 1.23 5.23 3.23C13.69 3.23 16 5.42 16 8.23c0 2.69-2.31 5-5.25 8.45z"
                />
                <span>{isLiked ? 'Liked' : 'Like'}</span>
            </svg>
        </div>
    );
}

function TableProduct() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        const apiUrl = `${CONN_KEY}sellimg.php?id=${productId}`;
        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [productId]);

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
            {isLoading ? (
                <SkeletonP />
            ) : (
                <div className='fsdasw contaioner'>
                    <div className='f-hrfeed'>
                        <div className='f-hrfeed-left'>
                            <h3 className='f-hrfetys Bold'>{data.Marka}</h3>
                            <div className='f-hrfehheu'>{data.location} </div>
                        </div>
                        <div className='f-hrfeed-right'>
                            <div className='f-iconafs'>
                                <LikeButtons />
                                {/* <div className="like-icon"></div> */}
                                <RWebShare
                                    data={{
                                        text: "Web Share - GfG",
                                        url: "http://localhost:3000",
                                        title: "GfG",
                                    }}
                                    onClick={() => console.log("shared successfully!")}
                                >
                                    <div className="Share"></div>
                                </RWebShare>
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
                                    <h4 className='Regular'><a href='#'>{data.Marka}</a></h4>
                                </div>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>Model</h4>
                                    </div>
                                    <h4 className='Regular'>{data.Model}</h4>
                                </div>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>Buraxılış ili</h4>
                                    </div>
                                    <h4 className='Regular'>{data.CYear}</h4>
                                </div>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>Ban növü</h4>
                                    </div>
                                    <h4 className='Regular'>{data.Nesil}</h4>
                                </div>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>VIN</h4>
                                    </div>
                                    <h4 className='Regular'>{data.VIN}</h4>
                                </div>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>Rəng</h4>
                                    </div>
                                    <h4 className='Regular'>{data.color}</h4>
                                </div>
                            </div>
                            <div className='sfjdfk'>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>Mühərrik gücü</h4>
                                    </div>
                                    <h4 className='Regular'>{data.mhguc}</h4>
                                </div>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>Mühərrik həcmi</h4>
                                    </div>
                                    <h4 className='Regular'>{data.Mhhec}</h4>
                                </div>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>Yanacaq növü</h4>
                                    </div>
                                    <h4 className='Regular'>{data.Yanacaq}</h4>
                                </div>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>Yürüş</h4>
                                    </div>
                                    <h4 className='Regular'>{data.March}</h4>
                                </div>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>Ötürücü</h4>
                                    </div>
                                    <h4 className='Regular'>{data.Gear}</h4>
                                </div>
                                <div className='Lkfsa'>
                                    <div className='skufesf'>
                                        <span className='skkgetC'></span>
                                        <h4 className='Regular'>Sürətlər qutusu</h4>
                                    </div>
                                    <h4 className='Regular'>{data.Suret}</h4>
                                </div>
                            </div>
                        </div>
                        <Description />
                        <Hashtags />
                        {/* <img src={SVGCar} alt='svg'/> */}
                    </div>
                </div >
            )}
        </>
    )
}

export default TableProduct