import React from 'react';
import './Grid.css';

const Grid = ({
  data,
  gridProps: { columns = [], config = {}, actions = [] },
}) => {
  return (
    <table className="gridTable">
      <thead>
        <tr>
          {columns.map((colName) => (
            <th key={colName}>{colName}</th>
          ))}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={'column_1' + index}>
            {columns.map((colName) => (
              <td key={colName}>{row[colName]}</td>
            ))}
            {!!actions.length && (
              <td className="gridActions">
                {actions.map(({ label, action, isInActive }) => {
                  if (!!isInActive) return null;
                  return (
                    <button
                      key={'action_' + action}
                      onClick={() => action(row)}
                    >
                      {label}
                    </button>
                  );
                })}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
