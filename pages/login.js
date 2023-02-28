import Button from '@mui/material/Button';
import Login from '../components/login/login';

export default function () {
    return (
        <div>
            <Login />
        </div>
    )
}

export const getServerSideProps = async({req}) => {
    return {
        props: {}
    }
}