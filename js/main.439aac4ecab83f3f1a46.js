(()=>{"use strict";var e,t,s,r={11:(e,t,s)=>{var r,n=s(893),a=s(745),o=s(655),i=s(294),l=s(335);!function(e){e.StartPage="/",e.MainPage="/game",e.TopRating="/top",e.ErrorPage="/error-page",e.NotFound="/*"}(r||(r={}));var c=s(967),d=s.n(c),u=s(83);const m="GameHelpers-module__layout--SzaBg",g="GameHelpers-module__helper--Ea4s2",h="GameHelpers-module__helper-1--g1sco",x="GameHelpers-module__helper-2--azUhm",p="GameHelpers-module__closeIcon--WSOZ0";var _=s(949),j=s(296);const f=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null},v=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},b="results",y=[3,6],N=[{num:9,count:45},{num:8,count:40},{num:7,count:35},{num:6,count:30},{num:5,count:25},{num:4,count:20},{num:3,count:15},{num:2,count:10},{num:1,count:5}],w=[{num:9,count:0},{num:8,count:0},{num:7,count:0},{num:6,count:0},{num:5,count:0},{num:4,count:0},{num:3,count:0},{num:2,count:0},{num:1,count:0}],S={9:100,8:100,7:100,6:80,5:80,4:80,3:60,2:60,1:60},C=N.map(((e,t)=>({...e,color:y.includes(e.num)||0===t?"orange":void 0,stickers:w.find((t=>t.num===e.num))?.count??0}))),P=[{value:"java",label:"Java"},{value:"python",label:"Python"},{value:"javascript",label:"Javascript"},{value:"scala",label:"Scala"},{value:"sql",label:"SQL"},{value:"nosql",label:"NoSQL"}],T={size:220,strokeWidth:10},k=(window.location.href.includes("localhost:3000"),e=>{const t=e%60,s=t.toString().length<2?`0${t}`:t,r=Math.floor(e/60);return 0===t?`${r}:00`:`${r}:${s}`}),I={1:[{id:1,questionId:"mock1.txt",question:"Что из перечисленного входит в зоны ответственности тимлида?",answers:[{id:1,text:"Найм, онбординг, обучение",correct:!1},{id:2,text:"Постановка и контроль выполнения задач",correct:!1},{id:3,text:"Планирование, решение конфликтных ситуаций",correct:!1},{id:4,text:"Всё перечисленное",correct:!0}]},{id:2,questionId:"mock2.txt",question:"Стиль управления людьми на основе уровня развития сотрудников и отношения к задаче называется:",answers:[{id:1,text:"Разделяй и властвуй",correct:!1},{id:2,text:"Неформальное лидерство",correct:!1},{id:3,text:"Ситуационное лидерство",correct:!0},{id:4,text:"Холакратия",correct:!1}]}],2:[{id:3,questionId:"mock3.txt",question:"Инцидент в продакшене, задача менеджера организовать:",answers:[{id:1,text:"Исправление проблемы",correct:!1},{id:2,text:"Поиск и устранение причины",correct:!1},{id:3,text:"Подстраховаться от повторения в будущем",correct:!1},{id:4,text:"Всё вышеперечисленное",correct:!0}]},{id:4,questionId:"mock4.txt",question:"Инцидент в продакшене, задача менеджера организовать:",answers:[{id:1,text:"Поиск и наказание виновных",correct:!1},{id:2,text:"Исправление проблемы, поиск и устранение причины, страховку от повторения в будущем",correct:!0},{id:3,text:"Отправку всем участникам команды сообщения об инциденте",correct:!1},{id:4,text:"Панику и суету",correct:!1}]}],3:[{id:5,questionId:"mock5.txt",question:"Вы - руководитель сотрудника, у которого есть запрос на развитие, что предложите ему?",answers:[{id:1,text:"Пусть сам разберется",correct:!1},{id:2,text:"Составим ИПР",correct:!0},{id:3,text:"Отправлю к HR BP",correct:!1},{id:4,text:"Скину ссылку на статьи на Хабре",correct:!1}]},{id:6,questionId:"mock6.txt",question:"Составить наиболее полную картину по компетенциям своей команды ее руководителю может помочь:",answers:[{id:1,text:"Матрица компетенций",correct:!0},{id:2,text:"Резюме участников команды",correct:!1},{id:3,text:"Профиль на ХабрКарьере",correct:!1},{id:4,text:"Слухи из курилки",correct:!1}]}],4:[{id:7,questionId:"mock7.txt",question:"Уровень мотивации сотрудника в «зоне комфорта» похож на:",answers:[{id:1,text:"Стресс",correct:!1},{id:2,text:"Демотивация",correct:!1},{id:3,text:"Зона отчуждения",correct:!0},{id:4,text:"Ни на что не похож",correct:!1}]},{id:8,questionId:"mock8.txt",question:"Нанимающий менеджер на собеседовании должен рассказать кандидату о:",answers:[{id:1,text:"Компании и его бизнесе, ценностях и процессах",correct:!1},{id:2,text:"Зоне ответственности и задачах роли",correct:!1},{id:3,text:"Ожидания от кандидата",correct:!1},{id:4,text:"Всё вышеперечисленное",correct:!0}]}],5:[{id:9,questionId:"mock9.txt",question:"В ситуационном лидерстве руководитель при работе с сотрудником обращает внимание на его:",answers:[{id:1,text:"Уровень мотивации",correct:!1},{id:2,text:"Уровень компетенций",correct:!1},{id:3,text:"Уровень мотивации и компетенций",correct:!0},{id:4,text:"Ни на что, он руководит, а не внимание обращает",correct:!1}]},{id:10,questionId:"mock10.txt",question:"Подход к постановке целей, который помогает выбрать формулировку желаемого результата называется:",answers:[{id:1,text:"Bottleneck",correct:!1},{id:2,text:"SMART",correct:!0},{id:3,text:"T-Shape",correct:!1},{id:4,text:"JIRA",correct:!1}]}],6:[{id:11,questionId:"mock11.txt",question:"Авторы ситуационного лидерства?",answers:[{id:1,text:"Пол Херси и Кен Бланшар",correct:!0},{id:2,text:"Адам Смит и Сакити Тоёда",correct:!1},{id:3,text:"Карл Маркс и Фридрих Энгельс",correct:!1},{id:4,text:"Рудольф и Адольф Дасслер",correct:!1}]},{id:12,questionId:"mock12.txt",question:"Процесс передачи части функций руководителя другим управляющим или сотрудникам для достижения конкретных целей организации или предприятия – это:",answers:[{id:1,text:"Целеполагание",correct:!1},{id:2,text:"Делегирование",correct:!0},{id:3,text:"Ретроспектива",correct:!1},{id:4,text:"Онбординг",correct:!1}]}],7:[{id:13,questionId:"mock13.txt",question:"Постановка задачи по алгоритму и частый контроль выполнения задачи характерен для управленческого стиля:",answers:[{id:1,text:"Делегирующий",correct:!1},{id:2,text:"Поддерживающий",correct:!1},{id:3,text:"Инструктирующий",correct:!0},{id:4,text:"Направляющий",correct:!1}]},{id:14,questionId:"mock14.txt",question:"Получение обратной связи по работе сотрудника – это зона ответственности:",answers:[{id:1,text:"Самого сотрудника",correct:!0},{id:2,text:"Его руководителя",correct:!1},{id:3,text:"Руководителя его руководителя",correct:!1},{id:4,text:"HR BP",correct:!1}]}],8:[{id:15,questionId:"mock15.txt",question:"Опытного программиста в соответствии с его желаниями назначили тимлидом, в управленческих вопросах с ним следует использовать:",answers:[{id:1,text:"Инструктирующий стиль",correct:!1},{id:2,text:"Направляющий стиль",correct:!0},{id:3,text:"Поддерживающий стиль",correct:!1},{id:4,text:"Делегирующий стиль",correct:!1}]},{id:16,questionId:"mock16.txt",question:"Онбординг должен производиться:",answers:[{id:1,text:"Поэтапно",correct:!1},{id:2,text:"При поддержке наставника",correct:!1},{id:3,text:"С выдачей/получением обратной связи",correct:!1},{id:4,text:"Всё вышеперечисленное верно",correct:!0}]}],9:[{id:17,questionId:"mock17.txt",question:"Помогают объективно оценить результаты изменений в процессе работы:",answers:[{id:1,text:"Метрики",correct:!0},{id:2,text:"Ретроспективы",correct:!1},{id:3,text:"Тимбилдинги",correct:!1},{id:4,text:"Встречи 1:1",correct:!1}]},{id:18,questionId:"mock18.txt",question:"Величина количества людей, внезапная потеря которых может привести к срыву проекта называется:",answers:[{id:1,text:"Омега",correct:!1},{id:2,text:"Фактор 2",correct:!1},{id:3,text:"Bus-фактор",correct:!0},{id:4,text:"Альфа",correct:!1}]}]},q=()=>{const e=[];return Object.values(I).forEach((t=>{const s=t[((e=0,t=1)=>{const s=e+Math.random()*(t+1-e);return Math.floor(s)})()];e.push(s)})),e};const F=new class{questions=q();questionsFetchingStatus={status:"idle",errorMessage:""};currentQuestionNum=1;userAnswer=null;startTimeCurrentQuestion=Date.now();timerIsPlaying=!0;timerIsOver=!1;timerKey=1;safeAmount=0;gameResult="none";gameHelpers={half:0,audience:0};showFinalScreen=!1;resultSendingStatus={status:"idle",errorMessage:""};timeSpentQuestions={};questionsCountUserAnswered=0;ratingData=[];ratingFetchingStatus={status:"idle",errorMessage:""};constructor(){(0,_.ky)(this,{},{autoBind:!0}),(0,_.z)((()=>{this.getRating()}))}setQuestions(e){this.questions=e}setCurrentQuestionNum(e){this.currentQuestionNum=e}nextQuestion(){this.currentQuestionNum+=1,this.startTimeCurrentQuestion=Date.now()}setUserAnswer(e){this.userAnswer=e}setTimerIsPlaying(e){this.timerIsPlaying=e}setTimerIsOver(e){this.timerIsOver=e}setTimerKey(e){this.timerKey=e}incTimerKey(){this.timerKey+=1}onPauseTimer(){this.timerIsPlaying=!1}onPlayTimer(){this.timerIsPlaying=!0}onToggleTimer(){this.timerIsPlaying=!this.timerIsPlaying}setSafeAmount(e){this.safeAmount=e}setGameResult(e){this.gameResult=e}setGameHelpers(e){this.gameHelpers=e}setShowFinalScreen(e){this.showFinalScreen=e}onShowFinalScreen(){this.showFinalScreen=!0}onHideFinalScreen(){this.showFinalScreen=!1}setTimeSpentQuestions(e){this.timeSpentQuestions=e}onChangeTimeSpentQuestions(e){this.timeSpentQuestions[this.currentQuestionNum]=e}setQuestionsCountUserAnswered(e){this.questionsCountUserAnswered=e}incQuestionsCountUserAnswered(){this.questionsCountUserAnswered+=1}onReset(e){this.questions=q(),this.currentQuestionNum=1,this.timerIsPlaying=!0,this.safeAmount=0,this.gameResult="none",this.userAnswer=null,this.timerIsOver=!1,this.gameHelpers={half:0,audience:0},this.resultSendingStatus={status:"idle",errorMessage:""},this.questionsCountUserAnswered=0,this.timeSpentQuestions={},this.startTimeCurrentQuestion=Date.now(),e()}setRatingData(e){this.ratingData=e}resetRatingFetchingStatus(){this.ratingFetchingStatus={status:"idle",errorMessage:""}}get uiRatingData(){return 0===this.ratingData?.length?[]:[...this.ratingData].sort(((e,t)=>e.score===t.score?e.time-t.time:t.score-e.score)).map(((e,t)=>({...e,time:k(e.time),orderBy:t+1})))}get userResultScore(){return this.safeAmount||this.questionsCountUserAnswered}getQuestions(){return this.questions}sendResult(e){const t=Object.values(this.timeSpentQuestions).reduce(((e,t)=>t+e),0),s=N.find((({num:e})=>e===this.userResultScore))?.count;if(!s)return void console.log("в progressData нет таких данных ");const r={id:(0,j.x0)(),name:e,score:s,time:t},n=f(b),a=JSON.parse(JSON.stringify(n)),o=n?{...a,data:[...a.data,r]}:{...a,data:[r]};v(b,o),this.resultSendingStatus={status:"loaded",errorMessage:""}}getRating(){const e=f(b);console.log("data ",e),this.setRatingData(e?.data??[])}};(0,_.EH)((()=>{!1===F.userAnswer?.correct&&setTimeout((()=>{F.setGameResult("lose")}),2e3)})),(0,_.EH)((()=>{const e=F.questions.length===F.currentQuestionNum&&F.userAnswer?.correct,t=F.safeAmount>=y[0];setTimeout((()=>{(e||t)&&(F.setGameResult("win"),setTimeout((()=>{F.onShowFinalScreen()}),1e3))}),2e3)}));var R=s(242);const A=(0,R.Pi)((()=>{const{setGameHelpers:e,gameHelpers:t,currentQuestionNum:s,gameResult:r,onPauseTimer:a,userAnswer:o}=F,i=r=>{t[r]||(e({...t,[r]:s}),"audience"===r&&a())},l=e=>"none"!==r||!!t[e]||!!o;return(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)("button",{className:d()(g,h),onClick:()=>i("half"),disabled:l("half"),children:!!t.half&&(0,n.jsx)("img",{className:p,src:u,alt:"img"})}),(0,n.jsx)("button",{className:d()(g,x),onClick:()=>i("audience"),disabled:l("audience"),children:!!t.audience&&(0,n.jsx)("img",{className:p,src:u,alt:"img"})})]})})),O="QuestionComponent-module__layout--u05VY",Q="QuestionComponent-module__question--fxND_",H="QuestionComponent-module__answers--g36rS",M="QuestionComponent-module__animateAnswer--NXMjM",B="QuestionComponent-module__answer--XgNKC",L="QuestionComponent-module__nonHover--q7NxU",U="QuestionComponent-module__hidden--KWmcl",D="Loader-module__loader--nEUls",E="Loader-module__large--G5D22",z="Loader-module__small--_OkTN",W="Loader-module__item--XOzYm",V="Loader-module__primary--uzsZO",G="Loader-module__center--kWloL",K=({variant:e="default",color:t="white",center:s})=>(0,n.jsx)("div",{className:d()({[G]:s}),children:(0,n.jsx)("div",{className:d()(D,{[E]:"large"===e}),children:[1,2,3,4].map((s=>(0,n.jsx)("div",{className:d()(W,{[E]:"large"===e,[z]:"small"===e,[V]:"primary"===t})},s)))})}),J="Button-module__button--b_aG7",Y="Button-module__primary--taWj2",$="Button-module__secondary--sMAVa",Z="Button-module__black--pqBDr",X="Button-module__withBorder--copId",ee="Button-module__small--DfILt",te="Button-module__outline--dK5VZ",se=(0,i.forwardRef)(((e,t)=>{const{children:s,view:r="primary",type:a="button",isLoading:o,loaderColor:i,withBorder:l,mw:c,h:u,fz:m,fw:g,size:h,br:x,ls:p,style:_,...j}=e,f=d()(J,{[Y]:"primary"===r,[Z]:"black"===r,[X]:l,[ee]:"small"===h,[te]:"outline"===r,[$]:"secondary"===r});return(0,n.jsx)("button",{className:f,type:a,ref:t,...j,style:{maxWidth:c,height:u,fontSize:m,fontWeight:g,borderRadius:x,letterSpacing:p,..._},children:o?(0,n.jsx)(K,{color:i}):s})}));se.displayName="Button";const re=se,ne=(e,t)=>{const s=Math.ceil(e),r=Math.floor(t);return Math.floor(Math.random()*(r-s)+s)},ae=e=>{const t=e.findIndex((({correct:e})=>Boolean(e)));let s=null,r=ne(0,4);for(;r===t;)r=ne(0,4);s=r;let n=null;for(;r===t||r===s;)r=ne(0,4);return n=r,{randomFirst:s,randomSecond:n}},oe=e=>{const t=y[y.length-1];if(e>t)return t;for(let t=0;t<y.length;t++)if(e<=y[t]){return y[t-1]??0}return 0},ie=(e,t,s,r)=>e?s?"var(--success)":r!==t||s?r===t||s?void 0:"linear-gradient(#304a5d, #02111c)":"var(--danger)":"",le=(0,R.Pi)((()=>{const{questions:e,nextQuestion:t,onPlayTimer:s,onPauseTimer:a,currentQuestionNum:o,setSafeAmount:c,gameResult:u,setGameResult:m,onReset:g,userAnswer:h,setUserAnswer:x,timerIsOver:p,incTimerKey:_,gameHelpers:j,onShowFinalScreen:f,incQuestionsCountUserAnswered:v}=F,b=(0,l.s0)(),[y,N]=(0,i.useState)(0),[w,S]=(0,i.useState)(!1);(0,i.useEffect)((()=>{if(p){const e=oe(o);c(e),m("lose")}}),[o,g,m,c,p]),(0,i.useEffect)((()=>{let e=null;if(h&&(e=setInterval((()=>{N((e=>e+1))}),1e3),y>=2)){if(!h.correct){const e=oe(o);c(e)}clearInterval(e)}return()=>{clearInterval(e)}}),[y,h,o,c]);const C=e[o-1],[P,T]=(0,i.useState)((()=>ae(C.answers)));if((0,i.useEffect)((()=>{T(ae(C.answers))}),[C.answers]),!C)return null;const k=h&&2===y||p||w,I=2===y||!!h||p,q=(e,t)=>({[M]:h?.id===e,[L]:2===y||!!h,[U]:j.half===o&&(t===P.randomFirst||t===P.randomSecond)});return(0,n.jsxs)("div",{className:O,children:[(0,n.jsx)("span",{className:Q,dangerouslySetInnerHTML:{__html:C.question}}),(0,n.jsx)("div",{className:H,children:C.answers.map((({id:e,text:t,correct:s},r)=>(0,n.jsx)("button",{type:"button",className:d()(B,q(e,r)),onClick:()=>{return r={id:e,text:t,correct:s},a(),x(r),void(r.correct&&v());var r},style:{background:ie(k&&h?.id===e,e,s,h?.id)},disabled:I,children:t},e)))}),(0,n.jsx)(re,{mw:240,style:{padding:12},onClick:()=>{_(),"none"===u?(x(null),t(),s()):g((()=>b(r.StartPage))),N(0)},disabled:2!==y&&!p||"win"===u||F.safeAmount>0,children:"lose"!==u?"Следующий вопрос":"Сыграть заново"}),(0,n.jsx)(re,{mw:240,style:{padding:12},onClick:async()=>{a(),S(!0),m("win"),S(!1),f()},disabled:1===o&&2!==y||"none"!==u,children:"Забрать выигрыш"})]})})),ce="RatingList-module__layout--o7AKm",de="RatingList-module__title--TgT1J",ue="RatingList-module__list--_K881",me="RatingList-module__item--Y1B7U",ge="RatingList-module__name--AmAJt",he="RatingList-module__center--nEbGl",xe=(0,R.Pi)((({center:e,withHighlight:t})=>{const{uiRatingData:s,ratingFetchingStatus:r}=F;return"error"===r.status?(0,n.jsx)("div",{children:"Топ игроков временно недоступен"}):(0,n.jsxs)("div",{className:d()(ce,{[he]:e}),children:[(0,n.jsx)("div",{className:de,children:"Топ игроков"}),s?.length>0&&(0,n.jsx)("ul",{className:ue,children:s.slice(0,5).map((({id:e,name:s,score:r,time:a},o)=>(0,n.jsxs)("li",{style:0===o&&t?{backgroundColor:"rgb(249, 191, 80)",color:"black"}:{},className:me,children:[(0,n.jsx)("span",{className:ge,title:s,children:s}),(0,n.jsx)("span",{style:{textAlign:"center"},children:r}),(0,n.jsx)("span",{children:a})]},e)))})]})}));var pe=s(428);const _e="Timer-module__timerWrapper--jneVV",je=(0,R.Pi)((()=>{const{timerIsPlaying:e,onToggleTimer:t,setTimerIsOver:s,timerKey:r,onChangeTimeSpentQuestions:a,currentQuestionNum:o}=F,i=S[o];return(0,n.jsx)("div",{className:_e,onClick:t,children:(0,n.jsx)(pe.$,{isPlaying:e,colors:["#ff7701","#f44c04","#f63c3c","#f81d1d"],trailColor:"#f5c75d",colorsTime:[i,10,5,0],onComplete:()=>s(!0),onUpdate:e=>a(i-e),duration:i,...T,children:({remainingTime:e})=>{return(0,n.jsx)("span",{style:{fontWeight:"var(--fw-bold)",...(t=e,t<=5?{color:"#f63c3c",fontSize:"var(--fz-timer-l)"}:t<=10?{color:"#ffb40a",fontSize:"var(--fz-timer-m)"}:{color:"#ffffff",fontSize:"var(--fz-timer-s)"})},children:e});var t}},r)})})),fe="UserProgress-module__list--odMmV",ve="UserProgress-module__item--yUwcJ",be="UserProgress-module__itemCol1--Kl_Q3",ye="UserProgress-module__itemCol2--RnWhE",Ne="UserProgress-module__itemCol3--dQj6L",we="UserProgress-module__itemCol4--qDvut",Se=(0,R.Pi)((()=>{const{currentQuestionNum:e,safeAmount:t}=F;return(0,n.jsx)("ul",{className:fe,children:C.map((({num:s,count:r,color:a})=>{const o=(t||e)===s;return(0,n.jsxs)("li",{style:{color:o?"black":a,backgroundColor:o?"#f9bf50":void 0},className:ve,children:[(0,n.jsx)("span",{className:be,children:s}),(0,n.jsx)("span",{className:ye,children:"•"}),(0,n.jsx)("span",{className:Ne,children:r}),(0,n.jsx)("span",{className:we,children:"баллов"})]},s)}))})})),Ce="MainPage-module__mainPage--fWzXx",Pe="MainPage-module__topContainer--NnnoO",Te="MainPage-module__centerContainer--HJdNj",ke="MainPage-module__timer--BGgud",Ie="CategoryForm-module__form--brlFh",qe="CategoryForm-module__categoryList--Ahpa6",Fe="CategoryForm-module__item--xopSA",Re="CategoryForm-module__checkbox--mTiys",Ae="CategoryForm-module__disclaimer--U681q",Oe="CategoryForm-module__controls--BDgms",Qe="CardLayout-module__layout--abl5W",He="CardLayout-module__card--dv1hs",Me="CardLayout-module__title--IDc0x",Be=({children:e,title:t,p:s,transparent:r,h:a,gap:o})=>(0,n.jsx)("div",{style:{height:a},className:Qe,children:(0,n.jsxs)("div",{style:{padding:s,backgroundColor:r?"transparent":void 0,gap:o},className:He,children:[t&&(0,n.jsx)("span",{className:Me,children:t}),e]})}),Le=(0,R.Pi)((()=>{const{getQuestions:e,questionsFetchingStatus:t}=F,[s,a]=(0,i.useState)({});return(0,n.jsx)(Be,{title:"Выберите темы вопросов",children:(0,n.jsxs)("form",{className:Ie,children:[(0,n.jsx)("ul",{className:qe,children:P.map((({label:e,value:t})=>(0,n.jsxs)("li",{className:Fe,children:[(0,n.jsx)("label",{htmlFor:e,children:e}),(0,n.jsx)("input",{className:Re,id:e,type:"checkbox",value:s[e]?.value||t,checked:s[e]?.checked||!1,onChange:t=>((e,t)=>{const{checked:s,value:r}=e.target;a((e=>({...e,[t]:{value:r,checked:s}})))})(t,e)})]},e)))}),(0,n.jsxs)("div",{className:Ae,children:["Кроме выбранных тем, в игре будут вопросы по алгоритмам, структурам данных и",(0,n.jsx)("br",{})," ","computer science"]}),(0,n.jsxs)("div",{className:Oe,children:[(0,n.jsx)(re,{mw:220,view:"secondary",type:"submit",onClick:t=>{t.preventDefault(),e()},isLoading:"loading"===t.status,children:"Начать игру"}),(0,n.jsx)(re,{mw:220,view:"outline",children:(0,n.jsx)(o.rU,{to:r.TopRating,children:"Топ игроков"})})]})]})})}));var Ue=s(146);const De="Input-module__container--gjLYg",Ee="Input-module__input--GRggP",ze=({type:e="text",label:t,id:s,...r})=>(0,n.jsxs)("div",{className:De,children:[t&&(0,n.jsx)("label",{htmlFor:s,children:t}),(0,n.jsx)("input",{id:s,className:Ee,...r,type:e})]}),We="FinalScreen-module__imgContainer--UOckz",Ve="FinalScreen-module__img--HjaAv",Ge="FinalScreen-module__textContainer--O9555",Ke="FinalScreen-module__title--YLv63",Je="FinalScreen-module__text--txhOx",Ye="FinalScreen-module__prize--WNe9N",$e="FinalScreen-module__sendingStatus--wjNKG",Ze="FinalScreen-module__inputWrapper--Zz0p8",Xe="FinalScreen-module__controls--hU1uV",et=(0,R.Pi)((()=>{const{onReset:e,onHideFinalScreen:t,sendResult:s,resultSendingStatus:a,userResultScore:c,getRating:d,resetRatingFetchingStatus:u}=F,m=(0,l.s0)(),[g,h]=(0,i.useState)("");(0,i.useEffect)((()=>{u()}),[u]);const x=N.find((({num:e})=>e===c))?.count;return(0,n.jsxs)(Be,{p:0,transparent:!0,children:[(0,n.jsxs)("div",{className:We,children:[(0,n.jsx)("img",{className:Ve,src:Ue,alt:"back"}),(0,n.jsxs)("div",{className:Ge,children:[(0,n.jsx)("span",{className:Ke,children:"Поздравляем!"}),(0,n.jsx)("span",{className:Je,children:"ваш выигрыш"}),(0,n.jsx)("div",{className:Ye,children:(0,n.jsxs)("span",{children:[x," баллов"]})}),(0,n.jsx)("div",{className:Ze,children:(0,n.jsx)(ze,{id:"winner",type:"text",value:g,onChange:e=>h(e.target.value),label:"Введите ваше Имя (Фамилию)",autoComplete:"off"})}),(0,n.jsxs)("div",{className:Xe,children:[(0,n.jsx)(re,{view:"outline",mw:200,style:{padding:8},onClick:async()=>{s(g),d()},isLoading:"loading"===a.status,disabled:!g||"loaded"===a.status,children:"loaded"!==a.status?"Сохранить":"Сохранено"}),(0,n.jsx)(re,{mw:200,view:"outline",children:(0,n.jsx)(o.rU,{to:r.TopRating,children:"Топ игроков"})})]}),(0,n.jsxs)("span",{className:$e,children:["error"===a.status&&"Не удалось отправить данные","loaded"===a.status&&"Данные успешно сохранены"]})]})]}),(0,n.jsx)(re,{mw:240,style:{padding:12},onClick:()=>{e((()=>m(r.StartPage))),t()},children:"Новая игра"})]})})),tt=(0,R.Pi)((()=>{const{questions:e,showFinalScreen:t}=F;if(t)return(0,n.jsx)(et,{});const s=(0,n.jsxs)(n.Fragment,{children:[e.length<N.length&&(0,n.jsxs)("div",{style:{color:"var(--primary)",textAlign:"center",margin:"0 0 40px"},children:["пришло ",e.length," вопросов, это меньше необходимого количесвта"]}),(0,n.jsxs)("div",{className:Pe,children:[(0,n.jsx)(xe,{withHighlight:!0}),(0,n.jsxs)("div",{className:Te,children:[(0,n.jsx)(A,{}),(0,n.jsx)("div",{className:ke,children:(0,n.jsx)(je,{})})]}),(0,n.jsx)(Se,{})]}),(0,n.jsx)(le,{})]});return(0,n.jsx)(n.Fragment,{children:e.length>0?(0,n.jsx)("div",{className:Ce,children:s}):(0,n.jsx)(Le,{})})}));var st=s(245);const rt="ErrorPage-module__errorPage--eRCS5",nt="ErrorPage-module__errorMessage--OBpvh",at="ErrorPage-module__image--oUkkj",ot=({message:e})=>(0,n.jsxs)("div",{className:rt,children:[(0,n.jsx)("img",{className:at,src:st,alt:"ошибка"}),(0,n.jsxs)("span",{className:nt,children:["Что-то пошло не так.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),e]})]}),it=()=>(0,n.jsx)("div",{children:"Страница не найдена"});var lt=s(94),ct=s(60),dt=s(636),ut=s(492);const mt="Pagination-module__pagination--pTOV5",gt="Pagination-module__pages--ST8BP",ht="Pagination-module__controls--a8lsA",xt="Pagination-module__control--Hm32C",pt="Pagination-module__group--IjJ68",_t="Pagination-module__doubleArrow--qBLDY",jt="Pagination-module__singleArrow--qJTHZ",ft="Pagination-module__rotate--lFToi",vt=({table:e})=>(0,n.jsxs)("div",{className:mt,children:[(0,n.jsxs)("div",{className:gt,children:[(0,n.jsx)("span",{children:"Страница"}),(0,n.jsxs)("span",{children:[e.getState().pagination.pageIndex+1," из ",e.getPageCount()]})]}),(0,n.jsxs)("div",{className:ht,children:[(0,n.jsxs)("div",{className:pt,children:[(0,n.jsx)("button",{className:xt,onClick:()=>e.setPageIndex(0),disabled:!e.getCanPreviousPage(),children:(0,n.jsx)("img",{className:_t,src:ut,alt:"to first page"})}),(0,n.jsx)("button",{className:xt,onClick:()=>e.previousPage(),disabled:!e.getCanPreviousPage(),children:(0,n.jsx)("img",{className:jt,src:dt,alt:"to prev page"})})]}),(0,n.jsxs)("div",{className:pt,children:[(0,n.jsx)("button",{className:xt,onClick:()=>e.nextPage(),disabled:!e.getCanNextPage(),children:(0,n.jsx)("img",{className:d()(jt,ft),src:dt,alt:"to next page"})}),(0,n.jsx)("button",{className:xt,onClick:()=>e.setPageIndex(e.getPageCount()-1),disabled:!e.getCanNextPage(),children:(0,n.jsx)("img",{className:d()(_t,ft),src:ut,alt:"to last page"})})]})]})]});var bt=s(609),yt=s(25),Nt=s(90),wt=s(997);const St="DebouncedInput-module__inputWrapper--RDOVv",Ct="DebouncedInput-module__clearBtn--WwPUd",Pt="DebouncedInput-module__clearIcon--ba_V3",Tt=({value:e,onChange:t,debounce:s,...r})=>{const[a,o]=(0,i.useState)(e);return(0,i.useEffect)((()=>{o(e)}),[e]),(0,i.useEffect)((()=>{const e=setTimeout((()=>{t(a)}),s);return()=>clearTimeout(e)}),[a]),(0,n.jsxs)("div",{className:St,children:[(0,n.jsx)(ze,{...r,value:a,onChange:e=>o(e.target.value)}),(0,n.jsx)("button",{className:Ct,onClick:()=>o(""),children:(0,n.jsx)("img",{className:Pt,src:wt,alt:"clear input"})})]})},kt=({column:e,placeholder:t})=>{const s=e.getFilterValue();return(0,n.jsx)(Tt,{onChange:t=>e.setFilterValue(t),placeholder:t,type:"text",value:s??"",autoFocus:!0})},It="TableHead-module__cellHead--QCTvh",qt="TableHead-module__searchBtn--IpRvK",Ft="TableHead-module__searchIconWrapper--cBm8x",Rt="TableHead-module__searchIcon--mnJXv",At="TableHead-module__sortIcon--vFYuV",Ot="TableHead-module__closeIcon--jHuTw",Qt="TableHead-module__rotate--xU20H",Ht="TableHead-module__stub--Ugeq2",Mt=({table:e})=>{const[t,s]=(0,i.useState)(!1),r={asc:(0,n.jsx)("img",{className:At,src:Nt}),desc:(0,n.jsx)("img",{className:d()(At,Qt),src:Nt})};return(0,n.jsx)("thead",{children:e.getHeaderGroups().map((e=>(0,n.jsx)("tr",{children:e.headers.map((e=>(0,n.jsx)("th",{colSpan:e.colSpan,children:e.isPlaceholder?null:(0,n.jsxs)("div",{className:It,children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsxs)("div",{onClick:e.column.getToggleSortingHandler(),children:[(0,lt.ie)(e.column.columnDef.header,e.getContext()),r[e.column.getIsSorted()]??(0,n.jsx)("img",{className:At,src:yt})]}),e.column.getCanFilter()&&(0,n.jsx)("button",{className:qt,onClick:()=>s((e=>!e)),children:(0,n.jsxs)("div",{className:Ft,children:[(0,n.jsx)("img",{className:Rt,src:bt,alt:"search name"}),t&&(0,n.jsx)("span",{className:Ot,children:"/"})]})})]}),e.column.getCanFilter()&&t&&(0,n.jsx)("div",{children:(0,n.jsx)(kt,{column:e.column,placeholder:"Введите имя"})}),!e.column.getCanFilter()&&t&&(0,n.jsx)("div",{className:Ht})]})},e.id)))},e.id)))})},Bt="TableBody-module__row--ZwpOY",Lt="TableBody-module__cell--BXAuy",Ut=({table:e})=>(0,n.jsx)("tbody",{children:e.getRowModel().rows.map((e=>(0,n.jsx)("tr",{className:Bt,children:e.getVisibleCells().map((e=>(0,n.jsx)("td",{style:{textAlign:["orderBy","name"].includes(e.column.id)?"start":"center"},className:Lt,title:"name"===e.column.id?e.getValue():"",children:(0,lt.ie)(e.column.columnDef.cell,e.getContext())},e.id)))},e.id)))}),Dt=[{accessorKey:"orderBy",header:"Место",cell:e=>e.row.index+1,enableColumnFilter:!1},{accessorKey:"name",header:"Имя",cell:e=>e.getValue(),meta:{filterVariant:void 0}},{accessorKey:"score",header:"Баллы",cell:e=>e.getValue(),enableColumnFilter:!1},{accessorKey:"time",header:"Время",cell:e=>e.getValue(),enableColumnFilter:!1}],Et="Table-module__tableWrapper--lHZkT",zt="Table-module__table--YvFRz",Wt=({data:e})=>{const[t,s]=(0,i.useState)([]),[r,a]=(0,i.useState)([]),o=(0,lt.b7)({data:e,columns:Dt,filterFns:{},state:{columnFilters:t,sorting:r},onColumnFiltersChange:s,getCoreRowModel:(0,ct.sC)(),getFilteredRowModel:(0,ct.vL)(),getSortedRowModel:(0,ct.tj)(),getPaginationRowModel:(0,ct.G_)(),debugTable:!0,debugHeaders:!0,debugColumns:!1,onSortingChange:a}),l=0===o.getRowModel().rows.length,{pageSize:c}=o.getState().pagination,d=!l&&e.length>c;return(0,n.jsxs)("div",{className:Et,children:[(0,n.jsxs)("table",{className:zt,children:[(0,n.jsx)(Mt,{table:o}),l?(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{}),(0,n.jsx)("td",{style:{height:300,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:"Нет данных"})]})}):(0,n.jsx)(Ut,{table:o})]}),d&&(0,n.jsx)(vt,{table:o})]})},Vt="TopRating-module__container--LQt8D",Gt="TopRating-module__ratingLayout--zh30F",Kt="TopRating-module__prevBtn--VzP13",Jt=(0,R.Pi)((()=>{const{uiRatingData:e}=F,t=(0,l.s0)();return(0,n.jsx)("div",{className:Vt,children:(0,n.jsx)(Be,{title:"Топ 100 игроков",gap:8,p:"30px 40px",children:(0,n.jsxs)("div",{className:Gt,children:[(0,n.jsx)("button",{className:Kt,onClick:()=>{t(-1)},children:"Назад"}),(0,n.jsx)(Wt,{data:e})]})})})})),Yt="StartPage-module__startPageLayout--RuFLQ",$t="StartPage-module__title--kfSST",Zt="StartPage-module__controls--ny6J7",Xt=()=>{const e=(0,l.s0)();return(0,n.jsx)(Be,{children:(0,n.jsxs)("div",{className:Yt,children:[(0,n.jsxs)("h2",{className:$t,children:[(0,n.jsx)("b",{children:"Попробуй свои знания и силы!"}),(0,n.jsx)("br",{})," Ответь в формате известной увлекательной игры на вопросы по управленческим компетенциям и ситуациям."]}),(0,n.jsxs)("div",{className:Zt,children:[(0,n.jsx)(re,{mw:220,h:44,view:"secondary",type:"submit",onClick:()=>e(r.MainPage),children:"Начать игру"}),(0,n.jsx)(re,{mw:220,h:44,view:"outline",onClick:()=>e(r.TopRating),children:"Топ игроков"})]})]})})},es=()=>(0,n.jsxs)(l.Z5,{children:[(0,n.jsx)(l.AW,{path:r.StartPage,element:(0,n.jsx)(Xt,{})}),(0,n.jsx)(l.AW,{path:r.MainPage,element:(0,n.jsx)(tt,{})}),(0,n.jsx)(l.AW,{path:r.TopRating,element:(0,n.jsx)(Jt,{})}),(0,n.jsx)(l.AW,{path:r.ErrorPage,element:(0,n.jsx)(ot,{})}),(0,n.jsx)(l.AW,{path:r.NotFound,element:(0,n.jsx)(it,{})})]}),ts="1.0.5",ss=()=>(console.log(`v${ts}`),(0,i.useEffect)((()=>{(()=>{const e=f(b);(Array.isArray(e)||"2.0.0"!==e?.version)&&v(b,{version:"2.0.0",data:[]})})()}),[]),(0,n.jsx)(es,{}));(0,a.s)(document.getElementById("root")).render((0,n.jsx)(o.UT,{children:(0,n.jsx)(ss,{})}))},90:(e,t,s)=>{e.exports=s.p+"b02416595d91401383ab.svg"},997:(e,t,s)=>{e.exports=s.p+"1ef132d43f7244aa8a22.svg"},492:(e,t,s)=>{e.exports=s.p+"354f5373f96e7f603624.svg"},636:(e,t,s)=>{e.exports=s.p+"09fb539325379d830288.svg"},609:(e,t,s)=>{e.exports=s.p+"d0e4791878eee739b1ed.svg"},25:(e,t,s)=>{e.exports=s.p+"b2631faaeca2fce739e4.svg"},83:(e,t,s)=>{e.exports=s.p+"aeec27d34d04f9b7e97f.png"},245:(e,t,s)=>{e.exports=s.p+"03a4dbc95d44bb8b9ffa.png"},146:(e,t,s)=>{e.exports=s.p+"fcd9f427b6629c129ffc.png"}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return r[e](s,s.exports,a),s.exports}a.m=r,e=[],a.O=(t,s,r,n)=>{if(!s){var o=1/0;for(d=0;d<e.length;d++){for(var[s,r,n]=e[d],i=!0,l=0;l<s.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](s[l])))?s.splice(l--,1):(i=!1,n<o&&(o=n));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,r,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var n=Object.create(null);a.r(n);var o={};t=t||[null,s({}),s([]),s(s)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=s(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,a.d(n,o),n},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../"})(),(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var r,n,[o,i,l]=s,c=0;if(o.some((t=>0!==e[t]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var d=l(a)}for(t&&t(s);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},s=self.webpackChunkteamlead_conf=self.webpackChunkteamlead_conf||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var o=a.O(void 0,[736],(()=>a(11)));o=a.O(o)})();
//# sourceMappingURL=main.439aac4ecab83f3f1a46.js.map