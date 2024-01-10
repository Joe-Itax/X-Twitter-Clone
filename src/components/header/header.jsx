import PageTitle from './page-title';
import TopTweet from './top-tweet';
function Header() {
  return (
    <header className="py-[1.5rem] px-[1rem] sticky top-0  bg-[rgba(0, 0, 0, 0)] backdrop-blur-[50px] z-[100] flex items-center justify-between border-b border-solid border-[#2f3336]">
      <PageTitle />
      <TopTweet />
    </header>
  );
}

export default Header;
