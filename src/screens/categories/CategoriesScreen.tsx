import { useState, useEffect } from "react";
import { Typography } from "antd";
import { Emissions } from "../../models";
import { Emission } from "../../interfaces/emission/emission.interface";
import { EmissionCreation } from "../../interfaces/emission/emission.creation.interface";
import CategoriesTabs from "../components/CategoriesTabs";
import CategoriesEmissionsCard from "../components/CategoriesEmissionsCard";
import { SubCategory } from "../../interfaces/subcategory/subcategory.interface";
import { SubCategories } from "../../interfaces/subcategory/subcategories.interface";
const { Title } = Typography;

function CategoriesScreen() {
  const [emission, setEmission] = useState<Emission>({
    total_emission: 0,
    total_emission_measure: "string",
    categories_emissions: [],
  });

  const calculateTotalEmission = (subcategories: SubCategories) => {
    let params: EmissionCreation[] = [];
    subcategories.map((subcategory: SubCategory) => {
      params.push({
        subcategory_id: subcategory.id,
        use: subcategory.use,
      });
    });
    Emissions.calculate_total_emission(params).then((response: any) => {
      setEmission(response.data);
    });
  };

  return (
    <div
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Title level={2} style={{ textAlign: "center", marginTop: 30 }}>
        Carbon Footprint Calculator
      </Title>
      {emission && (
        <CategoriesTabs
          calculateTotalEmission={calculateTotalEmission}
          emission={emission}
        ></CategoriesTabs>
      )}
      {emission && (
        <CategoriesEmissionsCard emission={emission}></CategoriesEmissionsCard>
      )}
    </div>
  );
}

export default CategoriesScreen;
