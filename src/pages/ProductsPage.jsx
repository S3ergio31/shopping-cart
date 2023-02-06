import CrudPage from "./CrudPage";
import useCrud from "../hooks/useCrud";

const ProductPage = () => {
    const { models: categories } = useCrud("categories");
    return (
        <CrudPage 
            headers={['id', 'title', 'price', {
                name: 'category',
                format: row => row.category.name
            }]}
            resource="products"
            searchBy="title"
            attributes={[
                {
                    name: "title",
                    type: "text",
                    required: true
                },
                {
                    name: "description",
                    type: "text",
                    required: true
                },
                {
                    name: "price",
                    type: "number",
                    required: true
                },
                {
                    name: "image",
                    type: "url",
                    required: true
                },
                {
                    name: "rate",
                    type: "number",
                    required: true
                },

                {
                    name: "count",
                    type: "number",
                    required: true
                },
                {
                    name: "category",
                    type: "select",
                    required: true,
                    options: categories
                }
            ]}
        />
    );
}

export default ProductPage;