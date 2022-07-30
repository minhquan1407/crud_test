import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCategoryProduct } from "../../../api/CategoryAxios";
// import ProductCard from "../components/ProductCard";
import _ from "lodash";
import { THUMBNAIL_PLACEHOLDER } from "../../../constants/index";
import DeleteProduct from "../components/DeleteProduct";
import EditProduct from "../components/EditProduct";
import AddCategory from "./AddProductByCategory";

ProductDetail.propTypes = {};

function ProductDetail(props) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [productList, setProductList] = useState([]);
  const [isShowModalAddProduct, setIsShowModalAddProduct] = useState(false);
  const [dataByIdCategory, setDataByIdCategory] = useState({});

  const [isShowModalDeleteProduct, setIsShowModalDeleteProduct] =
    useState(false);
  const [dataDeleteProduct, setDataDeleteProduct] = useState({});

  const [isShowModalEditProduct, setIsShowModalEditProduct] = useState(false);
  const [dataEditProduct, setDataEditProduct] = useState({});

  useEffect(() => {
    (async () => {
      try {
        let data = await getCategoryProduct(id);

        if (data) {
          setDataByIdCategory(data);
          console.log("check:", data);
          setName(data.name);
          setProductList(data.product);
        }
      } catch (error) {}
    })();
  }, [id]);
  const handleClose = () => {
    setIsShowModalAddProduct(false);
    setIsShowModalDeleteProduct(false);
    setIsShowModalEditProduct(false);
  };
  const handleAddNewProduct = (product) => {
    setProductList([...productList, product]);
    // console.log("check product:", product);
  };

  const handleEditProduct = (product) => {
    setIsShowModalEditProduct(true);
    setDataEditProduct(product);
  };
  const handleEditProductModal = (product) => {
    let cloneProductList = _.cloneDeep(productList);
    let index = productList.findIndex((item) => item.id === product.id);
    cloneProductList[index].title = product.title;
    cloneProductList[index].price = product.price;
    cloneProductList[index].description = product.description;

    setProductList(cloneProductList);
  };

  const handleDeleteProduct = (product) => {
    setIsShowModalDeleteProduct(true);
    setDataDeleteProduct(product);
  };
  const handleDeleteProductModal = (product) => {
    let cloneProductList = _.cloneDeep(productList);
    cloneProductList = cloneProductList.filter(
      (item) => item.id !== product.id
    );
    setProductList(cloneProductList);
  };
  return (
    <div>
      <h5>Name Category: {name}</h5>
      <button
        className="btn btn-success"
        onClick={() => setIsShowModalAddProduct(true)}
      >
        <i className="fa-solid fa-circle-plus"></i> Add new
      </button>
      <Container>
        <Row>
          {productList.length > 0 ? (
            productList.map((product, index) => {
              return (
                <Col md={6} lg={3} sm={12} key={`product-${index}`}>
                  <Card
                    className="shadow-lg m-2 p-3 rounded"
                    style={{ width: "17rem" }}
                  >
                    <div>
                      <Card.Img
                        src={
                          product.image ? product.image : THUMBNAIL_PLACEHOLDER
                        }
                        style={{ width: "100%", height: "250px" }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Title: {product.title}</Card.Title>
                      <Card.Title>Price: ${product.price}</Card.Title>
                      <Card.Text>
                        Description: {product.description}...
                      </Card.Text>

                      <Button onClick={() => handleEditProduct(product)}>
                        Edit
                      </Button>
                      <Button
                        className="btn btn-danger m-2"
                        onClick={() => handleDeleteProduct(product)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <p> No reviews for this product </p>
          )}
        </Row>
      </Container>
      <AddCategory
        show={isShowModalAddProduct}
        handleClose={handleClose}
        handleAddNewProduct={handleAddNewProduct}
        dataByIdCategory={dataByIdCategory}
      />
      <DeleteProduct
        show={isShowModalDeleteProduct}
        handleClose={handleClose}
        dataDeleteProduct={dataDeleteProduct}
        handleDeleteProductModal={handleDeleteProductModal}
      />
      <EditProduct
        show={isShowModalEditProduct}
        handleClose={handleClose}
        dataEditProduct={dataEditProduct}
        handleEditProductModal={handleEditProductModal}
      />
    </div>
  );
}

export default ProductDetail;
