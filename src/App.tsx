import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [assetData, setAssetData] = useState({
    color: "",
    size: "",
    owner: "",
    value: "",
  });
  const [transferData, setTransferData] = useState({
    assetId: "",
    newOwner: "",
  });
  const [updateData, setUpdateData] = useState({
    assetId: "",
    color: "",
    size: "",
    owner: "",
    value: "",
  });

  const handleAssetChange = (e) => {
    setAssetData({ ...assetData, [e.target.name]: e.target.value });
  };

  const handleTransferChange = (e) => {
    setTransferData({ ...transferData, [e.target.name]: e.target.value });
  };

  const handleUpdateChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const createAsset = async () => {
    const response = await fetch("http://localhost:3000/api/assets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assetData),
    });
    const result = await response.json();
    alert(result.message);
  };

  const transferAsset = async () => {
    const response = await fetch("http://localhost:3000/api/assets/transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transferData),
    });
    const result = await response.json();
    alert(result.message);
  };

  const updateAsset = async () => {
    const response = await fetch("http://localhost:3000/api/assets/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <div>
      <h1>Ассеты</h1>
      <button onClick={() => navigate("/assets")}>Все ассеты</button>

      <h2>Создать актив</h2>
      <input name="color" placeholder="Цвет" onChange={handleAssetChange} />
      <input name="size" placeholder="Размер" onChange={handleAssetChange} />
      <input name="owner" placeholder="Владелец" onChange={handleAssetChange} />
      <input
        name="value"
        placeholder="Стоимость"
        onChange={handleAssetChange}
      />
      <button onClick={createAsset}>Создать актив</button>

      <h2>Передать актив</h2>
      <input
        name="assetId"
        placeholder="ID актива"
        onChange={handleTransferChange}
      />
      <input
        name="newOwner"
        placeholder="Новый владелец"
        onChange={handleTransferChange}
      />
      <button onClick={transferAsset}>Передать актив</button>

      <h2>Обновить актив</h2>
      <input
        name="assetId"
        placeholder="ID актива"
        onChange={handleUpdateChange}
      />
      <input name="color" placeholder="Цвет" onChange={handleUpdateChange} />
      <input name="size" placeholder="Размер" onChange={handleUpdateChange} />
      <input
        name="owner"
        placeholder="Владелец"
        onChange={handleUpdateChange}
      />
      <input
        name="value"
        placeholder="Стоимость"
        onChange={handleUpdateChange}
      />
      <button onClick={updateAsset}>Обновить актив</button>
    </div>
  );
}

export default App;
