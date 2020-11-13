import React from 'react';
import './Grid.css';

const Grid = ({
  data,
  gridProps: { columns = [], customFields = [], config = {}, actions = [] },
}) => {
  return (
    <table className="gridTable">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
          {customFields.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
          {!!config.showAction && !!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={'column_1' + index}>
            {columns.map((column) => (
              <td
                key={column.id}
                style={
                  column.type === 'number'
                    ? { textAlign: 'right' }
                    : { textAlign: 'center' }
                }
              >
                {row[column.field]}
              </td>
            ))}
            {customFields.map((column) => (
              <td
                key={column.id}
                style={
                  column.type === 'number'
                    ? { textAlign: 'right' }
                    : { textAlign: 'center' }
                }
              >
                {column.value(row)}
              </td>
            ))}
            {!!config.showAction && !!actions.length && (
              <td className="gridActions">
                {actions.map(({ label, action, inActive }) => {
                  if (!!inActive) return null;
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
