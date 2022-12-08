import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.footer}>

      <div className="mb-5">

        <div className={styles.container}>

          <div className="mt-3 mb-5">

              <div className="float-end">

                  <span data-bs-toggle="modal" data-bs-target="#TermsandConditions">
                    <span className={styles.footerText}>이용약관</span>
                  </span>
                  
                  <span> | </span>
                  
                  <span data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <span className={styles.footerText}>개인정보 처리방침</span>
                  </span>

              </div>

              <img width={80} height={15} src={`/img/logo_gray.png`} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"/>

              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>

              <div>
                  <span className={styles.footerText}>Copyright ⓒ 2015 MODUBIZ. All rights reserved.</span>
              </div>

          </div>

        </div>

      </div>

      <div className="modal fade" id="TermsandConditions" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            
            <div className="modal-header">

              <h1 className="modal-title fs-5 fw-bold" id="staticBackdropLabel">
                서비스 이용약관
              </h1>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>

            <div className="modal-body text-reset">
            
              <p>제1장 총 칙</p><br></br>

              <p>제 1 조 (목적)</p><br></br>
              <p>이 약관은 회원이 (주)모두, MODU(이하 “회사”)가 제공하는 모두의 비상금 웹(web) 또는 앱(App)을 이용함에 있어 회원 가입 및 유료 결제에 관한 기본적인 사항을 정함으로써 서비스의 안정성과 신뢰성 확보, 회사와 회원의 권리, 의무 및 책임사항을 규정함에 그 목적이 있습니다.</p><br></br>

              <p>제 2 조 (용어의 정의)</p><br></br>
              <p>본 약관에서 정하는 용어의 정의는 다음과 같습니다.</p><br></br>
              <p>1. '휴대폰소액결제 및 포인트/상품권 전환'(이하 “서비스”)이라 함은 “회원”이 서비스 이용을 위하여 “회사”에 이용자의 고유정보를 제공한 후 그 고유정보를 근거로 “회사” 및 “회원”이 가입한 이동통신사 및 PG사, 금융기관의 인증을 받은 후 서비스 이용하는 것을 말합니다.</p><br></br>
              <p>2. ‘회원’이라 함은 이 약관에 동의하고 회원가입 후 “회사”가 제공하는 서비스를 이용하는 자를 말합니다.</p><br></br>
              <p>3. '접근매체'라 함은 서비스에 있어서 거래지시를 하거나 “회원” 및 거래내용의 진실성과 정확성을 확보하기 위하여 사용되는 수단 또는 정보로서 무선 전화 및 통신사에 등록된 “회원”의 무선 전화 번호, “회원”의 생체정보, 금융계좌 정보, 이상의 수단이나 정보를 사용하는데 필요한 아이디/이메일/비밀번호 등을 말합니다.</p><br></br>
              <p>4. '거래지시'라 함은 “회원”이 “회사”에게 ”서비스”의 처리를 지시하는 것을 말합니다.</p><br></br>
              <p>5. ‘MODU PLUS(이하 ‘MP’)라 함은 “회사”에서 지정한 사이버머니를 말합니다.</p><br></br>
              <p>6. ’카드’라 함은 “회원”이 서비스 이용을 위해 발급 받은 선불카드를 말합니다.</p><br></br>
              <p>7. ‘충전’이라 함은 이용자가 서비스 이용 후 등록 된 카드의 가상계좌에 충전/이체하는 것을 말합니다.</p><br></br>
              <p>8. 본 약관에 사용되는 용어 중 본 조에서 정하지 않은 부분은 관계법령 및 일반관례에 따릅니다.</p><br></br>

              <p>제 3 조 (약관의 명시, 효력 및 개정)</p><br></br>
              <p>1. “회사”는 이 약관의 내용을 “회원”이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.</p><br></br>
              <p>2. “회사”는 전자금융거래법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 소비자기본법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p><br></br>
              <p>3. “회사”가 약관을 변경하는 때에는 그 시행일 1개월 전에 변경되는 약관을 지급결제정보 입력화면 및 “회사”의 홈페이지에 게시함으로써 “회원”에게 공지합니다.</p><br></br>
              <p>4. “회사”가 “회원”에게 공지 또는 고지한 후 그 시행일 이전까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 불구하고 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 간주합니다. “회원”이 개정약관에 동의하지 않을 경우 “회원”은 18조에 따라 이용계약을 해지할 수 있습니다.</p><br></br>

              <p>제2장 “회원”의 가입 및 관리</p><br></br>

              <p>제 4 조 (회원가입 및 이용계약 체결)</p><br></br>
              <p>1. "서비스" “회원” 가입 신청 시 본 약관을 읽고 이용약관 동의란에 체크하면 본 약관에 동의하는 것으로 간주됩니다. 단 미성년자, 외국인의 경우 본 "서비스"의 이용을 금합니다.</p><br></br>
              <p>2. 이용 계약은 서비스 이용 희망자의 이용약관 동의 후 이용 신청에 대해서 “회사”가 승낙함으로써 성립합니다.</p><br></br>
              <p>3. 이용 신청은 “회사”가 요청하는 소정의 “회원”가입 양식에서 요구하는 아래와 같은 사항을 기록하여 신청합니다.</p><br></br>
              <p>- 신청인: 이름, 이메일, 비밀번호, 생년월일, 휴대전화번호, 우편 주소지</p><br></br>
              <p>4. “회원”가입 양식에 기재하는 모든 “회원” 정보는 실제 정보인 것으로 간주합니다. 실명이나 실제 정보를 입력하지 않은 사용자는 법적인 보호를 받을 수 없으며, 서비스 사용에 제한을 받을 수 있습니다.</p><br></br>

              <p>제 5 조 (회원 등록의 성립과 유보 및 거절)</p><br></br>
              <p>1. “회사”는 “회원”이 제4조에서 정한 모든 사항을 정확히 기재하여 이용신청을 하였을 때 아래의 각 항의 경우를 예외로 하여 승낙할 수 있습니다.</p><br></br>
              <p>2. “회사”는 다음 각 호에 해당하는 이용신청에 대하여는 승낙을 유보할 수 있습니다.</p><br></br>
              <p>- 설비에 여유가 없는 경우</p><br></br>
              <p>- 기타 “회사”의 귀책사유로 이용승낙이 곤란한 경우</p><br></br>
              <p>3. “회사”는 다음 각 호에 해당하는 이용신청에 대하여는 이를 승낙하지 않을 수 있습니다.</p><br></br>
              <p>- 이름이 실명이 아닌 경우</p><br></br>
              <p>- 이용신청 시 필요 내용을 허위로 기재하여 신청한 경우</p><br></br>
              <p>- 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우</p><br></br>
              <p>- 기타 “회사”가 정한 이용신청 요건이 미비할 경우</p><br></br>

              <p>제 6 조 (회원 ID 등의 관리책임)</p><br></br>
              <p>1. “회원”은 서비스 이용을 위한 “회원” ID, 비밀번호의 관리에 대한 책임, 본인 ID의 제3자에 의한 부정사용 등 “회원”의 고의과실로 인해 발생하는 모든 불이익에 대한 책임을 부담합니다. 단, 이것이 “회사”의 고의과실로 인하여 야기된 경우는 “회사”가 책임을 부담합니다.</p><br></br>
              <p>2. “회원”은 회원 ID, 비밀번호 및 추가정보 등을 도난 당하거나 제3자가 사용하고 있음을 인지한 경우에는 즉시 본인의 비밀번호를 수정하는 등의 조치를 취하여야 하며 즉시 이를 “회사”에 통보하여 “회사”의 안내를 따라야 합니다.</p><br></br>

              <p>제 7 조 (회원 정보의 변경)</p><br></br>
              <p>“회원”은 이용신청 시 기재한 사항이 변경되었을 경우에는 온라인 또는 휴대전화기를 통해 수정을 해야 하며 “회원”정보의 미 변경으로 인해 발생되는 문제의 책임은 “회원”에게 있습니다.</p><br></br>

              <p>제3장 서비스의 이용</p><br></br>

              <p>제 8 조 (서비스 이용 한도 및 서비스 이용료)</p><br></br>
              <p>1. “회원”이 서비스를 이용하여 상품 및 서비스를 구매할 수 있는 최대 이용한도 (1회, 1일, 월 한도 등)는 관련 법규 및 “회사”가 정한 범위 내에서 이용하실 수 있습니다.</p><br></br>
              <p>2. “회원”이 서비스를 이용하여 충전을 할 때 “회사”에서 지정한 서비스 이용료가 부과됩니다.</p><br></br>
              <p>3. “회원”이 서비스를 이용하여 카드에 충전된 구매수단은 취소되지 않습니다.</p><br></br>
              <p>4. “회원”이 서비스를 이용하여 충전을 한 금액은 현금인출이 불가능 합니다.</p><br></br>

              <p>제 9 조 (이용 제한)</p><br></br>
              <p>1. “회사”는 만 19세 미성년자 및 외국인은 “회원”가입 및 서비스 이용을 제한하고 있습니다.</p><br></br>
              <p>2. “회사”는 일정기간 또는 일정 횟수 동안 휴대폰 사용료 및 소액결제 대금 체납 “회원”에 대하여 이용에 제한을 둘 수 있습니다.</p><br></br>

              <p>제 10 조 (미성년자 등에 대한 특칙)</p><br></br>
              <p>1. 만 19세 미만의 미성년자는 “회원”가입 및 서비스 이용을 제한하고 있습니다.</p><br></br>

              <p>제 11 조 (권리의 귀속 및 저작물의 이용)</p><br></br>
              <p>1. 게시물이라 함은 “회원”이 서비스를 이용하면서 게시한 글, 사진, 각종 파일과 링크 등을 말합니다.</p><br></br>
              <p>2. “회원”이 서비스에 등록하는 게시물 등으로 인하여 본인 또는 타인에게 손해나 기타 문제가 발행하는 경우 “회원”은 이에 대한 책임을 지게 되며, “회사”는 특별한 사정이 없는 한 이에 대한 책임을 지지 않습니다.</p><br></br>
              <p>3. “회사”는 게시물 등에 대하여 제3자로부터 명예훼손, 지적 재산권 등의 권리 침해를 이유로 게시중단 요청을 받은 경우 이를 임시로 게시중단(전송중단)할 수 있으며, 게시중단 요청자와 게시물 등록자 간에 소송, 합의 기타 이에 준하는 관련 기관의 결정 등이 이루어져 “회사”에 접수된 경우 이에 따릅니다.</p><br></br>
              <p>4. “회사”가 작성한 게시물 또는 저작물에 대한 저작권, 기타 지적재산권은 “회사”에 귀속합니다.</p><br></br>
              <p>5. 이용자는 서비스를 이용함으로써 얻은 정보를 “회사”의 사전승낙 없이 복제, 전송, 출판, 배포, 방송 또는 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</p><br></br>

              <p>제 12 조 (서비스 이용의 제한 및 중지)</p><br></br>
              <p>1. “회사”는 아래 각 호의 1에 해당하는 사유가 발생한 경우에는 “회원”의 서비스 이용을 제한하거나 중지시킬 수 있습니다.</p><br></br>
              <p>- “회원”이 “회사” 서비스의 운영을 고의과실로 방해하는 경우</p><br></br>
              <p>- “회원”이 제15조의 의무를 위반한 경우</p><br></br>
              <p>- 서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우</p><br></br>
              <p>- 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</p><br></br>
              <p>- 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 때</p><br></br>
              <p>- 기타 중대한 사유로 인하여 “회사”가 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우</p><br></br>
              <p>2. “회사”는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및 제한기간등을 “회원”에게 알려야 합니다.</p><br></br>
              <p>3. 제15조 제2항에 의해 “회사”가 “회원”과의 계약을 해지하고 탈퇴시키기로 결정한 경우 “회사”는 “회원”의 탈퇴 처리 전에 이를 통지하고, “회원”은 “회사”의 통지를 받은 날로부터 30일 이내에 이에 대한 항변의 기회를 가집니다.</p><br></br>

              <p>제 13 조 (회사의 의무)</p><br></br>
              <p>1. “회사”는 “회사”의 서비스 제공 및 보안과 관련된 설비를 지속적이고 안정적인 서비스 제공에 적합하도록 유지, 점검 또는 복구 등의 조치를 성실히 이행하여야 합니다.</p><br></br>
              <p>2. “회사”는 “회원”이 수신 동의를 하지 않은 영리 목적의 광고성 전자우편, SMS 문자메시지 등을 발송하지 아니합니다. 단, “회원”의 편의, 서비스 품질 제공 향상 등의 안내문은 동의 없이 발송할 수 있습니다.</p><br></br>
              <p>3. “회사”는 서비스의 제공과 관련하여 알게 된 “회원”의 개인정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않고, 이를 보호하기 위하여 노력합니다. “회원”의 개인정보보호에 관한 기타의 사항은 정보통신망법 및 “회사”가 별도로 정한 “개인정보취급방침”에 따릅니다.</p><br></br>
              <p>4. “회사”가 제3자와의 서비스 제공계약 등을 체결하여 “회원”에게 서비스를 제공하는 경우 “회사”는 각 개별서비스에서 서비스의 제공을 위하여 제3자에게 제공되는 “회원”의 구체적인 “회원”정보를 명시하고 “회원”의 개별적이고 명시적인 동의를 받은 후 동의의 범위 내에서 해당 서비스의 제공 기간 동안에 한하여 “회원”의 개인정보를 제3자와 공유하는 등 관련 법령을 준수합니다.</p><br></br>

              <p>제 14 조 (계좌이체 결제)</p><br></br>
              <p>- “회원”이 가맹점에서 재화 등의 구매 시 계좌이체로 결제할 경우 결제대금을 “회원”의 지정계좌에서 실시간 출금하고 가맹점에 이 내역을 통보합니다.</p><br></br>
              <p>- “회원”의 사정으로 지정계좌를 변경하고자 하는 경우에는 “회사”에서 정한 방법(홈페이지 또는 Application상에서)으로 변경을 하실 수 있습니다.</p><br></br>

              <p>제 15 조 (회원의 의무)</p><br></br>
              <p>1. “회원”은 아래 각 호의 해당하는 행위를 하여서는 아니 됩니다.</p><br></br>
              <p>- “회원”가입신청 또는 변경 시 허위내용을 등록하는 행위</p><br></br>
              <p>- “회사”의 서비스에 게시된 정보를 변경하거나 서비스를 이용하여 얻은 정보를 “회사”의 사전 승낙 없이 영리 또는 비영리의 목적으로 복제, 출판, 방송 등에 사용하거나 제3자에게 제공하는 행위</p><br></br>
              <p>- “회사” 기타 제3자에 대한 허위의 사실을 게재하거나 지적재산권을 침해하는 등 “회사”나 제3자의 권리를 침해하는 행위</p><br></br>
              <p>- 다른 “회원”의 ID 및 비밀번호를 도용하여 부당하게 서비스를 이용하는 행위</p><br></br>
              <p>- 타인의 계좌번호 및 선불카드번호 등 타인의 허락 없이 타인의 결제정보를 이용하여 “회사”의 유료서비스를 이용하는 행위</p><br></br>
              <p>- 정보통신망법 등 관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램 등)를 전송하거나 게시하는 행위</p><br></br>
              <p>- 청소년보호법에서 규정하는 청소년유해매체물을 게시하는 행위</p><br></br>
              <p>- 공공질서 또는 미풍양속에 위배되는 내용의 정보, 문장, 도형, 음성 등을 유포하는 행위</p><br></br>
              <p>- “회사”의 직원이나 서비스의 관리자를 가장하거나 사칭하여 또는 타인의 명의를 도용하여 글을 게시하거나 메일을 발송하는 행위</p><br></br>
              <p>- 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 게시하거나 전자우편으로 발송하는 행위</p><br></br>
              <p>- 스토킹(stalking), 욕설, 채팅글 도배 등 다른 “회원”의 서비스 이용을 방해하는 행위</p><br></br>
              <p>- 다른 “회원”의 개인정보를 그 동의 없이 수집, 저장, 공개하는 행위</p><br></br>
              <p>- 불특정 다수의 “회원”을 대상으로 하여 광고 또는 선전을 게시하거나 스팸메일을 전송할 목적으로 “회사”에서 제공하는 프리미엄 메일 기타 서비스를 이용하여 영리활동을 하는 행위</p><br></br>
              <p>- 현행 법령, “회사”가 제공하는 서비스에 정한 약관 기타 서비스 이용에 관한 규정을 위반하는 행위</p><br></br>
              <p>2. “회사”는 “회원”이 제1항의 행위를 하는 경우 해당 게시물 등을 삭제 또는 임시 삭제할 수 있고 서비스의 이용을 제한하거나 일방적으로 본 계약을 해지할 수 있습니다.</p><br></br>

              <p>제 16 조 (휴대전화 분실 및 도난 신고)</p><br></br>
              <p>1. “회원”은 휴대전화를 분실하거나 도난 당한 경우에는 즉시 “회사”에 유선 또는 홈페이지 상으로 신고하여야 합니다. 이 경우 “회사”는 신고 접수된 경우에 한하여 휴대폰 결제가 발생하지 않도록 조치합니다.</p><br></br>
              <p>2. 제1항의 절차를 이행한 “회원”이 분실 및 도난으로 인한 부정사용 대금에 대하여 보상신청을 하고자 할 때에는 “회사”에 보상신청을 할 수 있으며, 이 경우 분실 및 도난 신고 접수시점 이후에 발생한 제3자의 부정사용금액에 대해 보상 받을 수 있습니다.</p><br></br>
              <p>3. “회원”은 제2항에 불구하고 다음 각 호의 1에 해당할 경우에는 부정사용에 따른 모든 책임을 부담합니다.</p><br></br>
              <p>- “회원”의 고의에 의한 부정사용</p><br></br>
              <p>- 휴대전화의 관리소홀, 대여, 양도, 담보제공, 불법대출, 제3자 보관 등으로 인한 부정 사용</p><br></br>
              <p>- 비밀번호 누설에 의한 부정 사용</p><br></br>
              <p>- “회원”의 가족, 동거인 (사실상의 동거인 포함 )에 의한 부정사용</p><br></br>
              <p>- 부정사용의 피해조사를 위하여 “회사”가 정한 조사에 협조하지 아니한 경우</p><br></br>
              <p>- 분실 및 도난 신고 후 보상 신청의 지연으로 인하여 피해조사 및 부도반환이 불가능하게 된 경우</p><br></br>
              <p>- 휴대전화의 분실 및 도난 사실을 인지하고도 즉시 신고하지 않은 경우</p><br></br>

              <p>제 17 조 (양도금지)</p><br></br>
              <p>“회원”의 서비스 받을 권리는 이를 양도 내지 증여하거나 질권의 목적으로 사용할 수 없습니다.</p><br></br>

              <p>제 18 조 (이용계약의 해지)</p><br></br>
              <p>1. “회원”이 서비스 이용계약을 해지하고자 하는 때에는 언제든지 “회원”정보관리에서 “회사”가 정한 절차에 따라 “회원”의 ID를 삭제하고 탈퇴할 수 있습니다.</p><br></br>
              <p>2. “회원”이 제15조의 규정을 위반한 경우 “회사”는 일방적으로 본 계약을 해지할 수 있고, 이로 인하여 서비스 운영에 손해가 발생한 경우 이에 대한 민, 형사상 책임도 물을 수 있습니다.</p><br></br>
              <p>3. “회원”탈퇴 처리와 동시에 가입 시 입력한 정보, 데이터는 일괄 삭제 됩니다. 단, 관계법령에 의해 보관하는 경우는 예외로 합니다.</p><br></br>
              <p>4. 회원가입 후 1년 이내에 카드등록 되어 있지 않은 경우 서비스 이용 의사가 없음으로 간주하여 회원의 동의 없이 탈퇴 처리 됩니다.</p><br></br>

              <p>제4장 기타</p><br></br>

              <p>제 19 조 (면책)</p><br></br>
              <p>1. “회사”는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여 “회원”에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.</p><br></br>
              <p>- 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우</p><br></br>
              <p>- “회원”의 귀책사유로 서비스 이용에 장애가 있는 경우</p><br></br>
              <p>- 기타 “회사”의 고의 과실이 없는 사유로 인한 경우</p><br></br>
              <p>2. “회사”는 가맹점이 제공하거나 “회원”이 작성하는 등의 방법으로 서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성 등에 대해서는 보증을 하지 않으며 이로 인해 발생한 “회원”의 손해에 대하여는 책임을 부담하지 아니합니다.</p><br></br>

              <p>제 20 조 (분쟁의 해결)</p><br></br>
              <p>본 약관은 대한민국법령에 의하여 규정되고 이행되며, 서비스 이용과 관련하여 “회사”와 “회원”간에 발생한 분쟁에 대해서는 민사소송법상의 주소지를 관할하는 법원을 합의관할로 합니다.</p><br></br>

              <p>제 21 조 (약관 외 준칙)</p><br></br>
              <p>본 약관에서 정하지 않은 사항에 대하여는 다른 약정이 없으면 ‘전자금융거래법’ 등 관계법령 및 전자금융거래 이용약관을 적용합니다.</p><br></br>

              <p>부칙 (시행일)</p><br></br>
              <p>본 약관은 공시한 날부터 시행합니다.</p><br></br>

              <div className="d-grid gap-2">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            
            <div className="modal-header">

              <h1 className="modal-title fs-5 fw-bold" id="staticBackdropLabel">
                개인정보처리방침
              </h1>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>

            <div className="modal-body text-decoration-none">
              
              <div className={styles.blackFont}>
            
              <p>제 1조 총칙</p><br></br>
              <p>컨텐츠 운영사인 "(주)모두", "MODU" (이하 “회사”라 함)는 이용자의 개인정보를 적극적으로 보호하며 정보통신망 이용촉진 및 정보보호 등에 관한 법률 (이하 정통망법) 등 관련 법령에 의거하여 개인정보 처리방침을 제정하고 이를 준수하고 있습니다.</p><br></br>
              <p>본 개인정보 처리방침은 관련 법령, 지침 및 “회사” 내부 운영방침의 수정에 따라 변경될 수 있으며, 변경에 대해서는 관련법령이 정하는 방법에 따라 고지하고 있습니다.</p><br></br>

              <p>제 2조 수집하는 개인정보의 항목 및 수집방법</p><br></br>

              <p>1. 수집하는 개인정보의 항목</p><br></br>
              <p>O 회원가입</p><br></br>
              <p>- 필수항목: 이름, 생년월일, 비밀번호, 휴대전화번호, 이메일, 우편주소지</p><br></br>
              <p>O 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.</p><br></br>
              <p>- IP Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록</p><br></br>
              <p>O 유료 서비스 이용 시</p><br></br>
              <p>- 결제 등을 위해 선불카드 정보, 은행계좌 정보, 상품권 정보, 결제기록 등의 정보가 수집될 수 있습니다.</p><br></br>
              <p>O 본인확인 시</p><br></br>
              <p>- 관계 법령 준수를 위해 본인확인이 필요한 경우 이름, 생년월일, 성별, 내/외국인, 휴대폰 번호, 이동 통신사정보(선택), 또는 아이핀 정보(선택), 본인확인 값 이 수집될 수 있습니다.</p><br></br>
              <p>O 모바일 서비스 이용 시</p><br></br>
              <p>- 디바이스 종류 및 ID, OS종류 및 버전, 폰 번호, 위치정보(현 위치기능 이용 시)등이 수집될 수 있습니다.</p><br></br>

              <p>2.이용자의 기본적 인권 침해 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않습니다.</p><br></br>

              <p>3. “회사”는 개정 정통망법 제23조의 2(주민등록번호의 사용 제한) 에 따라 이용자의 주민번호를 수집하지 않습니다.</p><br></br>

              <p>4. 개인정보 수집방법</p><br></br>
              <p>“회사”는 다음과 같은 방법으로 개인정보를 수집합니다.</p><br></br>
              <p>O 홈페이지 가입(모바일 웹, 앱 포함), 서면양식, 팩스, 전화, 상담게시판, 이메일, 경품행사 응모, 배송요청</p><br></br>
              <p>O 제휴사 및 협력 ”회사”로부터의 제공</p><br></br>
              <p>O 생성정보 수집 툴을 통한 수집</p><br></br>

              <p>제 3조 개인정보의 수집 및 이용목적</p><br></br>

              <p>“회사”는 기본적으로 원활한 서비스 제공과 서비스 혜택 제공을 위해 개인정보를 수집하고 있습니다.</p><br></br>

              <p>1. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른</p><br></br>
              <p>컨텐츠 제공, 특정 맞춤 서비스 제공, 본인인증, 구매 및 요금 결제</p><br></br>

              <p>2. 회원관리</p><br></br>
              <p>컨텐츠 서비스 제공계약의 성립과 유지, 종료를 위한 본인 식별, 본인의사 확인, 회원에 대한 고지, 컨텐츠 서비스 이용에 따른 본인 식별(제휴점에서의 적립을 위한 본인식별(휴대전화번호,이름) 포함), 회원모집/카드발급, 포인트 적립 및 정산, 고객센터 운영, 불량회원 부정이용 방지 및 비인가 사용방지, 분쟁조정을 위한 기록보존</p><br></br>

              <p>3. 신규 서비스 개발 및 마케팅 광고에의 활용</p><br></br>
              <p>신규 서비스 개발을 위한 연구/조사 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악, 회원의 서비스이용에 대한 통계</p><br></br>

              <p>제 4조 개인정보의 보유 및 이용기간</p><br></br>

              <p>1. 이용자의 개인정보는 회원탈퇴를 요청하거나 개인정보의 수집목적 또는 제공받은 목적이 달성되면 해당 개인정보가 열람 또는 이용될 수 없도록 처리합니다.</p><br></br>

              <p>2. 단, “회사”는 고객클레임 대응 및 A/S를 위해 회원탈퇴 후 1년간 회원정보를 보유할 수 있습니다. 또한 상법 및 '전자상거래 등에서의 소비자보호에 관한 법률’등 관련 법령의 규정에 의하여 일정기간 보유해야 할 필요가 있을 경우에는 관련 법령에서 정한 일정한 기간 동안 보유할 수 있습니다.</p><br></br>
              <p>O 계약 또는 청약철회 등에 관한 기록</p><br></br>
              <p>- 보존근거: 전자상거래 등에서의 소비자보호에 관한 법률</p><br></br>
              <p>- 보존기간: 5년</p><br></br>
              <p>O 대금결제 및 재화 등의 공급에 관한 기록</p><br></br>
              <p>- 보존근거: 전자상거래 등에서의 소비자보호에 관한 법률</p><br></br>
              <p>- 보존기간: 5년</p><br></br>
              <p>O 전자금융 거래에 관한 기록</p><br></br>
              <p>- 보존근거 : 전자금융거래법</p><br></br>
              <p>- 보존기간 : 5년</p><br></br>
              <p>O 소비자의 불만 또는 분쟁처리에 관한 기록</p><br></br>
              <p>- 보존근거: 전자상거래 등에서의 소비자보호에 관한 법률</p><br></br>
              <p>- 보존기간: 3년</p><br></br>
              <p>O 기타 회원의 동의를 받은 경우: 동의 받은 기간</p><br></br>

              <p>3. “회사”는 개정 정통망법 신규제도인 개인정보 유효기간제 (개인정보의 파기)를 적용합니다.</p><br></br>
              <p>O 유효기간제란? : 이용자의 개인정보를 저장∙관리하여 이를 이용하거나 제3자 제공 가능한 기간을 제한하는 것을 의미합니다. 지정 기간 만료 후에는, 해당 개인정보는 파기 또는 분리 저장∙관리 되어야 하며, 이용하거나 제3자 제공이 불가합니다.</p><br></br>
              <p>O 유효기간제 목적 : 장기간 서비스를 이용하지 않고 방치되는 개인정보로 인한 이용자의 피해를 방지하고, 사업자의 불필요한 개인정보 보관을 최소화하기 위하여 일정기간 경과 후 장기 미 이용자의 개인정보를 파기합니다.</p><br></br>
              <p>O 유효기간 : 5년 (이용자의 서비스 미 이용 시점으로부터 5년 간 개인정보 보관 후, 파기)</p><br></br>
              <p>※개정 정통망법에 따르면, 3년의 개인정보 유효기간 동안 서비스를 이용하지 않은 이용자의 개인정보에 대해 파기 또는 분리 저장∙관리 조치를 취해야 하며, 다른 법령에서 별도의 기간을 정하고 있는 경우에는 해당 법령에서 정한 기간을 유효기간으로 정할 수 있습니다.(정통망법 시행령 16조 1항)</p><br></br>
              <p>※포인트 제도를 운영하는 사업자는 상법 상 상사채권 소멸시효(5년)에 따라 개인정보 유효기간을 별도 5년 적용합니다.</p><br></br>
              <p>O 서비스 미 이용시점 기준: 포인트 사용/적립 또는 로그인(컨텐츠 아이디 보유 회원에 한함)중에서 최종일시 기준</p><br></br>
              <p>O 유효기간 도래 통지: 유효기간 만료 30일 전까지 전자우편 등으로 개인정보가 파기되는 사실 및 일시, 개인정보 항목을 해당 이용자에게 통지합니다.</p><br></br>
              <p>※ 상기 통지 수단에 대한 정보가 부재, 오류인 경우, 홈페이지 공지사항 게시로 대신합니다.</p><br></br>
              <p>O 유효기간 경과 이후 개인정보 조치방법</p><br></br>
              <p>- 파기: 재생할 수 없는 상태로 삭제 (예컨대 서면은 분쇄/소각, 전자파일은 로우레벨 포맷 등)</p><br></br>
              <p>- 분리 저장∙관리: 파기에 준하는 조치의 일환으로 물리적 분리 (전산장비를 분리하여 정보 저장) 또는 논리적으로 분리하여 장기 미이용자의 개인정보를 일반회원의 개인정보 DB와 분리하여 별도 저장∙관리하고, 일반직원의 접근권한 제한</p><br></br>
              <p>O 유효기간 경과 이후 개인정보 조치주기: 월1회 일괄처리</p><br></br>

              <p>제 5조 개인정보 파기절차 및 방법</p><br></br>

              <p>이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. “회사”의 개인정보 파기절차 및 방법은 다음과 같습니다.</p><br></br>

              <p>1. 파기절차</p><br></br>
              <p>O 이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.</p><br></br>
              <p>O 동 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.</p><br></br>

              <p>2. 파기방법</p><br></br>
              <p>O 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p><br></br>
              <p>O 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p><br></br>

              <p>제 6조 개인정보의 이용 및 제3자 제공</p><br></br>

              <p>“회사”는 회원의 개인정보를 ‘제 3조 개인정보의 수집 및 이용목적’에서 고지한 범위 또는 서비스 이용약관에 명시한 범위 내에 서만 이용하며, 이용자가 사전에 동의한 경우에 한하여 제공합니다.</p><br></br>

              <p>1. 제공받는 자: 서비스 제공을 위해 업무 협의된 협력사</p><br></br>
              <p>2. 이용목적: 본인확인, 카드정보확인</p><br></br>
              <p>3. 제공항목: 이름, 휴대전화번호, 아이디, 이메일, 카드 정보</p><br></br>
              <p>4. 보유 및 이용기간: 회원탈퇴 시까지</p><br></br>

              <p>제 7조 개인정보의 위탁 처리</p><br></br>

              <p>1. “회사”는 위탁업무 계약서 등을 통해서 개인정보보호 관련 법규의 준수, 개인정보에 관한 비밀 유지, 제3자 제공에 대한 금지, 사고시의 책임 부담, 위탁기간, 처리 종류 후의 개인정보의 파기 의무 등을 규정하고, 이를 준수하도록 관리하고 있습니다.</p><br></br>

              <p>제 8조 이용자의 권리와 그 행사방법</p><br></br>

              <p>1. 이용자는 등록된 본인의 개인정보를 조회하거나 수정할 수 있으며, “회사”의 개인정보 처리/취급에 동의하지 않는 경우 동의를 철회하거나 가입해지(회원탈퇴)를 요청할 수 있습니다. 개인정보 조회/수정은 홈페이지 내 “회원정보수정”에서 할 수 있으며, 가입해지 신청은 홈페이지 내 “회원탈퇴”에서 할 수 있습니다. 또한 고객서비스센터를 통해서도 본인확인을 거쳐 신속히 처리할 수 있습니다.</p><br></br>
              <p>2. 이용자가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 당해 개인정보를 이용하거나 또는 제3자에게 제공하지 않습니다. 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정하도록 조치합니다.</p><br></br>
              <p>3. “회사”는 이용자의 명시적인 수신거부의사에 반하여 영리목적의 광고성 정보를 전송하지 않습니다.</p><br></br>
              <p>4. “회사”는 개정 정통망법 신규제도인 개인정보의 누출 통지 및 신고를 적용합니다.</p><br></br>
              <p>O 통지 및 신고 목적: 개인정보의 분실, 도난, 누출 시 명의도용, 스팸, 전화사기 등 개인정보 누출로 인한 2차 피해 확산을 방지하기 위해 이용자에게 해당 사실을 통지하고,주무부처인 방송통신위원회(이하 방통위) 및 행정안전부에 신고합니다.</p><br></br>
              <p>O 통지 및 신고 항목:</p><br></br>
              <p>- 누출 정보 (누출된 개인정보 항목)</p><br></br>
              <p>- 누출 시점</p><br></br>
              <p>- 이용자 조치 방법 (이용자가 취할 수 있는 조치)</p><br></br>
              <p>- “회사” 조치 방법 (사업자의 대응 조치)</p><br></br>
              <p>- 이용자 상담처 (이용자가 상담할 수 있는 부서 및 연락처)</p><br></br>
              <p>O 통지 및 신고 방법</p><br></br>
              <p>- 통지 방법: 전자우편 등</p><br></br>
              <p>(단, 상기 통지 수단에 대한 정보가 부재, 오류인 경우, 홈페이지 공지사항 게시로 대신합니다.)</p><br></br>
              <p>- 신고 방법: 방통위 권장에 따라 신속한 접속 및 처리를 위해 인터넷 웹사이트(kcc.go.kr, i-privacy.kr)에 신고합니다.</p><br></br>
              <p>O 누출된 개인정보 항목과 누출된 시점을 구체적으로 알 수 없을 경우, 당시까지 확인된 사항을 이용자 조치방법, “회사” 조치방법, 이용자 상담처와 함께 통지 및 신고하고, 추가로 확인되는 사항은 확인되는 즉시 추가로 통지 및 신고할 수 있습니다.</p><br></br>

              <p>제 9조 인터넷 접속정보 (쿠키) 운영방법 및 거부방법</p><br></br>

              <p>이용자 개개인에게 개인화되고 맞춤화된 서비스를 제공하기 위해서 “회사”는 이용자의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 소량의 정보이며 이용자 컴퓨터의 하드디스크에 저장됩니다.</p><br></br>

              <p>1. 쿠키 사용 목적: 이용자가 “회사” 홈페이지에 접속하면 접속 빈도나 방문 시간 등을 분석하고 이용자의 자취 추적, 이벤트 참여 정보 및 방문 회수 등을 파악하여 타겟 마케팅이나 개인화 서비스의 제공 등을 위하여 사용합니다.</p><br></br>
              <p>2. 쿠키 설정 거부 방법: 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 이용자 컴퓨터의 웹 브라우저를 조정함으로써 모든 쿠키를 다 받아들이거나, 쿠키가 설치될 때 통지를 보내도록 하거나, 아니면 모든 쿠키를 거부할 수 있습니다.</p><br></br>
              <p>O 설정방법 예: Internet Explorer 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보에서의 쿠키 허용여부 설정 (단, 이용자가 쿠키 설치를 거부하는 경우 로그인이 필요한 일부 서비스 제공에 어려움이 있을 수 있습니다.)</p><br></br>

              <p>제 10조 링크사이트</p><br></br>

              <p>1. “회사”는 홈페이지를 통해 다른 “회사”의 웹사이트 또는 자료에 대한 각종 링크를 제공할 수 있습니다. 이 경우 “회사”는 다른 웹사이트에서 제공하는 서비스나 자료의 유용성에 대해 보증 및 책임질 수 없으며, 이용자와 당해 웹사이트의 거래에 대해 어떠한 책임도 지지 않습니다.</p><br></br>
              <p>2. 링크페이지로 옮겨갈 경우 해당 웹사이트의 개인정보 처리방침은 “회사”와 무관하므로 새로 방문한 웹사이트의 정책을 검토해 보시기를 바랍니다.</p><br></br>

              <p>제 11조 개인정보보호를 위한 기술적 대책</p><br></br>

              <p>“회사”는 이용자의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다. 단, 다음의 기술적 대책에도 불구하고 해커의 침입 및 신종 바이러스 침투와 같은 사고 발생 당시의 기술로 예방, 조치할 수 없는 불가항력 사유로 인하여 발생한 개인정보의 분실, 도난, 누출, 변조 또는 훼손에 대하여는 이용자에게 책임을 지지 않습니다.</p><br></br>

              <p>1. 이용자의 개인정보는 비밀번호에 의해 보호되며, 중요한 데이터는 암호화하는 등 별도의 보안기능을 통해 보호되고 있습니다.</p><br></br>
              <p>2. “회사”는 백신프로그램을 이용하여 컴퓨터 바이러스에 의한 피해를 방지하기 위한 조치를 취하고 있습니다. 백신프로그램은 주기적으로 업데이트되며 갑작스러운 바이러스가 출현할 경우 백신이 나오는 즉시 이를 제공함으로써 개인정보가 침해되는 것을 방지하고 있습니다.</p><br></br>
              <p>3. “회사”는 암호알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL)를 채택하고 있습니다.</p><br></br>
              <p>4. 해킹 등에 의해 이용자의 개인정보가 유출되는 것을 방지하기 위해, 외부로부터의 침입을 차단하는 장치를 이용하고 있으며, 침입탐지시스템을 설치하여 24시간 침입을 감시하고 있습니다.</p><br></br>
              <p>5. “회사”는 개정 정통망법 신규제도인 개인정보처리시스템 망분리를 적용합니다.</p><br></br>
              <p>o개인정보처리시스템 망 분리란?</p><br></br>
              <p>해킹 등으로 인한 개인정보 유출 사고 근절을 위해 개인정보처리시스템을 외부 인터넷망으로부터 분리하는 것을 의미합니다.</p><br></br>
              <p>(개인정보처리시스템: 개인정보를 처리할 수 있도록 체계적으로 구성한 데이터베이스 시스템)</p><br></br>
              <p>※ 건수와 무관하게 개인정보를 수집, 보관, 처리, 이용, 제공, 관리 또는 파기 등의 업무를 하거나,개인정보처리시스템의 접근권한을 설정할 수 있는 개인정보취급자는 망 분리 의무화 대상입니다.</p><br></br>
              <p>※ 단, CS센터, 마케팅부서와 같이 개인정보를 단순 조회하거나 열람하는 권한만을 가진 개인정보취급자는 제외됩니다.</p><br></br>
              <p>O 망 분리 목적: 개인정보처리시스템과 외부 인터넷망을 분리함으로써 보다 근본적으로 개인정보에 대한 불법적인 접근을 차단합니다.</p><br></br>

              <p>제 12조 의견수렴 및 불만처리</p><br></br>

              <p>1. “회사”는 이용자의 의견을 소중하게 생각하며 이용자와의 원활한 의사소통을 위해 고객서비스센터를 운영하고 있습니다.</p><br></br>

              <p>O [고객서비스센터] 전화번호: 1544-9806 (상담 가능한 시간: 오전 10시~오후 6시)</p><br></br>

              <p>2. 기타 개인정보에 관한 상담이 필요한 경우에는 개인정보침해신고센터, 경찰청 사이버테러대응센터 등으로 문의하실 수 있습니다.</p><br></br>
              <p>o	[개인정보침해신고센터] 전화번호: 118, 홈페이지: http://privacy.kisa.or.kr</p><br></br>
              <p>o	[경찰청 사이버테러대응센터] 전화번호: 02-393-9112, 홈페이지: http://www.ctrc.go.kr</p><br></br>

              <p>제 13조 개인정보 보호 책임자</p><br></br>

              <p>회원님의 개인정보를 보호하고 개인정보와 관련된 불만 등을 처리하기 위하여 “회사”는 고객서비스담당 부서 및 개인정보 보호책임자를 두고 있습니다. 회원님의 개인정보와 관련한 문의사항이 있으시면 연락하여 주시기 바랍니다.</p><br></br>
              <p>• 고객서비스담당 부서: CS실</p><br></br>
              <p>O 고객서비스담당 부서: CS실</p><br></br>
              <p>O 이메일: modu@modubiz.co.kr</p><br></br>
              <p>O 연락처: 1544-9806</p><br></br>
              <p>• 개인정보보호책임자 성명: 허명재</p><br></br>
              <p>O 소속/직위: 대표</p><br></br>

              <p>제 14조 고지의 의무</p><br></br>

              <p>1. 본 개인정보 처리방침을 포함한 기타 개인정보 보호에 대한 상세한 내용은 “회사”의 홈페이지 첫 화면에 공개하여 이용자가 언제나 용이하게 보실 수 있도록 조치하고 있습니다.</p><br></br>
              <p>2. 법령 정책 또는 보안기술의 변경에 따라 내용의 추가 삭제 및 수정이 있을 시에는 변경되는 개인정보 처리방침을 시행하기 전에 홈페이지를 통해 변경이유 및 내용 등을 공지하도록 하겠습니다.</p><br></br>
              <p>3. 본 개인정보 처리방침의 내용은 수시로 변경될 수 있으므로 홈페이지를 방문하실 때마다 이를 확인하시기 바랍니다.</p><br></br>

              <p>본 개인정보 처리방침은 공시된 날부터 시행합니다.</p><br></br>

              <div className="d-grid gap-2">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>

              </div>

            </div>

          </div>
        </div>
      </div>


    </div>
    )
}
