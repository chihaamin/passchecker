import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import PassGenBtn from "./genPassBtn";
import PasswordBtn from "./passwordBtn";

const CustomCard = () => {
  return (
    <Card className='w-[70%] h-[60vh] bg-neutral-800/50 text-neutral-200 backdrop-blur-md backdrop-saturate-200 shadow-md shadow-neutral-900/60'>
      <CardHeader className='flex gap-3'>
        <Link
          isExternal
          href='https://github.com/ahmedkharrat0/'
        >
          <Image
            alt='github user logo'
            height={40}
            radius='sm'
            src='https://avatars.githubusercontent.com/u/110264970?v=4'
            width={40}
          />
          <div className='flex flex-col p-2'>
            <p className='text-md text-neutral-100'>ahmedkharrat0</p>
          </div>
        </Link>
      </CardHeader>
      <Divider />
      <CardBody className='flex flex-col items-center'>
        <PasswordBtn />
        <PassGenBtn />
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          className='text-neutral-900 hover:text-neutral-100'
          href='https://github.com/ahmedkharrat0/password-strength-checker'
        >
          Checkout the source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
