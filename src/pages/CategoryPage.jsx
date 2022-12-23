import CrudPage from "./CrudPage";

const CategoryPage = () => {
    return (
        <CrudPage
            headers={['id', 'name']}
            resource="categories"
            searchBy="name"
            attributes={[
                {
                    name: "name",
                    type: "text",
                    required: true
                }
            ]}
        />
    );
}

export default CategoryPage;