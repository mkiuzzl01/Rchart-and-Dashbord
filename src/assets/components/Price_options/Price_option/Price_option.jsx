
import PropTypes from 'prop-types';
import Features from './Features/Features';

const Price_option = ({option}) => {
    const {name,price,features} = option
    return (
        <div className='flex flex-col bg-green-500 m-4 p-4 rounded-2xl text-yellow-200 text-center space-y-4'>
            <h1>
            <span className='text-7xl font-extrabold'>{price}</span>
            <span className='text-2xl'>/Mon</span>
            </h1>
            <h1 className='text-3xl'>{name}</h1>
           <div className='flex-grow'>
           {
                features.map((feature,idx)=> <Features key={idx} feature={feature} ></Features>)
            }
           </div>
            <button className='font-bold bg-blue-600 w-full p-3 rounded-xl hover:bg-violet-400'>By Now</button>
        </div>
    );
};

Price_option.propTypes = {
    option:PropTypes.object 
};

export default Price_option;