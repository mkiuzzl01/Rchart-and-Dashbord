
import PropTypes from 'prop-types';

const Link_items = ({route}) => {
    const {path,name} = route;
    return (
        <div className='hover:text-fuchsia-400 rounded-3xl px-4'>
            <a href={path}>{name}</a>
        </div>
    );
};

Link_items.propTypes = {
    route:PropTypes.object
};

export default Link_items;