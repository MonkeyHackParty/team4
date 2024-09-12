import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Typography } from '@mui/material';
import ButtonAppBar from '../components/ButtonAppBar'
import CardFormat from '../components/CardFormat'
import Loading from '../components/Loading'

const renderContentForPage = (pageNumber) => {
  switch (pageNumber) {
    case 1:
      return <CardListPage1 />;
    case 2:
      return <CardListPage2 />;
    case 3:
      return <Typography variant="h6">Content for Page 3</Typography>;
    case 4:
      return <Typography variant="h6">Content for Page 4</Typography>;
    case 5:
      return <Typography variant="h6">Content for Page 5</Typography>;
    case 6:
      return <Typography variant="h6">Content for Page 6</Typography>;
    case 7:
      return <Typography variant="h6">Content for Page 7</Typography>;
    case 8:
      return <Typography variant="h6">Content for Page 8</Typography>;
    case 9:
      return <Typography variant="h6">Content for Page 9</Typography>;
    case 10:
      return <Typography variant="h6">Content for Page 10</Typography>;
    default:
      return <Typography variant="h6">Default Content</Typography>;
  }
};

const CardListPage1 = () => {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <CardFormat
           Name = "企業１"
           CLink = "Company-1"
           AccordionContent = "この企業はそこそこブラックですよ。" 
           BlackRate = {23}
          />
          <CardFormat
           Name = "企業２"
           CLink = "Company-2"
           AccordionContent = "この企業は若干ホワイトそうです。" 
           BlackRate = {64}
          />
          <CardFormat
           Name = "企業３"
           CLink = "Company-3"
           AccordionContent = "口癖が「どつきまわすぞ」。" 
           BlackRate = {13}
          />
          <CardFormat
           Name = "企業４"
           CLink = "Company-4"
           AccordionContent = "くら寿司のパクリ。" 
           BlackRate = {80}
          />
          <CardFormat
           Name = "企業５"
           CLink = "Company-5"
           AccordionContent = "ケチ。" 
           BlackRate = {100}
          />
          <CardFormat
           Name = "企業６"
           CLink = "Company-6"
           AccordionContent = "ときどき落とし穴が仕掛けられている。" 
           BlackRate = {46}
          />
      </Box>
    );
  };

const CardListPage2 = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <CardFormat
         Name = "企業７"
         CLink = "Company-7"
         AccordionContent = "オフィスが廃墟。" 
         BlackRate = {23}
        />
        <CardFormat
         Name = "企業８"
         CLink = "Company-8"
         AccordionContent = "クワガタの餌やり係だるい。" 
         BlackRate = {64}
        />
        <CardFormat
         Name = "企業９"
         CLink = "Company-9"
         AccordionContent = "隣がヤクザの事務所。" 
         BlackRate = {13}
        />
        <CardFormat
         Name = "企業１０"
         CLink = "Company-10"
         AccordionContent = "オフィスが４５階にあるがエレベーターがない。" 
         BlackRate = {80}
        />
        <CardFormat
         Name = "企業１１"
         CLink = "Company-11"
         AccordionContent = "社長がはげてる。" 
         BlackRate = {100}
        />
        <CardFormat
         Name = "企業１２"
         CLink = "Company-12"
         AccordionContent = "資料が全部手書き。" 
         BlackRate = {46}
        />
    </Box>
  );
};

//SearchResultの定義
export default function SearchResult() {

  //変数の定義
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false); // 追加
  const handleChange = (event, value) => {
    setPage(value);
    setLoading(true);
    setTimeout(() => {
        setLoading(false); // 遅延後に読み込み中状態を解除
      }, 2000); // 3秒の遅延
  };
  
  //returnの定義
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* ヘッダー部分 */}
      <ButtonAppBar />

      {/* コンテンツ部分 */}
      <Box sx={{ flex: 1, mt: 3, ml: 1, mb: '60px', px: 2 }}>
        {loading ? (
          <Loading />
        ) : (
          renderContentForPage(page)
        )}
      </Box>

      {/* フッター部分（Pagination） */}
      <Box
        component="footer"
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
        }}
      >
        <Pagination
          count={2}
          variant="outlined"
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}