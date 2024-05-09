import Cell from "./includes/cell";
import Head from "./includes/head";
import Row from "./includes/row";
import Body from "./includes/body";

const Table = ({ className = '', children }) => {
    return (
        <table className={`w-full table-auto ${className}`}>
            {children}
        </table>
    )
}

Table.Head = Head;
Table.Row = Row;
Table.Cell = Cell;
Table.Body = Body;

export default Table;