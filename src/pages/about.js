import Container from "react-bootstrap/Container";
import TextShow from "../components/TextShow/TextShow";

const About = () => {
  return (
    <Container fluid>
      <h1>關於一位全端工程師在此網站的心路歷程</h1>
      <h3>20220826想法</h3>
      <TextShow
        text={`1. 建好node.js + exprss + sqlite3 20220827 done
        2. React function 組件切好基本版型
        3. hook 串接 api型
        4. 再調整版型銜接正式資料 20220902 done`}
      />
      <h3 className="mt-3">20220902想法</h3>
      <TextShow
        text={`初版完成，接下來是畫面的一些排版微調，然後實作留言板?
        或是內容的畫面編輯，成功的話以後就可以在畫面上編輯了`}
      />
      <h3 className="mt-3">20220905想法</h3>
      <TextShow
        text={`周末嘗試用ipad使用但效果不彰，所以休息兩天後 今天開始實裝Loading
        Placeholder`}
      />
      <h3 className="mt-3">20220912想法</h3>
      <TextShow
        text={`20220912 中秋節結束後，已經開始嘗試製作留言板了 server
        已經準備好初版的兩隻 api 但是前端的部分有點超出預期。
        目前將發送留言的區塊獨立成一個 PostBoard 的 Component
        然後顯示在中間的大區塊下 fixed 住`}
      />

      <h3 className="mt-3">20220921想法</h3>
      <TextShow
        text={`20220921 初次在學習 React Hooks 上被絆腳，但總之是成功使用 useState,
        useEffect, useContext, useReducer 等幾個基本 Hooks。
        完成了留言板操作，此留言板可以做雙層的回覆
        比想像中的容易操作，算是第一次寫出留言板`}
      />

      <h3 className="mt-3">20220922想法</h3>
      <TextShow
        text={`手機板顯示留言板時發現整體畫面體驗不佳，
        預計採用 Toast 元件當基底作成浮動留言板來使用
        
        調整完留言區塊後預計開始學習寫測試，寫測試的經驗實在是很少`}
      />

      <h3 className="mt-3">20220923想法</h3>
      <TextShow
        text={`今天開始嘗試學習寫測試，爬文後預計選用
      jest + React Testing Library 組合
      也就是大眾都在使用的+官方推薦的輕量化測試工具
      但算是第一次寫前端測試，所以大概會寫得很醜`}
      />
      <h3 className="mt-3">20220926想法</h3>
      <TextShow
        text={`這幾天陸陸續續地在寫測試
        因為還不太熟悉各種方法故進度有些緩慢
        等熟悉了一歇後
        預計就會開始導入使用者登入 & 線上修改我的履歷內容了`}
      />
      <h3 className="mt-3">20220928想法</h3>
      <TextShow
        text={`開始實作使用者登入的 API 在加密部分熟悉 Crypto 花了點時間
        預計最後要產出登入、token檢查的 API兩隻`}
      />
      <h3 className="mt-3">20220929想法</h3>
      <TextShow
        text={`看完 React Router V6 的基本入門後，
        實作出動態路由的基底以及登入路由判斷，接下來將登入接上api`}
      />
      <h3 className="mt-3">20220930想法</h3>
      <TextShow
        text={`終於將基本的登入介面、登入前後路由轉換完成
        在菜單選項中選擇履歷維護則會導入登入頁面，登入後會重新導回履歷維護頁
        同時登入成功後，菜單會出現登出選項
        暫時還不考慮持續登入，等維護功能完成後再優化
        接下來就是實作出履歷維護的介面，理想中完成的話就不需要一直維護資料庫
        直接透過畫面維護基本資料了(但 Skill 的 icon 還是得開專案、工作經歷的公司LOGO...)`}
      />
      <h3 className="mt-3">20221003想法</h3>
      <TextShow
        text={`履歷編輯的 Editor 分成 基本資料、工作經歷、技能 三個區塊
        基本資料: 
          - 可以更新上傳大頭照
          - 主標題、副標題、簡介、聯絡資料(是否顯示內容的checkbox) 的 textarea
        工作經歷:
          - 可以更新公司LOGO
          - 部門、職稱、時間雙欄位、是否在職、工作內容簡介 用 textarea，專案內容則可能用 table
        技能:
          - 因為技能的 icon 是抓對應的 icon component 所以畫面操作可能要有預設的icon
          之後再透過專案內修改去找出對應的 icon component`}
      />
      <h3 className="mt-3">20221006想法</h3>
      <TextShow
        text={`剛好這幾天工作比較多，沒時間投注在這
        加上正好有職缺機會，就先更新了資料庫裡現職的資料了，可惜突然的機會
        還未把履歷編輯頁給寫完`}
      />
    </Container>
  );
};

export default About;
