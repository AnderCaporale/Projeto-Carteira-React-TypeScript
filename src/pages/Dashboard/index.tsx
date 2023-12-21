import React, {useState, useMemo} from "react";
import { Container, Content } from "./styles";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChartBox from "../../components/PieChartBox";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listMonths from "../../utils/months";

import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'

const Dashboard: React.FC = () => {

    const [monthSeleceted, setMonthSelected] = useState<number>(new Date().getMonth()+1);
    const [yearSeleceted, setYearSeleceted] = useState<number>(new Date().getFullYear());


    const years:{value: number, label: number}[] = useMemo(()=>{
        let uniqueYears:number[] = [];

        [...expenses, ...gains].forEach((item) => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map((year:number)=>{
            return {
                value: year,
                label: year
            }
        }) 

    },[]);

    const months:{value:number, label:string}[]  = useMemo(()=>{
        return listMonths.map( (month:string, index:number) => {
            return {
                value: index+1,
                label: month
            }
        });
    },[]);


    const totalExpenses:number = useMemo(()=>{
        let total:number = 0;

        expenses.forEach((item)=>{
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSeleceted && year === yearSeleceted){
                try{
                    total += Number(item.amount);
                } catch{
                    throw new Error('Invalid amount! Amount must be a number.');
                }
            }
        });

        return total;
    }, [monthSeleceted, yearSeleceted]);

    const totalGains:number = useMemo(()=>{
        let total:number = 0;

        gains.forEach((item)=>{
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSeleceted && year === yearSeleceted){
                try{
                    total += Number(item.amount);
                } catch{
                    throw new Error('Invalid amount! Amount must be a number.');
                }
            }
        });

        return total;
    }, [monthSeleceted, yearSeleceted]);

    const totalBalance:number = useMemo(()=>{
        return totalGains - totalExpenses ;
    }, [totalGains, totalExpenses]);

    const message:{title:string, description:string, footerText:string, icon:string} = useMemo(()=>{
        if (totalBalance < 0)
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Tente cortar alguns gastos desnecessários!",
                icon: sadImg
            }

        if (totalBalance === 0)
            return {
                title: "Ufaa!",
                description:"Neste mês, você gastou exatamente o que ganhou!",
                footerText:"Tenha cuidado. No próximo mês, tente poupar o seu dinheiro.",
                icon:grinningImg
            }

        return {
            title: "Muito Bem!",
            description: "Sua carteira está positiva!",
            footerText: "Continue assim. Considere investir o seu saldo.",
            icon: happyImg
        }


    }, [totalBalance]);


    const relationExpensesGains:{name:string, value:number, percent:number, color:string}[] = useMemo(()=>{
        const total:number = totalGains + totalExpenses !== 0 ? totalGains+totalExpenses : 1;

        const percentGains = (totalGains / total) * 100;
        const percentExpenses = (totalExpenses / total) * 100;

        const data:{name:string, value:number, percent:number, color:string}[] = [
            {
                name: "Entradas",
                value: totalExpenses,
                percent: Number(percentGains.toFixed(1)),
                color: "#E44C4E"
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: Number(percentExpenses.toFixed(1)),
                color: "#F7931B"
            }
        ];

        return data;

    }, [totalGains, totalExpenses]);

    return (
        <Container>
            <ContentHeader title="Dashboard" line_color="#F7931B">
                <SelectInput options={months} onChange={(e) => setMonthSelected(Number(e.target.value))} defaultValue={monthSeleceted}/>
                <SelectInput options={years} onChange={(e) => setYearSeleceted(Number(e.target.value))} defaultValue={yearSeleceted}/>
            </ContentHeader>

            <Content>
                <WalletBox
                    title="saldo"
                    amount={totalBalance}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="dolar"
                    color="#4E41F0"
                />

                <WalletBox
                    title="entradas"
                    amount={totalGains}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#F7931B"
                />

                <WalletBox
                    title="saídas"
                    amount={totalExpenses}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#E44C4E"
                />

                <MessageBox 
                    title= {message.title}
                    description= {message.description}
                    footerText= {message.footerText}
                    icon= {message.icon}
                />

                <PieChartBox data={relationExpensesGains} />

            </Content>
            
        </Container>
    );
}

export default Dashboard;