'use strict';

class CategoryService {
  constructor(publications) {
    this._categories = publications.map(publication => publication.category);
  }

  findAll() {
    return this._categories;
  }
}

module.exports = CategoryService;
