import React from "react";
import "./landingBar.css";
import LandingBarItem from "./LandingBarItem";

const svg1 = (
  <svg
    width="50"
    height="62"
    viewBox="0 0 50 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48.2284 26.9139L48.7772 26.7352C49.5635 26.4792 49.9887 25.5619 49.7098 24.7269C48.6335 21.505 47.0688 18.546 45.0464 15.9121C43.5888 14.0139 41.9335 12.3371 40.1028 10.8969L42.3683 6.33655C42.8169 5.43366 42.5033 4.30867 41.668 3.82391L36.5966 0.88024C35.7613 0.39538 34.7205 0.734386 34.272 1.63718L31.873 6.46625C30.2512 5.93558 28.5848 5.56861 26.8839 5.37011C23.7354 5.00274 20.589 5.22732 17.5097 6.03731C16.7117 6.24722 16.2392 7.13692 16.4761 7.98696L16.6414 8.5801C16.8604 9.36599 17.6093 9.82973 18.3473 9.63658C21.032 8.93408 23.7734 8.73993 26.5153 9.0599C31.8353 9.6807 36.9581 12.3297 40.7924 16.3897C41.3595 16.9902 41.8973 17.6219 42.4043 18.2822C44.1656 20.576 45.5302 23.1533 46.4713 25.9602C46.7301 26.7319 47.5014 27.1506 48.2284 26.9139Z"
      fill="#FD2622"
    />
    <path
      d="M45.8982 37.7457C46.7607 37.7457 47.4663 38.5806 47.4663 39.6012L47.4662 41.3616C47.4662 42.3821 46.7606 43.2172 45.8981 43.2172H2.20828C1.26021 43.2172 0.491577 42.3864 0.491577 41.3616V39.6012C0.491577 38.5765 1.26012 37.7457 2.20828 37.7457H45.8982Z"
      fill="#FD2622"
    />
    <path
      d="M0.491577 48.1765C0.491577 47.1518 1.26012 46.321 2.20828 46.321V46.3211H45.7495C46.6976 46.3211 47.4662 47.1518 47.4662 48.1766V59.4853C47.4662 60.5101 46.6977 61.3409 45.7495 61.3409H2.20828C1.26021 61.3409 0.491577 60.5102 0.491577 59.4853V48.1765Z"
      fill="#FD2622"
    />
    <path
      d="M28.9258 12.3984C31.9938 13.1874 34.8044 14.6937 37.1977 16.7446C42.1179 20.9608 45.2739 27.4777 45.274 34.7918H2.68163C2.68163 22.0799 12.2167 11.7735 23.9782 11.7735C25.6815 11.7735 27.338 11.9901 28.9258 12.3984Z"
      fill="#FD2622"
    />
  </svg>
);
const svg2 = (
  <svg
    width="47"
    height="58"
    viewBox="0 0 47 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.7406 13.5152C29.7406 17.2389 26.7974 20.2576 23.1667 20.2576C19.5361 20.2576 16.5929 17.2389 16.5929 13.5152C16.5929 9.79142 19.5361 6.77273 23.1667 6.77273C26.7974 6.77273 29.7406 9.79142 29.7406 13.5152ZM36.3145 13.5152C36.3145 20.9626 30.428 27 23.1667 27C15.9054 27 10.019 20.9626 10.019 13.5152C10.019 6.06768 15.9054 0.030304 23.1667 0.030304C30.428 0.030304 36.3145 6.06768 36.3145 13.5152ZM6.73207 53.9697C6.73207 44.6604 14.0901 37.1136 23.1667 37.1136C32.2433 37.1136 39.6014 44.6604 39.6014 53.9697C39.6014 55.8316 41.073 57.3409 42.8883 57.3409C44.7036 57.3409 46.1753 55.8316 46.1753 53.9697C46.1753 40.9366 35.874 30.3712 23.1667 30.3712C10.4595 30.3712 0.158203 40.9366 0.158203 53.9697C0.158203 55.8316 1.62981 57.3409 3.44514 57.3409C5.26046 57.3409 6.73207 55.8316 6.73207 53.9697Z"
      fill="#36D96B"
    />
  </svg>
);
const svg3 = (
  <svg
    width="54"
    height="51"
    viewBox="0 0 54 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.2594 24.1983C26.4834 24.1983 31.5289 18.8712 31.5289 12.2999C31.5289 5.72861 26.4834 0.401516 20.2594 0.401516C14.0355 0.401516 8.98995 5.72861 8.98995 12.2999C8.98995 18.8712 14.0355 24.1983 20.2594 24.1983Z"
      fill="#E6750C"
    />
    <path
      d="M36.689 50.9277C36.8433 50.9553 37.0019 50.9697 37.1637 50.9697C38.7196 50.9697 39.981 49.6379 39.981 47.9951C39.981 36.4953 31.1514 27.1729 20.2594 27.1729C9.3675 27.1729 0.537842 36.4953 0.537842 47.9951C0.537842 49.6379 1.79922 50.9697 3.35521 50.9697C3.51886 50.9697 3.67925 50.955 3.83526 50.9267L3.82477 50.9697H36.6941L36.689 50.9277Z"
      fill="#E6750C"
    />
    <path
      d="M38.1028 12.2999C38.1028 17.664 34.7408 22.199 30.1202 23.6843C31.1601 24.0185 32.2637 24.1983 33.4072 24.1983C39.6311 24.1983 44.6766 18.8712 44.6766 12.2999C44.6766 5.72861 39.6311 0.401516 33.4072 0.401516C32.2637 0.401516 31.1601 0.581304 30.1202 0.915565C34.7408 2.4008 38.1028 6.93583 38.1028 12.2999Z"
      fill="#E6750C"
    />
    <path
      d="M43.7375 50.9697C43.5757 50.9697 43.4171 50.9553 43.2628 50.9277L43.2679 50.9697H43.7375Z"
      fill="#E6750C"
    />
    <path
      d="M46.5549 47.9951C46.5549 37.6777 39.4476 29.113 30.1202 27.4608C31.1892 27.2715 32.2873 27.1729 33.4072 27.1729C44.2991 27.1729 53.1287 36.4953 53.1287 47.9951C53.1287 49.6379 51.8674 50.9697 50.3114 50.9697C50.1496 50.9697 49.991 50.9553 49.8367 50.9277L49.8418 50.9697H43.7375C45.2935 50.9697 46.5549 49.6379 46.5549 47.9951Z"
      fill="#E6750C"
    />
  </svg>
);

function LandingBar() {
  const items = [
    { id: 0, svg: svg1, value: "+500", title: "courses to learn" },
    { id: 1, svg: svg2, value: "+40", title: "professional teacher" },
    { id: 2, svg: svg3, value: "+6K", title: "student online" },
  ];
  return (
    <div className="landing-bar">
      {items.map((item) => (
        <LandingBarItem
          key={item.id}
          svg={item.svg}
          value={item.value}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default LandingBar;