import React from "react";
import { Container, Tag } from "./styles";

interface IHistoryFinanceCard{
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
    type:string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ( {
    tagColor,
    title,
    subtitle,
    amount,
    type }
) => {

    return (
        <Container type = {type}>
            <Tag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );
}

export default HistoryFinanceCard;