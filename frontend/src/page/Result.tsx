//Result
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Typography } from "@mui/material";
import ButtonAppBar from "./components/ButtonAppBar";
import CardFormat from "./components/CardFormat";
import Loading from "./components/Loading";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResult: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  //searchページからの引き渡し
  const name = query.get("name") || "";
  const prefecture = query.get("prefecture") || "";
  const industryCode = query.get("industryCode") || "";

  interface Job {
    id: number;
    corporation_id: number; // `corporation_id` を追加
    name: string;
    prefecture: string;
    industry_code: string;
    black_tokens?: number;
  }

  const industryCodeOptions: { [key: string]: string } = {
    "農業，林業": "A",
    "漁業": "B",
    "鉱業，採石業，砂利採取業": "C",
    "建設業": "D",
    "製造業": "E",
    "電気・ガス・熱供給・水道業": "F",
    "情報通信業": "G",
    "運輸業，郵便業": "H",
    "卸売業，小売業": "I",
    "金融業，保険業": "J",
    "不動産業，物品賃貸業": "K",
    "学術研究，専門・技術サービス業": "L",
    "宿泊業，飲食サービス業": "M",
    "生活関連サービス業，娯楽業": "N",
    "教育，学習支援業": "O",
    "医療，福祉": "P",
    "複合サービス事業": "Q",
    "サービス業（他に分類されないもの）": "R",
    "公務（他に分類されるものを除く）": "S",
    "分類不能の産業": "T",
  };

  const getIndustryCode = (option: string): string => {
    return industryCodeOptions[option] || "";
  };

  const [page, setPage] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);
  //バックエンドからの結果
  const [results, setResults] = React.useState<Job[]>([]);

  React.useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const params: { [key: string]: string } = {
          name,
          prefecture,
          industry_code: getIndustryCode(industryCode),
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
    fetchJobListings();
  }, [name, prefecture, industryCode]);

  //ページネーション
  const itemsPerPage = 6;
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageResults = results.slice(startIndex, endIndex);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <ButtonAppBar />

      {/* <Box sx={{ flex: 1, mt: 3, ml: 1, mb: '60px', px: 2 }}>
        {loading ? (
          <Loading />
        ) : (
          //renderContentForPage(page)
        )}
      </Box> */}

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {currentPageResults.map((job) => (
          <CardFormat
            key={job.id}
            Name={job.name}
            corporation_id={job.corporation_id}
            AccordionContent="オフィスが廃墟。"
            BlackRate={job.black_tokens ?? 0}
          />
        ))}
      </Box>

      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Pagination
          count={totalPages} //ページ数の変更はこちら
          variant="outlined"
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default SearchResult;
