$(document).ready(function () {

    $(document).on("click", ".set-default", function () {
        let ProductId = parseInt($(".product-id").val());
        let ImageId = parseInt($(this).attr("data-id"));

        $.ajax({
            
            url: "/AdminArea/Product/SetDefaultImage",
            data: {
                productId: ProductId,
                imageId: ImageId
            },
            type: "Post",
            success: function (res) {

                swal({
                  
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                }).then(function () {
                    window.location.reload();
                })



                }

            }

        })
    })

   

 



}