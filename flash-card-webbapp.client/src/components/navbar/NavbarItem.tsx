import styled from '@emotion/styled';

const StyledLi = styled.li`
    li {
        margin: 0 .75rem;
    }
    a {
        color: var(--tc-primary);
        font-size: var(--fs-l);
        font-weight: var(--fw-500);
    }
    a:hover {
        color: var(--sc-link);
    }
`;

interface NavbarItemProps {
    urlText: string;
    url: string;
}

const NavbarItem = (props : NavbarItemProps) => {
    return (
        <StyledLi>
            <a href={props.url}>{props.urlText}</a>
        </StyledLi>
    );
};

export default NavbarItem;
