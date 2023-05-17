exports.get_all = `SELECT category.ID as categoryId ,category.name as Categories , subCategory.name as SubCategories, subCategory.id as SubCategoryId 
                  FROM subcategory INNER JOIN Category 
                  ON subCategory.categoryID=Category.ID`;

exports.get_subcategories = `SELECT category.ID as categoryId ,category.name as Categories , subCategory.name as SubCategories, subCategory.id as SubCategoryId 
FROM subcategory INNER JOIN Category 
ON subCategory.categoryID=Category.ID
WHERE category.name ILIKE $1`;
