const Cell = ({ type, align = "right", className = '', children }) => {
    return (
        <>
            {
                type === "body" ?
                    <td className={`py-2 text-${align} ${className}`}>{children}</td>
                    :
                    <th className={`py-2 text-${align} ${className}`}>{children}</th>
            }
        </>
    )
}

export default Cell;