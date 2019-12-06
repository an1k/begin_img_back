
const bayDetails=[
    {
        id:1,
        TL:15,
        ASE:30,
        SSE:20
    },
    {
        id:2,
        TL:15,
        ASE:30,
        SSE:20
    },
    {
        id:3,
        TL:15,
        ASE:30,
        SSE:20
    },
    {
        id:4,
        TL:15,
        ASE:30,
        SSE:20
    }
]




module.exports.getSomeDetails=function(systems){
    return bayDetails.find(item=>item.id==id)
}

