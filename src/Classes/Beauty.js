import { products, suggestions, ingredients } from '../helpers/Data/Beauty';
export class Beauty {
  // Get skin care products
  getSkincareProducts(info) {
    // Destrucuring the properties
    const {
      type,
      scalpType,
      hairConcern,
      skinPart,
      faceType,
      faceConcern,
      bodyType,
      bodyConcern,
    } = info;

    let productList;
    if (type?.toLowerCase() === 'hair care') {
      productList = products?.filter(
        (product) =>
          product?.scalp_type?.toLowerCase().trim() ===
            scalpType?.toLowerCase().trim() &&
          product?.hair_concern?.toLowerCase().trim() ===
            hairConcern?.toLowerCase().trim()
      );
    } else if (type?.toLowerCase() === 'skin care') {
      if (skinPart?.toLowerCase() === 'face') {
        productList = products?.filter(
          (product) =>
            product?.face_type?.toLowerCase().trim() ===
              faceType?.toLowerCase().trim() &&
            product?.face_concern?.toLowerCase().trim() ===
              faceConcern?.toLowerCase().trim()
        );
      } else if (skinPart?.toLowerCase() === 'body') {
        productList = products?.filter(
          (product) =>
            product?.body_type?.toLowerCase().trim() ===
              bodyType?.toLowerCase().trim() &&
            product?.body_concern?.toLowerCase().trim() ===
              bodyConcern?.toLowerCase().trim()
        );
      }
    }

    return productList;
  }

  // Get skin care ingredients
  getSkinCareIngredients(info) {
    const {faceConcern, hairConcern, bodyConcern} = info;
    let selected;

    if (faceConcern || bodyConcern) {
      selected = ingredients?.find(
        (ingredient) =>
          (ingredient?.skin_concern?.toLowerCase().trim() ===
          faceConcern?.toLowerCase().trim()) || (ingredient?.skin_concern?.toLowerCase().trim() ===
          bodyConcern?.toLowerCase().trim())
      );
    } else if (hairConcern) {
      selected = ingredients?.find(
        (ingredient) =>
          ingredient?.hair_concern?.toLowerCase().trim() ===
          hairConcern?.toLowerCase().trim()
      );
    }

    return selected;
  }

  // Get skin care suggestions
  getSkinCareSuggestions(info) {
    const { faceConcern, hairConcern } = info;
    let suggestion;

    if (faceConcern) {
      suggestion = suggestions?.find(
        (suggestion) =>
          suggestion?.face_concern?.toLowerCase().trim() ===
          faceConcern?.toLowerCase().trim()
      );
    } else if (hairConcern) {
      suggestion = suggestions?.find(
        (suggestion) =>
          suggestion?.hair_concern?.toLowerCase().trim() ===
          hairConcern?.toLowerCase().trim()
      );
    }

    return suggestion;
  }

}
