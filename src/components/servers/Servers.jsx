import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServers } from './actions';
import { useSortableData } from './utils';
import { ServerItem } from './components/Server-item';

import './Servers.scss';

const Servers = () => {

  const dispatch = useDispatch();
  const servers = useSelector(({serversReducer: {servers}}) => servers.sort((a, b) => a.name.localeCompare(b.name)));
  const {items, requestSort, sortConfig} = useSortableData(servers)
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  useEffect(() => {
    dispatch(getServers());
  }, [dispatch]);

  return (
    <>
      {servers.length > 0 && <table className="shadow-lg bg-white table-auto w-full">
        <thead>
        <tr>
          <th
            className="w-6/12 bg-green-300 border text-left px-8 py-2 sticky top-0 cursor-pointer"
            onClick={() => requestSort('name')}
          >
            <div className='flex items-center'>
              <span>Server Name</span>
              <div className={getClassNamesFor('name')}/>
            </div>
          </th>
          <th
            className="w-6/12 bg-green-300 border text-left px-8 py-2 sticky top-0 cursor-pointer"
            onClick={() => requestSort('distance')}
          >
            <div className='flex items-center'>
              <span>Distance</span>
              <div className={getClassNamesFor('distance')}/>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        {items.map(({name, distance}) => (
          <ServerItem id={`${distance}_${name}`}
                      key={`${distance}_${name}`}
                      name={name}
                      distance={distance}/>
        ))}
        </tbody>
      </table>}
    </>
  );

}

export { Servers };
