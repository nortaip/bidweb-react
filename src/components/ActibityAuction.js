import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

function ActivityAuction() {

    return (
        <>
            <div className="Activityoverview" >
                <div className="Frame1271">
                </div>
                <div className="Frame1272">
                    <Timeline>
                        <Timeline.Item color='#0060FD'>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color='#E6553C'>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item color='#0060FD'>Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item color='#0060FD'>Network problems being solved 2015-09-01</Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </>
    )
}

export default ActivityAuction