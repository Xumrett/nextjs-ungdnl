import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>©MarketInc</title>
        <meta name="theme-color" content="#000"/>
      </Head>

      <main className={styles.main}>
      <h1 id="">©MarketInc</h1>
      <p>Tienda Electrónica.</p>
      &nbsp;
      &nbsp;
      &nbsp;
      <p>MarketInc Mercado Electrónico </p>
      <span>Inicio.</span>
      <a href="portal/index.js">ir</a>
    
       

       
    
    

      
        
        
        
        
          
        
        

        
          


            
          
        
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
