window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14371","name":"Wa_Bsquery","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View Wa_Bsquery AS \r\nselect igzitem_id,csetgzitemname from WA_GZtblset\r\nunion\r\n(select '9999','本月收入')\r\nunion\r\n(select '9998','应纳税额')\r\nunion\r\n(select '9997','应纳税所得額')\r\nunion\r\n(select '9996','税率')\r\nunion\r\n(select '9995','年终奖')\r\nunion\r\n(select '9994','年终奖应纳税額')\r\nunion\r\n(select '9993','年终奖税率')\r\nunion\r\n(select '9992','年终奖应纳税所额')\r\nunion\r\n(select '9991','收入额')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Wa_Bsquery"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424927","object_id":"column-424927","name":"igzitem_id","name_without_path":"igzitem_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424928","object_id":"column-424928","name":"csetgzitemname","name_without_path":"csetgzitemname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};