import React from 'react';
import styled from '@emotion/styled';
import ApiClient from '../misc/ApiClient';

const StyledButton = styled.button`
  background-color: #ff6347;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #ff4500;
  }
`;

const LogoutButton: React.FC = () => {

    const handleLogout = async () => {
        try {
            const response = await ApiClient.post('/auth/logout');
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return <StyledButton onClick={handleLogout}>Logout</StyledButton>;
};

export default LogoutButton;