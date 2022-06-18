import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-size: 18px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  
  &:hover  img {
      transform: rotate(20deg);
      }
    `;

    const Logo = () => {
        const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`;

        return (
            <Link href="/" scroll={false}>
                <a>
                    <LogoBox>
                        <Image src={footPrintImg} alt="footprint" width="20" height="20" />
                        <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight='bold'
                        ml={3}
                        >
                            Alexander Andersson
                        </Text>
                    </LogoBox>
                </a>
            </Link>
        )
    }

    export default Logo;