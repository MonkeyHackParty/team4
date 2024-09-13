import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Job {
  id: number;
  corporation_id: number; // `corporation_id` を追加
  name: string;
  prefecture: string;
  industry_code: string;
}

const industryOptions: { code: string; label: string }[] = [
  { code: "A", label: "農業，林業" },
  { code: "B", label: "漁業" },
  { code: "C", label: "鉱業，採石業，砂利採取業" },
  { code: "D", label: "建設業" },
  { code: "E", label: "製造業" },
  { code: "F", label: "電気・ガス・熱供給・水道業" },
  { code: "G", label: "情報通信業" },
  { code: "H", label: "運輸業，郵便業" },
  { code: "I", label: "卸売業，小売業" },
  { code: "J", label: "金融業，保険業" },
  { code: "K", label: "不動産業，物品賃貸業" },
  { code: "L", label: "学術研究，専門・技術サービス業" },
  { code: "M", label: "宿泊業，飲食サービス業" },
  { code: "N", label: "生活関連サービス業，娯楽業" },
  { code: "O", label: "教育，学習支援業" },
  { code: "P", label: "医療，福祉" },
  { code: "Q", label: "複合サービス事業" },
  { code: "R", label: "サービス業（他に分類されないもの）" },
  { code: "S", label: "公務（他に分類されるものを除く）" },
  { code: "T", label: "分類不能の産業" },
];

const JobListingSearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [prefecture, setPrefecture] = useState<string>("");
  const [industryCode, setIndustryCode] = useState<string>("");
  const [results, setResults] = useState<Job[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const navigate = useNavigate(); // react-router-dom の useNavigate フックを使用

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePrefectureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPrefecture(event.target.value);
  };

  const handleIndustryCodeSelect = (code: string) => {
    setIndustryCode(code);
    setModalOpen(false);
  };

  const handleSearch = async () => {
    try {
      const params: { [key: string]: string } = {
        name,
        prefecture,
        industry_code: industryCode || "", // industry_code が空文字列の場合も含めてクエリに追加
      };

      // 空の industry_code が含まれる場合は削除
      Object.keys(params).forEach((key) => {
        if (params[key] === "") {
          delete params[key];
        }
      });

      const response = await axios.get(
        "http://localhost:8000/api/job-listings/",
        {
          params,
        }
      );

      setResults(response.data);
    } catch (error) {
      console.error("Error fetching job listings:", error);
    }
  };

  const handleItemClick = (corporation_id: number) => {
    navigate(`/${corporation_id}`); // corporation_id でパスにリダイレクト
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter company name"
      />
      <input
        type="text"
        value={prefecture}
        onChange={handlePrefectureChange}
        placeholder="Enter prefecture"
      />
      <button onClick={() => setModalOpen(true)}>Select Industry</button>
      <button onClick={handleSearch}>Search</button>

      {/* 結果を表示 */}
      <ul>
        {results.map((job) => (
          <li key={job.id} onClick={() => handleItemClick(job.corporation_id)}>
            {job.name} - {job.prefecture} - {job.industry_code}
          </li>
        ))}
      </ul>

      {/* モーダル */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Select Industry</h2>
            <ul>
              {industryOptions.map((option) => (
                <li key={option.code}>
                  <button onClick={() => handleIndustryCodeSelect(option.code)}>
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListingSearch;
