const Row = ({ className = "", children }) => {

    return (
        <tr className={`${className}`}>
            {children}
        </tr>
    )

}

export default Row;