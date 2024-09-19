import { GenericTable } from "../../Generics/Table"
import { Container } from "./style"

export const Allids = () => {
    const rows = [
        { id: 'name',name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin',  label: 'O’quvchining ismi' },
        { id: 'group',name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin',  label: 'Guruh / Fan' },
        { id: 'date',name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404', admin:'Admin', label: 'Dars kuni va vaqti' },
        { id: 'addedDate', name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin', label: 'Qo’shilgan sana' },
        { id: 'admin', name:'Webbrain', group:'front-end', date:'21.21.2002', addedDate:'21.04.2404',admin:'Admin', label: 'Moderator' }
      ];

    const headCells = [
        { id: 'name', label: 'O’quvchining ismi' },
        { id: 'group', label: 'Guruh / Fan' },
        { id: 'date', label: 'Dars kuni va vaqti' },
        { id: 'addedDate', label: 'Qo’shilgan sana' },
        { id: 'admin', label: 'Moderator' }
    ]
    return (
        <Container>
            <GenericTable headCells={headCells} rows={rows} />
        </Container>
    )
}
