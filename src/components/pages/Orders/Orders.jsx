import Card from '../../Card/Card';
import styles from './Orders.module.scss';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get(
          'https://62acc3c99fa81d00a7b936b6.mockapi.io/orders'
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      })();
    } catch (error) {
      alert('Error');
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Мои покупки</h2>
      <div className={styles.containerContent}>
        {(isLoading ? Array(12).fill({}) : orders).map((item, index) => {
          return (
            <Card
              loading={isLoading}
              title={item.title}
              price={item.price}
              img={item.img}
              id={item.id}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
