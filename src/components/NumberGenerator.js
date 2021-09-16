import React, { useState, useEffect } from "react"
import Chart from './Charts/Chart'
import { v4 as uuidv4 } from 'uuid';

// const randoms = new Array(4).fill(0).map(() => Math.floor(Math.random() * 2))

// const randoms = new Array(4).fill(0).map(() => {
//     return {
//         value: Math.floor(Math.random() * 2),
//         key:   uuidv4()
//     }
// })

const NumberGenerator = () => {
    const [randoms, setRandoms] = useState([])
    const [countNum, setcountNum] = useState([])
    useEffect(() => {
        setRandoms(createArray(10))
      }, [])

     

    //----creating array using for()

    const createArray = (size) => {
        const newRandoms = []
        for ( let i = 0; i < size; i++){
            newRandoms.push({
                value: Math.floor(Math.random() * 9),
                key:   uuidv4()
            })
        }
        return newRandoms
    }
    
    

    console.log("randoms", randoms)

    //----creating array using Array.from()

    // const randoms = Array.from({length: 10}, () => Math.floor(Math.random() * 2));
    // const randoms = new Array(4).fill(0).map(() => Math.floor(Math.random() * 2))
    // const randoms = [1, 0, 1, 0]

    

    //----using for() sycle

    // const counter = () => {
    //     let nCount = 0  
    //     for(let i = 0; i < randoms.length; ++i){          
    //         if (randoms[i] === 1) {
    //             nCount++ 
    //             console.log("nCount", nCount)
    //         }}
    //     return nCount    
    // }
    // const n = counter()
    // console.log("0:", counter())
    
    // ----using arr.reduce() better becouse it can run through array onece 

    // const count1 = randoms.reduce((count,num) => (num.value === 1 ? count++ : count),0)
    // console.log("1:", count1)
    // const count0 = randoms.reduce((count,num) => (num.value === 0 ? count++ : count),0)
    // console.log("0:", count0)

    // ---or

    // {
    //     "1": num of 1s 
    //     "0": num of 0s
    // }

    // const result = randoms.reduce((acc, element) => {
    //     if (element.value === 1) {
    //         acc["1"] = acc["1"] + 1
    //     } else if (element.value === 0) {
    //         acc["0"] = acc["0"] + 1
    //     }
    //     return acc
    // }, { "1": 0, "0": 0 })

     

       // ----using arr.filter()
    
    //    const count1 = randoms.filter(num => num.value === 1).length
    //    console.log("1:", count1)
    //    const count0 = randoms.filter(num => num.value === 0).length
    //    console.log("0:", count0)



    // console.log('result', result)

    const result = randoms.reduce((acc, element) => {
        switch (element.value) {
            case 0:
                acc["0"] = acc["0"] + 1;
                break;
            case 1:
                acc["1"] = acc["1"] + 1;
                break;
            case 2:
                acc["2"] = acc["2"] + 1;
                break;
            case 3:
                acc["3"] = acc["3"] + 1;
                break;
            case 4:
                acc["4"] = acc["4"] + 1;
                break;
            case 5:
                acc["5"] = acc["5"] + 1;
                break;
            case 6:
                acc["6"] = acc["6"] + 1;
                break;
            case 7:
                acc["7"] = acc["7"] + 1;
                break;
            case 8:
                acc["8"] = acc["8"] + 1;
                break;
            case 9:
                acc["9"] = acc["9"] + 1;
                break;
            }
            return acc
        }, { "0": 0, "1": 0, "2": 0,"3": 0,"4": 0,"5": 0, "6":0, "7": 0, "8": 0, "9": 0 })

       
        // console.log('result', result)
        const numArray = Object.keys(result).reduce((acc, numLable) => {
            // console.log('numLable', numLable)
            const numbersCount = result[numLable]
            // console.log('numbersCount', numbersCount)
            acc.push({ 'name' : numLable, 'pv' :  numbersCount })
            
            return acc
        }, [])
        console.log('numArray ', numArray )

    
    return(
    <div>
    <h1> Numbers</h1>
    { 
    randoms.map((num) => {
        return(
            <p key={num.key}>{num.value}</p>
        )
    }) 
    }
    
    <h1> Numbers count</h1>
    <Chart numbers={numArray}/>
    </div>

    )
}
export default NumberGenerator