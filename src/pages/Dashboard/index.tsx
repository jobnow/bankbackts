import React from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '~/hooks/AuthContext';

import api from '~/services/api';
import Menu from '../../components/Menu';

import {
  Container,
  Navbar,
  Profile,
  Content
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>

      <Menu />

      <Content>
        <Navbar>
          <Profile>
            <Link to="/profile">
             
              <div>
                <strong>{user.name}</strong>
                <img src={user.avatar_url} alt={user.name} />
              </div>
              
            </Link>
          </Profile>
        </Navbar>
      </Content>

    </Container>
  );
};

export default Dashboard;
