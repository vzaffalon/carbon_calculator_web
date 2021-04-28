import { Typography, Col } from "antd";
import { Emission } from "../../interfaces/emission/emission.interface"
import { Category } from "../../interfaces/category/category.interface"
const { Text } = Typography;

const SelectedCategoryEmissions: React.FC<{emission: Emission, category: Category}> = ({emission, category}) => {
    const category_emission = emission.categories_emissions.filter((category_emission) => category_emission.category.id === category.id)[0]
  
    return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "350px",
      }}
    >
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: 400, color: "#8C8C8C" }}>
          {category.name}
        </Text>
        <Text style={{ fontSize: 30 }}>{category_emission.total_emission}</Text>
        <Text style={{ fontSize: 14, color: "#8C8C8C" }}>
          Annual CO2 emissions (Kg.)
        </Text>
      </Col>
    </div>
  );
}

export default SelectedCategoryEmissions;
