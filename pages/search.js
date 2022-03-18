// import { Input } from 'postcss';
import React from 'react'
import tw from "tailwind-styled-components";
import Link from "next/link";

function search() {
  return (

    <Wrapper>

      <ButtonContainer>
       <Link href="/">
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </Link>
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src=" https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
          <Square src=" https://img.icons8.com/windows/50/000000/square-full.png"/>
          </FromToIcons>

          <InputBoxes>
          <Input placeholder="Strating Location"/>
          <Input placeholder="Destination Location"/>
          </InputBoxes>
          <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
             Saved Places
      </SavedPlaces>

      </Wrapper>
  )
}

const Wrapper= tw.div`bg-gray-200 h-screen`;

const ButtonContainer=tw.div`bg-yellow-200 px-4`;

const BackButton=tw.img``;

const InputContainer=tw.div`bg-white flex items-center px-4 mb-2`;

const FromToIcons= tw.div`flex w-10 flex-col mr-2 mb-2 items-center`;

const Circle=tw.img`h-2.5`;

const Line=tw.img`h-10`;

const Square= tw.img`h-3`;

const InputBoxes=tw.div`flex  flex-1 flex-col`;

const Input=tw.input`h-10 bg-gray-200 my-2 rounded-2 p-2 outline-blue border-none`;

const PlusIcon = tw.img`bg-gray-200 w-10 h-10 rounded-full ml-5`;

const SavedPlaces= tw.div`flex items-center bg-white px-4 py-2`;

const StarIcon = tw.img`bg-gray-400 w-10 h-10 rounded-full p-2 mr-2`;

export default search