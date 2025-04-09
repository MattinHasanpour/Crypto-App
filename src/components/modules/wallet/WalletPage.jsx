import React, { useState } from 'react';
import { FiCreditCard, FiDollarSign, FiSend, FiDownload, FiPlus, FiMinus } from 'react-icons/fi';
import styles from './Wallet.module.css';
import Layouts from '../../../layouts/Layouts';

const WalletPage = () => {
  const [activeTab, setActiveTab] = useState('balance');
  
  // داده‌های نمونه
  const transactions = [
    { id: 1, type: 'deposit', amount: 100, currency: 'USDT', date: '2023-05-15', status: 'completed' },
    { id: 2, type: 'withdrawal', amount: 50, currency: 'BTC', date: '2023-05-10', status: 'pending' },
    { id: 3, type: 'transfer', amount: 200, currency: 'ETH', date: '2023-05-05', status: 'completed' },
    { id: 4, type: 'deposit', amount: 75, currency: 'USDT', date: '2023-04-28', status: 'completed' },
    { id: 5, type: 'withdrawal', amount: 30, currency: 'BTC', date: '2023-04-20', status: 'failed' },
  ];

  const balances = [
    { id: 1, currency: 'BTC', amount: 0.5, value: 15000 },
    { id: 2, currency: 'ETH', amount: 3.2, value: 6000 },
    { id: 3, currency: 'USDT', amount: 5000, value: 5000 },
    { id: 4, currency: 'ADA', amount: 1000, value: 300 },
  ];

  return (
    <Layouts>
    <div className={styles.walletContainer}>
      <div className={styles.walletHeader}>
        <h2>کیف پول من</h2>
        <p>مدیریت دارایی های دیجیتال شما</p>
      </div>

      <div className={styles.walletTabs}>
        <button 
          className={`${styles.walletTab} ${activeTab === 'balance' ? styles.active : ''}`}
          onClick={() => setActiveTab('balance')}
        >
          <FiDollarSign /> موجودی
        </button>
        <button 
          className={`${styles.walletTab} ${activeTab === 'transactions' ? styles.active : ''}`}
          onClick={() => setActiveTab('transactions')}
        >
          <FiCreditCard /> تراکنش ها
        </button>
      </div>

      <div className={styles.walletActions}>
        <button className={styles.walletActionBtn}>
          <FiSend /> ارسال
        </button>
        <button className={styles.walletActionBtn}>
          <FiDownload /> دریافت
        </button>
        <button className={styles.walletActionBtn}>
          <FiPlus /> واریز
        </button>
        <button className={styles.walletActionBtn}>
          <FiMinus /> برداشت
        </button>
      </div>

      {activeTab === 'balance' ? (
        <div className={styles.balancesGrid}>
          {balances.map((balance) => (
            <div key={balance.id} className={styles.balanceCard}>
              <div className={styles.balanceCurrency}>{balance.currency}</div>
              <div className={styles.balanceAmount}>{balance.amount}</div>
              <div className={styles.balanceValue}>${balance.value.toLocaleString()}</div>
            </div>
          ))}
          <div className={styles.totalBalance}>
            <span>مجموع ارزش:</span>
            <span>$26,300</span>
          </div>
        </div>
      ) : (
        <div className={styles.transactionsList}>
          {transactions.map((transaction) => (
            <div key={transaction.id} className={styles.transactionItem}>
              <div className={styles.transactionIcon}>
                {transaction.type === 'deposit' && <FiDownload className={styles.success} />}
                {transaction.type === 'withdrawal' && <FiMinus className={styles.warning} />}
                {transaction.type === 'transfer' && <FiSend className={styles.info} />}
              </div>
              <div className={styles.transactionDetails}>
                <div className={styles.transactionType}>
                  {transaction.type === 'deposit' ? 'واریز' : 
                   transaction.type === 'withdrawal' ? 'برداشت' : 'انتقال'}
                </div>
                <div className={styles.transactionAmount}>
                  {transaction.amount} {transaction.currency}
                </div>
                <div className={styles.transactionDate}>
                  {new Date(transaction.date).toLocaleDateString('fa-IR')}
                </div>
              </div>
              <div className={`${styles.transactionStatus} ${styles[transaction.status]}`}>
                {transaction.status === 'completed' ? 'تکمیل شده' : 
                 transaction.status === 'pending' ? 'در انتظار' : 'ناموفق'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </Layouts>
  );
};

export default WalletPage;