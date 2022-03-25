import styled from "styled-components";


export  const Header = styled.header`
    grid-column:  1 / span 2;
    background: white;
    display: flex;
    padding:.5rem 3rem;
    align-items: center;
    gap:9rem;
    .logo{
        width: 10vw;
    
    }
    .header{
        width:90vw;
        display: flex;
        justify-content:space-between;
        padding: 0 2.5rem;
        .input-cont{
            position:relative;
           
            input{
                border:none;
                padding: 1.2rem;
            }
        }
        .profile{
            display:flex;
            gap: 1rem;
            align-items:center;
            
            &__image{
                position: relative;
               &:before{
                   content:'';
                   width: 1rem;
                   display:inline-block;             
                   height: 1rem; 
                   border-radius:2rem;
                   background: #00ce2d;
                   position: absolute;
                   right:0;
                   bottom:3px;
               }
            }
            &--name{
                font-weight: 500;
                font-size: 1.3rem;
            }

        }

    }
`

export default Header;