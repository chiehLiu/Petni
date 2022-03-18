import SearchAreaTitle from '../../atoms/SearchAreaTitle';

const SearchArea = () => {
  return (
    <div>
      <div>
        <SearchAreaTitle>我想尋找</SearchAreaTitle>
      </div>
      <div></div>
      <div>
        <SearchAreaTitle>性別</SearchAreaTitle>
      </div>
      <div></div>
      <div>
        <SearchAreaTitle>年齡</SearchAreaTitle>
      </div>
      <div></div>
      <div>
        <SearchAreaTitle>顏色</SearchAreaTitle>
      </div>
    </div>
  );
};

export default SearchArea;