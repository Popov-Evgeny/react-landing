import React, {useState} from 'react';
import styled from "styled-components";

const Works = () => {
    const [list, setList] = useState<string[]>([
        'Web Design',
        'Development',
        'Illustration',
        'Product Design',
        'Social Media'
    ]);

    const Section = styled.div`
      height: 100vh;
      scroll-snap-align: center;
      display: flex;
      justify-content: center;
    `;

    const Container = styled.div`
      width: 1300px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
    `;

    const LeftSection = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
    `;

    const List = styled.ul`
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 20px;
    `;

    const ListItem = styled.li`
      font-size: 75px;
      font-weight: bold;
      cursor: pointer;
      color: transparent;
      -webkit-text-stroke: 1px #fff;
      position: relative;

      ::after {
        content: "${(props) => props.text}";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        overflow: hidden;
        color: #ffffff;
        white-space: nowrap;
      }

      &:hover {
        ::after {
          animation: moveText 0.5s linear both;

          @keyframes moveText {
            to {
              width: 100%;
            }
          }

        }
      }
    `;

    const RightSection = styled.div`
      flex: 1;
    `;

    return (
        <Section>
            <Container>
                <LeftSection>
                    <List>
                        {list.map((item) => (
                            <ListItem key={item} text={item}>{item}</ListItem>
                        ))}
                    </List>
                </LeftSection>
                <RightSection>
                    icon
                </RightSection>
            </Container>
        </Section>
    );
};

export default Works;