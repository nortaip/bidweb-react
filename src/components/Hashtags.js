import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import { CONN_KEY } from "../Conn";

function Yüngül(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold">#Yüngül lehimli disklər</h4>
        </div>;
    } else {
        return;
    }
}
function Center(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold">#Mərkəzi qapanma</h4>
        </div>;
    } else {
        return;
    }
}
function Leather(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold">#Mərkəzi qapanma</h4>
        </div>;
    } else {
        return;
    }
}
function ABS(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># ABS</h4>
        </div>;
    } else {
        return;
    }
}
function Park(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Park radarı</h4>
        </div>;
    } else {
        return;
    }
}
function Ksenon(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Ksenon</h4>
        </div>;
    } else {
        return;
    }
}
function Kamerauc(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Kamerauc</h4>
        </div>;
    } else {
        return;
    }
}
function Lyuk(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Lyuk</h4>
        </div>;
    } else {
        return;
    }
}
function Kondisioner(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Kondisioner</h4>
        </div>;
    } else {
        return;
    }
}
function ArxaKamera(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Arxa görüntü kamerası</h4>
        </div>;
    } else {
        return;
    }
}
function Multi(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Multi rull</h4>
        </div>;
    } else {
        return;
    }
}
function RainSensor(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Yağış sensoru</h4>
        </div>;
    } else {
        return;
    }
}
function HotSeat(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Oturacaqların isidilməsi</h4>
        </div>;
    } else {
        return;
    }
}
function YanP(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Yan pərdələr</h4>
        </div>;
    } else {
        return;
    }
}
function MultiE(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Multi Ektan</h4>
        </div>;
    } else {
        return;
    }
}
function Kruiz(props) {
    if (props.isVisible) {
        return <div className="Hash" >
            <h4 className="SemiBold"># Kruiz</h4>
        </div>;
    } else {
        return;
    }
}


function Hashtags() {
    // const [visible, setVisible] = useState(false);
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        const apiUrl = `${CONN_KEY}sellimg.php?post_id=${productId}`;
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

    return (
        <>
            <div className="gdgf-left">
                <div className="e1113_11617">
                    <Yüngül isVisible={data.Alloy} />
                    <ABS isVisible={data.ABS} />
                    <Center isVisible={data.Centr} />
                    <Leather isVisible={data.Leather} />
                    <Park isVisible={data.Park} />
                    <Ksenon isVisible={data.Ksenon} />
                    <Lyuk isVisible={data.Lyuk} />
                    <Kamerauc isVisible={data.Kamerauc} />
                    <Kondisioner isVisible={data.Kondisioner} />
                    <ArxaKamera isVisible={data.ArxaKamera} />
                    <Multi isVisible={data.Multi} />
                    <RainSensor isVisible={data.RainSensor} />
                    <YanP isVisible={data.YanP} />
                    <HotSeat isVisible={data.HotSeat} />
                    <MultiE isVisible={data.MultiE} />
                    <Kruiz isVisible={data.Kruiz} />
                </div>
            </div>

        </>
    )
}

export default Hashtags;