import styled from "styled-components";


export const DashBoard =styled.main`
                width: 100%;
                display: grid;
                ${'' /* background: gray; */}
                grid-template-columns: .3fr 1fr;
                grid-template-rows: repeat(4, 1fr);
                ${'' /* height:80vh; */}
                grid-gap: 2rem;
                padding-bottom: 2rem;


                .overviewChart{
                        grid-column:  2 / span 2;
                        grid-row:1 / span 2;
                        display: grid;
                        grid-template-columns: .35fr 1fr;
                        gap: 2rem;
                        justify-content: space-between;
                        .overviewChart__first-card{
                                h2{
                                        font-size: 3.5rem;
                                        font-weight: 600;
                                }
                                span{
                                        font-size:1.5rem;
                                        color:#fa402f;
                                        font-weight:500;
                                }
                        }

                        .image-cont{
                                width:5rem;
                                height:5rem;
                                border-radius:50%;
                                overflow:hidden;
                                img{
                                        width:100%;
                                }

                        }
                }               
                 .delivery-cont{
                        grid-column:  2 / span 2;
                        grid-row:3 / span 2;
                        display: grid;
                        grid-template-columns: .6fr 1fr;
                        grid-gap: 2rem;

                        .bold{
                                font-weight:700;
                                font-size:2rem;
                        }
                        .blue{
                                color:#053582;
                                
                        }
                        .red{
                                color:#fa402f;
                        }
                       
                }
                .card{
                        .card-top,.card-bottom{
                                display: flex;
                                gap:6rem;
                                font-weight:bold;
                                align-items:center;
                                justify-content: space-between;
                                .history{
                                        color;#252525;
                                        opacity: 0.4;
                                }
                        }
                        .card-bottom{
                                span{
                                        display:flex;
                                        align-items:center;
                                        gap: 1.5rem
                                }
                        }
                }
                .card-1{
                        .card-top{
                                svg{
                                 opacity: 1;
                                path{
                                 fill: #00ce2d;
                                }
                        }
                        }
                      
                }
                .card-2{
                        .card-top{
                        svg{
                        path{
                                fill: #ffb406;
                                opacity: 1;
                        }
                        }
                   }    
                }
                .card-3{
                        grid-column:  1;
                        grid-row:3;
                }
                .card-4{
                        .card-top{
                         svg{
                                opacity: 1;
                        path{
                                fill: #9b51e0;
                        }
                         }   
                      } 
                } 
`

export const MainCont=styled.section`

        display: grid;
        grid-template-columns: 1.5fr 8fr;
        grid-template-rows:  9fr;
        ${'' /* grid-gap: 3rem;  */}
        background:#e5eff4;

        & > div{
            padding: 0 2.5rem;
            h1{
                padding: 1.2rem 0;
                font-size: 2.5rem;
                font-weight: 600;
            }
        }

   
`



export const Card = styled.div`
        background:${props => props.bg ? props.bg :  '#fff'};
        border-radius: 1rem;
        padding:2rem ;
        position:relative; 
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        width:100%;
        
        p{
                font-size: 1.2rem;
                font-weight: 400;
        }
        svg{
                height:4rem;
        }
`

export const  Container= styled.div`

`


