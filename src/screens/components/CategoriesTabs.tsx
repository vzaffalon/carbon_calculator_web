import { useState, useEffect } from "react";
import { Tabs } from "antd";
import { Categories } from "../../models";
import { Category } from "../../interfaces/category/category.interface";
import { Emission } from "../../interfaces/emission/emission.interface";
import CategoryEmissionsCard from "./CategoryEmissionsCard";
const { TabPane } = Tabs;

const CategoriesTab: React.FC<{emission: Emission, calculateTotalEmission: Function}> = ({emission, calculateTotalEmission}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = () => {
    Categories.list().then((response: any) => {
        setCategories(response.data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Tabs
      type="line"
      tabBarStyle={{ color: "#40a9ff", width: 1200, marginLeft: 120 }}
      defaultActiveKey="1"
      style={{ width: "100%" }}
      centered
    >
      {categories.map((category: Category) => (
        <TabPane tab={category.name} key={category.id}>
          <CategoryEmissionsCard emission={emission} category={category} calculateTotalEmission={calculateTotalEmission}></CategoryEmissionsCard>
        </TabPane>
      ))}
    </Tabs>
  );
}
export default CategoriesTab;
