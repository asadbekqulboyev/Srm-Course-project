import GenericTable from '../../../Generics/Table';
import { Container } from './style';
import { Status } from './style';
import { CustomSwitch } from './style';
import BreadCrumbs from '../../BreadCrumbs';
export const Tolovlar = () => {
    const headCells = [
        { id: 'jarimalar', label: 'Jarimalar' },
        { id: 'price', align:'right' ,
            label: <CustomSwitch />,render:(props)=>{
                return <Status>{props.price}</Status>
            }}
    ]
    const rows = [
        {
            id: 1, 
            jarimalar: 'Buyurtmani qabul qilmagani uchun jarima miqdori', 
            price:"10 000",
            status:true
        },
        {
            id: 2, 
            jarimalar: 'To’lov qilmasdan ketgani uchun jarima miqdori', 
            price:"20 000",
            status:true

        },
        {
            id: 3, 
            jarimalar: 'Ishga kech qolgan', 
            price: '10 000', 
            status:false
            
        },
    ];
    const headCellsBonus = [
        { id: 'bonus', label: 'To’lov turi' },
        { id: 'price', align:'right' ,
            label: <CustomSwitch />,render:(props)=>{
                return <Status bonus>{props.price}</Status>
            }}
    ]
    const rowsBonus = [
        {
            id: 1, 
            bonus: 'Buyurtmani qo’shgani uchun bonus miqdori', 
            price:"10 000",
            status:true
        },
        {
            id: 2, 
            bonus: 'Birinchi to’lovi uchun bonus miqdori', 
            price:"20 000",
            status:true

        },
        {
            id: 3, 
            bonus: 'Eski faol talaba uchun har oylik bonus miqdori', 
            price: '10 000', 
            status:false
            
        },
    ];
    return (
        <Container>
             <BreadCrumbs/>
             <GenericTable width='100%'  headCells={headCellsBonus} rows={rowsBonus} checkbox={false} >
            </GenericTable>
         <GenericTable width='100%'  headCells={headCells} rows={rows} checkbox={false} >
            </GenericTable>
            
        </Container>
    )
}
export default Tolovlar