import { HeaderOnlyLayout, CallRoomLayout } from "../components/Layout";

import Home from "../pages/Home";
import Following from '../pages/Following';
import SignIn from "../pages/SignIn";
import CallRoom from "../pages/CallRoom";
import Schedule from "../pages/Schedule";

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/signin', component: SignIn, layout: HeaderOnlyLayout},
    {path: '/callroom', component: CallRoom, layout: CallRoomLayout},
    {path: '/schedule', component: Schedule, layout: HeaderOnlyLayout},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes}