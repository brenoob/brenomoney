import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
margin-top: -8rem;

div {
    background: var(--shape);
    padding: 1.5rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    border:2px solid ;
    border-color: var(--text-body);
    margin-top:1rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
    &.total-green {
        background: var(--green);
        color: var(--shape);
    }
}
`