// icons
import Analitika from "../assets/icons/analytics.svg?react";
import Lid from "../assets/icons/lid.svg?react";
import Finance from "../assets/icons/finance.svg?react";
import Students from "../assets/icons/student.svg?react";
import Groups from "../assets/icons/group.svg?react";
import Course from "../assets/icons/course.svg?react";
import HR from "../assets/icons/hr.svg?react";
import Settings from "../assets/icons/setting.svg?react";
// Components
import { Generics } from "../view/Generics";
import { AnalitikaView } from "../view/AnalitikaView";
import AllidsView from "../view/Lids/All";
import FirstClassView from "../view/Lids/First";
import NewStudent from "../components/Lids/NewStudent";
import AllStudentsView from "../view/Students/All";
import ActiveStudents from "../components/Students/ActiveStudents";
import ArchiveStudentsView from "../view/Students/Archive";
import GururhlarView from "../view/Guruhlar/Guruhlar";
import ScheduleView from "../view/Guruhlar/Schedule";
import RoomsView from "../view/Guruhlar/Rooms";
import HodimlarView from "../view/HR/Hodimlar";
import RolesView from "../view/HR/Roles";
import GroupsListView from "../view/Kurslar/List";
import FieldsView from "../view/Kurslar/Field";
import UmumiyView from "../view/Sozlamalar/umumiy";
import TolovlarView from "../view/Sozlamalar/Tolovlar";
import ManagerView from "../view/Sozlamalar/manager";
import { LoginView } from "../view/LoginWiew";


const sidebar = [
  {
    id: 1,
    title: "Analitika",
    path: "/analitika",
    icon: Analitika,
    isPrivate: true,
    element: AnalitikaView,
    role: ["admin", "manager"],
  },
  {
    id: 2,
    title: "Lidlar", // buyurtma
    path: "/lidlar",
    isPrivate: true,
    icon: Lid,
    element: Generics,
    role: ["admin"],
    children: [
      {
        id: `2-1`,
        parentID: 2,
        title: "Barcha Lidlar",
        path: "/lidlar/all-lids",
        isPrivate: true,
        element: AllidsView,
        role: ["admin", "manager"],
      },
      {
        parentID: 2,
        id: `2-2`,
        title: "Birinchi Dars",
        path: "/lidlar/first-class",
        isPrivate: true,
        element: FirstClassView,
        role: ["admin", "manager"],
      },
      {
        id: `2-3`,
        title: "Yangi Talabalar",
        path: "/lidlar/new-students",
        parentID: 2,
        isPrivate: true,
        element: NewStudent,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 3,
    title: "Moliya",
    path: "/moliya",
    isPrivate: true,
    icon: Finance,
    element: Generics,
    hidden: true,
    role: ["admin"],
  },
  {
    id: 4,
    title: "Talabalar",
    path: "/talabalar",
    isPrivate: true,
    element: Generics,
    icon: Students,
    role: ["admin", "mentor", "manager"],
    children: [
      {
        id: `4-1`,
        title: "Barcha talabalar",
        parentID: 4,
        path: "/talabalar/all-talabalar",
        isPrivate: true,
        element: AllStudentsView,
        role: ["admin", "manager"],
      },
      // {
      //   id: `4-2`,
      //   title: "Davomat",
      //   path: "/talabalar/davomat",
      //   parentID: 4,
      //   isPrivate: true,
      //   element: Generics,
      //   role: ["admin", "manager"],
      // },
      {
        id: `4-3`,
        title: "Aktive",
        path: "/talabalar/active",
        parentID: 4,
        isPrivate: true,
        element: ActiveStudents,
        role: ["admin", "manager"],
      },
      {
        id: `4-4`,
        title: "Arxiv",
        path: "/talabalar/archive",
        isPrivate: true,
        parentID: 4,
        element: ArchiveStudentsView,
        role: ["admin", "manager"],
      },
      // {
      //   id: `4-5`,
      //   title: "Ota-onalar",
      //   path: "/talabalar/parents",
      //   parentID: 4,
      //   isPrivate: true,
      //   element: Generics,
      //   role: ["admin", "manager"],
      // },
    ],
  },
  {
    id: 5,
    title: "Guruhlar",
    path: "/guruhlar",
    isPrivate: true,
    icon: Groups,
    element: Generics,
    role: ["admin", "mentor", "manager"],
    children: [
      {
        id: `5-1`,
        parentID: 5,
        title: "Guruhlar",
        path: "/guruhlar/guruhlar",
        isPrivate: true,
        element: GururhlarView,
        role: ["admin", "manager"],
      },
      // {
      //   id: `5-2`,
      //   title: "Dars Jadvali",
      //   parentID: 5,
      //   path: "/guruhlar/jadval",
      //   isPrivate: true,
      //   element: ScheduleView,
      //   role: ["admin", "manager"],
      // },
      {
        id: `5-3`,
        title: "Xonalar",
        parentID: 5,
        path: "/guruhlar/xonalar",
        isPrivate: true,
        element:RoomsView,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 6,
    title: "Kurslar",
    path: "/kurslar",
    isPrivate: true,
    icon: Course,
    element: Generics,
    role: ["admin", "mentor", "manager"],
    children: [
      {
        id: `6-1`,
        title: "Barcha Kurslar",
        path: "/kurslar/all-kurslar",
        parentID: 6,
        isPrivate: true,
        element:GroupsListView,
        role: ["admin", "manager"],
      },
      {
        id: `6-2`,
        parentID: 6,
        title: "Yo'nalishlar",
        path: "/kurslar/yonalish",
        isPrivate: true,
        element:FieldsView,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 7,
    title: "HR",
    path: "/hr",
    isPrivate: true,
    icon: HR,
    element: Generics,
    role: ["admin", "manager"],
    children: [
      {
        id: `7-1`,
        parentID: 7,
        title: "Ro'llar",
        path: "/hr/role",
        isPrivate: true,
        element: RolesView,
        role: ["admin", "manager"],
      },
      {
        id: `7-2`,
        parentID: 7,
        title: "Hodimlar",
        path: "/hr/hodimlar",
        isPrivate: true,
        element: HodimlarView,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 8,
    title: "Sozlamalar",
    path: "/sozlamalar",
    isPrivate: true,
    icon: Settings,
    element: Generics,
    role: ["admin", "manager"],
    children: [
      {
        id: `8 - 1`,
        title: "Umumiy Sozlamalar",
        parentID: 8,
        path: "/sozlamalar/umumiy/check",
        isPrivate: true,
        element: UmumiyView,
        role: ["admin", "manager"],
      },
      {
        id: `8 - 2`,
        title: "Manager",
        path: "/sozlamalar/manager/tolovlar",
        parentID: 8,
        isPrivate: true,
        element: ManagerView,
        role: ["admin", "manager"],
      },
      {
        id: `8 - 3`,
        title: "Mentor",
        path: "/sozlamalar/ustoz/kpi",
        isPrivate: true,
        parentID: 8,
        element: 'Generics',
        role: ["admin", "manager"],
      },
      {
        id: `8 - 4`,
        title: "Talaba",
        path: "/sozlamalar/student/tolovlar",
        parentID: 8,
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 9,
    title: "Log In",
    path: "/login",
    isPrivate: true,
    element: LoginView,
    hidden: true,
  },
  {
    id: 10,
    title: "Reset",
    path: "/reset",
    isPrivate: true,
    element: Generics,
    hidden: true,
  },
];

export default sidebar;
