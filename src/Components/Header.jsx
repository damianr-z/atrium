import styled from '@emotion/styled';
import Logo from './Logo';
import ContactButtons from './ContactButtons';
import AppointmentBtn from './AppointmentBtn';

const StyledHeader = styled.section`
  background: var(--c-background);
  display: grid;
  grid-template-columns: minmax(min-content, max-content) 1fr minmax(
      min-content,
      max-content
    );
  align-items: center;
  justify-items: center;
  padding: 1rem 2rem;
  gap: 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1rem;
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
    padding: 1.5rem 1rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo type={'large'} />
      <ContactButtons />
      <AppointmentBtn />
    </StyledHeader>
  );
};

export default Header;
