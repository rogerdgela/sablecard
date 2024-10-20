import styled from 'styled-components';

export const ComparisonTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 62px;
`;

export const TableHeader = styled.th`
    padding: 15px;
    text-align: center;
    vertical-align: top;
`;

export const CardCompare = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

    p {
        color: rgba(16, 172, 162, 1);
        font-size: 24.72px;
        font-weight: 400;
        line-height: 29.66px;
        text-align: left;
        width: 228px;
    }
`	


export const TableData = styled.td`
    padding: 15px;
    border-bottom: 1px solid #444;
`;

export const LockedIcon = styled.span`
    color: #888;
`;

export const CheckIcon = styled.span`
    color: #00FF00;
`;

export const Price = styled.span`
    font-size: 1.5em;
    font-weight: bold;
`;

export const Button = styled.button`
    margin-top: 30px;
    background-color: rgba(16, 172, 162, 1);
    padding: 15.53px 24.06px 14.75px 22.97px;
    border-radius: 135.17px;
    font-size: 12.52px;
    font-weight: 600;
    line-height: 16.22px;
    letter-spacing: 1.4px;
    cursor: pointer;
`