import { Empty } from 'keep-react';

const Error = () => {
  return <Empty title="404 Not Found" content="Please, try with the valid url." buttonText="Go To Home Page" redirectBtnSize="md" redirectUrl="/" image={<Image src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg" height={234} width={350} alt="404" />} />;
};

export default Error;
