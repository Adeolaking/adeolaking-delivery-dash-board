import {
  DashBoard,
  Card,
  Container,
  MainCont
} from "./styled";
import navData from "./navData";
import styled from "styled-components";
import { statusData } from "./status.data";
import { Header } from "./header";
import {LineChart, BarChart }from './App'



export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: white;
  border-bottom-right-radius: 2rem;
  padding: 1rem;

  .nav_item {
    display: flex;

    a {
      width: 80%;
      margin: auto;
      padding: 1rem ;
      display: flex;
      gap: 2rem;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      font-size: 1.2rem;
      color: #252525;
      font-weight: bold;
    }

    &:hover {
      background-color:#e8f0fe;                          border-radius:2rem;   

      a {
        color: #053582;
        span {
          svg {
            opacity: 1;
            path {
              fill: #053582;
              opacity:1;
            }
          }
        }
      }
    }
  }
`;

function App() {
  return (
    <section className="stem">
      <Header>
        <div className="logo">LOgo</div>
        <div className="header ">
         <div className="input-cont"><input type="text"  placeholder="Search" />
         </div>
            
            <div className="profile" >
                <div className="profile__image">
                    <img src="./media/Photo.png" alt="j"/>
                </div>
                <div className="profile__details">
                    <div className="profile--name">
                        Jude Adam
                    </div>
                    <div className="position">
                        Admin
                    </div>
                </div>
            </div>
        </div>

      </Header>
      <MainCont>
        <SideNav className="sideNav">
          {navData.map((data) => {
            return (
              <div className="nav_item">
                <a href=" ">
                  <span>{data.icon}</span>
                  <span>{data.title}</span>
                </a>
              </div>
            );
          })}
        </SideNav>
        <Container>
          <h1>DashBoard</h1>

          <DashBoard>
            <Container bg="transparent" className="overviewChart">
              <Card className="overviewChart__first-card">
                    <h2>120</h2>
                    <p>Companies sent Orders to delivery pool today</p>
                    <div className="image-cont">
                        <img src='./media/pics1.jpg' alt=' '/>
                    </div>
                    <span>+84%</span>
                    <span className="graph" >
                    <svg width="147" height="51" viewBox="0 0 147 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M145.806 33.077C139.723 33.1286 139.043 39.0952 134.701 40.7869C130.36 42.4786 128.547 20.629 123.594 19.9037C118.641 19.1784 96.619 48.9475 91.3841 49.5437C86.1492 50.1398 86.2368 1.83661 80.8325 1.83661C75.4281 1.83661 39.7248 51.6763 34.1833 46.3607C28.6417 41.045 29.3736 20.8281 24.187 19.9037C19.0004 18.9793 6.20488 46.4251 1.80603 46.4251" stroke="#4339F2" stroke-width="2" stroke-linecap="round"/>
</svg>

                    </span>
                    <p>compared to yesterday</p>
               </Card>
              <Card>
                <div className="chart">
                   <LineChart />
                </div>
              </Card>
            </Container>

            {statusData.map((data,key) => {
              const { title, icon , value, moreIcon} = data;
                    console.log(key + 1)
              return (
                <Card className={`card-${key+1} card`}>
                    <div className="card-top">
                        {title}
                        <span>{icon}</span>
                    </div>
                    <div className="card-bottom">
                       <span className="card-value"> {value} <span className="value-chart">
                       <svg width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M55 1.44287L46.7903 12.7678L43.5524 10.5837L34.152 18.2281L28.0104 28.7441L16.8135 25.1444L5.76287 27.9352L1 30.4429" stroke="#FFB200" stroke-width="2" stroke-linecap="round"/>
</svg>

                       </span> </span>
                       <span className="history">
                           Today 
                           <span><svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6014 0.545654C11.0465 0.545654 11.2698 1.08353 10.9555 1.39872L6.1602 6.20729C5.96482 6.40321 5.64748 6.40321 5.45211 6.20729L0.656852 1.39872C0.342543 1.08354 0.565777 0.545654 1.01089 0.545654L10.6014 0.545654Z" fill="#252525"/>
                           </svg></span>
                       </span>
                    </div>
                  
                </Card>
              );
            })}

            <Container className="delivery-cont">
              <Card style={{ justifyContent: 'space-between'}}>
                  <div style={{display:"flex", alignItems: "center", justifyContent:"space-between"}}>
                  <span>
                    <h2>Exchange pool today</h2>
                        <p>most Orders picked by:</p>
                  </span>
                     
                      <span><svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6014 0.545654C11.0465 0.545654 11.2698 1.08353 10.9555 1.39872L6.1602 6.20729C5.96482 6.40321 5.64748 6.40321 5.45211 6.20729L0.656852 1.39872C0.342543 1.08354 0.565777 0.545654 1.01089 0.545654L10.6014 0.545654Z" fill="#252525"/>
                           </svg></span>
                  </div>

                  <div style={{display:"flex", alignItems: "center",justifyContent:"space-evenly",gap:"2rem"}}>

                    <div style={{display:"flex", flexDirection:"column",  flex:1, gap: "1rem"}}>
                        <div>
                          <h2>FZ Deliveries</h2>
                          <p className="grayed">Allen, Lagos</p>
                        </div>

                        <div>
                            <span className="bold red"> 504</span>
                            <p className="grayed">Oders</p>
                        </div>

                        <div>
                          <span className="bold blue">267</span>
                          <p className="grayed">pushed to pool</p>
                        </div>

                    </div>

                    <div style={{flex:"1.3"}}>
                       
                       <div >
                          <h1>N340,000</h1>
                          <svg width="123" height="2rem" viewBox="0 0 123 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.30615 14.6129C6.28311 14.6472 6.94212 18.2906 10.5602 19.3251C14.1782 20.3596 15.6932 36.5525 19.8205 36.109C23.9478 35.6654 25.3815 11.3966 29.0549 10.4821C32.7282 9.56764 33.0318 19.1952 37.8757 17.9055C42.7196 16.6158 42.2882 6.76089 46.6506 7.12544C51.013 7.49 50.9679 13.0642 55.4715 13.0642C59.9751 13.0642 60.4056 1.45835 65.1653 1.12217C69.9249 0.785993 70.0246 20.4876 75.1347 20.4876C80.2448 20.4876 81.8518 34.1564 86.3446 35.0762C90.8373 35.996 89.7205 13.3454 94.3385 10.0948C98.9564 6.84418 98.3318 29.9609 102.654 29.3956C106.976 28.8303 108.393 13.2077 112.118 14.5488C115.843 15.89 117.64 13.1328 121.306 13.1328" stroke="#FF3A29" stroke-width="2" stroke-linecap="round"/>
</svg>
<p>compared to yesterday</p>

                       </div>

                    </div>
                  </div>
              </Card>
              <Card>
                <div className="chart">
                    <BarChart />
                </div>
              </Card>
            </Container>
          </DashBoard>
        </Container>
      </MainCont>
    </section>
  );
}

export default App;
