import { Card, Row } from "antd";
import SubcategoriesList from "./SubcategoriesList";
import SelectedCategoryEmissions from "./SelectedCategoryEmissions";
import { Emission } from "../../interfaces/emission/emission.interface"
import { Category } from "../../interfaces/category/category.interface"

const CategoryEmissionsCard: React.FC<{emission: Emission, category: Category}> = ({emission, category}) => {

  return (
    <Row style={{ justifyContent: "center" }}>
      <div>
        <Card
          title={"Insert your current emissions from " + category.name}
          style={{ width: 900 }}
        >
          <SubcategoriesList category={category}></SubcategoriesList>
        </Card>
      </div>
      <div>
        <Card
          title={"Total " + category.name + " Emissions"}
          style={{ width: 300, height: "100%", marginLeft: 10 }}
        >
          <SelectedCategoryEmissions category={category} emission={emission}></SelectedCategoryEmissions>
        </Card>
      </div>
    </Row>
  );
}

export default CategoryEmissionsCard;
