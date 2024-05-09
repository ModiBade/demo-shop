import Table from "@/ui/table/table"
const ProductTechnicalAttributes = ({ attributes }) => {
    return (
        <Table className="border-separate border-spacing-2">
            <Table.Body>
                {
                    attributes.map((data, index) => (
                        <Table.Row key={index} className="odd:bg-slate-50 even:white">
                            <Table.Cell type="body" className="lg:w-[15%] w-[35%] bg-indigo-50 p-4 text-cyan-600 rounded-xl">{data.name}</Table.Cell>
                            <Table.Cell type="body" className="lg:w-[85%] w-[65%] font-normal p-4 text-sm font-iran rounded-xl">
                                {
                                    data.items.map((item, index) => (
                                        <span key={index}>{item} {data.items.length !== index + 1 && ` - `}</span>
                                    ))
                                }
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default ProductTechnicalAttributes;