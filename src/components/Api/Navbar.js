const items = [
    {
        label: (
            <Link to={'/Profile'} rel="noopener noreferrer" >
                <span className='User-pp'>
                    <Avatar style={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                    }}
                        src={P.imgM} icon={<UserOutlined />} />
                    <div className='user-name SemiBold f16'>{P.Name}</div>
                </span>
            </Link>
        ),
        key: '15',
    },
    {
        type: 'divider',
    },
    // {
    //   label: (
    //     <Link to={'/Profile'} rel="noopener noreferrer" >
    //       Profile
    //     </Link>
    //   ),
    //   key: '0',
    // },
    {
        label: (
            <Link to={'/Profile'} className="logo">
                Elanlarım
            </Link>
        ),
        key: '1',
    },
    {
        label: (
            <Link to={'/Profile'} className="logo">
                Hesab məlumatları
            </Link>
        ),
        key: '2',
    },
    {
        label: (
            <Link to={'/Profile'} className="logo">
                Change pasword
            </Link>
        ),
        key: '3',
    },
    {
        label: (
            <Link to={'/Profile'} className="logo">
                Notication
            </Link>
        ),
        key: '4',
    },
    {
        label: (
            <Link to={'/Profile'} className="logo">
                Like
            </Link>
        ),
        key: '5',
    },
    {
        label: (
            <Link to={'/Profile'} className="logo">
                Izlediyin Salonlar
            </Link>
        ),
        key: '6',
    },
    {
        label: (
            <Link to={'/Login'} className="logo" style={{ color: "#ED3F3F" }}>
                Çıxış
            </Link>
        ),
        key: '7',
    }
];