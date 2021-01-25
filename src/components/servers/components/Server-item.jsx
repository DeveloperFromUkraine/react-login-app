import React from 'react';
import PropTypes from 'prop-types';

const ServerItem = ({ distance, name }) => {
 return (
   <tr id={`${distance}_${name}`} key={`${distance}_${name}`} className='hover:bg-green-100'>
     <td className="border px-8 py-2 text-sm text-gray-900">{name}</td>
     <td className="border px-8 py-2 text-sm text-gray-900">{distance}</td>
   </tr>
  );
}

ServerItem.propTypes = {
  name: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired
};

export { ServerItem };
