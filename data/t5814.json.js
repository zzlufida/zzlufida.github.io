window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5814","name":"HB_DBRegister","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HB_DBRegister"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-71220","object_id":"column-71220","name":"DbRegisterID","name_without_path":"DbRegisterID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-71221","object_id":"column-71221","name":"DbRegisterCode","name_without_path":"DbRegisterCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-71222","object_id":"column-71222","name":"Computer","name_without_path":"Computer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-71223","object_id":"column-71223","name":"Instance","name_without_path":"Instance","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-71224","object_id":"column-71224","name":"DbName","name_without_path":"DbName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-71225","object_id":"column-71225","name":"DbUser","name_without_path":"DbUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-71226","object_id":"column-71226","name":"Pwd","name_without_path":"Pwd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-71227","object_id":"column-71227","name":"Memo","name_without_path":"Memo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"512","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_DBRegister","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DbRegisterCode","name":"DbRegisterCode"}],"custom_fields":{}},{"name":"IX_DBRegister","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DbRegisterCode","name":"DbRegisterCode"}],"custom_fields":{}},{"name":"IX_DBRegister_1","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Computer","name":"Computer"},{"path":null,"name_without_path":"Instance","name":"Instance"},{"path":null,"name_without_path":"DbName","name":"DbName"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};