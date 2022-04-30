export const CrossIcon = () => (
  <svg
    stroke="currentColor"
    fill="red"
    strokeWidth="0"
    viewBox="0 0 94.926 94.926"
    xmlns="http://www.w3.org/2000/svg"
    className=""
  >
    <path
      d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
    />
  </svg>
);

export const BurgerMenu = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="white"
    >
      <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z" />
    </svg>
  );
};
export const OpenNewTab = () => {
  return (
    <svg
      className="w-[35px] inline-block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon
        fill="var(--ci-primary-color, currentColor)"
        points="400 464 48 464 48 104 240 104 240 72 16 72 16 496 432 496 432 272 400 272 400 464"
        className="ci-primary"
      />
      <polygon
        fill="var(--ci-primary-color, currentColor)"
        points="304 16 304 48 441.373 48 188.687 300.687 211.313 323.313 464 70.627 464 208 496 208 496 16 304 16"
        className="ci-primary"
      />
    </svg>
  );
};
export const ArrowRight = () => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2 mt-1"
    >
      <path
        d="M1 1L6 6L1 11"
        stroke="#635BFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const LeftArrow = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="13"
        cy="13"
        r="13"
        transform="rotate(180 13 13)"
        fill="#6765FE"
      />
      <path
        d="M7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L13.6569 20.0711C14.0474 20.4616 14.6805 20.4616 15.0711 20.0711C15.4616 19.6805 15.4616 19.0474 15.0711 18.6569L9.41421 13L15.0711 7.34315C15.4616 6.95262 15.4616 6.31946 15.0711 5.92893C14.6805 5.53841 14.0474 5.53841 13.6569 5.92893L7.29289 12.2929ZM9 12H8V14H9V12Z"
        fill="white"
      />
    </svg>
  );
};
export const RightArrow = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="13" fill="#6765FE" />
      <path
        d="M18.7071 13.7071C19.0976 13.3166 19.0976 12.6834 18.7071 12.2929L12.3431 5.92893C11.9526 5.53841 11.3195 5.53841 10.9289 5.92893C10.5384 6.31946 10.5384 6.95262 10.9289 7.34315L16.5858 13L10.9289 18.6569C10.5384 19.0474 10.5384 19.6805 10.9289 20.0711C11.3195 20.4616 11.9526 20.4616 12.3431 20.0711L18.7071 13.7071ZM17 14H18V12H17V14Z"
        fill="white"
      />
    </svg>
  );
};
