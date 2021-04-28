import { Card, Typography, Row, Col } from "antd";
import { Emission } from "../../interfaces/emission/emission.interface";
import { CategoryEmission } from "../../interfaces/emission/category.emission.interface";
import TotalEmissionsCard from "./TotalEmissionsCard";
const { Text } = Typography;

const CategoriesEmissionsCard: React.FC<{emission: Emission}> = ({emission}) => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        display: "flex",
        marginTop: 10,
        marginBottom: 60,
      }}
    >
      <Card
        type="inner"
        title="Categories Carbon Footprint Annual CO2 emissions (Kg.)"
        style={{ width: 800, height: 230 }}
      >
        <Row
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            height: 140,
            marginRight: 70,
            marginLeft: 50,
          }}
        >
          {emission.categories_emissions.map((category_emission: CategoryEmission) => (
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 22, color: "#8C8C8C" }}>
                {category_emission.category.name}
              </Text>
              <Text style={{ fontSize: 28 }}>{category_emission.total_emission}</Text>
              <Text style={{ fontSize: 12, color: "#8C8C8C" }}>
                U.S. Average*: 10,500
              </Text>
            </Col>
          ))}
        </Row>
      </Card>
      <TotalEmissionsCard emission={emission}></TotalEmissionsCard>
    </div>
  );
}
export default CategoriesEmissionsCard;
