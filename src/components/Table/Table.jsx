
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table';

import "./Table.css";


export const Table = ({ data, columns }) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        columnResizeMode: 'onChange', // 'onEnd' or 'onChange'
    });

    return (
        <div className='table-container'>
            <table border="1" className='custom-table'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    style={{
                                        width: header.getSize(),
                                        maxWidth: header.getSize(),
                                    }}
                                    className="resizable-header cell-ellipsis"
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    {header.column.getCanResize() && (
                                        <div
                                            onMouseDown={header.getResizeHandler()}
                                            onTouchStart={header.getResizeHandler()}
                                            className='resizer'
                                        />
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td
                                    key={cell.id}
                                    className="cell-ellipsis"
                                    style={{ width: cell.column.getSize(), maxWidth: cell.column.getSize() }}
                                    title={cell.getValue()}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


