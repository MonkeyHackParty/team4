//Result
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Typography } from '@mui/material';
import ButtonAppBar from './components/ButtonAppBar';
import CardFormat from './components/CardFormat';
import Loading from './components/Loading';
import { useLocation } from 'react-router-dom';

const CardListPage1: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const keyword = query.get('keyword') || '';
  const region = query.get('region') || '';
  const industry = query.get('industry') || '';

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      <CardFormat
        Name="企業１"
        LinkCode="Company-1"
        AccordionContent="この企業はそこそこブラックですよ。"
        BlackRate={23}
      />
      <CardFormat
        Name="企業２"
        LinkCode="Company-2"
        AccordionContent="この企業は若干ホワイトそうです。"
        BlackRate={64}
      />
      <CardFormat
        Name="企業３"
        LinkCode="Company-3"
        AccordionContent="口癖が「どつきまわすぞ」。"
        BlackRate={13}
      />
      <CardFormat
        Name="企業４"
        LinkCode="Company-4"
        AccordionContent="くら寿司のパクリ。"
        BlackRate={80}
      />
      <CardFormat
        Name="企業５"
        LinkCode="Company-5"
        AccordionContent="ケチ。"
        BlackRate={100}
      />
      <CardFormat
        Name="企業６"
        LinkCode="Company-6"
        AccordionContent="ときどき落とし穴が仕掛けられている。"
        BlackRate={46}
      />
    </Box>
  );
};

const CardListPage2: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      <CardFormat
        Name="企業７"
        LinkCode="Company-7"
        AccordionContent="オフィスが廃墟。"
        BlackRate={23}
      />
      <CardFormat
        Name="企業８"
        LinkCode="Company-8"
        AccordionContent="クワガタの餌やり係だるい。"
        BlackRate={64}
      />
      <CardFormat
        Name="企業９"
        LinkCode="Company-9"
        AccordionContent="隣がヤクザの事務所。"
        BlackRate={13}
      />
      <CardFormat
        Name="企業１０"
        LinkCode="Company-10"
        AccordionContent="オフィスが４５階にあるがエレベーターがない。"
        BlackRate={80}
      />
      <CardFormat
        Name="企業１１"
        LinkCode="Company-11"
        AccordionContent="社長がはげてる。"
        BlackRate={100}
      />
      <CardFormat
        Name="企業１２"
        LinkCode="Company-12"
        AccordionContent="資料が全部手書き。"
        BlackRate={46}
      />
    </Box>
  );
};


const renderContentForPage = (pageNumber: number): JSX.Element => {
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


const SearchResult: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' , backgroundColor:'white'}}>
      <ButtonAppBar />

      <Box sx={{ flex: 1, mt: 3, ml: 1, mb: '60px', px: 2 }}>
        {loading ? (
          <Loading />
        ) : (
          renderContentForPage(page)
        )}
      </Box>

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
          count={2} //ページ数の変更はこちら
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

