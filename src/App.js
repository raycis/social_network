import React from 'react';
import styles from './App.module.css';
import Header from "./global_components/Header/Header";
import NavBar from "./global_components/NavBar/NavBar";
import Content from "./global_components/Content/Content";

const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.navbar}>
                <NavBar />
            </div>
            <div className={styles.content}>
                <Content/>
            </div>
        </div>
    );
}

export default App;
