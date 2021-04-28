import { useState, useEffect } from "react";
import { Card, List, Typography, Input } from "antd";
import { SubCategories } from "../../models";
import { Category } from "../../interfaces/category/category.interface";
import { SubCategory } from "../../interfaces/subcategory/subcategory.interface";
const { Text } = Typography;

const SubcategoriesList: React.FC<{category: Category}> = ({category}) => {
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);

  const getSubCategories = () => {
    SubCategories.list(category.id).then((response: any) => {
        setSubcategories(response.data);
    });
  };

  useEffect(() => {
    getSubCategories();
  }, []);

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={subcategories}
      renderItem={(item) => (
        <List.Item>
          <Card type="inner" title={item.name}>
            <div>
              <Input style={{ marginBottom: 5 }} placeholder="0" />
              <div style={{display: "flex", flexDirection: "row-reverse"}}>
                <Text style={{ color: "#8C8C8C" }}>
                    {item.ef_measure}
                </Text>
              </div>
            </div>
            <div
              style={{
                height: 50,
                background: "#73d13d",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                margin: "20px -24px -16px -24px",
              }}
            >
              <Text strong style={{ color: "#ffffff", fontSize: "15px" }}>
                {item.use} {item.use_measure}
              </Text>
            </div>
          </Card>
        </List.Item>
      )}
    ></List>
  );
}

export default SubcategoriesList;
