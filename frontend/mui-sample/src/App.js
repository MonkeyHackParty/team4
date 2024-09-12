import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Input, Button, Select, Option } from '@mui/joy';
import './App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const App = () => {
  const [keyword, setKeyword] = React.useState('');
  const [region, setRegion] = React.useState('');
  const [industry, setIndustry] = React.useState('');
  const navigate = useNavigate(); // Call useNavigate her
  
  const handleKeywordChange = (e) => {
    if (e && e.target) {
      setKeyword(e.target.value);
    }
  };

  const handleRegionChange = (event, newValue) => { // Adjusted for Joy UI
    setRegion(newValue);
  };

  const handleIndustryChange = (event, newValue) => { // Adjusted for Joy UI
    setIndustry(newValue);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('YOUR_BACKEND_URL', {
        keyword,
        region,
        industry,
      });
      navigate('/results', { state: { data: response.data } });
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };
  
  return (
    /*
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
    */
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: 'black'}}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              BlackChecker
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    <main className='main-content'>
      <section className='search'>
        <h1>企業を検索する</h1>
        <div className="search-word">
          <Input
            className="search-word-input"
            placeholder="キーワードを入力"
            variant="soft"
            value={keyword}
            onChange={handleKeywordChange} // Update keyword state
            sx={{backgroundColor: "white"}}
          />
        </div>
        <div className="search-options">
          <div className="search-region">
            <h2>都道府県からさがす</h2>
            <Select
              placeholder="都道府県を選択"
              value={region}
              onChange={(event, value) => handleRegionChange(event, value)}
              sx={{backgroundColor: "white"}}
            >
              <Option value="">
                <em>都道府県を選択</em>
              </Option>
              <Option value="北海道">北海道</Option>
              <Option value="青森県">青森県</Option>
              <Option value="岩手県">岩手県</Option>
              <Option value="宮城県">宮城県</Option>
              <Option value="秋田県">秋田県</Option>
              <Option value="山形県">山形県</Option>
              <Option value="福島県">福島県</Option>
              <Option value="茨城県">茨城県</Option>
              <Option value="栃木県">栃木県</Option>
              <Option value="群馬県">群馬県</Option>
              <Option value="埼玉県">埼玉県</Option>
              <Option value="千葉県">千葉県</Option>
              <Option value="東京都">東京都</Option>
              <Option value="神奈川県">神奈川県</Option>
              <Option value="新潟県">新潟県</Option>
              <Option value="富山県">富山県</Option>
              <Option value="石川県">石川県</Option>
              <Option value="福井県">福井県</Option>
              <Option value="山梨県">山梨県</Option>
              <Option value="長野県">長野県</Option>
              <Option value="岐阜県">岐阜県</Option>
              <Option value="静岡県">静岡県</Option>
              <Option value="愛知県">愛知県</Option>
              <Option value="三重県">三重県</Option>
              <Option value="滋賀県">滋賀県</Option>
              <Option value="京都府">京都府</Option>
              <Option value="大阪府">大阪府</Option>
              <Option value="兵庫県">兵庫県</Option>
              <Option value="奈良県">奈良県</Option>
              <Option value="和歌山県">和歌山県</Option>
              <Option value="鳥取県">鳥取県</Option>
              <Option value="島根県">島根県</Option>
              <Option value="岡山県">岡山県</Option>
              <Option value="広島県">広島県</Option>
              <Option value="山口県">山口県</Option>
              <Option value="徳島県">徳島県</Option>
              <Option value="香川県">香川県</Option>
              <Option value="愛媛県">愛媛県</Option>
              <Option value="高知県">高知県</Option>
              <Option value="福岡県">福岡県</Option>
              <Option value="佐賀県">佐賀県</Option>
              <Option value="長崎県">長崎県</Option>
              <Option value="熊本県">熊本県</Option>
              <Option value="大分県">大分県</Option>
              <Option value="宮崎県">宮崎県</Option>
              <Option value="鹿児島県">鹿児島県</Option>
              <Option value="沖縄県">沖縄県</Option>
            </Select>
          </div>
          <div className="search-industry">
            <h2>業種からさがす</h2>
            <Select
              placeholder="業種を選択"
              value={industry}
              onChange={(event, value) => handleIndustryChange(event, value)}
            >
              <Option value="">
                <em>業種を選択</em>
              </Option>
              <Option value="製造業">製造業</Option>
              <Option value="建築業">建築業</Option>
              <Option value="設備業">設備業</Option>
              <Option value="運輸業">運輸業</Option>
              <Option value="流通業">流通業</Option>
              <Option value="農林水産業">農林水産業</Option>
              <Option value="印刷・出版業">印刷・出版業</Option>
              <Option value="金融業・保険業">金融業・保険業</Option>
              <Option value="不動産業">不動産業</Option>
              <Option value="IT・情報通信業">IT・情報通信業</Option>
              <Option value="サービス業">サービス業</Option>
              <Option value="教育・研究機関">教育・研究機関</Option>
              <Option value="病院・医療機関">病院・医療機関</Option>
              <Option value="官公庁・自治体">官公庁・自治体</Option>
              <Option value="法人団体">法人団体</Option>
              <Option value="その他の業種">その他の業種</Option>
            </Select>
          </div>
        </div>
        <div className="search-button">
        <Button
          sx={{
            width: 100,
            backgroundColor: '#1760a0',
            color: 'white'
          }}
          onClick={handleSubmit}
        >
          検索
        </Button>
        </div>
      </section>
      <section className='detailed-description'>  {/* ページの詳細な説明 */}
        <h1>BlackCheckerとは</h1>
        <div className="desc-options">
          <div className='desc'>
            <h2>ブラック率を算出</h2>
            <img src='example'></img> //サイト画像を張り付け
          </div>
          <div className='desc'>
            <h2>何がブラックかわかる</h2>
            <img src='example'></img> //サイト画像を張り付け
          </div>
        </div>
      </section>
    </main>
  </>
  );
};

export default App;