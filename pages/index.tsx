import * as React from 'react';
import { Inter } from "next/font/google";
import Button from '@mui/material/Button';
import styles from "@/styles/Home.module.css";
import { useUnit } from "effector-react";
import { $number, randomNum, incrementCounter, decrementCounter } from "@/stores/random";
import { Box, Typography } from '@mui/material';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { number, onRandom, onIncrement, onDecrement} = useUnit({
    number: $number,
    onRandom: randomNum,
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
  });

  return (
      <div className={styles.main}>
        <Typography variant="h2" component="h1" gutterBottom>Число: {number}</Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}>
        <Button variant="outlined" onClick={() => decrementCounter()}>Уменьшить</Button>
        <Button variant="contained" onClick={() => randomNum()}>Случайное число</Button>
        <Button variant="outlined" onClick={() => incrementCounter()}>Увеличить</Button>
        </Box>
      </div>
  );
}
