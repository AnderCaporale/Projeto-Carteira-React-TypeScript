import React from "react";
import { Container, SideLeft, SideRight, LegendContainer, Legend } from "./style";
import formatCurrency from "../../utils/formatCurrency";

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip, Rectangle } from "recharts";


interface IBarChartProps {
    title: string,
    data : {
        name: string,
        amount: number,
        percent: number,
        color: string
    }[],
}

const BarChartBox: React.FC<IBarChartProps> = ({title, data}) => {

    return (
        <Container>
            <SideLeft>
                <h2>{title}</h2>

                <LegendContainer>
                {
                    data.map( (indicator)=>(
                        <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey={"amount"} activeBar={<Rectangle fill="red" stroke="blue" />}>
                            {
                                data.map( (indicator) => (
                                    <Cell
                                        key = {indicator.name}
                                        cursor={"pointer"}
                                        fill={indicator.color}
                                        
                                    />
                                ))
                            }
                        </Bar>

                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
            


        </Container>
    )


}


export default BarChartBox;