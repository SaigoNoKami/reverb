import React from 'react';
import {Button} from "@material-ui/core";
import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";
import { Block } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';
import '../styles/Footer.module.scss'


const Index = () => {
    return (
        <>
            <MainLayout>
                <div className="center">
                    <h1>Вітаємо на платформі Reverb!</h1>
                    <h3>Найактуальніші треки саме у нас!</h3>
                </div>
            </MainLayout>

            <style jsx>
                {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </>
    );
};

export default Index;