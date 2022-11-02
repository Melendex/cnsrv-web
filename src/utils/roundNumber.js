const getRound = (number) => {
    const factor = 100;
    return Math.round( (number + Number.EPSILON) * factor ) / factor
}

export default  getRound;