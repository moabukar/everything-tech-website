import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  blue: {
    ['100']: '#CAF0F8',
    ['200']: '#ADE8F4',
    ['300']: '#90E0EF',
    ['400']: '#48CAE4',
    ['500']: '#00B4D8',
    ['600']: '#0096C7',
    ['700']: '#0077B6',
    ['800']: '#023E8A',
    ['900']: '#03045E'
  },
  green:{
    // ['000']:['#92E6A7'], //granny smith apple
    ['100']: '#B7EFC5',
    ['200']: '#6EDE8A',
    ['300']: '#4AD66D',
    ['400']: '#2DC653',
    ['500']: '#25A244',
    ['600']: '#208B3A',
    ['700']: '#1A7431',
    ['800']: '#155D27',
    ['900']: '#10451D'
  },
  teal: {
    ['100']: '#88D4AB',
    ['200']: '#78C6A3',
    ['300']: '#67B99A',
    ['400']: '#56AB91',
    ['500']: '#469D89',
    ['600']: '#358F80',
    ['700']: '#248277',
    ['800']: '#14746F',
    ['900']: '#036666'
  },
  gray:{
    ['100']: '#dfd9d3',
    ['200']: '#cbc5c0',
    ['300']: '#b9b3af',
    ['400']: '#a8a39f',
    ['500']: '#999491',
    ['600']: '#8b8784',
    ['700']: '#7e7b78',
    ['800']: '#73706d',
    ['900']: '#696663'
  },
  burgundy:{
    ['100']: '#ffccd5',
    ['200']: '#ffb3c1',
    ['300']: '#ff8fa3',
    ['400']: '#ff758f',
    ['500']: '#ff4d6d',
    ['600']: '#c9184a',
    ['700']: '#a4133c',
    ['800']: '#800f2f',
    ['900']: '#590d22'
  },
  grayBlue:{
    ['100']: '#979dac',
    ['200']: '#7d8597',
    ['300']: '#5c677d',
    ['400']: '#33415c',
    ['500']: '#001233',
    ['600']: '#001845',
    ['700']: '#002855',
    ['800']: '#023e7d',
    ['900']: '#0353a4',
    // ['1000']:'#0466c8'
  }
}

const theme = extendTheme({
  colors:{
    brand: colors.blue,
    ...colors
  },
  styles: {
    global: (props: any) => ({
      body: { bg: mode(colors.blue['900'], colors.gray['500'])(props) }
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
