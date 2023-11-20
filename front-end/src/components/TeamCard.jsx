import React from "react";
import styled, { useTheme } from "styled-components";
import { Avatar } from "@mui/material";

const Card = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 16px 22px;
  gap: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.card + "90"};
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
  }
`;

const TeamName = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const MamberName = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TeamDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FlexEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const Members = styled.div`
  width: min-content;
  display: flex;
  flex-direction: row;
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 0.9vw;
  white-space: nowrap;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 1000px) {
    font-size: 1.3vw;
  }
  @media (max-width: 768px) {
    font-size: 1.5vw;
  }
  @media (max-width: 600px) {
    font-size: 1.8vw;
  }
`;
const TeamCard = ({ team, setOpenTeamDetails }) => {
  const theme = useTheme();
  return (
    <Card
      onClick={() =>
        setOpenTeamDetails({
          open: true,
          team: team,
        })
      }
    >
      <div>
        <TeamName>{team?.team_name}</TeamName>
        {team?.team_members.slice(0, 5).map((member) => (
        <>
              
           
          
      <MamberName>
        {member?.first_name} 
        
      </MamberName>
      
        </>    
          
          ))}
      </div>
      <FlexEnd>
        <Members
          style={{
            justifyContent: "center",
          }}
        >
          

          {team?.team_members.length > 5 && (
            <Avatar
              sx={{
                marginRight: "-10px",
                width: "36px",
                height: "36px",
                fontSize: "14px",
                backgroundColor: theme.text_primary,
                border: "2px solid " + theme.card,
                color: theme.black,
              }}
            >
              +{team?.team_members.length - 5}
            </Avatar>
          )}
        </Members>
      </FlexEnd>
    </Card>
  );
};

export default TeamCard;
