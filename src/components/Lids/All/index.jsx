import { useContext, useEffect, useState } from 'react'
import { GenericTable } from "../../Generics/Table"
import { Action, Container } from "./style"
import BreadCrumbs from "../../Generics/BreadCrumbs";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
import GenericSelect from '../../Generics/Select';
import { useFetch } from '../../../hooks/useFetch';
import { StudentsContext } from '../../../context/students';
import useQuery from '../../../hooks/useQuery';
import useReplace from '../../../hooks/replace';
import { useLocation, useNavigate } from 'react-router-dom';
import GenriscInput from '../../Generics/Input';
import { groups } from '../../../utils/groups';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
export const Allids = () => {
    const [open, setOpen] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [modalOpen, setModal] = useState(false)
    const [modalProps, setModalProps] = useState({})
    const [state, dispatch] = useContext(StudentsContext)
    const location = useLocation()
    const query = useQuery()
    const navigate = useNavigate()
    const request = useFetch();
    const [filter, setFilter] = useState({
        name: query.get("name") || '',
       field: query.get("field"), 
       group: query.get("group"),
        days: query.get("days"),
        admin: query.get("amin"),
        date: query.get("date"),
    })
    const getStudent = async (query = "") => {
        setSpinner(true)
        let res = await request(`/tabs/students${query}`);
        dispatch({ type: "get", payload: res })
        setSpinner(false)

    }
    useEffect(() => {
        getStudent()
    }, [])

    const onEdit = (e, res) => {
        e.stopPropagation()
        setModal(!modalOpen)
        setModalProps(res)

    }
    const onMove = (e, value) => {
        setSpinner(true)
        e.stopPropagation();
        request(`/tabs/studentds/id/*${value.id}*`, { method: "DELETE" }).then(() => {
            getStudent()
            setSpinner(false)
        })
    }

    const headCells = [
        { id: 'name', label: 'O’quvchining ismi' },
        { id: 'field', label: 'Guruh / Fan' },
        { id: 'days', label: 'Dars kuni va vaqti' },
        { id: 'added_date', label: 'Qo’shilgan sana' },
        { id: 'admin', label: 'Moderator' },
        {
            id: 'action', label: '', render: (res) => (
                <Action>
                    <Action.Edit onClick={(e) => onEdit(e, res)} />
                    <Action.Move onClick={(e) => onMove(e, res)} />
                </Action>
            )
        }
    ]

    const onToggleModal = () => {
        setModal(!modalOpen)
        setModalProps(null)
    }
    const onSave = () => {
        setOpen(false)
    }
    const onChangeFilter = ({ target }) => {
        const { value, name } = target
        setFilter({ ...filter, [name]: value });
        const query = useReplace(value, name);
        navigate(`${location.pathname}${query}`);
        getStudent(`/search${query}`)
    }
        

    const setSelectedDate = (date) => {
        const time = moment(date);
        const formattedDate = time.isValid() ? `${time.date()}/${time.month() + 1}/${time.year()}` : null;
        setFilter({ ...filter, date: formattedDate });
        const query = useReplace(formattedDate, 'date');
        navigate(`${location.pathname}${query}`);

    //     // O'quvchilarni qidirish
        getStudent(`/search${query}`);
    };
    return (
        <Container>
            <AllLidsModal open={modalOpen} data={modalProps} onClose={onToggleModal} onSave={onSave} />
            <BreadCrumbs>
                <GenericButton type='filter' onClick={() => setOpen(!open)} >Filter</GenericButton>
                <GenericButton type='import'>import</GenericButton>
                <GenericButton type='add' onClick={onToggleModal} >Buyurtma Qo'shish</GenericButton>
            </BreadCrumbs>
            <GenericTable open={open} headCells={headCells} rows={state} spinner={spinner}>
                <GenriscInput
                    type='text'
                    value={filter.name}
                    name='name'
                    placeholder='Name'
                    onChange={onChangeFilter}
                />

                <GenericSelect name='field' data={groups} onChange={onChangeFilter}/>
                <GenriscInput
                    type='text'
                    value={filter.week}
                    name='name'
                    placeholder='Name'
                    onChange={onChangeFilter}
                />
                {/* <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    value={moment}
                    onChange={setSelectedDate}
                    slotProps={{ textField: { size: 'small' } }}
                    componentsProps={{
                        actionBar: {
                            actions: ['clear']
                        }
                    }}
                />
            </LocalizationProvider> */}
                <LocalizationProvider dateAdapter={AdapterDayjs} style={{ top: '-16px' }}>
                    <DatePicker
                        style={{ padding: '0', width: '270px', flex: '0 0 auto' }}
                    />
                </LocalizationProvider>
                <GenriscInput
                    type='text'
                    value={filter.admin}
                    name='admin'
                    placeholder='moderator'
                    onChange={onChangeFilter}
                />
                {/* <GenericSelect name='days' data={data1} />
                <GenericSelect name='admin' data={data1} />
                <GenericSelect name='date' data={data1} /> */}
            </GenericTable>
        </Container>
    )
}
