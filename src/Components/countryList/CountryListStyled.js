import styled from "styled-components";

export const CountryListStyled = styled.div`
  .list {
    padding: 0;
    margin: 0;
  }
  .country__name__main {
    padding-left: 21px;
    /* padding-right: 1037px; */
    list-style: none;
    width: 650px;
  }
  .main__list__header {
    display: flex;
    /* justify-content: space-between; */
    /* width: 80px; */
    height: 80px;
    background: #2196f3;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
  }
  .number_country__main {
    width: 40px;
    padding-left: 30px;
  }
  .span__border__main {
    border-right: 2px solid #b2b2b2;
    height: 100%;
  }
  .country__total_confirmed__main {
    padding-left: 23px;
  }
  .main__list {
    display: flex;
    /* justify-content: space-between; */
    /* width: 80px; */
    height: 80px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-bottom: 20px;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
  }
  .number_country {
    width: 40px;
    padding-left: 30px;
  }
  .span__border {
    border-right: 2px solid #b2b2b2;
    height: 100%;
  }
  .country__name {
    padding-left: 21px;
    /* padding-right: 1037px; */
    list-style: none;
    width: 650px;
  }
  .span__border {
    border-right: 2px solid #b2b2b2;
    height: 100%;
  }
  .country__total_confirmed {
    list-style: none;
    padding-left: 23px;
  }
`;
