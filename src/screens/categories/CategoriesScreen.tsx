import { useState, useEffect } from "react";
import { Typography } from "antd";
import { Emissions } from "../../models";
import { Emission } from "../../interfaces/emission/emission.interface";
import { EmissionCreation } from "../../interfaces/emission/emission.creation.interface";
import CategoriesTabs from "../components/CategoriesTabs";
import CategoriesEmissionsCard from "../components/CategoriesEmissionsCard";
import { SubCategory } from "../../interfaces/subcategory/subcategory.interface";
import { SubCategories } from "../../interfaces/subcategory/subcategories.interface";
import { ScreenContainer } from "./CategoriesScreenStyled";
const { Title } = Typography;

function CategoriesScreen() {
  const [emission, setEmission] = useState<Emission>({
    total_emission: 0,
    total_emission_measure: "",
    categories_emissions: [],
  });
  const [emissionCreations, setEmissionCreations] = useState<EmissionCreation[]>([])

  const calculateTotalEmission = (subcategories: SubCategories) => {
    let emissionsCopy = [...emissionCreations]
    subcategories.map((subcategory: SubCategory) => {
      let emissionIndex = emissionsCopy.findIndex((emission) => emission.subcategory_id === subcategory.id)
      if(emissionIndex != -1){
        emissionsCopy[emissionIndex].use = subcategory.use 
      }else{
        emissionsCopy.push({
            subcategory_id: subcategory.id,
            use: subcategory.use,
        })
      }
    });
    setEmissionCreations(emissionsCopy)
    Emissions.calculate_total_emission(emissionsCopy).then((response: any) => {
      setEmission(response.data);
    });
  };

  return (
    <ScreenContainer>
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
    </ScreenContainer>
  );
}

export default CategoriesScreen;
