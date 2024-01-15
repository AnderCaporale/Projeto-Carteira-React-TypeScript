import React, {useEffect, useMemo, useState} from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { useParams } from "react-router-dom";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listMonths from "../../utils/months";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";


interface IData{
    id: string;
    description: string;
    amountFormatted: string ;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSeleceted, setMonthSelected] = useState<number>(new Date().getMonth()+1);
    const [yearSeleceted, setYearSeleceted] = useState<number>(new Date().getFullYear());
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

    const {movimentType} = useParams();

    const pageData = useMemo(()=>{
        return movimentType === 'entry-balance' ?
        {
            title: 'Entradas',
            lineColor: '#4E41F0',
            listData: gains
        }
        :
        {
            title: 'Saídas',
            lineColor: '#E44C4E',
            listData: expenses
        }
    }, [movimentType]);


    const years:{value: number, label: number}[] = useMemo(()=>{
        let uniqueYears:number[] = [];
        const {listData} = pageData;

        listData.forEach((item) => {
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

    },[pageData]);

    const months:{value:number, label:string}[]  = useMemo(()=>{
        return listMonths.map( (month:string, index:number) => {
            return {
                value: index+1,
                label: month
            }
        });
    },[]);


    const handleFrequencyClick = (frequency:string) => {
        const alreaySelected = selectedFrequency.findIndex(item => item === frequency);

        if (alreaySelected >= 0){
            if(selectedFrequency.length > 1){
                const filtered:string[] = selectedFrequency.filter(item => item !== frequency);
                setSelectedFrequency(filtered);
            }

        } else{
            setSelectedFrequency((prev) => [...prev, frequency]);
        }

    }

    useEffect( () =>{

        const {listData} = pageData;

        const filteredDate = listData.filter(item =>{
            const date:Date = new Date(item.date);
            const month: Number = date.getMonth()+1;
            const year: Number = date.getFullYear();

            return month === monthSeleceted && year === yearSeleceted && selectedFrequency.includes(item.frequency)
        });

        const formattedData = filteredDate.map( item => {
            return{
                id: String(Math.random() * listData.length),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
            }
        })

        setData(formattedData);

    }, [pageData, monthSeleceted, yearSeleceted, selectedFrequency]);

    return (
        <Container>
            <ContentHeader title={pageData.title} line_color={pageData.lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(Number(e.target.value))} defaultValue={monthSeleceted}/>
                <SelectInput options={years} onChange={(e) => setYearSeleceted(Number(e.target.value))} defaultValue={yearSeleceted}/>
            </ContentHeader>

            <Filters>
                <button className={` tag-filter tag-filter-recurrent ${selectedFrequency.includes('recorrente') && 'tag-actived'} `} 
                onClick={()=>{handleFrequencyClick('recorrente')}}>Recorrentes</button>

                <button className={` tag-filter tag-filter-eventual ${selectedFrequency.includes('eventual') && 'tag-actived'} `}
                onClick={()=>{handleFrequencyClick('eventual')}}>Eventuais</button>

            </Filters>


            <Content>
            {
                data.map( item => (
                    <HistoryFinanceCard 
                        key={item.id}
                        tagColor= {item.tagColor}
                        title= {item.description}
                        subtitle= {item.dateFormatted}
                        amount= {item.amountFormatted}
                    />        
                ))
            }       
            </Content>
            
        </Container>
    );
}

export default List;