const Head = ({ className, children }) => {
    return (
        <thead className="border-b border-dashed text-sm text-slate-500 font-bold font-bakh">
            {children}
        </thead>
    )
}

export default Head;