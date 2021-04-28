import { useState, useEffect } from "react";
import { Typography } from "antd";
import { Emissions } from "../../models";
import { Emission } from "../../interfaces/emission/emission.interface";
import CategoriesTabs from "../components/CategoriesTabs";
import CategoriesEmissionsCard from "../components/CategoriesEmissionsCard";
const { Title } = Typography;

function CategoriesScreen() {
  const [emission, setEmission] = useState<Emission>(null as any);

  const calculateTotalEmission = () => {
    let params = [
      {
        subcategory_id: 1,
        use: 50.0,
      },
      {
        subcategory_id: 7,
        use: 50.0,
      },
      {
        subcategory_id: 14,
        use: 50.0,
      }
    ];
    Emissions.calculate_total_emission(params).then((response: any) => {
        console.log(response)
        setEmission(response.data);
    });
  };

  useEffect(() => {
    calculateTotalEmission();
  }, []);

  return (
    <div
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Title level={2} style={{ textAlign: "center", marginTop: 30 }}>
        Carbon Footprint Calculator
      </Title>
      {emission && <CategoriesTabs emission={emission}></CategoriesTabs>}
      {emission && <CategoriesEmissionsCard emission={emission}></CategoriesEmissionsCard>}
    </div>
  );
}

export default CategoriesScreen;
