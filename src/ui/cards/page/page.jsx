const PageCard = ({ title, subtitle, children }) => {

    return (
        <div className="bg-white rounded-xl p-5">
            <div>
                <div>
                    <h3 className="text-blue-500 text-3xl font-normal">{title}</h3>
                    <div className="font-iran font-normal text-gray-500 text-sm">{subtitle}</div>
                </div>
                <hr className="border-dashed my-5" />
                <div>
                    {children}
                </div>
            </div>
        </div>
    )

}

export default PageCard;