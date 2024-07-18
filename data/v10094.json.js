window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10094","name":"Caq_CostCenter_all","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View Caq_CostCenter_all\r\nas\r\n\tSelect cCode,cName,cDescription,cProperty,bDept,0 as disabled from Ca_CostCenter\r\n\tunion\r\n\tSelect cCode,cName,cDescription,cProperty,bDept,1 as disabled from Ca_CostCenter_Disabled","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Caq_CostCenter_all"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174000","object_id":"column-174000","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174001","object_id":"column-174001","name":"cName","name_without_path":"cName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174002","object_id":"column-174002","name":"cDescription","name_without_path":"cDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174003","object_id":"column-174003","name":"cProperty","name_without_path":"cProperty","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174004","object_id":"column-174004","name":"bDept","name_without_path":"bDept","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174005","object_id":"column-174005","name":"disabled","name_without_path":"disabled","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};