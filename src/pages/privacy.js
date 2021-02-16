// src/pages/account.js
import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import MediaQuery from 'react-responsive'
//import { Link } from 'gatsby'
import { default as AntdLayout } from 'antd/lib/layout'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Header from '../components/Header/HeaderDoc'
import Helmet from 'react-helmet'
import Container from '../components/Container/ContainerTailor'
import useTitle from '../components/Title';


const PrivacyPolicy = () => {
    const intl = useIntl();
    const title = useTitle();
  
  return (
    <>
    <MediaQuery maxWidth={1000}>
    {matches => (
      <>
        <Helmet
          title={intl.formatMessage({ id: "title" })}
          meta={[
            { name: 'description for index', content: 'Sample for index' },
            { name: 'keywords for index', content: 'index' },
          ]}
        >
          <html lang={intl.locale} />
        </Helmet>
        <AntdLayout>
          <AntdLayout.Header
            style={{
              position: 'fixed',
              top: 0,
              width: '100%',
              zIndex: 100
            }}
            
          >
            <Row>
              <Col>
                <Header
                  siteTitle={title}
                  sidebarDocked={!matches}
                />
              </Col>
            </Row>
          </AntdLayout.Header>
        <Container>
        <div style={{maxWidth:'860px', margin:'5rem auto'}}>
        <h1>使用條款與隱私政策</h1>
        <p>
        一、隱私權保護政策的適用範圍
        </p>
        <p>隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。</p>
        <p>二、個人資料的蒐集、處理及利用方式</p>
        <ol>
            <li>
            當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
            </li>
            <li>
            本公司與本網站於各項行銷活動之特定目的內蒐集、處理及利用您的個人資料，個人資料類別包含姓名、電話及各活動所須個人資料，該個人資料利用的期間、地區、對象及方式依各活動辦法暨個資法辦理。
            </li>
            <li>本公司與本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。</li>
            <li>於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，不對外公佈。</li>
            <li>本公司客服中心為了能快速且正確的回覆您的問題，須請您留下您的姓名(無需全名，簡稱、暱稱亦可)、E-mail、聯絡電話、事件之時、地及經過陳述。如果您與本公司聯繫時，請您提供正確的電話或電子信箱地址，作為回覆來詢事項之用。</li>
            <li>對於您於本網站所留的個人資料，仍可依個人資料保護法的規定，來信(support@ecnetworker.com)或來電(02-23970257)向本公司行使查詢或閱覽、製給複製本、補充或更正、停止蒐集處理或利用、刪除之權利。</li>
            <li>您可自由選擇提供個人資料的程度，但如果您提供的資料有誤或不足時，本公司可能無法提供您完整的服務。本公司已履行上開告知義務，您同意並瞭解本公司蒐集、處理或利用個人資料之目的及用途。如您已參加本公司之行銷活動或於客服中心留下聯繫方式者，視為同意本蒐集、處理及利用個人資料告知事項。</li>
        </ol>
        <p>三、資料安全防護措施</p>
        <ol>
            <li>本網站主設有各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料。</li>
            <li>如因業務需要有必要委託其他單位提供服務時，本公司與本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。</li>
            <li>本網站盡力使用目前最佳的科技來保障您的個人資料安全。我們以Secure Sockets Layer(SSL)機制進行資料傳輸的加密，並使用防火牆防止不法入侵，避免您的個人資料遭到非法存取。我們並應用加密方式儲存如密碼等重要資訊，我們使用Google reCaptcha技術防止機器人試圖登入(Brute Force)，以確保您的個人資料不會遭到非法竊取。</li>
        </ol>
        <p>四、網站對外的相關連結</p>
        <p>本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</p>
        <p>五、與第三人共用個人資料之政策</p>
        <p>本公司與本網站絕對不會任意出售、交換、出租或以其他變相之方式，將客戶的個人資料揭露與其他團體或個人。惟有下列三種情形，本網站群會與第三人共用客戶的個人資料：</p>
        <ol>
            <li>經過客戶的事前同意或授權允許時。</li>
            <li>司法單位或其他主管機關經合法正式的程序要求時。</li>
            <li>為了提供客戶其他服務或優惠權益，需要與提供該服務或優惠之第三人共用客戶的資料時，本網站會在活動時提供充分說明並告知，客戶可以自由選擇是否接受這項服務或優惠。</li>
            <li>您所留下的各項資料，將僅供本公司、本公司之關係企業或與您詢問事項有關之合作廠商，為解決您的問題而須進行聯繫、回覆等相關事項以及用於問題統計與分析之特定目的，於本公司、本公司之關係企業或合作廠商所在地使用。</li>
        </ol>
        <p>六、Cookie之使用</p>
        <ol>
            <li>為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行 。</li>
            <li>使用者可以在瀏覽器設定中選擇修改使用者瀏覽器對 Cookies 的接受程度，包括接受所有Cookies、設定Cookies時得到通知、拒絕所有Cookies等三種。如果使用者選擇拒絕所有的Cookies，使用者就可能無法使用部分個人化服務，或是參與部分的活動。</li>
            <li>本網站會透過第三方Google Analytics (分析)工具使用Cookie，來瞭解您與本網站的互動方式(包括顧客的造訪次數、時間、地理位置等)，我們將透過數據呈現了解內容或活動執行方向。因此，當您瀏覽本網站時，只會搜集您的瀏覽次數記錄及網路位址(IP address)。瀏覽次數記錄的蒐集，是為了解本網站的每日瀏覽人次及流量分析，相關資料僅作為統計網站使用率與網站經營之用。相關Google Analytics(分析)隱私權政策與如何拒絕向Google Analytics(分析)透露資訊，您可直接前往Google Analytics(分析)資料隱私權與安全性(https://support.google.com/analytics/answer/6004245?hl=zh-Hant)網頁瀏覽進行瞭解。若您不願意向Google Analytics(分析)透露資訊，您可以下載Google Analytics (分析) 不透露資訊瀏覽器外掛程式(https://tools.google.com/dlpage/gaoptout?hl=zh-TW)</li>
        </ol>
        <p>七、本公司與本網站傳送商業資訊或電子郵件之政策</p>
        <p>本公司與本網站會以電子郵件形式通知您交易及帳務相關訊息。另外在事前或經由註冊登錄方式取得您的同意後，亦可能透過本網站傳送商業性資料或電子郵件至您留存於本公司或本網站之電子郵件信箱。</p>
        <p>八、其他有關個人資料與隱私權之聲明</p>
        <p>本網站如有利用第三方服務，包括但不限於第三方網站服務、CDN服務、第三方金流服務與API串接等，將另行告知。使用者須參閱第三方服務之個人資料與隱私權之聲明，若您不同意其聲明或政策，請拒絕使用。本公司及本網站不為第三方服務做保證與負責。</p>
        <p>九、隱私權保護政策之修正</p>
        <p>本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於本網站上。</p>
        </div>
      </Container>

      </AntdLayout>
          </>
        )}
      </MediaQuery>
    </>
  )
}

export default PrivacyPolicy