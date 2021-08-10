import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    color: #fff;
    padding: .75rem 2rem;
    text-transform: capitalize;
    box-shadow: 0 12px 3px -3px #FFD5CD;
    outline: none;
    cursor: pointer;
    border: none;
    background: ${({ primary }) => (primary ? "#F16139" : "FFD5CD")};
    font-size: ${({ big }) => (big ? ".9rem" : ".8rem")};
    border-radius: 30px;
    text-decoration: none;
`;