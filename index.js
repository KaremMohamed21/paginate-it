exports.paginate = async ({ model, req, params, population }) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 9;
  const skip = (page - 1) * limit;

  const docs = await model.find(params).skip(skip).limit(limit).populate(population);

  // calculate number of pages
  let pagesNum;
  const docsNum = (await model.find(params)).length || 1;

  if (docsNum / limit !== 0) {
    pagesNum = Math.ceil(docsNum / limit);
  }

  return { pagesNum, docs };
};
