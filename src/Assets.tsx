import React, { useState, useEffect } from "react";

const Assets = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data");
        if (!response.ok) {
          throw new Error("Ошибка при загрузке ассетов");
        }
        const data = await response.json();
        setAssets(data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchAssets();
  }, []);

  return (
    <div>
      <h1>Список Ассетов</h1>
      <ul>
        {assets.map((asset) => (
          <li key={asset.ID}>
            <strong>ID:</strong> {asset.ID}, <strong>Цвет:</strong>{" "}
            {asset.Color}, <strong>Размер:</strong> {asset.Size},{" "}
            <strong>Владелец:</strong> {asset.Owner},{" "}
            <strong>Оценочная стоимость:</strong> {asset.AppraisedValue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assets;
