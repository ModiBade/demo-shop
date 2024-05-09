const Body = ({ className = '', children }) => {

    return (
        <tbody className={`${className}`}>
            {children}
        </tbody>
    )

}

export default Body;