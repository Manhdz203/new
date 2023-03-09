import axios from "axios";
import  express  from "express";
const app = express();

app.get("/", function (req,res) {
    console.log("hpme page");
});


app.get("/api/prodcuts",async(req, res) => {
    const{ data: prodcut} = await axios.get( "https://63f5d86059c944921f67a58c.mockapi.io/products");

    res.json({
        message:"lấy danh xách thành công",
        prodcut,
    });
})
app.get("/api/products/:id", async (req, res) => {
    const { data: product } = await axios.get(
        `https://63f5d86059c944921f67a58c.mockapi.io/products/${req.params.id}`
    );
    res.json({
        message: "Lấy sản phẩm thành công",
        product,
    });
});



app.listen(8000, function() {
    console.log("ok đã chạy");
})