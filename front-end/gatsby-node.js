

//get external data
exports.sourceNodes = async ({actions,createNodeId,createContentDigest})=>{
    const fetch = require('node-fetch');
    const dataUrl = 'https://raw.githubusercontent.com/ttngocthao/littleSweet/master/back-end/data/cakes.json';
    const NODE_TYPE='Cake';
    const {createNode}= actions;
    const res = await fetch(dataUrl);
    const cakes = await res.json();
  //  console.log(cakes);
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

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}