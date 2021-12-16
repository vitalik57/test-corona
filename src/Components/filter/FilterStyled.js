import styled from "styled-components";
export const FilterStyled = styled.div`
  .filter__header {
    display: flex;
    justify-content: space-between;
  }
  .filter__logo {
    display: flex;
  }
  .statistcic {
    font-size: 72px;
    line-height: 84px;
    margin: 0px;
    font-style: normal;
    font-weight: bold;

    margin-top: 58px;
  }
  .input__search {
    position: relative;
  }
  .input__filter {
    padding: 12px 32px;
    width: 400px;
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #b2b2b2;
    border-color: aliceblue;
    margin-top: 65px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 25%);
    border-radius: 20px;
  }
  .input__search__logo {
    position: absolute;
    top: 84px;
    right: 22px;
  }
`;
