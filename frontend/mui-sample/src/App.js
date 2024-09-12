import * as React from "react";
import {
  Input,
  Button,
  Select, MenuItem } from "@mui/joy";
import './App.css'

const  App = () => {
  return (
    <>
    <header>
      <h1>サイトタイトル</h1>
    </header>
    <main className='main-content'>
      <section className='description'>            {/* サイトについて簡易的な説明 */}
        <p>
          ブラック企業かどうかを判定します。
        </p>
      </section>
      <section className='search'>
        <div className="search-word">
          <h2>検索</h2>
          <Input
            placeholder="キーワードを入力"
            variant="soft"
          />
        </div>
        <div className="search-options">
          <div className="search-region">
            <h2>エリアからさがす</h2>
            <Select
              placeholder="エリアを選択"
              sx={{width: 200}}>
              <MenuItem value="北海道" data-pref-id="01">北海道</MenuItem>
              <MenuItem value="青森県" data-pref-id="02">青森県</MenuItem>
              <MenuItem value="岩手県" data-pref-id="03">岩手県</MenuItem>
              <MenuItem value="宮城県" data-pref-id="04">宮城県</MenuItem>
              <MenuItem value="秋田県" data-pref-id="05">秋田県</MenuItem>
              <MenuItem value="山形県" data-pref-id="06">山形県</MenuItem>
              <MenuItem value="福島県" data-pref-id="07">福島県</MenuItem>
              <MenuItem value="茨城県" data-pref-id="08">茨城県</MenuItem>
              <MenuItem value="栃木県" data-pref-id="09">栃木県</MenuItem>
              <MenuItem value="群馬県" data-pref-id="10">群馬県</MenuItem>
              <MenuItem value="埼玉県" data-pref-id="11">埼玉県</MenuItem>
              <MenuItem value="千葉県" data-pref-id="12">千葉県</MenuItem>
              <MenuItem value="東京都" data-pref-id="13">東京都</MenuItem>
              <MenuItem value="神奈川県" data-pref-id="14">神奈川県</MenuItem>
              <MenuItem value="新潟県" data-pref-id="15">新潟県</MenuItem>
              <MenuItem value="富山県" data-pref-id="16">富山県</MenuItem>
              <MenuItem value="石川県" data-pref-id="17">石川県</MenuItem>
              <MenuItem value="福井県" data-pref-id="18">福井県</MenuItem>
              <MenuItem value="山梨県" data-pref-id="19">山梨県</MenuItem>
              <MenuItem value="長野県" data-pref-id="20">長野県</MenuItem>
              <MenuItem value="岐阜県" data-pref-id="21">岐阜県</MenuItem>
              <MenuItem value="静岡県" data-pref-id="22">静岡県</MenuItem>
              <MenuItem value="愛知県" data-pref-id="23">愛知県</MenuItem>
              <MenuItem value="三重県" data-pref-id="24">三重県</MenuItem>
              <MenuItem value="滋賀県" data-pref-id="25">滋賀県</MenuItem>
              <MenuItem value="京都府" data-pref-id="26">京都府</MenuItem>
              <MenuItem value="大阪府" data-pref-id="27">大阪府</MenuItem>
              <MenuItem value="兵庫県" data-pref-id="28">兵庫県</MenuItem>
              <MenuItem value="奈良県" data-pref-id="29">奈良県</MenuItem>
              <MenuItem value="和歌山県" data-pref-id="30">和歌山県</MenuItem>
              <MenuItem value="鳥取県" data-pref-id="31">鳥取県</MenuItem>
              <MenuItem value="島根県" data-pref-id="32">島根県</MenuItem>
              <MenuItem value="岡山県" data-pref-id="33">岡山県</MenuItem>
              <MenuItem value="広島県" data-pref-id="34">広島県</MenuItem>
              <MenuItem value="山口県" data-pref-id="35">山口県</MenuItem>
              <MenuItem value="徳島県" data-pref-id="36">徳島県</MenuItem>
              <MenuItem value="香川県" data-pref-id="37">香川県</MenuItem>
              <MenuItem value="愛媛県" data-pref-id="38">愛媛県</MenuItem>
              <MenuItem value="高知県" data-pref-id="39">高知県</MenuItem>
              <MenuItem value="福岡県" data-pref-id="40">福岡県</MenuItem>
              <MenuItem value="佐賀県" data-pref-id="41">佐賀県</MenuItem>
              <MenuItem value="長崎県" data-pref-id="42">長崎県</MenuItem>
              <MenuItem value="熊本県" data-pref-id="43">熊本県</MenuItem>
              <MenuItem value="大分県" data-pref-id="44">大分県</MenuItem>
              <MenuItem value="宮崎県" data-pref-id="45">宮崎県</MenuItem>
              <MenuItem value="鹿児島県" data-pref-id="46">鹿児島県</MenuItem>
              <MenuItem value="沖縄県" data-pref-id="47">沖縄県</MenuItem>
            </Select>
          </div>
          <div className="search-industry">
            <h2>業種からさがす</h2>
            <Select
              placeholder="業種を選択"
              sx={{width: 200}}>
              <MenuItem value="製造業">製造業</MenuItem>
              <MenuItem value="建築業">建築業</MenuItem>
              <MenuItem value="設備業">設備業</MenuItem>
              <MenuItem value="運輸業">運輸業</MenuItem>
              <MenuItem value="流通業">流通業</MenuItem>
              <MenuItem value="農林水産業">農林水産業</MenuItem>
              <MenuItem value="印刷・出版業">印刷・出版業</MenuItem>
              <MenuItem value="金融業・保険業">金融業・保険業</MenuItem>
              <MenuItem value="不動産業">不動産業</MenuItem>
              <MenuItem value="IT・情報通信業">IT・情報通信業</MenuItem>
              <MenuItem value="サービス業">サービス業</MenuItem>
              <MenuItem value="教育・研究機関">教育・研究機関</MenuItem>
              <MenuItem value="病院・医療機関">病院・医療機関</MenuItem>
              <MenuItem value="官公庁・自治体">官公庁・自治体</MenuItem>
              <MenuItem value="法人団体">法人団体</MenuItem>
              <MenuItem value="その他の業種">その他の業種</MenuItem>
            </Select>
          </div>
        </div>
        <Button className="search-button" sx={{width: 100}}>検索</Button>
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
  );
};

export default App;