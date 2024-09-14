import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Input, Button, Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import "./Search.css";
import image1 from "../assets/image_rlt.png";
import image2 from "../assets/image_info.png";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [name, setName] = React.useState("");
  const [prefecture, setPrefecture] = React.useState("");
  const [industryCode, setIndustryCode] = React.useState("");
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePrefectureChange = (event: SelectChangeEvent<string>) => {
    setPrefecture(event.target.value as string);
  };

  const handleIndustryCodeChange = (event: SelectChangeEvent<string>) => {
    setIndustryCode(event.target.value as string);
  };

  const handleSubmit = async () => {
    const queryString = new URLSearchParams({
      name,
      prefecture,
      industryCode,
    }).toString();

    navigate(`/result?${queryString}`);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              BlackChecker
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <main className="main-content">
        <section className="search">
          <h1>企業を検索する</h1>
          <div className="search-word">
            <Input
              className="search-word-input"
              placeholder="キーワードを入力"
              //variant="soft"
              value={name}
              onChange={handleNameChange} // Update name state
              sx={{ backgroundColor: "#ebf0f4", borderRadius: 2 }}
            />
          </div>
          <div className="search-options">
            <div className="search-prefecture">
              <h2>都道府県からさがす</h2>
              <Select
                className="search-select"
                displayEmpty
                value={prefecture}
                onChange={handlePrefectureChange}
                sx={{ backgroundColor: "#ebf0f4", borderRadius: 2 }}
              >
                <MenuItem value="">
                  <em>都道府県を選択</em>
                </MenuItem>
                <MenuItem value="北海道">北海道</MenuItem>
                <MenuItem value="青森県">青森県</MenuItem>
                <MenuItem value="岩手県">岩手県</MenuItem>
                <MenuItem value="宮城県">宮城県</MenuItem>
                <MenuItem value="秋田県">秋田県</MenuItem>
                <MenuItem value="山形県">山形県</MenuItem>
                <MenuItem value="福島県">福島県</MenuItem>
                <MenuItem value="茨城県">茨城県</MenuItem>
                <MenuItem value="栃木県">栃木県</MenuItem>
                <MenuItem value="群馬県">群馬県</MenuItem>
                <MenuItem value="埼玉県">埼玉県</MenuItem>
                <MenuItem value="千葉県">千葉県</MenuItem>
                <MenuItem value="東京都">東京都</MenuItem>
                <MenuItem value="神奈川県">神奈川県</MenuItem>
                <MenuItem value="新潟県">新潟県</MenuItem>
                <MenuItem value="富山県">富山県</MenuItem>
                <MenuItem value="石川県">石川県</MenuItem>
                <MenuItem value="福井県">福井県</MenuItem>
                <MenuItem value="山梨県">山梨県</MenuItem>
                <MenuItem value="長野県">長野県</MenuItem>
                <MenuItem value="岐阜県">岐阜県</MenuItem>
                <MenuItem value="静岡県">静岡県</MenuItem>
                <MenuItem value="愛知県">愛知県</MenuItem>
                <MenuItem value="三重県">三重県</MenuItem>
                <MenuItem value="滋賀県">滋賀県</MenuItem>
                <MenuItem value="京都府">京都府</MenuItem>
                <MenuItem value="大阪府">大阪府</MenuItem>
                <MenuItem value="兵庫県">兵庫県</MenuItem>
                <MenuItem value="奈良県">奈良県</MenuItem>
                <MenuItem value="和歌山県">和歌山県</MenuItem>
                <MenuItem value="鳥取県">鳥取県</MenuItem>
                <MenuItem value="島根県">島根県</MenuItem>
                <MenuItem value="岡山県">岡山県</MenuItem>
                <MenuItem value="広島県">広島県</MenuItem>
                <MenuItem value="山口県">山口県</MenuItem>
                <MenuItem value="徳島県">徳島県</MenuItem>
                <MenuItem value="香川県">香川県</MenuItem>
                <MenuItem value="愛媛県">愛媛県</MenuItem>
                <MenuItem value="高知県">高知県</MenuItem>
                <MenuItem value="福岡県">福岡県</MenuItem>
                <MenuItem value="佐賀県">佐賀県</MenuItem>
                <MenuItem value="長崎県">長崎県</MenuItem>
                <MenuItem value="熊本県">熊本県</MenuItem>
                <MenuItem value="大分県">大分県</MenuItem>
                <MenuItem value="宮崎県">宮崎県</MenuItem>
                <MenuItem value="鹿児島県">鹿児島県</MenuItem>
                <MenuItem value="沖縄県">沖縄県</MenuItem>
              </Select>
            </div>
            <div className="search-industryCode">
              <h2>業種からさがす</h2>
              <Select
                className="search-select"
                displayEmpty
                value={industryCode}
                onChange={handleIndustryCodeChange}
                sx={{ backgroundColor: "#ebf0f4", borderRadius: 2 }}
              >
                <MenuItem value="">
                  <em>業種を選択</em>
                </MenuItem>
                <MenuItem value="A">農業・林業</MenuItem>
                <MenuItem value="B">漁業</MenuItem>
                <MenuItem value="B">鉱業・採石業・砂利採取業</MenuItem>
                <MenuItem value="D">建設業</MenuItem>
                <MenuItem value="E">製造業</MenuItem>
                <MenuItem value="F">電気・ガス・熱供給・水道業</MenuItem>
                <MenuItem value="G">情報通信業</MenuItem>
                <MenuItem value="H">運輸業・郵便業</MenuItem>
                <MenuItem value="I">卸売業・小売業</MenuItem>
                <MenuItem value="J">金融業・保険業</MenuItem>
                <MenuItem value="K">不動産業・物品賃貸業</MenuItem>
                <MenuItem value="L">学術研究・専門・技術サービス業</MenuItem>
                <MenuItem value="M">宿泊業・飲食サービス業</MenuItem>
                <MenuItem value="N">生活関連サービス業・娯楽業</MenuItem>
                <MenuItem value="O">教育・学習支援業</MenuItem>
                <MenuItem value="P">医療・福祉</MenuItem>
                <MenuItem value="Q">複合サービス事業</MenuItem>
                <MenuItem value="R">その他のサービス業</MenuItem>
                <MenuItem value="S">その他の公務</MenuItem>
                <MenuItem value="T">その他</MenuItem>
              </Select>
            </div>
          </div>
          <div className="search-button">
            <Button
              sx={{
                width: 100,
                backgroundColor: "#1760a0",
                color: "white",
              }}
              onClick={handleSubmit}
            >
              検索
            </Button>
          </div>
        </section>
        <section className="detailed-description">
          {" "}
          {/* ページの詳細な説明 */}
          <h1>BlackCheckerとは</h1>
          <div className="desc-options">
            <div className="desc">
              <h2>ブラック企業である確率を算出</h2>
              <img src={image1}></img>
            </div>
            <div className="desc">
              <h2>企業の情報がすぐ見れる！</h2>
              <img src={image2}></img>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
