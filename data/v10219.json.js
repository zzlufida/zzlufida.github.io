window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10219","name":"CM_QContractImOrderDetail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view CM_QContractImOrderDetail\r\nas \r\n--合同单阶跟踪进口订单\r\nselect  id ,autoid,cContractID,cContractrowGUID,fquantity,fmoney,fnatmoney from im_orderdetail","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_QContractImOrderDetail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-177538","object_id":"column-177538","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-177539","object_id":"column-177539","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-177540","object_id":"column-177540","name":"cContractID","name_without_path":"cContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-177541","object_id":"column-177541","name":"cContractrowGUID","name_without_path":"cContractrowGUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-177542","object_id":"column-177542","name":"fquantity","name_without_path":"fquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-177543","object_id":"column-177543","name":"fmoney","name_without_path":"fmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-177544","object_id":"column-177544","name":"fnatmoney","name_without_path":"fnatmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};