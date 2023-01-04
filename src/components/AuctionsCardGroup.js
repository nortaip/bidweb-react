import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import OUCcard from './OUCcard';

function GroupExample() {
    return (
        <CardGroup>
            <OUCcard />
            <OUCcard />
        </CardGroup>
    );
}

export default GroupExample;