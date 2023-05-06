export default function splitRounds(pokeList){
    const partSize = 12;
    const result = [];

    for (let i = 0; i < 4; i++) {
        const start = i * partSize;
        const end = start + partSize;
        const part = pokeList.slice(start,end);
        result.push(part)
    }
    return result
}