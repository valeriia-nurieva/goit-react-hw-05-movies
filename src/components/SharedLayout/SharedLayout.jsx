import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Container, Header, StyledLink } from "./SharedLayout.styled";
import { Loader } from 'components/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
