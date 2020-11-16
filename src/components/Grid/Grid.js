import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './Grid.css';

const Grid = ({
  data,
  gridProps: { columns = [], customFields = [], config = {}, actions = [] },
}) => {
  return (
    <Table responsive className="table table-striped table-bordered gridTable">
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
              <td className="w-100 gridActions">
                {actions.map(({ label, action, status, inActive, color }) => {
                  if (!!inActive) return null;
                  return (
                    <Button
                      variant={color}
                      size="sm"
                      className="m-1"
                      key={'action_' + action}
                      onClick={() => action(row)}
                      style={
                        status(row) ? { display: 'block' } : { display: 'none' }
                      }
                    >
                      {label}
                    </Button>
                  );
                })}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Grid;
