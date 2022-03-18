import Map from "./components/map";
import tw from "tailwind-styled-components";
import Link from "next/link";

export default function Home() {
  
  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        <Header>
           <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
           <Profile>
           <UserName>vijay</UserName>
           <UserLogo src="assets/vijay.jpeg"/>
           </Profile>
        </Header>
      <ActionButtons>
        <Link href="/search">
        <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/YDYMKny/uberxl.png"/>
             Ride
          </ActionButton>
          </Link>
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
            2-Wheeler 
          </ActionButton>  
        <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
           Reserve
        </ActionButton>
    </ActionButtons>
    <InputButton>Where to ?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen
`;

const ActionItems = tw.div`
flex-1 m-4
`;

const Header = tw.div`flex justify-between mb-3`

const UberLogo =tw.img` h-30 object-fit w-40 p-px w-[11rem] transform hover:scale-105`

const Profile =tw.div`flex items-center`

const UserName= tw.div` w-17 text-xl`

const UserLogo= tw.img`border-gray-200 rounded-full w-30 h-20 p-px`

const ActionButtons= tw.div`flex`

const ActionButton= tw.div` bg-gray-200 m-1 h-32 flex flex-1 items-center flex-col justify-center rounded-lg transform hover:scale-105 cursor-pointer transition text-xl`

const ActionButtonImage= tw.img`
h-3/5`

const InputButton=tw.div`h-20 bg-gray-200 text-2xl flex items-center p-4 mt-8`;