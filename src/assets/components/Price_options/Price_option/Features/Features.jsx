import { IoCheckmarkCircleOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

const Features = ({feature}) => {
    return (
        <div className='text-white'>
            <p className="flex items-center"> <IoCheckmarkCircleOutline className="text-blue-600 mx-2" /> {feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature:PropTypes.string
};

export default Features;