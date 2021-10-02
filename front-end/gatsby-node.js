const fetch = require('node-fetch');
const dataUrl = 'https://raw.githubusercontent.com/ttngocthao/littleSweet/master/back-end/data/cakes.json';
const NODE_TYPE='Cake';

exports.sourceNodes = async ({actions,createNodeId,createContentDigest})=>{
    const {createNode}= actions;
    const res = await fetch(dataUrl);
    const cakes = await res.json();
    console.log(cakes);
    cakes.forEach((cake)=>{
        createNode({
            ...cake,
            id: createNodeId(`${NODE_TYPE}-${cake.id}`),
            parent:null,
            children:[],
            internal:{
                type: NODE_TYPE,
                content: JSON.stringify(cake),
                contentDigest: createContentDigest(cake)
            }
        })
    })
}