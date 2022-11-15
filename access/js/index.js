function renderProducts(products, tableId) {
    var table = document.getElementById(tableId);
    var row = table.rows[0];
    table.querySelector('tbody').remove();
    var tbody = document.createElement('tbody');
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var tr = document.createElement('tr');
        for (var j = 0; j < row.cells.length - 1; j++) {
            var cell = row.cells[j];
            var td = document.createElement('td');
            var name = cell.getAttribute('name');
            console.log(name);
            if (name === 'id') {
                var input = document.createElement('input');
                var checkbox = document.createAttribute('type');
                var pd_id = document.createAttribute('pd-id');
                checkbox.value = 'checkbox';
                pd_id.value = product[name];
                input.setAttributeNode(checkbox);
                input.setAttributeNode(pd_id);
                td.appendChild(input);
            } else if (name === 'image_product') {
                var img = document.createElement('img');
                var src = document.createAttribute('src');
                src.value = /template/image / products / $ { product[name] };
                img.setAttributeNode(src);
                td.appendChild(img);
            } else {
                var text = document.createTextNode(product[name]);
                td.appendChild(text);
            }
            tr.appendChild(td);
        }
        // td
        var td_option = document.createElement('td');
        var td_option_class = document.createAttribute('class');
        td_option_class.value = 'product-manipulation';
        td_option.setAttributeNode(td_option_class);

        // span
        var span_delete = document.createElement('span');
        var span_delete_class = document.createAttribute('class');
        span_delete_class.value = 'btn-Delete';
        span_delete.setAttributeNode(span_delete_class);
        // i
        var i_delete = document.createElement('i');
        var i_delete_class = document.createAttribute('class');
        i_delete_class.value = 'fas fa-trash';
        i_delete.setAttributeNode(i_delete_class);
        span_delete.appendChild(i_delete_class);

        td_option.appendChild(span_delete);


        // span
        var span_Update = document.createElement('span');
        var span_Update_class = document.createAttribute('class');
        span_Update_class.value = 'btn-Update';
        span_Update.setAttributeNode(span_Update_class);
        // i
        var i_Update = document.createElement('i');
        var i_Update_class = document.createAttribute('class');
        i_Update_class.value = 'fas fa-pencil-alt';
        i_Update.setAttributeNode(i_Update_class);
        span_Update.appendChild(i_Update_class);

        td_option.appendChild(span_Update);

        tbody.appendChild(tr);
    }


    table.appendChild(tbody);