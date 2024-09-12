import { useState, useEffect } from 'react'
import {
  ChakraBaseProvider,
  extendTheme,
  Heading,
  Text,
  Button,
  Input,
  Select,
  Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';
import './App.css'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      sizes: {
        lg: {
          fontSize: '18px',
          padding: '12px 24px',
        },
      },
      variants: {
        solid: {
          bg: 'teal.500',
          color: 'white',
          _hover: {
            bg: 'teal.600',
          },
        },
      },
    },
  },
});

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('http://localhost:8000/mymodels/')
        .then(response => response.json())
        .then(data => setCount(data));
}, []);

return (
  <ChakraBaseProvider theme={theme}>
  <>
    <Heading >
      <h1>サイトタイトル</h1>
    </Heading>
    <main className='main-content'>
      <section className='description'>            {/* サイトについて簡易的な説明 */}
        <Text>
          サイト説明文
        </Text>
      </section>
      <section className='search'>                {/* 検索機能 */}
      <Tabs isFitted variant='enclosed'>
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>キーワード</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>エリア</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>業種</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Input placeholder='キーワードを入力' size='lg' variant='filled' />
            <Button colorScheme='teal' size="md">検索</Button>
          </TabPanel>
          <TabPanel>
            
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
        
      </section>
      <section className='detailed-description'>  {/* ページの詳細な説明 */}
        <div className='desc'>
          <h2>見出し</h2>
          <img src='example'></img>
          <p>説明文</p>
        </div>
      </section>
    </main>
  </>
  </ChakraBaseProvider>
);
}

export default App
