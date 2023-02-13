import styled from "styled-components";

export const DashboardContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: black;
    width: 100vw;
    height:100vh;

`

export const StyledHeader = styled.header`



`
export const StyledHeader_divUpper = styled.div`

    display:flex;
    justify-content: space-between;
    padding: 20px 10px;
    border-bottom: 1px solid var(--color-grey-2);

        h1{
        color: var(--color-pink-easy);
        font-weight: bold;
        font-size: 25px;
    }

    button{
        color:var(--color-grey-5);
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
        border-radius: 6px;
        padding: 8px 32px;
        :hover{
            border: 1px solid white;
        }
    }
    @media(min-width: 769px){
        padding: 50px 25%;
    }


`
export const StyledHeader_divLower = styled.div`
    color:white;
    border-bottom: 1px solid var(--color-grey-2);
    padding: 40px 10px;
    gap: 20px;
    display: flex;
    flex-direction: column;
        h2{
            font-size: 23px;
            font-weight: bold;
        }
        p{
            color: var(--color-grey-4);
        }
        @media(min-width: 769px){
        padding: 50px 25%;
    }

`

export const StyledMain = styled.main`
    display:flex;
    flex-direction: column;
    color: var(--color-grey-5);
    padding: 30px 10px;
    gap: 20px;

        h2{
            font-weight:bold;
        }
    @media(min-width: 769px){
        padding: 50px 25%;
    }

`