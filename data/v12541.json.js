window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12541","name":"tcv_account_fz_user","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW tcv_account_fz_user \r\nAS\r\nselect distinct (account_id),dbo.TCfun_getCustomUser(account_id,is_self) fz_user from Customer_User where is_self=1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"tcv_account_fz_user"},{"field":"Type","value":"View"}],"columns":[{"id":"column-310895","object_id":"column-310895","name":"account_id","name_without_path":"account_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310896","object_id":"column-310896","name":"fz_user","name_without_path":"fz_user","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};